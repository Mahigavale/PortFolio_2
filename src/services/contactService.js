/**
 * Contact Service
 * Supports dual dispatch mode:
 * 1. Backend REST API: If VITE_API_URL is configured (e.g., Spring Boot running locally or hosted on Render/Railway),
 *    sends a POST request to `${VITE_API_URL}/api/contact`.
 * 2. Mailto Fallback: If no backend is configured or the API is unreachable, provides direct email client triggering.
 */

export async function submitContactMessage(formData, recipientEmail) {
  const backendBaseUrl = import.meta.env.VITE_API_URL;

  // If a backend URL is configured, dispatch directly to the backend
  if (backendBaseUrl && backendBaseUrl.trim() !== '') {
    const cleanUrl = backendBaseUrl.trim().replace(/\/$/, '');
    const endpoint = `${cleanUrl}/api/contact`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        throw new Error(errorJson.message || `Server responded with status ${response.status}`);
      }

      const responseData = await response.json().catch(() => ({}));
      return {
        success: true,
        mode: 'backend',
        message: responseData.message || 'Inquiry successfully delivered to Mahesh\'s backend service!'
      };
    } catch (err) {
      console.warn('Backend endpoint unavailable, falling back to mailto:', err);
      // Fallback to mailto so user never loses message
      triggerMailto(formData, recipientEmail);
      return {
        success: true,
        mode: 'fallback',
        message: `Backend service was unreachable (${err.name === 'AbortError' ? 'timeout' : 'offline'}). Opened default email client instead!`
      };
    }
  }

  // Default mode without backend: direct mailto
  triggerMailto(formData, recipientEmail);
  return {
    success: true,
    mode: 'mailto',
    message: 'Opened your default email client with your pre-filled inquiry.'
  };
}

export function triggerMailto(formData, recipientEmail) {
  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;
  window.open(mailtoUrl, '_blank');
}

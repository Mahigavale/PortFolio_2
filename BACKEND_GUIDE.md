# Spring Boot Backend Architecture Guide for Portfolio

This guide outlines the backend API specifications, contracts, and sample implementation code for **Mahesh Ashok Gavale's** portfolio backend.

---

## 1. REST API Contract

### Contact Inquiry Endpoint

- **Method**: `POST`
- **Path**: `/api/contact`
- **Content-Type**: `application/json`

#### Request Payload:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "subject": "Full Stack & Enablement Inquiry",
  "message": "Hi Mahesh, we would like to discuss an opportunity...",
  "timestamp": "2026-11-16T12:00:00.000Z"
}
```

#### Successful Response (`200 OK` or `201 Created`):
```json
{
  "status": "success",
  "message": "Thank you! Your message has been received by Mahesh's backend service."
}
```

#### Error Response (`400 Bad Request` / `500 Internal Server Error`):
```json
{
  "status": "error",
  "message": "Invalid email address or missing required fields."
}
```

---

## 2. Spring Boot Implementation (Java 17 / 21)

### Dependencies (`pom.xml`):
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-mail</artifactId>
    </dependency>
    <!-- Optional: Database persistence -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

### DTO: `ContactRequest.java`
```java
package com.maheshgavale.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
    @NotBlank(message = "Name is required")
    @Size(max = 100)
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email is required")
    String email,

    @NotBlank(message = "Subject is required")
    String subject,

    @NotBlank(message = "Message cannot be empty")
    @Size(max = 2000)
    String message,

    String timestamp
) {}
```

### Controller: `ContactController.java`
```java
package com.maheshgavale.portfolio.controller;

import com.maheshgavale.portfolio.dto.ContactRequest;
import com.maheshgavale.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "https://mahigavale.github.io"
    },
    allowedHeaders = "*",
    methods = {RequestMethod.POST, RequestMethod.OPTIONS}
)
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<?> handleContact(@Valid @RequestBody ContactRequest request) {
        contactService.processInquiry(request);
        return ResponseEntity.ok(Map.of(
            "status", "success",
            "message", "Inquiry received! Mahesh will get back to you soon."
        ));
    }
}
```

### Service: `ContactService.java`
```java
package com.maheshgavale.portfolio.service;

import com.maheshgavale.portfolio.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);
    private final JavaMailSender mailSender;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void processInquiry(ContactRequest request) {
        log.info("Received portfolio inquiry from: {} ({})", request.name(), request.email());

        // 1. Send notification email to Mahesh's inbox
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo("maheshgavale07@gmail.com");
            mail.setSubject("[Portfolio Alert] " + request.subject());
            mail.setText(String.format(
                "New inquiry received from portfolio:\n\nName: %s\nEmail: %s\nSubject: %s\n\nMessage:\n%s\n\nTimestamp: %s",
                request.name(), request.email(), request.subject(), request.message(), request.timestamp()
            ));
            mailSender.send(mail);
        } catch (Exception e) {
            log.error("Failed to forward inquiry via email", e);
            // You can also persist the message to PostgreSQL / MongoDB here
        }
    }
}
```

---

## 3. Connecting Frontend to Backend

1. In `D:\Port_Folio_2`, create a `.env` file (copied from `.env.example`):
   ```env
   VITE_API_URL=http://localhost:8080
   ```
2. When running your Spring Boot application locally on port 8080, any message submitted through the portfolio contact form will dispatch directly to `http://localhost:8080/api/contact`.
3. If the backend is stopped or not yet reached, the frontend automatically falls back to your pre-filled email client without throwing errors.

---

## 4. Hosting Options for Your Backend

When you're ready to host the Spring Boot backend:

| Cloud Platform | Free / Low-Cost Tier | Notes |
| :--- | :--- | :--- |
| **Render** | Free Web Service (Docker / Java) | Simple git push deployment; automatically provides HTTPS URL. |
| **Railway** | Starter plan ($5/mo credits) | Instant Spring Boot deployment, built-in PostgreSQL provisioning. |
| **Fly.io** | Generous free allowance | Dockerized Spring Boot apps close to users. |
| **AWS (App Runner / EC2)** | 12-Month Free Tier | Enterprise-grade deployment with full control. |

Once deployed, update `VITE_API_URL` to your production backend URL (e.g. `https://portfolio-backend-xxxx.onrender.com`).

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack & Enablement Inquiry',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a static GitHub Pages site, this provides instant interactive feedback
    // and also prepares a pre-filled mailto fallback.
    setFormSubmitted(true);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build & Enable Together
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Whether you are looking to architect high-performance Java systems or scale your engineering organization's developer velocity, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Advisory Services */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-mono">Email Address</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono text-slate-200 hover:text-indigo-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Location & Remote</p>
                    <p className="text-xs text-slate-200 font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Response Time</p>
                    <p className="text-xs text-slate-200 font-medium">Within 24 business hours</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-950/80 hover:bg-indigo-900/80 text-indigo-200 text-xs font-semibold flex items-center justify-center gap-2 border border-indigo-800/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Consulting & Enablement Areas */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                What We Can Discuss
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Full Stack Java / Spring Boot microservices leadership</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Technical Enablement & Developer Experience (DevEx) initiatives</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Java 21 Virtual Threads & modern reactive architectural reviews</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to reach out directly or schedule a technical discussion.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your inquiry. You can also reach me directly at <strong className="text-emerald-400 font-mono">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-indigo-400 underline hover:text-indigo-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Full Stack & Enablement Inquiry">Full Stack & Enablement Inquiry</option>
                      <option value="Java Microservices Architectural Consultation">Java Microservices Architectural Consultation</option>
                      <option value="Developer Platform / DevEx Advisory">Developer Platform / DevEx Advisory</option>
                      <option value="Full-time Engineering Role Opportunity">Full-time Engineering Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Alex, I'd like to discuss our upcoming microservices migration and developer enablement roadmap..."
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Dispatch Message
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

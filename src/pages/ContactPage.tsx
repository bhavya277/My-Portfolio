import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="COMMUNICATION & INQUIRIES"
        title="Let's Build Something"
        description="Whether you have an internship opportunity, an AI/ML engineering challenge, or a collaborative project in mind, let's connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Communication Channels (Primary) */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="highlight" className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              // Direct Reach Channels
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For fastest response regarding internship availability and technical discussions, direct email or LinkedIn is preferred.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email item */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</span>
                    <p className="text-xs font-mono text-slate-200">{profileData.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn item */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-primary-500/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</span>
                    <p className="text-xs font-mono text-slate-200 group-hover:text-primary-300">linkedin.com/in/modibhavya</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white">&rarr;</span>
              </a>

              {/* GitHub item */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-primary-500/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-200" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">GitHub Activity</span>
                    <p className="text-xs font-mono text-slate-200 group-hover:text-primary-300">github.com/modibhavya</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white">&rarr;</span>
              </a>
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Status & Location
            </h3>
            <div className="space-y-1 text-xs text-slate-300 font-mono">
              <p>📍 Location: {profileData.location}</p>
              <p>🟢 Availability: Open for 2026 Internships</p>
              <p>⏱ Typical response: &lt; 24 hours</p>
            </div>
          </Card>
        </div>

        {/* Right Column: Secondary Contact Form */}
        <div className="lg:col-span-7">
          <Card variant="default" className="p-6 md:p-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              // Send Direct Message
            </h3>

            {formStatus === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-900/50 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. Bhavya will review your message and reply promptly.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-slate-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-slate-300 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Project inquiry"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-slate-300 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project, or technical question..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors font-sans resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  className="w-full"
                  disabled={formStatus === 'loading'}
                  icon={
                    formStatus === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {formStatus === 'loading' ? 'Dispatching Message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

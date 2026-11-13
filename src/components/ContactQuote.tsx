import { useEffect, useState, type FormEvent, type RefObject } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/siteData';

interface ContactQuoteProps {
  selectedService: string;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  details: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  details?: string;
}

export function ContactQuote({
  selectedService,
  nameInputRef,
}: ContactQuoteProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: selectedService || SERVICES[0].title,
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; direct links remain active
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }

    const cleanedPhone = form.phone.replace(/[\s()-]/g, '');
    if (!cleanedPhone || !/^\+?\d{7,15}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.details.trim() || form.details.trim().length < 10) {
      nextErrors.details =
        'Please share a brief description of your project (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...form });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setForm({
      name: '',
      phone: '',
      email: '',
      service: selectedService || SERVICES[0].title,
      details: '',
    });
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = encodeURIComponent(
      `Free Quote Request: ${data.service} — ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nProject Details:\n${data.details}`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0B0B0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#F5F5F5]/65 mb-3">
            Free Quote &amp; Consultation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance mb-4">
            {BUSINESS_INFO.tagline}
          </h2>
          <p className="text-base text-[#F5F5F5]/75 leading-relaxed">
            Tell us about your renovation, fit-out, or maintenance requirements. We respond promptly to arrange a convenient site visit and itemised free quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 bg-[#1C1C1C] border border-white/10 rounded-lg">
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-[#F5F5F5]/70 leading-relaxed mb-8">
                Speak directly with {BUSINESS_INFO.name} by phone or email, or send your project details using the quote form.
              </p>

              <div className="space-y-6">
                <div className="p-5 bg-[#0B0B0B] border border-white/10 rounded-md">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#F5F5F5]/65">
                      <Phone className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                      <span>Telephone</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone')}
                      className="inline-flex items-center gap-1 text-xs text-[#F5F5F5]/60 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                          <span className="text-white">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="font-display text-lg sm:text-xl font-semibold text-white hover:text-[#F5F5F5]/75 transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="p-5 bg-[#0B0B0B] border border-white/10 rounded-md">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#F5F5F5]/65">
                      <Mail className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                      <span>Email</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(BUSINESS_INFO.email, 'email')}
                      className="inline-flex items-center gap-1 text-xs text-[#F5F5F5]/60 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                          <span className="text-white">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="text-base sm:text-lg font-medium text-white hover:text-[#F5F5F5]/75 transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#F5F5F5]/80">
                <span className="font-semibold text-white">
                  {BUSINESS_INFO.recommendationRate}
                </span>
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
                <span>No-obligation quotes</span>
              </div>
            </div>
          </div>

          {/* Quote Form Panel */}
          <div className="lg:col-span-7 p-7 sm:p-8 bg-[#1C1C1C] border border-white/10 rounded-lg">
            {submittedData ? (
              <div className="h-full flex flex-col justify-center py-6">
                <div className="w-12 h-12 rounded-md bg-[#0B0B0B] border border-white/40 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Quote Enquiry Prepared
                </h3>
                <p className="text-sm sm:text-base text-[#F5F5F5]/80 leading-relaxed mb-6">
                  Thank you, <span className="text-white font-medium">{submittedData.name}</span>. Your request for <span className="text-white font-semibold">{submittedData.service}</span> has been recorded. Send it directly via your email app or call us on{' '}
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-white underline decoration-white underline-offset-4 tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  .
                </p>

                <div className="p-4 bg-[#0B0B0B] border border-white/10 rounded-md text-sm text-[#F5F5F5]/75 space-y-1.5 mb-6">
                  <p>
                    <span className="text-[#F5F5F5]/50">Phone:</span>{' '}
                    <span className="tabular-nums">{submittedData.phone}</span>
                  </p>
                  <p>
                    <span className="text-[#F5F5F5]/50">Email:</span>{' '}
                    {submittedData.email}
                  </p>
                  <p>
                    <span className="text-[#F5F5F5]/50">Details:</span>{' '}
                    {submittedData.details}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={buildMailtoHref(submittedData)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-[#0B0B0B] rounded-md hover:bg-[#E5E5E5] transition-colors whitespace-nowrap shrink-0"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Send via Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-[#0B0B0B] text-white border border-white/25 rounded-md hover:border-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-medium text-[#F5F5F5] mb-2"
                    >
                      Name
                    </label>
                    <input
                      ref={nameInputRef}
                      id="quote-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full px-4 py-3 text-sm text-white bg-[#0B0B0B] border rounded-md placeholder:text-[#F5F5F5]/35 focus:outline-none focus:border-white transition-colors ${
                        errors.name ? 'border-white/70' : 'border-white/15'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F5F5F5]/90">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-white" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-medium text-[#F5F5F5] mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="+44 7XXX XXXXXX"
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full px-4 py-3 text-sm text-white bg-[#0B0B0B] border rounded-md placeholder:text-[#F5F5F5]/35 focus:outline-none focus:border-white transition-colors tabular-nums ${
                        errors.phone ? 'border-white/70' : 'border-white/15'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F5F5F5]/90">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-white" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-sm font-medium text-[#F5F5F5] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full px-4 py-3 text-sm text-white bg-[#0B0B0B] border rounded-md placeholder:text-[#F5F5F5]/35 focus:outline-none focus:border-white transition-colors ${
                        errors.email ? 'border-white/70' : 'border-white/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F5F5F5]/90">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-white" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-medium text-[#F5F5F5] mb-2"
                    >
                      Service Required
                    </label>
                    <select
                      id="quote-service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm text-white bg-[#0B0B0B] border border-white/15 rounded-md focus:outline-none focus:border-white transition-colors"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-details"
                    className="block text-sm font-medium text-[#F5F5F5] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="quote-details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, details: e.target.value }));
                      if (errors.details) {
                        setErrors((prev) => ({ ...prev, details: undefined }));
                      }
                    }}
                    placeholder="Briefly describe your property, scope of works, and preferred timeframe..."
                    aria-invalid={Boolean(errors.details)}
                    className={`w-full px-4 py-3 text-sm text-white bg-[#0B0B0B] border rounded-md placeholder:text-[#F5F5F5]/35 focus:outline-none focus:border-white transition-colors resize-y ${
                      errors.details ? 'border-white/70' : 'border-white/15'
                    }`}
                  />
                  {errors.details && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F5F5F5]/90">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-white" aria-hidden="true" />
                      <span>{errors.details}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold bg-white text-[#0B0B0B] rounded-md hover:bg-[#E5E5E5] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C]"
                  >
                    <span>Request Free Quote</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Squircle } from 'corner-smoothing';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!formData.email.includes('@')) return 'Please enter a valid email';
    if (formData.services.length === 0) return 'Please select at least one service';
    if (!formData.message.trim()) return 'Please enter a message';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security: Rate limiting (prevent spam)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) { // 30 seconds cooldown
      setSubmitError('Please wait 30 seconds before submitting another message');
      return;
    }

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Security: Basic spam prevention
      if (formData.message.length > 1000) {
        throw new Error('Message is too long');
      }

      // Create email content
      const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Services: ${formData.services.join(', ')}
Message: ${formData.message}
      `.trim();

      // Send email using mailto (for now - can be replaced with API endpoint)
      const mailtoLink = `mailto:hello@dukest.studio?subject=Website Enquiry&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink);

      // Update state
      setLastSubmitTime(now);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          services: [],
          message: ''
        });
        setIsSubmitted(false);
      }, 5000); // Show success message for 5 seconds

    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName: string) => {
    setFocusedField(null);
  };

  return (
    <section 
      id="next-section"
      style={{
        display: 'flex',
        padding: '100px 64px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        alignSelf: 'stretch',
        background: '#F9F7F1'
      }}
    >
      {/* Main Card Container */}
      <Squircle
        cornerRadius={64}
        cornerSmoothing={0.6}
        style={{
          display: 'flex',
          padding: '40px',
          alignItems: 'center',
          gap: '64px',
          alignSelf: 'stretch',
          background: '#F8C807'
        }}
      >
        {/* Left Column - Text Content */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: '#000510',
              textAlign: 'justify',
              fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '78px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '84px',
              margin: 0,
              padding: 0
            }}
          >
            We empower small businesses, NDIS providers, & creative entrepreneurs to grow their brand presence and tell their story authentically.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <Squircle
          cornerRadius={40}
          cornerSmoothing={0.6}
          style={{
            display: 'flex',
            padding: '54px 32px',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '54px',
            flex: '1 0 0',
            alignSelf: 'stretch',
            background: '#FFF',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Success Overlay */}
          {isSubmitted && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                animation: 'fadeIn 0.5s ease-in-out'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    color: '#000510',
                    fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '32px',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}
                >
                  Thank you! ✨
                </h3>
                <p
                  style={{
                    color: '#000510',
                    fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '18px',
                    opacity: 0.7
                  }}
                >
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              width: '100%',
              opacity: isSubmitted ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            {/* Name Input */}
            <div style={{ width: '100%', position: 'relative' }}>
              <label
                style={{
                  position: 'absolute',
                  left: 0,
                  top: focusedField === 'name' || formData.name ? '0px' : '16px',
                  color: focusedField === 'name' || formData.name ? '#F8C807' : '#000510',
                  textAlign: 'justify',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: focusedField === 'name' || formData.name ? '16px' : '28px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: focusedField === 'name' || formData.name ? '20px' : '32px',
                  opacity: focusedField === 'name' || formData.name ? 1 : 0.4,
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  paddingTop: focusedField === 'name' || formData.name ? '32px' : '16px',
                  border: 'none',
                  borderBottom: '1px solid #E5E5E5',
                  background: 'transparent',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '16px',
                  color: '#000510',
                  outline: 'none',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>

            {/* Email Input */}
            <div style={{ width: '100%', position: 'relative' }}>
              <label
                style={{
                  position: 'absolute',
                  left: 0,
                  top: focusedField === 'email' || formData.email ? '0px' : '16px',
                  color: focusedField === 'email' || formData.email ? '#F8C807' : '#000510',
                  textAlign: 'justify',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: focusedField === 'email' || formData.email ? '16px' : '28px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: focusedField === 'email' || formData.email ? '20px' : '32px',
                  opacity: focusedField === 'email' || formData.email ? 1 : 0.4,
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  paddingTop: focusedField === 'email' || formData.email ? '32px' : '16px',
                  border: 'none',
                  borderBottom: '1px solid #E5E5E5',
                  background: 'transparent',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '16px',
                  color: '#000510',
                  outline: 'none',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>

            {/* Services Section */}
            <div style={{ width: '100%' }}>
              <label
                style={{
                  color: '#000510',
                  textAlign: 'justify',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '32px',
                  opacity: 0.4,
                  display: 'block',
                  marginBottom: '16px'
                }}
              >
                How can we help?
              </label>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                {['Podcast Production', 'Social Content', 'New Website', 'Branding', 'UX/UI Design', 'Other'].map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    style={{
                      display: 'flex',
                      padding: '12px 16px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      borderRadius: '20px',
                      background: formData.services.includes(service) ? '#F8C807' : '#F5F3EB',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      flex: '0 1 auto',
                      minWidth: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                      if (!formData.services.includes(service)) {
                        e.currentTarget.style.background = '#E8E6E0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!formData.services.includes(service)) {
                        e.currentTarget.style.background = '#F5F3EB';
                      }
                    }}
                  >
                    <span
                      style={{
                        color: '#000510',
                        fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '28px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {service}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div style={{ width: '100%', position: 'relative' }}>
              <label
                style={{
                  position: 'absolute',
                  left: 0,
                  top: focusedField === 'message' || formData.message ? '0px' : '16px',
                  color: focusedField === 'message' || formData.message ? '#F8C807' : '#000510',
                  textAlign: 'justify',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: focusedField === 'message' || formData.message ? '16px' : '28px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: focusedField === 'message' || formData.message ? '20px' : '32px',
                  opacity: focusedField === 'message' || formData.message ? 1 : 0.4,
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                rows={4}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  paddingTop: focusedField === 'message' || formData.message ? '32px' : '16px',
                  border: 'none',
                  borderBottom: '1px solid #E5E5E5',
                  background: 'transparent',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '16px',
                  color: '#000510',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '80px',
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </div>

            {/* Error Message */}
            {submitError && (
              <div
                style={{
                  color: '#F84F07',
                  fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '14px',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease-in-out'
                }}
              >
                {submitError}
              </div>
            )}

            {/* Send Button */}
            <div style={{ alignSelf: 'flex-end' }}>
              <Squircle
                cornerRadius={20}
                cornerSmoothing={0.6}
                style={{
                  display: 'flex',
                  padding: '12px 24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: isSubmitting ? '#E5E5E5' : '#F8C807',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.background = '#E6B800';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = '#F8C807';
                  }
                }}
                onClick={handleSubmit}
              >
                <span
                  style={{
                    color: '#000510',
                    fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '1.5'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send ☞'}
                </span>
              </Squircle>
            </div>
          </form>
        </Squircle>
      </Squircle>
    </section>
  );
} 
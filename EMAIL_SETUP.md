# Email Setup Guide

## Current Implementation

The contact form currently simulates email sending. To enable actual email functionality, you have several options:

## Option 1: EmailJS (Recommended for quick setup)

### Setup Steps:
1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Configure Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Get your Service ID

3. **Create Email Template**
   - Create a new email template
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{services}}`, `{{message}}`
   - Get your Template ID

4. **Get Public Key**
   - Copy your Public Key from EmailJS dashboard

5. **Update ContactSection.tsx**
   Replace the current email sending code with:

```typescript
// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit function, replace the simulation with:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams
);
```

## Option 2: Formspree (Simplest)

### Setup Steps:
1. **Create Formspree Account**
   - Go to [Formspree.io](https://formspree.io/)
   - Sign up and create a new form
   - Get your form endpoint

2. **Update ContactSection.tsx**
   Replace the form submission with:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    services: formData.services.join(', '),
    message: formData.message,
  }),
});
```

## Option 3: Netlify Forms (If using Netlify)

### Setup Steps:
1. **Add form attributes**
   - Add `data-netlify="true"` to the form element
   - Add hidden input for Netlify

2. **Update form element:**
```html
<form data-netlify="true" name="contact" method="POST">
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields -->
</form>
```

## Option 4: Backend API (Most Control)

### Setup Steps:
1. **Create API endpoint** (Node.js/Express example)
2. **Use nodemailer** to send emails
3. **Deploy backend** (Vercel, Netlify Functions, etc.)
4. **Update frontend** to call your API

## Security Considerations

- **Rate limiting** - Already implemented (30-second cooldown)
- **Message length** - Already implemented (1000 character limit)
- **Email validation** - Already implemented
- **CORS** - Handle if using custom backend
- **Environment variables** - Store API keys securely

## Recommended for Production

For a production website, I recommend **EmailJS** or **Formspree** as they:
- Handle email delivery reliably
- Provide spam protection
- Include analytics
- Require minimal setup
- Are cost-effective for small to medium traffic 
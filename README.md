# World Blazing Computer Solution

A modern, responsive landing page for programming courses built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful gradient backgrounds and animations
- 📱 Fully responsive design
- 🚀 Fast static site generation
- 📧 Contact form with email integration
- 🎓 Course showcase with pricing
- 💬 Customer testimonials
- ❓ FAQ section
- 🌟 Modern UI components with shadcn/ui

## Email Configuration

The contact form is configured to send emails to `worldblazingscomputer@gmail.com`. To enable email functionality:

### Option 1: EmailJS (Recommended)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail recommended)
3. Create an email template with the following variables:
   - `{{to_email}}` - Recipient email
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{phone}}` - Phone number
   - `{{course_interest}}` - Course interest
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to email

4. Update the configuration in `lib/emailService.ts`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

### Option 2: Mailto Fallback

If EmailJS is not configured, the form will automatically fall back to opening the user's default email client with pre-filled content.

## Course Information

- **Languages**: C, C++, Python, Java
- **Price**: ₹2,400 (70% off from ₹8,000)
- **Location**: Pune, Maharashtra, India
- **Contact**: worldblazingscomputer@gmail.com

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: Static export ready

## Contact Information

- **Email**: worldblazingscomputer@gmail.com
- **Phone**: +91 98765 43210, +91 87654 32109
- **Address**: Aru Palace Building, 162/A1, Malwadi Rd, near Laxmi mata Mandir, Hadapsar Gaon, Hadapsar, Pune, Maharashtra 411028
- **Hours**: Mon - Sun: 9:00 AM - 9:00 PM
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_worldblazing';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS (only needs to be done once)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      to_email: 'worldblazingscomputer@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      course_interest: formData.course || 'Not specified',
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Fallback method using mailto (opens user's email client)
export const sendEmailFallback = (formData: ContactFormData): void => {
  const subject = `Course Inquiry from ${formData.name}`;
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.course || 'Not specified'}

Message:
${formData.message}
  `.trim();

  const mailtoLink = `mailto:worldblazinginstitute@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, '_blank');
};
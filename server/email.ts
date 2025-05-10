import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("WARNING: SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send an email notification for contact form submissions
 */
export async function sendContactEmail(data: EmailData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("Cannot send contact email: SendGrid API key is not set");
    return false;
  }

  try {
    const { name, email, subject, message } = data;
    
    // Store contact submission in the database regardless of email status
    // Message will still be logged even if email fails
    
    // For testing, you can uncomment this to see the form data without sending emails
    console.log("Contact form data received:", { name, email, subject, messageLength: message.length });
    
    // Skip actual email sending in development if needed
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_EMAILS === 'true') {
      console.log('[DEV MODE] Skipping actual email sending');
      return true;
    }
    
    await mailService.send({
      to: 'virad86@gmail.com', // Change this to your email address
      from: 'virad86@gmail.com', // Using the same verified sender email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
  <p>You have received a new message from your website contact form.</p>
  
  <div style="background-color: #f4f4f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  
  <p style="font-size: 12px; color: #64748b;">This email was sent from your Troubleshooter website contact form.</p>
</div>
      `,
    });
    
    console.log(`Contact form email sent successfully to virad86@gmail.com from ${email}`);
    return true;
  } catch (error: any) {
    // Provide more detailed error information
    if (error.code === 403) {
      console.error('SendGrid authorization error: The API key may not have proper permissions or the sender email is not verified.');
      console.error('Please verify the following:');
      console.error('1. The API key has "Mail Send" permissions enabled');
      console.error('2. The sender email (virad86@gmail.com) is verified in the SendGrid account');
      console.error('3. The SendGrid account is active and in good standing');
    } else {
      console.error('Error sending contact form email:', error);
    }
    return false;
  }
}

/**
 * Send an auto-reply email to the user who submitted the contact form
 */
export async function sendAutoReplyEmail(data: EmailData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("Cannot send auto-reply email: SendGrid API key is not set");
    return false;
  }

  try {
    const { name, email } = data;
    
    // Skip actual email sending in development if needed
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_EMAILS === 'true') {
      console.log('[DEV MODE] Skipping auto-reply email sending');
      return true;
    }
    
    await mailService.send({
      to: email,
      from: 'virad86@gmail.com', // Using the same verified sender email
      subject: 'Thank you for contacting Troubleshooter',
      text: `
Hello ${name},

Thank you for contacting Troubleshooter. We have received your message and will get back to you as soon as possible.

Best regards,
The Troubleshooter Team
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e3a8a;">Thank You for Contacting Us</h2>
  
  <p>Hello ${name},</p>
  
  <p>Thank you for reaching out to Troubleshooter. We have received your message and our team will review it shortly.</p>
  
  <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
  
  <p>If your matter is urgent, please call us at +94 11 7 444 101.</p>
  
  <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border-left: 4px solid #ef4444;">
    <p style="margin: 0;"><strong>We're here to help with all your IT needs:</strong></p>
    <ul style="padding-left: 20px;">
      <li>Technical Support & Troubleshooting</li>
      <li>Network Solutions</li>
      <li>Cloud Services</li>
      <li>Cybersecurity</li>
      <li>Business IT Consulting</li>
    </ul>
  </div>
  
  <p>Best regards,<br>The Troubleshooter Team</p>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
    <p>Troubleshooter (Pvt) Ltd<br>
    2nd Floor, Maclarens Building,<br>
    No 123, Bauddhaloka Mawatha,<br>
    Colombo 4, Sri Lanka</p>
    
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</div>
      `,
    });
    
    console.log(`Auto-reply email sent successfully to ${email}`);
    return true;
  } catch (error: any) {
    // Provide more detailed error information
    if (error.code === 403) {
      console.error('SendGrid authorization error: The API key may not have proper permissions or the sender email is not verified.');
      console.error('Please verify the following:');
      console.error('1. The API key has "Mail Send" permissions enabled');
      console.error('2. The sender email (virad86@gmail.com) is verified in the SendGrid account');
      console.error('3. The SendGrid account is active and in good standing');
    } else {
      console.error('Error sending auto-reply email:', error);
    }
    return false;
  }
}
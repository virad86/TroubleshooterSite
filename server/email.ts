import sgMail from '@sendgrid/mail';

// Check if SendGrid API key is set
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY is not set. Email functionality will not work.");
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
    console.error("Cannot send email: SENDGRID_API_KEY is not set");
    return false;
  }

  const receiverEmail = 'virad86@gmail.com'; // Email address to send notifications to
  
  try {
    const msg = {
      to: receiverEmail,
      from: 'contact@troubleshooter.lk', // Must be a verified sender in SendGrid
      subject: `New Contact Form: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send an auto-reply email to the user who submitted the contact form
 */
export async function sendAutoReplyEmail(data: EmailData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("Cannot send email: SENDGRID_API_KEY is not set");
    return false;
  }
  
  try {
    const msg = {
      to: data.email,
      from: 'contact@troubleshooter.lk', // Must be a verified sender in SendGrid
      subject: 'Thank you for contacting Troubleshooter!',
      text: `
Dear ${data.name},

Thank you for reaching out to Troubleshooter. We have received your message and will get back to you as soon as possible.

For your reference, here's a copy of your message:

Subject: ${data.subject}
Message:
${data.message}

Best regards,
The Troubleshooter Team
      `,
      html: `
<h2>Thank you for contacting Troubleshooter!</h2>
<p>Dear ${data.name},</p>
<p>Thank you for reaching out to Troubleshooter. We have received your message and will get back to you as soon as possible.</p>
<p>For your reference, here's a copy of your message:</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
<p>Best regards,<br>The Troubleshooter Team</p>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
    return false;
  }
}
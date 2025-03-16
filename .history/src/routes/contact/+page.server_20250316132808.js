import { z } from 'zod';
import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit';

// Define validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Naam moet minimaal 2 karakters bevatten' }),
  email: z.string().email({ message: 'Voer een geldig e-mailadres in' }),
  subject: z.string().min(3, { message: 'Onderwerp moet minimaal 3 karakters bevatten' }),
  message: z.string().min(10, { message: 'Bericht moet minimaal 10 karakters bevatten' })
});

// Create Gmail transporter
// Replace 'your-gmail@gmail.com' and 'your-password' with your actual Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail@gmail.com', // Your Gmail address
    pass: 'your-password'         // Your Gmail password or App Password
  }
});

export const actions = {
  contact: async ({ request }) => {
    // Get form data
    const formData = await request.formData();
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Validate form data
    const result = contactSchema.safeParse(data);
    
    if (!result.success) {
      // Return validation errors
      const errors = {};
      result.error.errors.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      
      return fail(400, { errors });
    }

    try {
      // Send email
      await transporter.sendMail({
        from: `"Contact Form" <your-gmail@gmail.com>`, // Use your Gmail address
        to: 'recipient@example.com',                   // Where you want to receive messages
        replyTo: data.email,
        subject: `Contact Form: ${data.subject}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          
          Message:
          ${data.message}
        `,
        html: `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `
      });
      
      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return fail(500, { 
        errors: { 
          form: 'Er is een probleem opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.'
        } 
      });
    }
  }
};
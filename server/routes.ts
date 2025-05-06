import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { sendContactEmail, sendAutoReplyEmail } from "./email";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix for all routes
  const apiPrefix = "/api";

  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact form submission
      const newContact = await storage.createContactSubmission(validatedData);
      
      // Try to send emails but don't block the response
      try {
        // Send email notification
        await sendContactEmail(validatedData).catch(err => console.error("Email notification error:", err));
        
        // Send auto-reply email
        await sendAutoReplyEmail(validatedData).catch(err => console.error("Auto-reply error:", err));
      } catch (emailError) {
        console.error("Error in email sending process:", emailError);
      }
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        data: newContact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}

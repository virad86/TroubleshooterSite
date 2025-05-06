import type { Express, Request, Response } from "express";
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

  // Site traffic API endpoints
  app.get(`${apiPrefix}/traffic`, async (req: Request, res: Response) => {
    try {
      // Get query params for pagination
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 100;
      const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;
      
      // Get traffic data with pagination
      const trafficData = await storage.getSiteTraffic(limit, offset);
      
      return res.status(200).json({
        message: "Site traffic retrieved successfully",
        count: trafficData.length,
        data: trafficData
      });
    } catch (error) {
      console.error("Error retrieving site traffic:", error);
      return res.status(500).json({
        message: "Failed to retrieve site traffic data"
      });
    }
  });
  
  // Site traffic analytics
  app.get(`${apiPrefix}/traffic/analytics`, async (req: Request, res: Response) => {
    try {
      // Get traffic analytics
      const analytics = await storage.getSiteTrafficAnalytics();
      
      return res.status(200).json({
        message: "Site traffic analytics retrieved successfully",
        data: analytics
      });
    } catch (error) {
      console.error("Error retrieving site traffic analytics:", error);
      return res.status(500).json({
        message: "Failed to retrieve site traffic analytics"
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}

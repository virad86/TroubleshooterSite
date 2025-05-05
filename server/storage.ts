import { db } from "@db";
import { contactSubmissions } from "@shared/schema";
import type { ContactSubmission, InsertContactSubmission } from "@shared/schema";

/**
 * Storage service for handling database operations
 */
export const storage = {
  /**
   * Create a new contact form submission
   */
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const [newSubmission] = await db.insert(contactSubmissions)
      .values(data)
      .returning();
    
    return newSubmission;
  },
  
  /**
   * Get all contact form submissions
   */
  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db.query.contactSubmissions.findMany({
      orderBy: (submissions, { desc }) => [desc(submissions.createdAt)]
    });
    
    return submissions;
  }
};

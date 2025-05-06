import { db } from "@db";
import { contactSubmissions, siteTraffic } from "@shared/schema";
import type { 
  ContactSubmission, 
  InsertContactSubmission,
  SiteTraffic,
  InsertSiteTraffic 
} from "@shared/schema";

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
  },

  /**
   * Record a site visit
   */
  async recordSiteVisit(data: InsertSiteTraffic): Promise<SiteTraffic> {
    const [visit] = await db.insert(siteTraffic)
      .values(data)
      .returning();
    
    return visit;
  },

  /**
   * Get all site traffic records
   */
  async getSiteTraffic(limit: number = 100, offset: number = 0): Promise<SiteTraffic[]> {
    const traffic = await db.query.siteTraffic.findMany({
      orderBy: (traffic, { desc }) => [desc(traffic.timestamp)],
      limit,
      offset
    });
    
    return traffic;
  },

  /**
   * Get site traffic analytics summary (visits by region/country/browser)
   */
  async getSiteTrafficAnalytics(): Promise<any> {
    // This is a simplified version. In a real application, you'd use SQL aggregation
    const traffic = await db.query.siteTraffic.findMany();
    
    // Group by various dimensions
    const analytics = {
      totalVisits: traffic.length,
      byCountry: groupBy(traffic, 'country'),
      byRegion: groupBy(traffic, 'region'),
      byBrowser: groupBy(traffic, 'browser'),
      byOS: groupBy(traffic, 'os'),
      byDevice: groupBy(traffic, 'device'),
      byPage: groupBy(traffic, 'page')
    };
    
    return analytics;
  }
};

// Helper function to group array items by a property
function groupBy(array: any[], key: string) {
  return array.reduce((result, item) => {
    const value = item[key] || 'unknown';
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});
}

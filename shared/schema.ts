import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (keeping the existing structure)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Site traffic table to track visitors
export const siteTraffic = pgTable("site_traffic", {
  id: serial("id").primaryKey(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  referrer: text("referrer"),
  page: text("page").notNull(),
  region: text("region"),
  country: text("country"),
  city: text("city"),
  browser: text("browser"),
  os: text("os"),
  device: text("device"),
  sessionId: text("session_id"),
});

export const insertSiteTrafficSchema = createInsertSchema(siteTraffic).pick({
  ipAddress: true,
  userAgent: true,
  referrer: true,
  page: true,
  region: true,
  country: true,
  city: true,
  browser: true,
  os: true,
  device: true,
  sessionId: true,
});

export type InsertSiteTraffic = z.infer<typeof insertSiteTrafficSchema>;
export type SiteTraffic = typeof siteTraffic.$inferSelect;

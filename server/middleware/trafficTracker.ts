import { Request, Response, NextFunction } from 'express';
import { storage } from '../storage';
import { InsertSiteTraffic } from '@shared/schema';
import { getCookies, setCookie } from '../utils/cookies';

/**
 * Middleware to track site traffic and visitor information
 */
export function trafficTracker() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Skip for API routes, static files, and images
      if (
        req.path.startsWith('/api') || 
        req.path.startsWith('/assets') || 
        req.path.includes('.') || 
        req.method !== 'GET'
      ) {
        return next();
      }

      // Get session ID from cookie or create new one
      const cookies = getCookies(req);
      let sessionId = cookies.sessionId;
      
      if (!sessionId) {
        // Generate a simple session ID (in production, use uuid or another secure generator)
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
        setCookie(res, 'sessionId', sessionId, { maxAge: 86400 * 30 }); // 30 days
      }

      // Get user agent parts
      const userAgent = req.headers['user-agent'] || '';
      const browser = getBrowserInfo(userAgent);
      const os = getOSInfo(userAgent);
      const device = getDeviceInfo(userAgent);
      
      // Collect traffic data
      const trafficData: InsertSiteTraffic = {
        ipAddress: getClientIp(req),
        userAgent: userAgent,
        referrer: req.headers.referer || '',
        page: req.path || '/',
        region: '', // These would come from a geolocation service in a production app
        country: '',
        city: '',
        browser: browser,
        os: os,
        device: device,
        sessionId
      };
      
      // Record the visit (don't await to avoid slowing down response)
      storage.recordSiteVisit(trafficData).catch(err => {
        console.error('Error recording site visit:', err);
      });

    } catch (error) {
      console.error('Error in traffic tracking middleware:', error);
    }
    
    // Always continue with the request
    next();
  };
}

/**
 * Get client IP address from request
 */
function getClientIp(req: Request): string {
  // Get IP from various headers and fields
  return (
    (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket.remoteAddress ||
    ''
  );
}

/**
 * Extract browser information from user agent
 */
function getBrowserInfo(userAgent: string): string {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Edge') || userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('MSIE') || userAgent.includes('Trident')) return 'Internet Explorer';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  return 'Other';
}

/**
 * Extract OS information from user agent
 */
function getOSInfo(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac OS')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Other';
}

/**
 * Extract device type information from user agent
 */
function getDeviceInfo(userAgent: string): string {
  if (userAgent.includes('Mobile')) return 'mobile';
  if (userAgent.includes('Tablet') || userAgent.includes('iPad')) return 'tablet';
  return 'desktop';
}
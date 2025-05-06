import { Request, Response } from 'express';

/**
 * Options for setting cookies
 */
interface CookieOptions {
  maxAge?: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  path?: string;
}

/**
 * Get cookies from request
 */
export function getCookies(req: Request): Record<string, string> {
  const cookies: Record<string, string> = {};
  const cookieHeader = req.headers.cookie;
  
  if (cookieHeader) {
    cookieHeader.split(';').forEach(cookie => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      if (name && value) {
        cookies[name] = value;
      }
    });
  }
  
  return cookies;
}

/**
 * Set a cookie in the response
 */
export function setCookie(
  res: Response, 
  name: string, 
  value: string, 
  options: CookieOptions = {}
): void {
  const defaultOptions: CookieOptions = {
    maxAge: 86400, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  };
  
  const opts = { ...defaultOptions, ...options };
  let cookieString = `${name}=${value}`;
  
  if (opts.maxAge) cookieString += `; Max-Age=${opts.maxAge}`;
  if (opts.httpOnly) cookieString += '; HttpOnly';
  if (opts.secure) cookieString += '; Secure';
  if (opts.sameSite) cookieString += `; SameSite=${opts.sameSite}`;
  if (opts.path) cookieString += `; Path=${opts.path}`;
  
  const existingCookies = res.getHeader('Set-Cookie');
  let cookies: string[] = [];

  if (existingCookies) {
    if (Array.isArray(existingCookies)) {
      cookies = [...existingCookies];
    } else if (typeof existingCookies === 'string') {
      cookies = [existingCookies];
    }
  }

  cookies.push(cookieString);
  res.setHeader('Set-Cookie', cookies);
}

/**
 * Clear a cookie
 */
export function clearCookie(res: Response, name: string, path = '/'): void {
  setCookie(res, name, '', { maxAge: 0, path });
}
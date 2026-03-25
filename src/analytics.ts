// src/analytics.ts

// Extend window type for gtag (TypeScript fix)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Your GA Measurement ID
const GA_ID = "G-31VB0M3G8V";

// Track page views (for React Router navigation)
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// Track custom events (buttons, forms, etc.)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
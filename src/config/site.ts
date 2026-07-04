/**
 * ==========================================================
 * LNCT University - Global Site Configuration
 * ==========================================================
 *
 * This file contains all global website information.
 * Do NOT hardcode these values inside components.
 *
 * Used by:
 * - Metadata
 * - SEO
 * - Navbar
 * - Footer
 * - Contact Page
 * - Social Links
 * - JSON-LD Schema
 * - Open Graph
 * - Sitemap
 * ==========================================================
 */

export interface SiteConfig {
  /**
   * Basic Information
   */
  name: string;
  shortName: string;
  description: string;
  siteUrl: string;
  defaultLocale: string;

  /**
   * Organization Information
   */
  organization: {
    name: string;
    founded: number;
  };

  /**
   * Branding
   */
  logo: {
    light: string;
    dark: string;
    favicon: string;
  };

  /**
   * Default SEO Image
   */
  defaultSeoImage: string;

  /**
   * Contact Information
   */
  contact: {
    email: string;
    phone: string;
    address: string;
  };

  /**
   * Social Media
   */
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    x: string;
  };
}

export const siteConfig: SiteConfig = {
  /**
   * ----------------------------------------------------------
   * Basic Information
   * ----------------------------------------------------------
   */
  name: "LNCT University",

  shortName: "LNCT",

  description:
    "Official website of LNCT University, Bhopal. Explore admissions, academics, research, placements, events, and student life.",

  siteUrl: "https://www.example.com",

  defaultLocale: "en-IN",

  /**
   * ----------------------------------------------------------
   * Organization
   * ----------------------------------------------------------
   */
  organization: {
    name: "LNCT University",
    founded: 2022,
  },

  /**
   * ----------------------------------------------------------
   * Branding
   * ----------------------------------------------------------
   */
  logo: {
    light: "/images/logo/logo-light.svg",
    dark: "/images/logo/logo-dark.svg",
    favicon: "/favicon.ico",
  },

  /**
   * ----------------------------------------------------------
   * Default SEO Image
   * ----------------------------------------------------------
   */
  defaultSeoImage: "/images/seo/og-image.jpg",

  /**
   * ----------------------------------------------------------
   * Contact
   * ----------------------------------------------------------
   */
  contact: {
    email: "info@example.com",
    phone: "+91-0000000000",
    address: "Bhopal, Madhya Pradesh, India",
  },

  /**
   * ----------------------------------------------------------
   * Social Media
   * ----------------------------------------------------------
   */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    x: "",
  },
};
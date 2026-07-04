/**
 * ==========================================================
 * LNCT University - Navigation Configuration
 * ==========================================================
 *
 * Centralized navigation configuration used by:
 * - Header
 * - Mobile Menu
 * - Footer
 * - Sitemap (future)
 * - Breadcrumbs (future)
 *
 * Do NOT hardcode navigation inside components.
 * ==========================================================
 */

export interface NavigationItem {
  /**
   * Display text
   */
  title: string;

  /**
   * Page URL
   */
  href: string;

  /**
   * Opens in new tab (ERP, Portal, etc.)
   */
  external?: boolean;

  /**
   * Child menu items (Dropdown / Mega Menu)
   */
  children?: NavigationItem[];
}

/* ==========================================================
   Main Navigation
========================================================== */

export const mainNavigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Admissions",
    href: "/admissions",
    children: [
      {
        title: "Undergraduate",
        href: "/admissions/undergraduate",
      },
      {
        title: "Postgraduate",
        href: "/admissions/postgraduate",
      },
      {
        title: "Ph.D.",
        href: "/admissions/phd",
      },
    ],
  },

  {
    title: "Academics",
    href: "/academics",
  },

  {
    title: "Research",
    href: "/research",
  },

  {
    title: "Placements",
    href: "/placements",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

/* ==========================================================
   Footer Navigation
========================================================== */

export const footerNavigation: NavigationItem[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },

  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },

  {
    title: "Sitemap",
    href: "/sitemap",
  },
];
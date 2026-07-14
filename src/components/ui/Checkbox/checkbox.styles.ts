/* ==========================
   Base Styles
========================== */

export const baseStyles = `
  rounded
  border
  border-[var(--color-border)]
  text-[var(--color-primary)]
  bg-[var(--color-background)]

  transition-colors
  duration-200

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--color-primary-light)]
  focus-visible:ring-offset-2

  disabled:cursor-not-allowed
  disabled:opacity-60
`;

/* ==========================
   Sizes
========================== */

export const checkboxSizes = {
  sm: `
    h-4
    w-4
  `,

  md: `
    h-5
    w-5
  `,

  lg: `
    h-6
    w-6
  `,
} as const;

/* ==========================
   Wrapper Styles
========================== */

export const wrapperStyles = `
  flex
  flex-col
`;

/* ==========================
   Container Styles
========================== */

export const checkboxContainerStyles = `
  flex
  items-start
  gap-3
`;

/* ==========================
   Label Styles
========================== */

export const labelStyles = `
  cursor-pointer
  text-sm
  font-medium
  text-[var(--color-text-primary)]
`;

/* ==========================
   Helper Text
========================== */

export const helperTextStyles = `
  mt-1
  text-sm
  text-[var(--color-text-secondary)]
`;

/* ==========================
   Error Text
========================== */

export const errorTextStyles = `
  mt-1
  text-sm
  text-[var(--color-error)]
`;

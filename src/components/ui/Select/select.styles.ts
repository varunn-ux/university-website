/* ==========================
   Base Styles
========================== */

export const baseStyles = `
  w-full
  rounded-[var(--radius-md)]
  border
  bg-[var(--color-background)]
  text-[var(--color-text-primary)]
  transition-colors
  duration-200

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--color-primary-light)]
  focus-visible:border-[var(--color-primary)]

  disabled:cursor-not-allowed
  disabled:opacity-60

  appearance-none
`;

/* ==========================
   Variants
========================== */

export const selectVariants = {
  default: `
    border-[var(--color-border)]
  `,

  outline: `
    border-2
    border-[var(--color-border)]
    bg-transparent
  `,

  filled: `
    border-transparent
    bg-[var(--color-surface)]
  `,
} as const;

/* ==========================
   Sizes
========================== */

export const selectSizes = {
  sm: `
    h-9
    px-3
    pr-10
    text-sm
  `,

  md: `
    h-11
    px-4
    pr-10
    text-base
  `,

  lg: `
    h-12
    px-5
    pr-10
    text-lg
  `,
} as const;

/* ==========================
   Label Styles
========================== */

export const labelStyles = `
  mb-2
  block
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

export const selectContainerStyles = `
  relative
`;

/* ==========================
   Icon Styles
========================== */

export const iconStyles = `
  pointer-events-none
  absolute
  right-4
  top-1/2
  -translate-y-1/2
  text-[var(--color-text-muted)]
`;

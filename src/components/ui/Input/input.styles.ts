/* ==========================
   Base Styles
========================== */

export const baseStyles = `
w-full
rounded-[var(--radius-md)]
border
bg-[var(--color-background)]
text-[var(--color-text-primary)]
placeholder:text-[var(--color-text-muted)]
transition-colors
duration-200
focus-visible:outline-none
disabled:cursor-not-allowed
disabled:opacity-60
focus-visible:ring-2
focus-visible:ring-[var(--color-primary-light)]
focus-visible:border-[var(--color-primary)]
`;

/* ==========================
   Variants
========================== */

export const inputVariants = {
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

export const inputSizes = {
  sm: `
    h-9
    px-3
    text-sm
  `,

  md: `
    h-11
    px-4
    text-base
  `,

  lg: `
    h-12
    px-5
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
   Input Container
========================== */

export const inputContainerStyles = `
  relative
  flex
  items-center
`;

/* ==========================
   Icon Styles
========================== */

export const leftIconStyles = `
  pointer-events-none
   absolute
    left-4
     flex
      items-center
       text-[var(--color-text-muted)]
`;

export const rightIconStyles = `
  absolute
  right-4
  flex
  items-center
  text-[var(--color-text-muted)]
`;

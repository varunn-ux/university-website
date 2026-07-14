/* ==========================
   Hidden Input
========================== */

export const inputStyles = `
  sr-only
  peer
`;

/* ==========================
   Track (Background)
========================== */

export const trackBaseStyles = `
  relative
  inline-flex
  shrink-0
  cursor-pointer
  rounded-full
  border
  border-transparent

  bg-[var(--color-border)]

  transition-all
  duration-300
  ease-in-out

  peer-focus-visible:outline-none
  peer-focus-visible:ring-2
  peer-focus-visible:ring-[var(--color-primary-light)]
  peer-focus-visible:ring-offset-2

  peer-checked:bg-[var(--color-primary)]

  peer-disabled:cursor-not-allowed
  peer-disabled:opacity-60
`;

/* ==========================
   Thumb (Circle)
========================== */

export const thumbBaseStyles = `
  pointer-events-none
  absolute
  left-0.5
  top-1/2

  -translate-y-1/2
  rounded-full
  bg-white
  shadow-sm

  transition-all
  duration-300
  ease-in-out
`;

/* ==========================
   Switch Sizes
========================== */

export const switchSizes = {
  sm: {
    track: `
      h-5
      w-9
    `,

    thumb: `
      h-4
      w-4
      peer-checked:translate-x-4
    `,
  },

  md: {
    track: `
      h-6
      w-11
    `,

    thumb: `
      h-5
      w-5
      peer-checked:translate-x-5
    `,
  },

  lg: {
    track: `
      h-7
      w-14
    `,

    thumb: `
      h-6
      w-6
      peer-checked:translate-x-7
    `,
  },
} as const;

/* ==========================
   Wrapper
========================== */

export const wrapperStyles = `
  flex
  flex-col
`;

/* ==========================
   Container
========================== */

export const switchContainerStyles = `
  flex
  items-start
  gap-3
`;

/* ==========================
   Label
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

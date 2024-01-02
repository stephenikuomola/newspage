# News page style-guide

The project will be built to be responsive across two devices:

- Mobile Devices - 375px
- Desktop Devices - 1440px

## Color

```css
--soft-orange: hsl(35, 77%, 62%);
--soft-red: hsl(5, 85%, 63%);
--off-white: hsl(36, 100%, 99%);
--grayish-blue: hsl(233, 8%, 79%);
--dark-grayish-blue: hsl(236, 13%, 42%);
--very-dark-grayish-blue: hsl(240, 100%, 5%);
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 12px;
--radius-6: 16px;
--radius-7: 20px;
--radius-8: 24px;
--radius-9: 26px;
--radius-10: 28px;
--radius-11: 30px;
--radius-12: 32px;
--radius-13: 34px;
--radius-14: 36px;
--radius-15: 38px;
--radius-16: 40px;
```

## Typography

```css
--ff-Inter-sans-serif: var(--ff-Inter), sans-serif;
--ff-Inter: 'Inter';
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
--font-feature-settings: 'clig' off, 'liga' off;

/* Font Sizes */
--fs-1: 0.875rem;
--fs-2: 0.9375rem;
--fs-3: 1.125rem;
--fs-4: 1.25rem;
--fs-5: 2rem;
--fs-6: 2.5rem;
--fs-7: 3.5rem;
```

## Font Face

```css
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src:
    url('/assets/fonts/inter-v13-latin-regular.woff2') format('woff2'),
    url('/assets/fonts/inter-v13-latin-regular.woff') format('woff'),
    url('/assets/fonts/inter-v13-latin-regular.ttf') format('truetype');
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src:
    url('/assets/fonts/inter-v13-latin-700.woff2') format('woff2'),
    url('/assets/fonts/inter-v13-latin-700.woff') format('woff'),
    url('/assets/fonts/inter-v13-latin-700.ttf') format('truetype');
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src:
    url('/assets/fonts/inter-v13-latin-800.woff2') format('woff2'),
    url('/assets/fonts/inter-v13-latin-800.woff') format('woff'),
    url('/assets/fonts/inter-v13-latin-800.ttf') format('truetype');
}

/* This font face would be for the variable fonts */
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 800;
  src:
    url('/assets/fonts/') format('woff2-variations'),
    url('/assets/fonts/') format('woff2') tech('variations'),
    url('/assets/fonts/') format('woff-variations'),
    url('/assets/fonts/') format('woff') tech('variations'),
    url('/assets/fonts/') format('ttf-variations'),
    url('/assets/fonts/') format('ttf') tech('variations');
}
```

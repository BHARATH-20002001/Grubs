# Custom Fonts Directory

Place your `.woff2` font files in this directory.

To use them in your Next.js application, update `src/app/layout.tsx` like this:

```tsx
import localFont from "next/font/local";

// Configure your local font
const myCustomFont = localFont({
  src: "./fonts/my-font.woff2", // Update this with your actual file name
  variable: "--font-custom",
  weight: "100 900", // Update with your font's weight range or specific weight
});

// Then add the variable to the <html> tag:
// <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${myCustomFont.variable} antialiased`}>
```

After doing this, you can use `font-custom` in your Tailwind classes if you also add it to `tailwind.config.ts` or `globals.css`.

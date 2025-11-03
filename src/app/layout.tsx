// src/app/layout.tsx

export const metadata = {
  title: "RES LLC | Rambuilt Estimating Services",
  description:
    "Accurate, fast, and reliable building-material takeoffs for residential, multi-family, and commercial projects. Remote estimating made simple and precise.",
  metadataBase: new URL("https://www.rambuiltestimating.com"),
  icons: {
    icon: "/favicon.png", // your favicon in /public
  },
  openGraph: {
    title: "RES LLC | Rambuilt Estimating Services",
    description:
      "Remote construction estimating that delivers accuracy, speed, and trust for builders, homeowners, and suppliers.",
    url: "https://www.rambuiltestimating.com",
    siteName: "RES LLC",
    images: [
      {
        url: "/RESLLC-LOGO.png",
        width: 1200,
        height: 630,
        alt: "RES LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* No <head> here — Next.js injects it automatically from `metadata` */}
      <body className="antialiased">{children}</body>
    </html>
  );
}




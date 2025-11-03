export const metadata = {
  title: "RES LLC | Rambuilt Estimating Services",
  description:
    "Accurate, fast, and reliable building-material takeoffs for residential, multi-family, and commercial projects. Remote estimating made simple and precise.",
  metadataBase: new URL("https://www.rambuiltestimating.com"),
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
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* ✅ Page Title */}
        <title>RES LLC | Rambuilt Estimating Services</title>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}



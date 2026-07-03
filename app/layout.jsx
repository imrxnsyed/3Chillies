import "./globals.css";

export const metadata = {
  title: "3 Chillies — Indo-Chinese Restaurant · Banjara Hills, Hyderabad",
  description:
    "Bold Indo-Chinese cuisine in Banjara Hills, Hyderabad. Explore the menu, order online, and reserve your table at 3 Chillies.",
  icons: { icon: "/logo.svg" },
};

export const viewport = {
  themeColor: "#faf4e8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

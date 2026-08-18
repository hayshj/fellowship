import "./globals.css";

export const metadata = {
  title: "Fellowship Church",
  description: "Fellowship Church in Royse City, Texas",
  icons: {
    icon: "/circlefavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

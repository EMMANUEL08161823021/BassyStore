import { Quicksand } from "next/font/google";

import "../app/globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MrB Gadgets",
  description: "Phones, laptops, accessories and games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
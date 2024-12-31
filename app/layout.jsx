import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
export const metadata = {
  title: "Product Finder",
  description: "Find the best products for your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#059669" />
      </head>
      <body
        className={`${montserrat.className} bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center h-screen p-5`}
      >
        {children}
      </body>
    </html>
  );
}

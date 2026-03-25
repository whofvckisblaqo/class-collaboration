import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project_X | Modern Digital Solutions",
  description: "Building modular experiences with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        {/* Placing the Navbar here means it persists across 
          all routes without re-rendering! 
        */}
        <Navbar />
        
        {/* The 'children' prop renders the content of your page.js files */}
        {children}
      </body>
    </html>
  );
}
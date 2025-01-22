import "./globals.css";
import { Poppins } from "next/font/google"

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700']
})




export const metadata = {
  title: "Wanderlust : Journeys Beyond Horizons",
  description: "A travel blog for all your dream destinations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden bg-light`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

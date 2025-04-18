import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/lib/provider";
import { Toaster } from "react-hot-toast";
import NotificationManager from "./NotificationManager";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <Toaster position="top-right" />
           <NotificationManager></NotificationManager>
        <ReduxProvider>{children}</ReduxProvider>
        
      </body>
    </html>
  );
}

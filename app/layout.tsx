// app/layout.tsx

import './globals.css'; // ✅ cukup ini saja, buang yang "@/app/globals.css"

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistem Monitoring Keamanan Jaringan IoT",
  description: "Pemantauan Perangkat dan Deteksi Serangan Jaringan pada Platform Web dan Mobile",
  generator: 'v0.dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Tambah link CDN Font Awesome di sini */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-papQ7M3z0b53Dg8YRCZzJltM/9E9eY6PbRmhbcgscnX8e+1zAq20uqOv9b5QtkH5eG8dXxlJvfsnL6QVLShkug=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

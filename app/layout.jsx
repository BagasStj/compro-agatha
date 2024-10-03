import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import '@fortawesome/fontawesome-free/css/all.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agatha ID",
  description: "Agatha ID",
  icons: {
    icon: [
      { url: '/agatha_ungu.svg', sizes: '32x32', type: 'image/png' },
      { url: '/agatha_ungu.svg', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/agatha_ungu.svg', sizes: '180x180', type: 'image/png' },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/agatha_ungu.svg" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/agatha_ungu.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/agatha_ungu.svg" />
      </head>
      <body className={inter.className}>
        <div className="container mx-auto px-4 xl:px-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}



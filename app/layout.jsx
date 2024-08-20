import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Ensure this path is correct
import SidebarMenu from "@/components/SidebarMenu"; // Ensure this path is correct
import SidebarMenuRight from "@/components/SidebarMenuR"; // Ensure this path is correct
import '@fortawesome/fontawesome-free/css/all.css'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  {/* Navbar will always be at the top */}
        <div className="flex min-h-screen">
          <SidebarMenu />  {/* Left Sidebar */}
          <main className="flex-1 mx-4 p-4"> {/* Main content */}
            {children}  {/* Content to be rendered */}
          </main>
          <SidebarMenuRight />  {/* Right Sidebar */}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Loader } from "@/style/loader";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thumbnail-generator",
  description: "create by Nolis Maldonado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <UserProvider>
        <body>{children}</body>
      </UserProvider>

    </html>
  );
}

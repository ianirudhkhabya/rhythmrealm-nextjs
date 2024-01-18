import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to your favorite music for free",
  icons: {
    icon: [
      { url: "/meta/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: {
      url: "/meta/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  metadataBase: new URL("https://localhost:3000/"),
  openGraph: {
    url: "https://localhost:3000/",
    title: "Spotify Clone",
    description: "Listen to your favorite music for free",
    type: "website",
  },
  manifest: "/meta/site.webmanifest",
  keywords: ["Spotify", "Clone", "Music", "Free", "ianirudhkhabya"],
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

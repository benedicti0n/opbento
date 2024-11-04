import Clarity from "@/components/Clarity";
import { Toaster } from "@/components/ui/sonner";
<<<<<<< HEAD
import { ThemeProvider } from "next-themes";
=======
>>>>>>> 1990fdcdd5ea8340f83f8bfa70dca25cad10f68d
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OP Bento",
  description: "Create cool bento grids for your Github Readme!",
  metadataBase: new URL("https://opbento.edgexhq.tech"),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {process.env.NODE_ENV === "production" ? <Clarity /> : null}
      <body className={inter.className}>
        <Toaster richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer className="mt-20 mb-4">
      <p className="text-center text-muted-foreground">
        Made with ❤️ by{" "}
        <a href="/about" className="text-red-300 hover:underline">
          @RealDevs
        </a>
      </p>
    </footer>
  );
};

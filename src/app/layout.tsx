import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Archivo_Black, Tomorrow } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});
const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Barbosa Transportes",
    template: "Barbosa Transportes | %s",
  },
  description:
    "Serviço de transporte ágil com um caminhão HR. Ideal para mudanças e transporte de mercadorias com agilidade, cuidado e confiança. Solicite já um orçamento!",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${archivoBlack.variable} ${tomorrow.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import {
  Archivo,
  Archivo_Black,
  Martian_Mono,
  Permanent_Marker,
} from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Barbosa Transportes | Entregas e fretes em Belo Horizonte",
    template: "Barbosa Transportes | %s",
  },
  description:
    "Mudanças, entregas e fretes com caminhão HR em Belo Horizonte. Você fala direto com o Sidinei, combina o valor e acompanha cada etapa. Solicite seu orçamento.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Barbosa Transportes | Entregas e fretes em Belo Horizonte",
    description:
      "Mudanças, entregas e fretes com caminhão HR em Belo Horizonte. Fale direto com quem dirige.",
    locale: "pt_BR",
    type: "website",
    siteName: "Barbosa Transportes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4ede0" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a24" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${archivoBlack.variable} ${martianMono.variable} ${permanentMarker.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#conteudo"
            className="sr-only z-[100] rounded-sm bg-primary px-4 py-3 font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <div id="conteudo">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

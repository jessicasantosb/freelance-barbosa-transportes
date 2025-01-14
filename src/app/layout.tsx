import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Tomorrow } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";

const tomorrow = Tomorrow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Barbosa Fretes",
    template: "Barbosa Fretes | %s",
  },
  description:
    "Serviços de entregas e fretes rápidos com caminhão pequeno. Ideal para mudanças e transporte de mercadorias com agilidade, cuidado e confiança. Solicite já um orçamento!",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={tomorrow.className}>
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

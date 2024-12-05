import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const outfit = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidinei Barbosa - Entregas e Fretes",
  description:
    "Serviços de entregas e fretes rápidos com caminhão pequeno. Ideal para mudanças e transporte de mercadorias com agilidade, cuidado e confiança. Solicite já um orçamento!",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

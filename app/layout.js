import { Inter } from "next/font/google";
import "@/app/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Module.Dev.Br",
  description: "Desenvolvendo soluções simples e inteligentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

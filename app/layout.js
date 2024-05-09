import { Inter } from "next/font/google";
import "@/app/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MODULE . DEV . BR",
  description: "Plataforma de venda de módulos de sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

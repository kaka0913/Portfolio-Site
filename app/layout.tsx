import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株丹優一郎のポートフォリオ",
  description: "株丹優一郎のエンジニアポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className} style={{ margin: 0, padding: 0, backgroundColor: '#111113' }}>
        <Theme appearance="dark" accentColor="blue" radius="medium">
          {children}
        </Theme>
      </body>
    </html>
  );
}

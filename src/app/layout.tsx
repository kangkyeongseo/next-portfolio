import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '강경서 포트폴리오',
  description: '프론트엔드 포트폴리오',
};

const inter = Inter({ subsets: ['latin'] });
const noto = Noto_Sans_KR({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${noto.className} overflow-hidden`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nguyễn Phương Nga — Portfolio',
  description:
    'Portfolio CV of Nguyễn Phương Nga — International Business & Economics student at Foreign Trade University.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

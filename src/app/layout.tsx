// src/app/layout.tsx
import type { Metadata } from 'next';
import './index.css';
import { Header } from '../ui/components/Header';

export const metadata: Metadata = {
  title: 'Water Formula - Ваш гид по воде',
  description: 'Персональный калькулятор потребления воды',
  keywords: 'вода, здоровье, калькулятор воды, гидратация',
  openGraph: {
    title: 'Water Formula',
    description: 'Рассчитайте свою норму потребления воды',
    type: 'website',
    locale: 'ru_RU',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
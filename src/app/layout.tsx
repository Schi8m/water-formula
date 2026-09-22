// src/app/layout.tsx
import type { Metadata } from 'next';
import './index.css';
import { Footer } from '../ui/components/Footer';
import { Roboto_Condensed } from 'next/font/google'

// Важно: в названии используется подчёркивание (_), а не пробел или дефис
const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '700'], // Указываем нужные веса
  subsets: ['latin', 'cyrillic'],     // Обязательно указываем подмножества
  display: 'swap',        // Рекомендуемый параметр для плавной загрузки
})

export const metadata: Metadata = {
  title: 'Формула воды',
  description: 'Персональный калькулятор потребления воды',
  keywords: 'вода, здоровье, калькулятор воды, гидратация',
  openGraph: {
    title: 'Формула воды',
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
    <html lang="ru" className={robotoCondensed.className}>
      <body>
        {children}
        <Footer copyright={"© 2026 формула воды\n[ ВСЕ ПРАВА ЗАЩИЩЕНЫ ]\nENGINEERING SOFTWARE CORE"} />
      </body>
    </html>
  );
}
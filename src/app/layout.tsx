// src/app/layout.tsx
import type { Metadata } from 'next';
import './index.css';
import { Footer } from '../ui/components/Footer';
import { Roboto_Condensed } from 'next/font/google'
import { YandexMetricaProvider, standardYMInitParameters } from '@artginzburg/next-ym';

// Важно: в названии используется подчёркивание (_), а не пробел или дефис
const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '700'], // Указываем нужные веса
  subsets: ['latin', 'cyrillic'],     // Обязательно указываем подмножества
  display: 'swap',        // Рекомендуемый параметр для плавной загрузки
})

export const metadata: Metadata = {
  title: 'Формула воды — калькулятор нормы потребления воды',
  description: 'ИдеяСофт — специализированный разработчик в сфере САПР с более чем 20‑летним опытом внедрения, поддержки и обучения. Гарантируем масштабируемость, безопасность и соблюдение отраслевых стандартов и SLA. Наш программный продукт гарантировано повысит эффективность проектной деятельности.',
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
        <YandexMetricaProvider initParameters={standardYMInitParameters} tagID={113847569}>
          {children}
        </YandexMetricaProvider>
        <Footer copyright={"© 2026 формула воды\n[ ВСЕ ПРАВА ЗАЩИЩЕНЫ ]\nENGINEERING SOFTWARE CORE"} />
      </body>
    </html>
  );
}
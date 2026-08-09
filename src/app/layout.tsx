// src/app/layout.tsx
import type { Metadata } from 'next';
import './index.css';
import { Header } from '../ui/components/Header';
import { Footer } from '../ui/components/Footer';

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

const navs = [
  {title: 'О продукте', link: '#about-product'},
  {title: 'Разработчик', link: '#about-developer'},
  {title: 'Поддержка', link: '#support'},
  {title: 'Скачать', link: '#download'}
]

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <Header routes={navs}/>
        {children}
        <Footer copyright={"© 2026 формула воды\n[ ВСЕ ПРАВА ЗАЩИЩЕНЫ ]\nENGINEERING SOFTWARE CORE V4.2"} />
      </body>
    </html>
  );
}
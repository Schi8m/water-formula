// src/components/ClientPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { MainBanner } from '../ui/components/MainBanner';
import { ProductBlock } from '../ui/components/ProductsBlock';

const MAIN_BANNER_DATA = {
        title: 'Профессиональные расчёты систем ХВС/ГВС',
        subtitle: 'Программа предназначена для автоматизации инженерных расчётов систем внутреннего водоснабжения зданий',
        buttons: [
            'ВЫБРАТЬ МОДУЛЬ',
            'СКАЧАТЬ'
        ]
    }

const PRODUCTS_BLOCK_DATA = {
        title: 'ВЕРСИИ ПОСТАВКИ',
        subtitle: 'Лицензии предоставляются на годовой основе с полной техподдержкой.',
        products: [
            {title: 'бАЗОВЫЙ', cost: 95690, functions: ['Одиночный гидравлический расчет', 'Экспорт в формате PDF', '1 лицензия']},
            {title: 'СТАНДАРТ', cost: 112800, functions: ['Все функции БАЗОВОГО плана', 'Расширенные гидравлические библиотеки', 'Техподдержка 24/7', '5 лицензий пользователей']},
            {title: 'ПРОФИ', cost: 124500, functions: ['Неограниченное количество сессий', 'Полная интеграция через API', 'Обучение персонала']}
        ],
        linkBtnTitle: 'оформить заказ'
    }

export function ClientPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки клиентских данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>Loading ...</div>
    );
  }

  return (
    <div className='main-page'>
      <MainBanner {...MAIN_BANNER_DATA}/>
      <ProductBlock {...PRODUCTS_BLOCK_DATA}/>
    </div>
  );
}
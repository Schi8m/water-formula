import type { Meta, StoryObj } from '@storybook/react'
import { ProductBlock } from '.';

const meta: Meta<typeof ProductBlock> = {
    component: ProductBlock,
}

export default meta;

type Story = StoryObj<typeof ProductBlock>;

export const Default: Story= {
    args: {
        title: 'ВЕРСИИ ПОСТАВКИ',
        subtitle: 'Лицензии предоставляются на годовой основе с полной техподдержкой.',
        products: [
            {title: 'бАЗОВЫЙ', cost: 95690, functions: ['Одиночный гидравлический расчет', 'Экспорт в формате PDF', '1 лицензия']},
            {title: 'СТАНДАРТ', cost: 112800, functions: ['Все функции БАЗОВОГО плана', 'Расширенные гидравлические библиотеки', 'Техподдержка 24/7', '5 лицензий пользователей']},
            {title: 'ПРОФИ', cost: 124500, functions: ['Неограниченное количество сессий', 'Полная интеграция через API', 'Обучение персонала']}
        ],
        linkBtnTitle: 'оформить заказ'
    }
}
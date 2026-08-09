import type { Meta, StoryObj } from '@storybook/react'
import { MainBanner } from '.';

const meta: Meta<typeof MainBanner> = {
    component: MainBanner,
}

export default meta;

type Story = StoryObj<typeof MainBanner>;

export const Default: Story= {
    args: {
        title: 'Профессиональные расчёты систем ХВС/ГВС',
        subtitle: 'Программа предназначена для автоматизации инженерных расчётов систем внутреннего водоснабжения зданий',
        buttons: [
            'ВЫБРАТЬ МОДУЛЬ',
            'СКАЧАТЬ'
        ]
    }
}
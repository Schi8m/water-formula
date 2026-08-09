import type { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from '.';

const meta: Meta<typeof ContactForm> = {
    component: ContactForm,
}

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story= {
    args: {
        title: 'ОФОРМИТЬ ЗАКАЗ',
        subtitle: 'Оставьте заявку, и наш инженер свяжется с вами для уточнения деталей лицензирования.',
        checkboxDescr: 'Я СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ В СООТВЕТСТВИИ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ.',
        sendBtnTitle: 'отправить'
    }
}
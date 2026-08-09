import type { Meta, StoryObj } from '@storybook/react'
import { AboutDeveloperBlock } from '.';

const meta: Meta<typeof AboutDeveloperBlock> = {
    component: AboutDeveloperBlock,
}

export default meta;

type Story = StoryObj<typeof AboutDeveloperBlock>;

export const Default: Story= {
    args: {
        title: 'О РАЗРАБОТЧИКЕ',
        firstPart: 'ИдеяСофт — специализированный разработчик в сфере САПР с более чем 20‑летним опытом внедрения, поддержки и обучения. Гарантируем масштабируемость, безопасность и соблюдение отраслевых стандартов и SLA.',
        secondPart: 'Нас выбрали более 250 компаний, в их числе: ПАО «Газпром», АО «Мосгаз», АО «Мосводоканал», ГУП «Мосводосток», девелоперы и строительные холдинги. Наш программный продукт гарантировано повысит эффективность проектной деятельности.'
   }
}
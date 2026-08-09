import type { Meta, StoryObj } from '@storybook/react'
import { DownloadBlock } from '.';

const meta: Meta<typeof DownloadBlock> = {
    component: DownloadBlock,
}

export default meta;

type Story = StoryObj<typeof DownloadBlock>;

export const Default: Story= {
    args: {
        title: 'ЗАГРУЗКА ПРОДУКТА',
        subtitle: 'Версия 2.4.0',
        description: 'Актуальная стабильная версия для Windows 10/11.',
        btnTitle: 'СКАЧАТЬ ХХХ'
    }
}
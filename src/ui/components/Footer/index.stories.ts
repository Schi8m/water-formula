import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
    component: Footer,
}

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story= {
    args: {
        copyright: "© 2026 формула воды\n[ ВСЕ ПРАВА ЗАЩИЩЕНЫ ]\nENGINEERING SOFTWARE CORE V4.2"
    }
}
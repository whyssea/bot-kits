import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './calendar';

const meta = {
  title: 'UI/inputs/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

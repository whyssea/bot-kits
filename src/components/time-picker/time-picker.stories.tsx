import type { Meta, StoryObj } from '@storybook/react';
import TimePickerInput from './time-picker';

const meta = {
  title: 'UI/TimePicker',
  component: TimePickerInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimePickerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
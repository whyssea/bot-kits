import type { Meta, StoryObj } from '@storybook/react';
import BotTemplateElement from './bot-template-element';
import Beauty from '../../../ui/icons/others/bot-templates/beauty';

const meta = {
  title: 'components/BotTemplateElement',
  component: BotTemplateElement,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BotTemplateElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Beauty size="desktop" />,
    text: 'My bot',
  },
};

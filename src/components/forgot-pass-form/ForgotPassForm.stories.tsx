import React from 'react';
import { Meta, Story } from '@storybook/react';
import ForgotPassForm, { ForgotPassFormProps } from './ForgotPassForm';

export default {
  title: 'UI/ForgotPassForm',
  component: ForgotPassForm,
} as Meta<ForgotPassFormProps>;

const Template: Story<ForgotPassFormProps> = (args) => <ForgotPassForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleForgotPass: () => {},
  windowWidth: 1440,
};

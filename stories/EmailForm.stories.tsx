import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { EmailForm } from '../src';

const meta: Meta = {
  title: 'Email-Form',
  component: EmailForm,
  argTypes: {
    children: {
      control: {
        isPressed: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Button: Story = (args) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <EmailForm
      isName={true}
      isEmail={true}
      isMessage={true}
      namePlaceholder="Insert your name"
      emailPlaceholder="Insert your email"
      messagePlaceholder="Insert your message"
      isBorder={true}
      borderRadius="10px"
      leftRightPadding="12px"
      topBottomPadding="20px"
      gap="20px"
      submitButtonGap="30px"
      inputHeight="20px"
      textAreaHeight="200px"
      submitButtonInputComponent={<div>x</div>}
      submitButtonAlignSide="right"
      your_service_id="service_n4iyfx2"
      your_template_id="template_f698z1l"
      your_user_id="qRe2HEfUlaZpOwGCy"
    />
  );
};

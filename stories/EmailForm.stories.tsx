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

const submitButton = (
  <div
    style={{
      width: '100px',
      height: '30px',
      backgroundColor: 'blue',
      color: 'white',
    }}
  >
    Send
  </div>
);

const addFileButton = (
  <div
    style={{
      width: '100px',
      height: '30px',
      backgroundColor: 'red',
      color: 'white',
      position: 'absolute',
      bottom: '25px',
      right: '50px',
    }}
  >
    Add File
  </div>
);

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
      submitButton={submitButton}
      addFileButton={addFileButton}
      submitButtonAlignSide="right"
      your_service_id="service_n4iyfx2"
      your_template_id="template_f698z1l"
      your_user_id="qRe2HEfUlaZpOwGCy"
      messageSendSuccessfully="Send Successfully"
      messageFillAllFields="Fill all field"
      messageUnnexpectedSendIssue="Something happened, please try later"
    />
  );
};

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { checkValidation } from './validation';
import {
  Wrapper,
  Input,
  TextArea,
  SubmitButtonWrapper,
  SubmitButton,
  ErrorMessageWrapper,
  SuccessMessageWrapper,
  AddFileInput,
  AddFileButton,
  AddFileButtonWrapper,
} from './EmailForm.styles';

type EmailFormProps = {
  isName: boolean;
  isEmail: boolean;
  isMessage: boolean;

  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;

  font?: string;
  isBorder: boolean;
  borderSize?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  borderRadius?: string;
  leftRightPadding?: string;
  topBottomPadding?: string;
  boxShadow?: string;
  gap: string;
  submitButtonGap: string;

  inputHeight: string;
  textAreaHeight: string;

  submitButton: React.ReactNode;
  submitButtonAlignSide: 'left' | 'right';
  addFileButton?: React.ReactNode;

  your_service_id: string;
  your_template_id: string;
  your_user_id: string;

  messageSendSuccessfully: string;
  messageFillAllFields: string;
  messageUnnexpectedSendIssue: string;
};

export const EmailForm = ({
  isName,
  isEmail,
  isMessage,
  font,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  isBorder,
  borderSize,
  borderColor,
  backgroundColor,
  fontColor,
  gap,
  boxShadow,
  borderRadius,
  inputHeight,
  textAreaHeight,
  submitButton,
  submitButtonGap,
  submitButtonAlignSide,
  addFileButton,
  topBottomPadding,
  leftRightPadding,
  your_service_id,
  your_template_id,
  your_user_id,
  messageSendSuccessfully,
  messageFillAllFields,
  messageUnnexpectedSendIssue,
}: EmailFormProps) => {
  const form = useRef();
  const inputFile = useRef<any>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [idDisabledButton, setIsDisabledButton] = useState(false);
  const [file, setFile] = useState('');

  const addFile = () => {
    inputFile.current!.click();
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setIsDisabledButton(true);

    const validation = checkValidation({
      isName,
      isEmail,
      isMessage,
      name,
      email,
      message,
    });

    console.log('file', typeof file);

    var data = file && file.match(/base64,(.+)$/);

    if (!validation) {
      setSubmitMessage(messageFillAllFields);
      setIsError(true);
      return;
    }

    var templateParams = {
      name: name,
      email: email,
      message: message,
      image: file,
      attachment: [
        {
          data: file,
          encoded: true,
          name: 'file.png',
          type: 'image/png',
        },
      ],
    };

    emailjs
      .send(your_service_id, your_template_id, templateParams, your_user_id)
      .then(
        (result: any) => {
          console.log(result.text);
          setIsSuccess(true);
          setSubmitMessage(messageSendSuccessfully);
        },
        (error: any) => {
          setIsError(true);
          setSubmitMessage(messageUnnexpectedSendIssue);
          console.log(error.text);
        }
      );
  };

  const removeValidationError = () => {
    if (isError) {
      setIsError(false);
      setIsDisabledButton(false);
    }
  };

  return (
    <Wrapper
      enctype="multipart/form-data"
      encType="multipart/form-data"
      ref={form}
      font={font}
      fontColor={fontColor}
    >
      {isName && (
        <Input
          name="name"
          placeholder={namePlaceholder}
          value={name}
          onChange={(e: any) => {
            setName(e.target.value);
            removeValidationError();
          }}
          isBorder={isBorder}
          borderSize={borderSize}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          height={inputHeight}
          topBottomPadding={topBottomPadding}
          leftRightPadding={leftRightPadding}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
          gap={gap}
        />
      )}

      {isEmail && (
        <Input
          name="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
            removeValidationError();
          }}
          isBorder={isBorder}
          borderSize={borderSize}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          height={inputHeight}
          topBottomPadding={topBottomPadding}
          leftRightPadding={leftRightPadding}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
          gap={gap}
        />
      )}

      {isMessage && (
        <TextArea
          name="message"
          placeholder={messagePlaceholder}
          value={message}
          onChange={(e: any) => {
            setMessage(e.target.value);
            removeValidationError();
          }}
          isBorder={isBorder}
          borderSize={borderSize}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          height={textAreaHeight}
          topBottomPadding={topBottomPadding}
          leftRightPadding={leftRightPadding}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
        />
      )}

      {addFileButton && (
        <>
          <AddFileInput
            name="my_file"
            type="file"
            ref={inputFile}
            onChange={(event: any) => setFile(event.target.value)}
          />
          <AddFileButtonWrapper>
            <AddFileButton onClick={addFile}>{addFileButton}</AddFileButton>
          </AddFileButtonWrapper>
        </>
      )}

      {isError && <ErrorMessageWrapper>{submitMessage}</ErrorMessageWrapper>}

      {isSuccess && (
        <SuccessMessageWrapper>{submitMessage}</SuccessMessageWrapper>
      )}

      <SubmitButtonWrapper submitButtonAlignSide={submitButtonAlignSide}>
        <SubmitButton
          submitButtonGap={submitButtonGap}
          onClick={sendEmail}
          disabled={idDisabledButton}
        >
          {submitButton}
        </SubmitButton>
      </SubmitButtonWrapper>
    </Wrapper>
  );
};

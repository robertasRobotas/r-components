import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import emailjs from '@emailjs/browser';

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

  submitButtonInputComponent: React.ReactNode;
  submitButtonAlignSide: 'left' | 'right';
  addFileButton?: React.ReactNode;

  your_service_id: string;
  your_template_id: string;
  your_user_id: string;
};

const Wrapper = styled.form<any>`
  margin: 0;
  width: 100%;
  font: ${(props) => props.font};
  fontcolor: ${(props) => props.fontColor};
`;

const Input = styled.input<any>`
  width: 100%;
  box-sizing: border-box;
  ${(props) =>
    props.isBorder &&
    css`
      border: ${props.borderSize ? props.borderSize : '1px'} solid
        ${props.borderColor ? props.borderColor : 'black'};
    `}
  background: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.topBottomPadding};
  padding-bottom: ${(props) => props.topBottomPadding};
  padding-left: ${(props) => props.leftRightPadding};
  padding-right: ${(props) => props.leftRightPadding};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  margin-bottom: ${(props) => props.gap};
`;

const TextArea = styled.textarea<any>`
  width: 100%;
  box-sizing: border-box;
  resize: none;
  ${(props) =>
    props.isBorder &&
    css`
      border: ${props.borderSize ? props.borderSize : '1px'} solid
        ${props.borderColor ? props.borderColor : 'black'};
    `}
  background: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.topBottomPadding};
  padding-bottom: ${(props) => props.topBottomPadding};
  padding-left: ${(props) => props.leftRightPadding};
  padding-right: ${(props) => props.leftRightPadding};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
`;

const SubmitButton = styled.button<any>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: ${(props) => props.submitButtonGap};
`;

const SubmitButtonWrapper = styled.div<any>`
  ${(props) =>
    props.submitButtonAlignSide === 'right' &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;

const ErrorMessage = styled.div<any>``;

const SuccessMessage = styled.div<any>``;

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
  submitButtonInputComponent,
  submitButtonGap,
  submitButtonAlignSide,
  addFileButton,
  topBottomPadding,
  leftRightPadding,
  your_service_id,
  your_template_id,
  your_user_id,
}: EmailFormProps) => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const addFile = () => {
    console.log('add file');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(your_service_id, your_template_id, form.current!, your_user_id)
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper ref={form} font={font} fontColor={fontColor}>
      {isName && (
        <Input
          placeholder={namePlaceholder}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
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
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
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
          placeholder={messagePlaceholder}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
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

      {addFileButton && <div onClick={addFile}>{addFileButton}</div>}

      <SubmitButtonWrapper submitButtonAlignSide={submitButtonAlignSide}>
        <SubmitButton
          submitButtonGap={submitButtonGap}
          onClick={sendEmail}
          //   type="submit"
          //   value="Send"
        >
          {submitButtonInputComponent}
        </SubmitButton>
      </SubmitButtonWrapper>
    </Wrapper>
  );
};

import styled, { css } from 'styled-components';

export const Wrapper = styled.form<any>`
  margin: 0;
  width: 100%;
  font: ${(props) => props.font};
  fontcolor: ${(props) => props.fontColor};
`;

export const Input = styled.input<any>`
  width: 100%;
  box-sizing: border-box;
  border: none;
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

export const TextArea = styled.textarea<any>`
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border: none;
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

export const SubmitButton = styled.button<any>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-top: ${(props) => props.submitButtonGap};
`;

export const SubmitButtonWrapper = styled.div<any>`
  ${(props) =>
    props.submitButtonAlignSide === 'right' &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;

export const ErrorMessageWrapper = styled.div<any>`
  color: #941a12;
  margin-top: 10px;
  letter-spacing: 1px;
`;

export const SuccessMessageWrapper = styled.div<any>`
  color: #12942c;
  margin-top: 10px;
  letter-spacing: 1px;
`;

export const AddFileInput = styled.input<any>`
  display: none;
`;

export const AddFileButton = styled.div<any>`
  cursor: pointer;
`;

export const AddFileButtonWrapper = styled.div<any>`
  position: relative;
`;

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Arrow } from '../assets/arrow';

export const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  padding-left: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-bottom: 1px solid ${(props) => props.mainColor};
  color: ${(props) => props.mainColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  letter-spacing: 2px;
  cursor: pointer;
  ${(props) => props.isHover && css<any>``}
`;

export const IconWrapper = styled.div<any>`
  transition: 0.3s;
  display: flex;
  position: relative;
  left: 10px;
  ${(props) =>
    props.isHover &&
    css`
      left: 16px;
    `}
`;

type UnderlinedButtonProps = {
  onClick?: () => void;
  mainColor: string;
  invertedColor: string;
  fontSize: string;
  content: string;
  width: string;
  height: string;
  isHover?: boolean;
};

export const UnderlinedButton = ({
  mainColor,
  invertedColor,
  fontSize,
  content,
  width,
  height,
  isHover,
  onClick,
}: UnderlinedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => !isHover && setIsHovered(true)}
      onMouseLeave={() => !isHover && setIsHovered(false)}
      height={height}
      width={width}
      mainColor={mainColor}
      fontSize={fontSize}
      invertedColor={invertedColor}
      content={content}
      isHover={isHover || isHovered}
    >
      {content}
      <IconWrapper isHover={isHover || isHovered}>
        <Arrow color={mainColor} />
      </IconWrapper>
    </Wrapper>
  );
};

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Arrow } from '../assets/arrow';

export const Wrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${(props) => props.mainColor};
  color: ${(props) => props.mainColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};

  ${(props) =>
    props.isHover &&
    css<any>`
      background-color: ${(props) => props.mainColor};
      color: white;
    `}
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

type ReviewCardsProps = {
  mainColor: string;
  invertedColor: string;
  fontSize: string;
  content: string;
  width: string;
  height: string;
  isHover?: boolean;
};

export const EnterButton = ({
  mainColor,
  invertedColor,
  fontSize,
  content,
  width,
  height,
  isHover,
}: ReviewCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
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
        <Arrow color={isHovered || isHover ? 'white' : mainColor} />
      </IconWrapper>
    </Wrapper>
  );
};

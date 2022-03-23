import React from 'react';
import styled, { css } from 'styled-components';

type MenuButtonProps = {
  isPressed: boolean;
  onClick: () => void;
  left?: string;
  bottom?: string;
  right?: string;
  top?: string;
  maxDisplaySize?: string;
  transitionDuration?: string;
  color?: string;
};

const Hamburger = styled.div<any>`
  display: none;

  ${(props) =>
    !props.maxDisplaySize &&
    css`
      display: block;
      height: 26px;
      width: 32px;
      position: absolute;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    `}

  ${(props) =>
    props.maxDisplaySize &&
    css`
      @media (max-width: ${props.maxDisplaySize}) {
        display: block;
        height: 26px;
        width: 32px;
        position: absolute;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}

  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}

      ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}

        ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}
`;

const Line1 = styled.div<any>`
  transition: ${(props) =>
    props.transitionDuration
      ? props.transitionDuration
      : 'transform 0.3s ease-in-out'};
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : '#0e2431')};
  transform-origin: 0% 0%;

  ${(props) =>
    props.isPressed &&
    css`
      transform: rotate(45deg);
    `}
`;

const Line2 = styled.div<any>`
  transition: ${(props) =>
    props.transitionDuration
      ? props.transitionDuration
      : 'transform 0.3s ease-in-out'};
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : '#0e2431')};

  ${(props) =>
    props.isPressed &&
    css`
      transform: scaleY(0);
    `}
`;

const Line3 = styled.div<any>`
  transition: ${(props) =>
    props.transitionDuration
      ? props.transitionDuration
      : 'transform 0.3s ease-in-out'};
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : '#0e2431')};
  transform-origin: 0% 100%;

  ${(props) =>
    props.isPressed &&
    css`
      transform: rotate(-45deg);
    `}
`;

export const MenuButton = ({
  color,
  left,
  right,
  top,
  bottom,
  isPressed,
  maxDisplaySize,
  transitionDuration,
  onClick,
}: MenuButtonProps) => {
  console.log(isPressed);
  return (
    <Hamburger
      onClick={onClick}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      maxDisplaySize={maxDisplaySize}
    >
      <Line1
        isPressed={isPressed}
        transitionDuration={transitionDuration}
        color={color}
      />
      <Line2
        isPressed={isPressed}
        transitionDuration={transitionDuration}
        color={color}
      />
      <Line3
        isPressed={isPressed}
        transitionDuration={transitionDuration}
        color={color}
      />
    </Hamburger>
  );
};

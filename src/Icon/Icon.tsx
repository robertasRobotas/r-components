import React from 'react';
import styled from 'styled-components';

const Image = styled.img<any>`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

type IconProps = {
  width?: string;
  height?: string;
  alt?: string;
  imgSrc: string;
};

export const Icon = ({ width, height, alt, imgSrc }: IconProps) => {
  return <Image width={width} height={height} alt={alt} src={imgSrc} />;
};

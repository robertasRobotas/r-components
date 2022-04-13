import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 2fr;
  gap: 12px;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    grid-template-columns: 1fr 1fr 2fr;
  }
`;

export const Photo = styled.div<any>`
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: none;
  }
`;

type FooterProps = {
  photoArray: Array<any>;
  mobileVersionMaxWidth?: string;
};

export const PhotoLine = ({
  photoArray,
  mobileVersionMaxWidth,
}: FooterProps) => {
  return (
    <Wrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
      <Photo photoUrl={photoArray[0]} />
      <Photo photoUrl={photoArray[1]} />
      <Photo photoUrl={photoArray[2]} />
      <Photo
        photoUrl={photoArray[3]}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
      <Photo
        photoUrl={photoArray[4]}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
      <Photo
        photoUrl={photoArray[5]}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
    </Wrapper>
  );
};

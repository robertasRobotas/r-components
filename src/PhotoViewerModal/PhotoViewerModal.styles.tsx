import styled, { css } from 'styled-components';

export const ModalBackground = styled.div<any>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.backgroundColor
      ? `${props.backgroundColor}`
      : `rgba(75, 75, 75, 0.95)`};
  z-index: 10000;
`;

export const Image = styled.img<any>`
  max-height: 70vh;
  max-width: 60vw;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) =>
    props.isFooterPhotos &&
    css`
      max-height: 60vh;
      top: 40%;
    `}

  @media (max-height: 650px) {
    max-height: 50vh;
  }
`;

export const LeftArrow = styled.div<any>`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: rotate(180deg);
  z-index: 1;
  cursor: pointer;

  ${(props) =>
    props.isFooterPhotos &&
    css`
      top: 40%;
    `}
`;

export const RightArrow = styled.div<any>`
  position: absolute;
  top: 50%;
  right: 8%;
  z-index: 1;
  cursor: pointer;

  ${(props) =>
    props.isFooterPhotos &&
    css`
      top: 40%;
    `}
`;

export const ScrollWrapper = styled.div<any>`
  position: absolute;
  bottom: 80px;

  @media (max-height: 800px) {
    bottom: 30px;
  }
`;

export const FooterPhotoElementsWrapper = styled.div<any>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  padding-left: 30px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 650px) {
    height: 100px;
  }
`;

export const FooterPhotoElement = styled.div<any>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-right: 50px;
  display: inline-block;
  cursor: pointer;
  background-image: ${(props: any) => `url(${props.photoSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-height: 650px) {
    height: 100px;
  }
`;

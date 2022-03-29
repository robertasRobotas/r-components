import React, { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled, { css } from 'styled-components';
import { MenuButton } from '../../src/';

const ModalBackground = styled.div<any>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.backgroundColor
      ? `${props.backgroundColor}${props.backgroundOpacityPercentage}`
      : `#6e6e6e${props.backgroundOpacityPercentage}`};
`;

const Image = styled.img<any>`
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

const LeftArrow = styled.div<any>`
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

const RightArrow = styled.div<any>`
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

const ScrollWrapper = styled.div<any>`
  position: absolute;
  bottom: 80px;

  @media (max-height: 800px) {
    bottom: 30px;
  }
`;

const FooterPhotoElementsWrapper = styled.div<any>`
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

const FooterPhotoElement = styled.div<any>`
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

type PhotoViewerProps = {
  currentPhotoSrc: String;
  photoSrcArray: Array<String>;
  onClose: () => void;
  isOpen: boolean;

  verticallySymetricArrowRight?: React.ReactNode;
  customSpinner?: React.ReactNode;

  isFooterPhotos?: boolean;
  footerPhotoWidth?: number;
  footerPhotoHeight?: number;

  backgroundOpacityPercentage?: number;
  closeIconColor?: string;
};

export const PhotoViewerModal = ({
  isOpen,
  isFooterPhotos,
  footerPhotoWidth = 150,
  footerPhotoHeight = 150,
  photoSrcArray,
  currentPhotoSrc,
  closeIconColor,
  verticallySymetricArrowRight,
  backgroundOpacityPercentage = 40,
  onClose,
}: PhotoViewerProps) => {
  const [currentPhotoId, setCurrentPhotoId] = useState<any>(false);

  useEffect(() => {
    const clickedPhotoId = photoSrcArray.findIndex(
      (src) => src === currentPhotoSrc
    );
    setCurrentPhotoId(clickedPhotoId);
  }, []);

  const onRightArrowClick = () => {
    if (currentPhotoId >= photoSrcArray.length - 1) {
      setCurrentPhotoId(0);
    } else {
      setCurrentPhotoId(currentPhotoId + 1);
    }
  };

  const onLeftArrowClick = () => {
    if (currentPhotoId <= 0) {
      setCurrentPhotoId(photoSrcArray.length - 1);
    } else {
      setCurrentPhotoId(currentPhotoId - 1);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalBackground
          backgroundOpacityPercentage={backgroundOpacityPercentage}
        >
          <MenuButton
            isPressed={true}
            onClick={onClose}
            right="6vw"
            top="6vh"
            color={closeIconColor}
          />
          <LeftArrow onClick={onLeftArrowClick} isFooterPhotos={isFooterPhotos}>
            {verticallySymetricArrowRight}
          </LeftArrow>
          <Image
            src={photoSrcArray[currentPhotoId]}
            isFooterPhotos={isFooterPhotos}
          />
          <RightArrow
            onClick={onRightArrowClick}
            isFooterPhotos={isFooterPhotos}
          >
            {verticallySymetricArrowRight}
          </RightArrow>
          {isFooterPhotos && (
            <ScrollWrapper className="scroll-component-Wrapper">
              <ScrollContainer
                horizontal={true}
                style={{ overflowX: 'scroll', width: '100vw' }}
                className="scroll"
              >
                <FooterPhotoElementsWrapper
                  height={footerPhotoHeight}
                  width={(footerPhotoWidth + 50) * photoSrcArray.length}
                >
                  {photoSrcArray.map((src, index) => (
                    <FooterPhotoElement
                      photoSrc={src}
                      onClick={() => setCurrentPhotoId(index)}
                      width={footerPhotoWidth}
                      height={footerPhotoHeight}
                    />
                  ))}
                </FooterPhotoElementsWrapper>
              </ScrollContainer>
            </ScrollWrapper>
          )}
        </ModalBackground>
      )}
    </>
  );
};

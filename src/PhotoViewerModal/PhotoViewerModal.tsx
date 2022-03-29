import React, { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { MenuButton } from '../../src/';
import {
  ModalBackground,
  Image,
  LeftArrow,
  RightArrow,
  ScrollWrapper,
  FooterPhotoElementsWrapper,
  FooterPhotoElement,
} from './PhotoViewerModal.styles';

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

  backgroundColor?: string;
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
  backgroundColor,
  onClose,
}: PhotoViewerProps) => {
  const [currentPhotoId, setCurrentPhotoId] = useState<any>(false);

  useEffect(() => {
    if (isOpen) {
      const clickedPhotoId = photoSrcArray.findIndex(
        (src) => src === currentPhotoSrc
      );
      setCurrentPhotoId(clickedPhotoId);
    }
  }, [isOpen]);

  const onRightArrowClick = (e: any) => {
    e.stopPropagation();

    if (currentPhotoId >= photoSrcArray.length - 1) {
      setCurrentPhotoId(0);
    } else {
      setCurrentPhotoId(currentPhotoId + 1);
    }
  };

  const onLeftArrowClick = (e: any) => {
    e.stopPropagation();

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
          onClick={() => onClose()}
          backgroundColor={backgroundColor}
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
                      key={index}
                      photoSrc={src}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        setCurrentPhotoId(index);
                      }}
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

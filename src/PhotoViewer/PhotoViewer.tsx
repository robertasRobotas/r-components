import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.button<any>`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.div<any>``;

const LeftArrow = styled.div<any>``;

const RightArrow = styled.div<any>``;

const FooterViewer = styled.div<any>``;

type PhotoViewerProps = {
  currentPhotoSrc: String;
  photoSrcArray: Array<String>;
  onClose: () => void;
  isOpen: boolean;

  verticallySymetricArrow?: React.ReactNode;
  customSpinner?: React.ReactNode;

  isFooterPhotos?: boolean;
  footerPhotoWidth?: string;
  footerPhotoHeight?: string;

  backgroundOpacity?: number;
  closeIconColor?: string;
};

export const PhotoViewer = ({
  photoSrcArray,
  currentPhotoSrc,
}: PhotoViewerProps) => {
  console.log(photoSrcArray);
  console.log(currentPhotoSrc);

  return (
    <ModalBackground>
      <LeftArrow />
      <Image />
      <RightArrow />
      <FooterViewer />
    </ModalBackground>
  );
};

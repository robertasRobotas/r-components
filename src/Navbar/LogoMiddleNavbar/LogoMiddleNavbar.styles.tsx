import styled, { css } from 'styled-components';

export const Wrapper = styled.div<any>`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
`;

export const ContentWrapper = styled.div<any>`
  min-width: ${(props) => props.minWebsiteWidth};
  position: relative;
  margin: auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  height: 100px;
  padding-left: 30px;
  padding-right: 30px;

  box-sizing: border-box;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;

    transition: 0.4s;

    ${(props) =>
      props.isMobileNavbarOpen &&
      css`
        height: 100vh;
      `}
  }
`;

export const LinksWrapper = styled.div<any>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
  height: 100%;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    position: relative;
    top: 150px;
    text-align: center;
    width: 100%;
    justify-content: center;
    gap: 45px;
    height: auto;
    box-sizing: border-box;

    display: grid;
    visibility: hidden;
    opacity: 0;

    ${(props) =>
      props.isMobileNavbarOpen &&
      css`
        transition: 0.5s;

        visibility: visible;
        opacity: 1;
      `}
  }
`;

export const Link = styled.a<any>`
  text-decoration: none;
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
`;

export const DesktopLogoWrapper = styled.a<any>`
  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: none;
  }
`;

export const Logo = styled.img<any>`
  width: ${(props) => (props.logoWidth ? `${props.logoWidth}px` : '250px')};

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    width: ${(props) =>
      props.logoWidth ? `${props.logoWidth * 0.7}px` : '250px'};

    position: absolute;
    top: 25px;
  }
`;

export const MobileLogoWrapper = styled.a<any>`
  display: none;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: inline-block;
  }
`;

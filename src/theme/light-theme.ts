import { DefaultTheme } from 'styled-components';
import { size } from './breakpoints';

export const lightTheme: DefaultTheme = {
  fontFamily: `'Roboto', 'Arial', sans-serif`,
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#EFEFEF',
    },
    text: {
      primary: '#333333',
      secondary: 'rgb(115, 138, 148)',
    },
    red: '#FF6767',
    blue: '#708DF3',
  },
  fontSize: {
    heading: {
      small: '20px',
      regular: '24px',
      large: '32px',
    },
    text: {
      extraSmall: '10px',
      small: '12px',
      regular: '14px',
      large: '16px',
      extraLarge: '18px',
    },
  },
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
  device: {
    mobileS: `only screen and (max-width: ${size.mobile - 1}px)`,
    mobile: `only screen and (max-width: ${size.tablet - 1}px)`,
    tablet: `only screen and (min-width: ${size.tablet}px)`,
    tabletOnly: `only screen and (min-width: ${
      size.tablet
    }px) and (max-width: ${size.laptop - 1}px)`,
    laptop: `only screen and (min-width: ${size.laptop}px)`,
    laptopOnly: `only screen and (min-width: ${
      size.laptop
    }px) and (max-width: ${size.desktop - 1}px)`,
    desktop: `only screen and (min-width: ${size.desktop}px)`,
  },
  hoverOpacity: '0.85',
  letterSpacing: '1px',
};

export const getColor = (color) => {
  switch (color) {
    case 'white':
      return theme.colors.white;
    case 'primary':
      return theme.colors.primary;
    case 'light-blue':
      return theme.colors.lightBlue;
    case 'pink':
      return theme.colors.pink;
    case 'yellow':
      return theme.colors.yellow;
    case 'grey':
      return theme.colors.grey;
    default:
      return '#ffffff';
  }
};

export const theme = {
  layout: {
    desktopWidth: '80%',
    mobileWidth: '95%',
    mainContentPadding: 24,
  },
  header: {
    height: 56,
  },
  mediaQueries: {
    mobileBreakpoint: '48rem',
    mobilePixel: 768,
    smallMobilePixel: 320,
    desktopPixel: 1024,
    footerMinWidth: '50rem',
  },
  colors: {
    white: '#FFFFFF',
    primary: '#7EFBFA',
    lightBlue: '#95CFF5',
    pink: '#DA3DB0',
    yellow: '#F4AC3C',
    grey: '#879BA8',
    border: '#ECEBEC',
    purple: '#240b2f',
    purpleKDX: '#471155',
  },
  fontFamily: {
    regular: 'montserrat-regular',
    italic: 'montserrat-italic',
    bold: 'montserrat-bold',
    boldItalic: 'montserrat-bold-italic',
    syncopate: 'syncopate-bold',
    basier: 'basier-square-mono-regular',
  },
  inputTokenWidth: 78,
  inputSelectButtonWidth: 81,
  buttonBackgroundGradient: 'transparent',
};

export default theme;

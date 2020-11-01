export default {
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Germania One", cursive',
    symbol: '"M PLUS Rounded 1c", sans-serif'
  },
  fontSizes: {
        'tiny': '1.75vmin',
        'small': '2vmin',
        'medium': '3vmin',
        'large': '6vmin',
        'huge': '8vmin',
        'colossal': '12vmin',
    },
  fontWeights: {
  body: 400,
  heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    history:1.25
  },
  letterSpacings: {
    body: 1,
    heading: 1.5,
  },
  colors: {
    text: '#3D2642',
    muted: '#aaaaaa',
    background: '#f9f4f2',
    foreground: '#ffffff',
    primary: '#54345B',
    secondary: '#F58B00',
    tertiary: '#96749E',
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
  buttons: {
    primary: {
      bg: 'primary',
      cursor: 'pointer'
    },
    tertiary: {
      bg: 'darkgreen',
      color: 'primary',
      border: '3px solid',
      borderColor: 'lightgreen',
      cursor: 'pointer'
    },
    nope: {
      bg: 'transparent',
      color: 'muted',
      border: '3px solid',
      borderColor: 'tertiary',
      cursor: 'not-allowed'
    },
    outline: {
      bg: 'transparent',
      color: 'darkgreen',
      border: '3px solid',
      borderColor: 'darkgreen',
      cursor: 'pointer'
    },
    invisible: {
      bg: 'transparent',
      color: 'darkgreen',
      border: '0px solid',
      cursor: 'pointer'
    },
  },
};

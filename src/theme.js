import { createMuiTheme } from '@material-ui/core/styles';

const gamsOrange =  '#F39655';
const gamsPetroleumBlue = '#03506B';
const gamsDarkBlue =  '#043F54';

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "lgxl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      lgxl: 1600,
    }
  },
  palette: {
    common: {
      gamsOrange: `${gamsOrange}`,
      gamsPetroleumBlue: `${gamsPetroleumBlue}`,
      gamsDarkBlue: `${gamsDarkBlue}`,
      bgAuth: '#F6F8FB',
      blue: {
        500: '#5F99C0',
        600: '#3F7AA2'
      },
      orange: {
        300: '#FFBC8E',
        400: '#F9AC65',
        500: '#E9B384',
        600: '#F28A42'
      },
      yellow: {
        400: '#FEFE8D',
        500: '#FBFA73'
      }
    },
    primary: {
        main:gamsOrange
    }
  }
});

export default theme;

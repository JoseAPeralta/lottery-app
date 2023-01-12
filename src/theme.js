import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    primary: {
      500: '#263679',
    },
    secondary: {
      500: '#263679',
    },
  },
});

export default theme;

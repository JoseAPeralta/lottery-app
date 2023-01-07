import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
  red: {
    900: '#1a365d',
    800: 'blue',
    700: '#2a69ac',
  },
}
})


export default theme
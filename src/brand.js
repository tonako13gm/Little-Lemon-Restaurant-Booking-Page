import { extendTheme } from "@chakra-ui/react"
import '@fontsource-variable/markazi-text';
import '@fontsource-variable/karla';

const theme = extendTheme({
    colors: {
      brand: {
        green: "#495E57",
        yellow: "#F4CE14",
        light: "#EDEFEE",
        dark: "#333333",
      },
    },
    fonts: {
        heading: `'Markazi Text Variable', sans-serif`,
        body: `'karla', sans-serif`,
    },
    fontSizes: {
        xl: '4rem',
        lg: '2.5rem',
        md: '1.125rem',
        sm: '1rem'
    },
  })

  export default theme
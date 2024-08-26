import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    background: 'brand.green',
    color: 'brand.light',
    _hover: {
        transform: "scale(1.05, 1.05)",
        bg: `brand.yellow`,
        color: 'brand.dark'
    },
    _active: {
        bg: `brand.green`,
        transform: "scale(1, 1)",
    },
  },
)

const brandSecondary = defineStyle({
    background: 'brand.yellow',
    color: 'brand.dark',
    _hover: {
        transform: "scale(1.05, 1.05)",
        bg: `brand.green`,
        color: 'brand.light'
    },
    _active: {
        bg: `brand.yellow`,
        transform: "scale(1, 1)",
    },
  },
)

  export const buttonTheme = defineStyleConfig({
    variants: { brandPrimary, brandSecondary },
  })

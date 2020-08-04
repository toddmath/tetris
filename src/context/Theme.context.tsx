import React from "react"
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core"
import theme from "style/theme"

export default function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

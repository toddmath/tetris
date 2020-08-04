import React from "react"
import { IconButton, useColorMode } from "@chakra-ui/core"
import styled from "@emotion/styled"

const ThemeButton = styled(IconButton)`
  & > svg {
    width: 1.4em;
    height: 1.4em;
  }
`

export function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ThemeButton
      icon={colorMode === "light" ? "sun" : "moon"}
      onClick={toggleColorMode}
      size='lg'
      variant='ghost'
      transition='all 250ms ease'
      // justifySelf='end'
      position='absolute'
      right='1rem'
      aria-label={
        colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    />
  )
}

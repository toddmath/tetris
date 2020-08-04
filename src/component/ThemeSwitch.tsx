import React from "react"
import { Stack, Switch, Icon, useColorMode } from "@chakra-ui/core"

export function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack align='center' justify='center' isInline spacing={2}>
      <Icon name='sun' size='5' />
      <Switch isChecked={colorMode === "light"} onChange={toggleColorMode} h={5} />
    </Stack>
  )
}

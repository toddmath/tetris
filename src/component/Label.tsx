import React from "react"
import { Text } from "@chakra-ui/core"

export function Label({ children }: React.PropsWithChildren<{}>) {
  return (
    <Text textAlign='left' display='inline' fontWeight='bold'>
      {children}
    </Text>
  )
}

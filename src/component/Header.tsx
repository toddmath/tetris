import React, { ReactElement } from "react"
import { Box } from "@chakra-ui/core"

interface Props {
  children?: React.ReactNode
}

export default function Header({ children }: Props): ReactElement {
  return (
    <Box m={0} px={4} py={4}>
      {children}
    </Box>
  )
}

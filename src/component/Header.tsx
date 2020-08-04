import React, { ReactElement } from "react"
import { Flex } from "@chakra-ui/core"

interface Props {
  children?: React.ReactNode
}

export default function Header({ children }: Props): ReactElement {
  return (
    <Flex m={0} px={4} py={4} mb={6} position='relative' justifyContent='center'>
      {children}
    </Flex>
  )
}

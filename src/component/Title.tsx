import React, { ReactElement } from "react"
import { Heading } from "@chakra-ui/core"

export default function Title(): ReactElement {
  return (
    <Heading as='h1' size='2xl' textAlign='center' lineHeight='1'>
      Tetris
    </Heading>
  )
}

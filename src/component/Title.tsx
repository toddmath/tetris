import React, { ReactElement } from "react"
import { Heading } from "@chakra-ui/core"

export default function Title(): ReactElement {
  return (
    <Heading as='h1' mb={6} size='2xl' textAlign='center' width='100%'>
      Tetris
    </Heading>
  )
}

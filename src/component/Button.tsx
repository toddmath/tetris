import React from "react"
import { Button as Btn } from "@chakra-ui/core"

interface Props {
  highlight: boolean
  onClick?: (...args: any[]) => void
}

export function Button({
  highlight,
  onClick,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Btn
      onClick={onClick}
      gridColumn='1 / span 2'
      variantColor={highlight ? "blue" : "gray"}
    >
      {children}
    </Btn>
  )
}

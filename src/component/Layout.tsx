import React from "react"
import { Grid, useColorMode } from "@chakra-ui/core"

// interface Props {
//   colorMode: "light" | "dark"
// }

type ChildrenProps = React.PropsWithChildren<{}>

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const { colorMode } = useColorMode()

  return (
    <Grid
      aria-label='container'
      p={4}
      borderRadius={8}
      width='fit-content'
      maxWidth={700}
      margin='0 auto'
      boxShadow='0 4px 12px -4px rgba(0,0,5,.05)'
      borderWidth={1}
      borderStyle='solid'
      autoRows='min-content'
      borderColor={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.200"}
      bg={colorMode === "dark" ? "whiteAlpha.100" : "gray.50"}
      overflow='hidden'
      gridGap={4}
      templateColumns='auto auto'
    >
      {children}
    </Grid>
  )
}

export function TightLayout({ children }: ChildrenProps) {
  return (
    <Grid w='260px' alignItems='center' my={10}>
      {children}
    </Grid>
  )
}

export function TwoColumnLayout({ children }: ChildrenProps) {
  return (
    <Grid templateColumns='auto 1fr' columnGap={5}>
      {children}
    </Grid>
  )
}

export function HStack({
  children,
  gap = 2,
}: React.PropsWithChildren<{ gap?: number }>) {
  return (
    <Grid
      gridAutoFlow='column'
      templateRows='1fr'
      alignItems='center'
      width='fit-content'
      gridGap={gap}
    >
      {children}
    </Grid>
  )
}

export function VStack({
  gap = 2,
  justify,
  children,
}: React.PropsWithChildren<{ gap?: number; justify?: string }>) {
  return (
    <Grid
      gridAutoFlow='row'
      templateColumns='1fr'
      autoRows='min-content'
      alignItems='flex-start'
      height='fit-content'
      gridGap={gap}
      justifyContent={justify || "center"}
    >
      {children}
    </Grid>
  )
}

export function PlayField({ children }: React.PropsWithChildren<{}>) {
  const { colorMode } = useColorMode()

  return (
    <Grid
      position='relative'
      width={240}
      height={480}
      bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
    >
      {children}
    </Grid>
  )
}

export function NextField({ children }: React.PropsWithChildren<{}>) {
  return (
    <Grid templateColumns='repeat(4, 16px)' autoRows='16px' gridGap='0px'>
      {children}
    </Grid>
  )
}

export function Layer({ children }: ChildrenProps) {
  return (
    <Grid
      position='absolute'
      top={0}
      left={0}
      templateColumns='repeat(10, 24px)'
      templateRows='repeat(20, 24px)'
      gridGap='0px'
      bg='transparent'
    >
      {children}
    </Grid>
  )
}

export function Stats({ children }: React.PropsWithChildren<{}>) {
  return (
    <Grid textAlign='right' templateColumns='min-content 1fr'>
      {children}
    </Grid>
  )
}

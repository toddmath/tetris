import React from "react"
import { Box, useColorMode } from "@chakra-ui/core"

interface CellProps {
  x: number
  y: number
  color: string
  origin?: Tetromino.Origin
}

export function Cell({ children, x, y, color }: React.PropsWithChildren<CellProps>) {
  return (
    <Box h='100%' w='100%' gridColumn={x + 1} gridRow={y + 1} bg={color}>
      {children}
    </Box>
  )
}

interface PieceProps {
  tetrominos: Tetromino.Config
  x: number
  y: number
  color: string
  origin?: Tetromino.Origin
}

function positiveTetros(tetros: Tetromino.Config, y: number) {
  return tetros.filter(point => y + point.y >= 0)
}

export function Piece({
  tetrominos,
  color,
  origin,
  x,
  y,
}: React.PropsWithChildren<PieceProps>) {
  return (
    <React.Fragment>
      {positiveTetros(tetrominos, y).map((point, i) => (
        <Cell
          key={i}
          origin={origin}
          color={color}
          x={x + point.x}
          y={y + point.y}
        />
      ))}
    </React.Fragment>
  )
}

type GhostProps = Omit<PieceProps, "color">

export function GhostPiece({
  tetrominos,
  x,
  y,
  origin,
}: React.PropsWithChildren<GhostProps>) {
  const { colorMode } = useColorMode()

  return (
    <Piece
      x={x}
      y={y}
      tetrominos={tetrominos}
      origin={origin}
      color={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
    />
  )
}

import React from "react"
import { Icon } from "@chakra-ui/core"

// import { useKeyboardInputs } from "hook"
import { tetrominos, colors } from "machine/tetromino"
import { head } from "util/index"
import { useTetrisState } from "hook/index"
import { Layout, Layer, PlayField, NextField, Stats } from "./Layout"
import { Piece, GhostPiece, Cell } from "./Piece"
import { Label } from "./Label"
import { Button } from "./Button"

export default function Tetris() {
  const state = useTetrisState()

  const startGame = () => state.send("STARTED")
  // const moveLeft = () => state.send("MOVED_LEFT")
  // const moveRight = () => state.send("MOVED_RIGHT")
  // const rotate = () => state.send("ROTATED_CLOCKWISE")
  // const moveDown = () => state.send("STARTED_DROP")
  // const stopDrop = () => state.send("STOPPED_DROP")

  // useKeyboardInputs({
  //   onKeyDown: {
  //     Escape: startGame,
  //     a: moveLeft,
  //     ArrowLeft: moveLeft,
  //     d: moveRight,
  //     ArrowRight: moveRight,
  //     w: rotate,
  //     ArrowUp: rotate,
  //     s: moveDown,
  //     ArrowDown: moveDown,
  //     " ": () => state.send("HARD_DROPPED"),
  //   },
  //   onKeyUp: {
  //     s: stopDrop,
  //     ArrowDown: stopDrop,
  //   },
  // })

  const { falling, ghost, score, level, lines, matrix, next } = state.data

  return (
    <Layout>
      <PlayField>
        <Layer>
          {matrix.slice(-20).map((row, y) =>
            row.map((type, x) => {
              let inc = x
              return (
                <Cell
                  key={(y + ++inc) * 10 * (x + inc)}
                  color={colors[type]}
                  x={x}
                  y={y}
                />
              )
            })
          )}
        </Layer>

        <Layer>
          <Piece
            tetrominos={tetrominos[falling.type][falling.orientation]}
            color={colors[falling.type]}
            x={falling.origin.x}
            y={falling.origin.y - 20}
          />
          <GhostPiece
            tetrominos={tetrominos[ghost.type][ghost.orientation]}
            origin={ghost.origin}
            x={ghost.origin.x}
            y={ghost.origin.y - 20}
          />
        </Layer>
      </PlayField>

      <NextField>
        {next.map((type, i) => (
          <Piece
            key={i}
            tetrominos={head(tetrominos[type])}
            color={colors[type]}
            x={2}
            y={i * 3}
          />
        ))}
      </NextField>

      <Stats>
        <Label>Score</Label> {score}
        <Label>Level</Label> {level}
        <Label>Lines</Label> {lines}
      </Stats>

      <Button highlight={!state.isIn("playing")} onClick={startGame}>
        {state.whenIn({
          playing: "",
          paused: "",
          start: "Play",
          gameover: "Play Again",
        })}
        {state.isIn("playing") || state.isIn("paused") ? (
          <Icon size='8' name={state.isIn("playing") ? "pause" : "play"} />
        ) : null}
      </Button>
    </Layout>
  )
}

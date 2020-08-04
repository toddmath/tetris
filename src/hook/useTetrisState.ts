import { useStateDesigner } from "@state-designer/react"

import game from "machine/game"
import { useKeyboardInputs } from "./useKeyboardInputs"
// import * as Static from "machine/tetromino"
// import { range2d, range, sample, cloneDeep } from "util/index"

export type TetrisState = ReturnType<typeof useTetrisState>

export function useTetrisState() {
  const state = useStateDesigner(game)

  const startGame = () => state.send("STARTED")
  const moveLeft = () => state.send("MOVED_LEFT")
  const moveRight = () => state.send("MOVED_RIGHT")
  const rotate = () => state.send("ROTATED_CLOCKWISE")
  const moveDown = () => state.send("STARTED_DROP")
  const stopDrop = () => state.send("STOPPED_DROP")

  useKeyboardInputs({
    onKeyDown: {
      Escape: startGame,
      a: moveLeft,
      ArrowLeft: moveLeft,
      d: moveRight,
      ArrowRight: moveRight,
      w: rotate,
      ArrowUp: rotate,
      s: moveDown,
      ArrowDown: moveDown,
      " ": () => state.send("HARD_DROPPED"),
    },
    onKeyUp: {
      s: stopDrop,
      ArrowDown: stopDrop,
    },
  })

  return state
}

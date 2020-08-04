import { useEffect } from "react"

const noop = (event: MouseEvent) => {}

export function useMouseInput(
  handlers = {
    onMouseUp: noop,
    onMouseDown: noop,
    onMouseMove: noop,
  }
) {
  const { onMouseUp = noop, onMouseDown = noop, onMouseMove = noop } = handlers

  useEffect(() => {
    function handleMouseUp(event: MouseEvent) {
      onMouseUp(event)
    }

    function handleMouseDown(event: MouseEvent) {
      onMouseDown(event)
    }

    function handleMouseMove(event: MouseEvent) {
      onMouseMove(event)
    }

    document.body.addEventListener("mousedown", handleMouseDown)
    document.body.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.body.removeEventListener("mousedown", handleMouseDown)
      document.body.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mousemove", handleMouseMove)
    }
  }, [onMouseDown, onMouseUp, onMouseMove])
}

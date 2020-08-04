import { useEffect } from "react"

type KeyPressEventHandler = {
  [K in KeyboardEvent["key"]]: (event: KeyboardEvent) => any
}

interface Handlers {
  onKeyDown: KeyPressEventHandler
  onKeyUp: KeyPressEventHandler
}

/**
 * A hook for responding to key down and key up events.
 * @param {Handlers} handlers An object containing callbacks for onKeyDown and onKeyUp.
 */
export function useKeyboardInputs(
  handlers: Handlers = { onKeyDown: {}, onKeyUp: {} }
) {
  const { onKeyDown, onKeyUp } = handlers

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key in onKeyDown && onKeyDown[event.key] !== undefined) {
        event.preventDefault()
        onKeyDown[event.key](event)
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (onKeyUp[event.key] !== undefined) {
        event.preventDefault()
        onKeyUp[event.key](event)
      }
    }

    document.body.addEventListener("keydown", handleKeydown)
    document.body.addEventListener("keyup", handleKeyup)

    return () => {
      document.body.removeEventListener("keydown", handleKeydown)
      document.body.removeEventListener("keyup", handleKeyup)
    }
  }, [onKeyDown, onKeyUp])
}

import React from "react"
import { theme } from "@chakra-ui/core"

import {
  Play,
  Square,
  FastForward,
  Rewind,
  Pause,
  RefreshCcw,
  Sun,
  Moon,
} from "@emotion-icons/feather"

export default {
  ...theme,
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  icons: {
    ...theme.icons,
    play: {
      path: <Play />,
      viewBox: "0 0 24 24",
    },
    pause: {
      path: <Pause />,
      viewBox: "0 0 24 24",
    },
    rewind: {
      path: <Rewind />,
      viewBox: "0 0 24 24",
    },
    fastforward: {
      path: <FastForward />,
      viewBox: "0 0 24 24",
    },
    stop: {
      path: <Square />,
      viewBox: "0 0 24 24",
    },
    refresh: {
      path: <RefreshCcw />,
      viewBox: "0 0 24 24",
    },
    sun: {
      path: <Sun />,
      viewBox: "0 0 24 24",
    },
    moon: {
      path: <Moon />,
      viewBox: "0 0 24 24",
    },
  },
}

import React from "react"
import { motion } from "framer-motion"

export type WithMotionComponent<T extends unknown> =
  | string
  | React.ComponentClass<T, any>
  | React.FunctionComponent<T>

export function withMotion<T>(Component: WithMotionComponent<T>) {
  return motion.custom(Component)
}

import React, { memo } from "react"
import { StatGroup, Stat, StatNumber, StatLabel } from "@chakra-ui/core"

interface Props {
  score: number
  level: number
  lines: number
}

export default memo(function GameStats({ score, level, lines }: Props) {
  return (
    <StatGroup gridColumn='1 / span 2'>
      <Stat textAlign='center' pr='0'>
        <StatLabel>Score</StatLabel>
        <StatNumber>{score}</StatNumber>
      </Stat>

      <Stat textAlign='center' pr='0'>
        <StatLabel>Level</StatLabel>
        <StatNumber>{level}</StatNumber>
      </Stat>

      <Stat textAlign='center' pr='0'>
        <StatLabel>Lines</StatLabel>
        <StatNumber>{lines}</StatNumber>
      </Stat>
    </StatGroup>
  )
})

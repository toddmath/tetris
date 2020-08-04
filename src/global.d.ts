declare namespace Tetromino {
  export enum TypeMap {
    O = "O",
    I = "I",
    S = "S",
    Z = "Z",
    L = "L",
    J = "J",
    T = "T",
  }

  export interface Type {
    O: "O"
    I: "I"
    S: "S"
    Z: "Z"
    L: "L"
    J: "J"
    T: "T"
  }

  // export type Type = {
  //   O: "O"
  //   I: "I"
  //   S: "S"
  //   Z: "Z"
  //   L: "L"
  //   J: "J"
  //   T: "T"
  // }

  export type Pieces = {
    [K in keyof Type]: Configs
  }

  // export type Dir = 0 | 1 | 2 | -1 | -2

  export type Point = {
    x: number
    y: number
  }
  export type Origin = Point

  export type Config = Array<Point>
  export type Configs = Array<Config>

  export interface Piece {
    type: keyof Type
    orientation: number
    origin: Origin
  }

  export interface Falling extends Piece {
    rotation: number
  }

  export type Next = Array<keyof Type>
  export type TypeKey = keyof Type

  export type Colors = {
    [K in keyof Type | 0]: string
  }

  // export type Colors = {
  //   0: string
  //   // [x: string]: string
  //   O: string
  //   I: string
  //   S: string
  //   Z: string
  //   L: string
  //   J: string
  //   T: string
  // }
}

declare namespace Tetris {
  // export type Dir = 0 | 1 | 2 | -1 | -2
  export type Point = {
    x: number
    y: number
  }

  export type Origin = Point

  export type Terominos = {
    [K in keyof Tetromino.Type]: Point[][]
  }

  export type Grid = (keyof Tetromino.Type | 0)[][]
  export type Row = Array<Tetromino.Type | 0>
  export type Matrix = number[][]
  // export type Tetro = Array<Point>
}

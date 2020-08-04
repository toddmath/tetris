import { cloneDeep, sample } from "lodash"
// import * as React from "react"

export { cloneDeep, sample }

// Shared helper functions for tutorials.

/**
 * Create an array containing n numbers.
 * @param {number} n The desired array length.
 * @example
 * range(4) // [0, 1, 2, 3]
 * range(5) // [0, 1, 2, 3, 4]
 */
export function range(n: number) {
  return [...Array(n)].map((_, i) => i)
}

/**
 * Create an array containing y number of rows with x number of entries per row.
 * @param {number} y The desired length of the outer array.
 * @param {number} x The desired array of each inner array.
 * @example
 * range2d(2, 2) // [[0, 1], [0, 1]]
 * range2d(2, 3) // [[0, 1], [0, 1], [0, 1]]
 */
export function range2d(y: number, x: number) {
  return range(y).map(() => range(x).map(i => i))
}

/**
 * Swap the values of an array at index a and b.
 * @param {any[]} arr The array to mutate.
 * @param {number} a The first index to swap.
 * @param {number} b The second index to swap.
 * @example
 * swap([0, 1, 2], 0, 2) // [2, 1, 0]
 * swap([0, 1, 2], 1, 2) // [0, 2, 1]
 */
export function swap(arr: any[], a: number, b: number) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
  return arr
}

/**
 * Randomly re-arrange the values of an array.
 * @param {T[]} arr The array to mutate.
 * @example
 * ```ts
 * shuffle([0, 1, 2, 3]) // => [2, 3, 1, 0]
 * shuffle([0, 1, 2, 3]) // => [1, 0, 3, 2]
 * ```
 */
export function shuffle<T>(arr: T[]): T[] {
  let a = arr.length

  while (a) {
    const b = Math.floor(Math.random() * a--)
    swap(arr, a, b)
  }

  return arr
}

/** Clamps a number (num) between the minimum and maximum values. */
export function clamp(num: number, min: number, max: number) {
  return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max))
}

/** Add a delay into an asynchronous function. */
export async function delay(ms: number = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Interpolate a new between two other numbers.
 * @param {number} a The low end of the range, shown when t is 0.
 * @param {number} b The high end of the range, shown when t is 1.
 * @param {number} t How far to interpolate between the numbers.
 */
export function lerp(a: number, b: number, t: number) {
  return a * (1 - t) + b * t
}

export function head<T>(a: Array<T>): T {
  return a[0]
}

export type SquareType = 'X' | 'O' | null

export type Winner = {
  winner: SquareType
  line: number[]
}

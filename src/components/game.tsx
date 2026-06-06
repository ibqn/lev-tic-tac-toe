import { useMemo, useState } from 'react'
import { Board } from '@/components/board'
import type { SquareType } from '@/types'
import { calculateWinner, isDraw } from '@/utils/game'

export const Game = () => {
  const [squares, setSquares] = useState<SquareType[]>(Array(9).fill(null))
  const [move, setMove] = useState(0)
  const [history, setHistory] = useState<number[]>([])

  const winner = useMemo(() => calculateWinner(squares), [squares])
  const isXNext = move % 2 === 0

  const status = winner?.winner
    ? `Winner: ${winner.winner}`
    : isDraw(squares)
      ? 'Draw!'
      : `Next player: ${isXNext ? 'X' : 'O'}`

  const initialPosition = () => {
    setSquares(Array(9).fill(null))
    setMove(0)
    setHistory([])
  }

  const handleSquare = (index: number) => {
    if (winner?.winner || squares[index]) {
      return
    }
    const nextHistory = [...history.slice(0, move), index]
    const nextSquares = squares.slice()
    nextSquares[index] = move % 2 === 0 ? 'X' : 'O'
    setHistory(nextHistory)
    setSquares(nextSquares)
    setMove(nextHistory.length)
  }

  const jumpTo = (index: number) => {
    setMove(index + 1)
    setSquares(
      history.slice(0, index + 1).reduce((position, currentMove, moveIndex) => {
        position[currentMove] = moveIndex % 2 === 0 ? 'X' : 'O'
        return position
      }, Array(9).fill(null) as SquareType[])
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <div className="text-lg font-medium">{status}</div>

        <div className="flex p-2">
          <Board squares={squares} winningLine={winner?.line} onSelect={handleSquare} />
        </div>
      </div>

      <div className="w-full border-t border-slate-600"></div>

      <div className="flex w-full flex-col gap-2">
        <button
          onClick={initialPosition}
          className="rounded-md border border-slate-400 px-4 py-2 hover:bg-slate-100 active:bg-slate-200"
        >
          Initial position
        </button>
        {history.length ? (
          <>
            <h2 className="font-semibold">Moves:</h2>
            <ul className="flex flex-wrap gap-2">
              {history.map((historyMove, index) => (
                <li key={index}>
                  <button
                    onClick={() => jumpTo(index)}
                    className="rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-100 active:bg-slate-200"
                  >
                    {index + 1}. {index % 2 === 0 ? 'X' : 'O'}-{historyMove + 1}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div>Let's go!</div>
        )}
      </div>
    </div>
  )
}

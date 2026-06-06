import { Square } from '@/components/square'
import type { SquareType } from '@/types'

type Props = {
  squares: SquareType[]
  winningLine?: number[]
  onSelect: (index: number) => void
}

export const Board = ({ squares, winningLine, onSelect }: Props) => {
  return (
    <div className="mt-[1px] mr-[1px] grid grid-cols-3 grid-rows-3">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          index={index}
          winning={winningLine?.includes(index)}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

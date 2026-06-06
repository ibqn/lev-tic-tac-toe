import { Square } from '@/components/square'
import type { SquareType } from '@/types'

type Props = {
  squares: SquareType[]
  winningLine?: number[]
  onSelect: (index: number) => void
}

export const Board = ({ squares, winningLine, onSelect }: Props) => {
  return (
    <div className="grid w-[min(90vw,320px)] grid-cols-3 grid-rows-3 gap-px border border-[#999] bg-[#999]">
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

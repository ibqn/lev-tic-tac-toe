import { Square } from '@/components/square'
import { WinningLine } from '@/components/winning-line'
import type { SquareType } from '@/types'

type Props = {
  squares: SquareType[]
  winningLine?: number[]
  onSelect: (index: number) => void
}

export const Board = ({ squares, winningLine, onSelect }: Props) => {
  return (
    <div className="relative w-[min(90vw,320px)]">
      <div className="grid grid-cols-3 grid-rows-3 gap-px border border-[#999] bg-[#999]">
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

      <WinningLine line={winningLine} />
    </div>
  )
}

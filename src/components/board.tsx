import { Square } from '@/components/square'
import type { SquareType } from '@/types'

type Props = {
  squares: SquareType[]
  winningLine?: number[]
  onSelect: (index: number) => void
}

// Cell center in a 0..3 coordinate space, matching the SVG viewBox below.
const cellCenter = (index: number) => ({
  x: (index % 3) + 0.5,
  y: Math.floor(index / 3) + 0.5,
})

export const Board = ({ squares, winningLine, onSelect }: Props) => {
  const start = winningLine && cellCenter(winningLine[0])
  const end = winningLine && cellCenter(winningLine[winningLine.length - 1])

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

      {start && end && (
        <svg
          viewBox="0 0 3 3"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <line
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="#ef4444"
            strokeWidth={0.08}
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  )
}

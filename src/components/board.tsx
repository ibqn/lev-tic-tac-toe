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

// How far the line overshoots past the first/last cell centers, in cell units.
const LINE_OVERSHOOT = 0.25

export const Board = ({ squares, winningLine, onSelect }: Props) => {
  const first = winningLine && cellCenter(winningLine[0])
  const last = winningLine && cellCenter(winningLine[winningLine.length - 1])

  // Extend the segment a bit beyond both ends along its own direction.
  let start = first
  let end = last
  if (first && last) {
    const dx = last.x - first.x
    const dy = last.y - first.y
    const len = Math.hypot(dx, dy)
    const ux = dx / len
    const uy = dy / len
    start = { x: first.x - ux * LINE_OVERSHOOT, y: first.y - uy * LINE_OVERSHOOT }
    end = { x: last.x + ux * LINE_OVERSHOOT, y: last.y + uy * LINE_OVERSHOOT }
  }

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

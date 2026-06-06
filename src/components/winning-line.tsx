type Props = {
  line?: number[]
}

// Cell center in a 0..3 coordinate space, matching the SVG viewBox below.
const cellCenter = (index: number) => ({
  x: (index % 3) + 0.5,
  y: Math.floor(index / 3) + 0.5,
})

// How far the line overshoots past the first/last cell centers, in cell units.
const LINE_OVERSHOOT = 0.25

// Draws a red strike through the winning cells, extended slightly past both ends.
export const WinningLine = ({ line }: Props) => {
  if (!line || line.length === 0) {
    return null
  }

  const first = cellCenter(line[0])
  const last = cellCenter(line[line.length - 1])

  const dx = last.x - first.x
  const dy = last.y - first.y
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const start = { x: first.x - ux * LINE_OVERSHOOT, y: first.y - uy * LINE_OVERSHOOT }
  const end = { x: last.x + ux * LINE_OVERSHOOT, y: last.y + uy * LINE_OVERSHOOT }

  return (
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
  )
}

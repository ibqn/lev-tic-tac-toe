import type { SquareType } from '@/types'

type Props = {
  value: SquareType
}

// Draws the X / O glyph as SVG in a 0..1 coordinate space so it scales with the cell.
export const Mark = ({ value }: Props) => {
  if (!value) {
    return null
  }

  return (
    <svg
      viewBox="0 0 1 1"
      className="h-3/5 w-3/5"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.14}
      strokeLinecap="round"
    >
      {value === 'X' ? (
        <>
          <line x1={0.2} y1={0.2} x2={0.8} y2={0.8} />
          <line x1={0.8} y1={0.2} x2={0.2} y2={0.8} />
        </>
      ) : (
        <circle cx={0.5} cy={0.5} r={0.3} />
      )}
    </svg>
  )
}

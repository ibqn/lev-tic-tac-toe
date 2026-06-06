import { cn } from '@/utils/class-names'
import type { SquareType } from '@/types'

type Props = {
  value: SquareType
  index: number
  winning?: boolean
  onSelect: (index: number) => void
}

export const Square = ({ value, index, winning, onSelect }: Props) => {
  return (
    <button
      onClick={() => onSelect(index)}
      className={cn(
        'flex aspect-square w-full items-center justify-center bg-white text-5xl font-bold transition-colors select-none hover:bg-slate-100 active:bg-slate-200 sm:text-6xl',
        winning && 'text-red-500'
      )}
    >
      {value}
    </button>
  )
}

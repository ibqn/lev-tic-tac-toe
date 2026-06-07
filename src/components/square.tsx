import { Mark } from '@/components/mark'
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
        'flex aspect-square w-full items-center justify-center bg-white transition-colors select-none hover:bg-slate-100 active:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600',
        value === 'X' && 'text-slate-800 dark:text-slate-100',
        value === 'O' && 'text-sky-600 dark:text-sky-400',
        winning && 'text-red-500 dark:text-red-400'
      )}
    >
      <Mark value={value} />
    </button>
  )
}

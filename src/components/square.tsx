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
        '-mt-px -mr-px flex h-[34px] w-[34px] items-center justify-center border border-[#999] text-2xl leading-[34px] font-bold',
        winning && 'text-red-500'
      )}
    >
      {value}
    </button>
  )
}

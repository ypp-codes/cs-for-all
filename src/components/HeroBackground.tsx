import Image from 'next/image'
import { useId } from 'react'
import factorTree from '@/images/factor-tree.jpg'

export function HeroBackground(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <Image
      alt="student writing on chalkboard"
      className="opacity-20 w-full"
      src={factorTree}
      width={1400}
    />
  )
}

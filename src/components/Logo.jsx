import Image from 'next/image'
import typpLogo from '@/images/YPP-Logo-white.webp'
import Link from 'next/link'

export function Logomark(props) {
  return <div {...props}>Computer Science For All</div>
}

export function Logo(_props) {
  return (
    <Link
      href="/"
      className="flex w-fit items-center space-x-5 font-display text-xl font-semibold text-white"
    >
      <Image alt="YPP logo" src={typpLogo} height={60} className="" />
      <div>Computer Science For All</div>
    </Link>
  )
}

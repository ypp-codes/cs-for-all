'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Logo, Logomark } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { ThemeSelector } from './ThemeSelector'
import Hexagons from '@/images/hexagons.svg'

function Header() {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-10">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <div className="flex transition-transform hover:scale-[1.02]">
            <Logo className="hidden h-9 w-auto fill-slate-700 font-logo lg:block dark:fill-sky-100" />
            {/* <Logomark className="hidden h-auto min-w-fit items-center pl-6 font-display text-xl font-extrabold text-white lg:flex" /> */}
          </div>
        </div>

        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ThemeSelector className="relative z-10" />
        </div>
      </nav>
      <div className="absolute inset-0 -z-10 w-full overflow-hidden bg-slate-900 object-cover">
        <Image
          alt=""
          src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
          className="w-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
      </div>
    </header>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  // let pathname = usePathname()
  // let isHomePage = pathname === '/'

  return (
    <div className="flex w-full flex-col">
      <Header />

      {/* {isHomePage && <Hero />} */}

      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          {/* <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" /> */}
          {/* <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" /> */}
          {/* <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" /> */}
          <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

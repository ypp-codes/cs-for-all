import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Highlight } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'


export function Hero() {
  return (
    <div className="overflow-hidden overflow-y-clip bg-slate-200 dark:bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-8 overflow-y-clip sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 pt-5 lg:pt-0 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline-block bg-gradient-to-r max-w-[40rem] from-primary via-indigo-600 to-primary font-bold bg-clip-text text-5xl tracking-tight text-transparent">
                Building Capacity in Computer Science Education and Student Near Peer Classroom Mentorship.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-600 dark:text-slate-400">
              A Young People's Project Research Practitioner Partnership 
              </p>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] translate-y-[-17%] xl:translate-y-0 lg:right-0 lg:inset-x-0 -bottom-48 -top-1/3[mask-image:linear-gradient(transparent,white,white)] lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute inset-[-10rem] bg-blend-overlay bg-gradient-to-t from-white to-white/10" />
            </div>
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-30 -right-44"
                src={blurCyanImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

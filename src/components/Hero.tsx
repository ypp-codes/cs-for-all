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
    <div className="overflow-hidden overflow-y-clip bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:bg-slate-900 dark:pb-32 dark:pt-[4.75rem]">
      <div className="overflow-y-clip py-8 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-5 lg:max-w-8xl lg:grid-cols-2 lg:px-8 lg:pt-0 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline-block max-w-[40rem] font-display text-5xl font-bold tracking-tight text-slate-100">
                Building Capacity in Computer Science Education and Student Near
                Peer Classroom Mentorship.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-300 dark:text-slate-400">
                A Young People's Project Research Practitioner Partnership
              </p>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="-top-1/3[mask-image:linear-gradient(transparent,white,white)] absolute inset-x-[-50vw] -bottom-48 translate-y-[-5%] lg:inset-x-0 lg:right-0 lg:[mask-image:none] xl:translate-y-0 dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute inset-[-10rem] bg-gradient-to-t from-white to-white/10 bg-blend-overlay" />
            </div>
            {/* <div className="relative"> */}
            {/*   <Image */}
            {/*     className="absolute -right-64 -top-64" */}
            {/*     src={blurCyanImage} */}
            {/*     alt="" */}
            {/*     width={530} */}
            {/*     height={530} */}
            {/*     unoptimized */}
            {/*     priority */}
            {/*   /> */}
            {/*   <Image */}
            {/*     className="-bottom-30 absolute -right-44" */}
            {/*     src={blurCyanImage} */}
            {/*     alt="" */}
            {/*     width={567} */}
            {/*     height={567} */}
            {/*     unoptimized */}
            {/*     priority */}
            {/*   /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

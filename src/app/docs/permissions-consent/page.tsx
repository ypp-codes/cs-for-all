import { DocsLayout } from '@/components/DocsLayout'
import { FaArrowDown, FaArrowRight, FaSun, FaSchool } from 'react-icons/fa'

export function Block({
  children,
  className,
  border,
  cornerText,
}: {
  children: React.ReactNode
  className?: string
  border?: boolean
  cornerText?: string
}) {
  return (
    <div
      className={`${border ? 'border border-secondary' : 'bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent'} relative mx-auto h-fit w-fit max-w-[90%] rounded-lg p-5 font-display transition hover:scale-[1.02] ${className}`}
    >
      {cornerText ? (
        <div className="absolute -right-5 -top-5 w-fit rounded-lg border border-primary bg-white px-2 py-1 text-center text-sm font-bold dark:bg-slate-900">
          {cornerText === 'Summer' ? (
            <FaSun className="-mt-1 inline" />
          ) : (
            <FaSchool className="-mt-1 inline" />
          )}{' '}
          {cornerText}
        </div>
      ) : null}
      {children}
    </div>
  )
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 *:mx-auto *:my-4 *:text-center md:flex md:grid-cols-2 *:md:mx-4 *:md:my-auto">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <DocsLayout frontmatter={{ title: 'Permissions & Consent' }} nodes={[]}>
      <div className="*:my-5">
        <p>
          The professional learning opportunities for teachers and college
          students will function as a lab providing them the opportunity to
          learn the curricular commitments; the computational thinking,
          programming skills, and culturally relevant pedagogies necessary to
          implement the curriculum and to co-design lessons. Below is a work
          flow of requirements in order to begin!
        </p>
        {/* STEP ONE */}
        <Block className="m-auto text-3xl">Step 1</Block>
        <Block border cornerText="Summer">
          <strong className="text-slate-300">Building Permissions</strong>
          <br />
          We have already received permission and approval to do research within
          Boston Public Schools. We now need permission from the headmaster to
          do this project within the building.{' '}
        </Block>
        {/* STEP TWO */}
        <Block className="text-3xl">Step 2</Block>
        <div className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-5">
          <Block border cornerText="Summer">
            <strong className="text-slate-300">Teacher Consent Forms</strong>
            <br />
            All teachers who participate must submit a consent form to be part
            of the research project.{' '}
          </Block>
          <span className="w-xl m-auto hidden md:block">
            <FaArrowRight />
          </span>
          <span className="w-xl m-auto block md:hidden">
            <FaArrowDown />
          </span>
          <Block border cornerText="School Year">
            <strong className="text-slate-300">Guardian Consent Forms</strong>
            <br />
            Students who participate need a consent form signed by a guardian
            that is 18+ years of age.{' '}
          </Block>
          <span className="w-xl m-auto hidden md:block">
            <FaArrowRight />
          </span>
          <span className="w-xl m-auto block md:hidden">
            <FaArrowDown />
          </span>
          <Block border cornerText="School Year">
            <strong className="text-slate-300">Student Assent Form</strong>
            <br />
            Students who participate can sign assent forms to express their
            willingness to participate.{' '}
          </Block>
        </div>
        {/* STEP THREE */}
        <Block className="m-auto text-3xl">Step 3</Block>
        <div className="flex flex-col items-center gap-2">
          <Block className="h-fit max-w-[50%]" border cornerText="Summer">
            <strong className="text-slate-300">Teacher Pre-Interview</strong>
            <br />
            Before teachers do training, a pre-interview with researchers to
            learn about their experience as a math educator.
          </Block>
          <span className="w-xl mx-auto my-5 block md:my-8">
            <FaArrowDown />
          </span>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center lg:gap-5">
            <Block
              border
              className="m-auto w-full min-w-[20%] text-center"
              cornerText="Summer"
            >
              <strong className="text-slate-300">Teacher PD</strong>
            </Block>
            <span className="w-xl m-auto hidden md:block">
              <FaArrowRight />
            </span>
            <span className="w-xl m-auto block md:hidden">
              <FaArrowDown />
            </span>
            <Block
              border
              className="m-auto w-full min-w-[20%] text-center"
              cornerText="School Year"
            >
              <strong className="text-slate-300">
                Classroom Implementation
              </strong>
            </Block>
            <span className="w-xl m-auto hidden md:block">
              <FaArrowRight />
            </span>
            <span className="w-xl m-auto block md:hidden">
              <FaArrowDown />
            </span>
            <Block
              border
              className="m-auto w-full min-w-[20%] text-center"
              cornerText="School Year"
            >
              <strong className="text-slate-300">
                Post-Implementation Interview
              </strong>
            </Block>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}


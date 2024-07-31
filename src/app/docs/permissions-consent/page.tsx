import { DocsLayout } from '@/components/DocsLayout'
import { FaArrowDown, FaArrowRight, FaSun, FaSchool } from 'react-icons/fa'

export function Block({ children, className, border, cornerText }: { children: React.ReactNode, className?: string, border?: boolean, cornerText?: string }) {
	return (
		<div className={`${border ? "border border-secondary" : "bg-gradient-to-r from-orange-600 to-orange-600 via-orange-400 bg-clip-text text-transparent"} h-fit transition hover:scale-[1.02] mx-auto rounded-lg p-5 w-fit max-w-[70%] relative ${className}`}>
			{cornerText ? <div className="absolute -top-5 -right-5 w-fit px-2 py-1 rounded-lg text-sm border border-primary bg-white dark:bg-slate-900 font-bold text-center">{cornerText === "Summer" ? <FaSun className="inline -mt-1" /> : <FaSchool className="inline -mt-1" />} {cornerText}</div> : null}
			{children}
		</div>
	)
}

function Step({ children }: { children: React.ReactNode }) {
	return (
		<div className="*:text-center grid grid-cols-1 md:grid-cols-2 *:my-4 *:mx-auto *:md:mx-4 *:md:my-auto md:flex">
			{children}
		</div>
	)
}


export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Permissions & Consent" }} nodes={[]}>
			<div className="*:my-5 ">
				<p>The professional learning opportunities for teachers and college students will function as a lab providing them the opportunity to learn the curricular commitments; the computational thinking, programming skills, and culturally relevant pedagogies necessary to implement the curriculum and to co-design lessons. Below is a work flow of requirements in order to begin!</p>
				{/* STEP ONE */}
				<Block className="m-auto text-3xl">Step 1</Block>
				<Block border cornerText="Summer">
					<strong className="text-slate-300">Building Permissions</strong><br />We have already received permission and approval to do research within Boston Public Schools. We now need permission from the headmaster to do this project within the building. </Block>
				{/* STEP TWO */}
				<Block className="text-3xl">Step 2</Block>
				<div className="flex flex-col md:items-center md:flex-row gap-8 lg:gap-5">
					<Block border cornerText="Summer"><strong className="text-slate-300">Teacher Consent Forms</strong><br />All teachers who participate must submit a consent form to be part of the research project. </Block>
					<span className="w-xl m-auto hidden md:block"><FaArrowRight /></span>
					<span className="w-xl m-auto block md:hidden"><FaArrowDown /></span>
					<Block border cornerText="School Year"><strong className="text-slate-300">Guardian Consent Forms</strong><br />Students who participate need a consent form signed by a guardian that is 18+ years of age. </Block>
					<span className="w-xl m-auto hidden md:block"><FaArrowRight /></span>
					<span className="w-xl m-auto block md:hidden"><FaArrowDown /></span>
					<Block border cornerText="School Year"><strong className="text-slate-300">Student Assent Form</strong><br />Students who participate can sign assent forms to express their willingness to participate. </Block>
				</div>
				{/* STEP THREE */}
				<Block className="m-auto text-3xl">Step 3</Block>
				<div className="flex flex-col items-center gap-2">
					<Block className="h-fit max-w-[50%]" border cornerText="Summer"><strong className="text-slate-300">Teacher Pre-Interview</strong><br />Before teachers do training, a pre-interview with researchers to learn about their experience as a math educator.</Block>
					<span className="w-xl mx-auto my-5 md:my-8 block"><FaArrowDown /></span>
					<div className="flex flex-col md:items-center md:flex-row gap-8 items-center lg:gap-5">
						<Block border className="m-auto min-w-[20%] w-full text-center" cornerText="Summer"><strong className="text-slate-300">Teacher PD</strong></Block>
						<span className="w-xl m-auto hidden md:block"><FaArrowRight /></span>
						<span className="w-xl m-auto block md:hidden"><FaArrowDown /></span>
						<Block border className="m-auto min-w-[20%] w-full text-center" cornerText="School Year"><strong className="text-slate-300">Classroom Implementation</strong></Block>
						<span className="w-xl m-auto hidden md:block"><FaArrowRight /></span>
						<span className="w-xl m-auto block md:hidden"><FaArrowDown /></span>
						<Block border className="m-auto min-w-[20%] w-full text-center" cornerText="School Year"><strong className="text-slate-300">Post-Implementation Interview</strong></Block>
					</div>
				</div>
			</div>
		</DocsLayout>
	)
}
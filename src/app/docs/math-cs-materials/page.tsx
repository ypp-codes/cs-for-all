import { DocsLayout } from '@/components/DocsLayout'
import { Block } from '../permissions-consent/page'

function GridItem({ children }) {
	return <div className="flex flex-col hover:scale-[1.02] *:hover:scale-100 transition">
		{children}
	</div>
}

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "The Math & CS", description: "" }} nodes={[]}>
			<div className="grid grid-cols-1 *:p-3 *:border *:border-secondary *:rounded-xl gap-3 sm:gap-5 sm:grid-cols-2">
				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Human Programming</Block>
					<p>Human Programming is an activity YPP has been using since 2010 as an shared experience to introduce students to algorithmic and computational thinking. These two concepts help students with their conceptual understanding for how computer programs work.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Algorithmic & Computational Thinking, Geometry, Sequencing/Function</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Circles of Evaluation</Block>
					<p>Circles of Evaluation is an important activity for students to learn Order of Operations in a new way. With this activity, students are able to conceptually and procedurally understand why and how computers evaluate expressions in the order they do.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Expressions, Equations, Inequalities, Systems</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Data Types & Variables</Block>
					<p>In many cases, variables function the same way in mathematics and computer science. In this module, students will learn the various data types and use cases for how variables are used in computer science. Students will compare and contrast between math and CS.</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Functions</Block>
					<p>The mathematical concept of function is a big deal in high school mathematics. The concept of function is also a really big idea in computer science. In this module, students will learn the features of functions in CS by creating and using functions to perform tasks.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Functions, Linearity, Expressions, Equations, Graphs</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Contracts</Block>
					<p>Contracts are an extension of the concept of function. Using the coding language Pyret, students will investigate pre-built contracts, debug errors in contracts, and create their own web applications by using a series of contracts to achieve their objectives.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Linear and Exponential Functions, Modeling w/ Data, Connecting Geometry & Algebra</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Diagramming Function Composition</Block>
					<p>Students will revisit the Circles of Evaluation and use them as a tool to conceptualize function composition. Students will get practice with translating and evaluating functions and function compositions utilizing the Circles of Evaluation.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Geometry, Congruence and Coordinate Geometry, Proof, Algebra, Functions, Function Composition</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Piecewise Functions</Block>
					<p>Students will develop their conceptual understanding of piecewise functions utilizing computational thinking, <code>if</code>, <code>if then</code>, and <code>else</code> statements. They will learn how to manage the behavior of their programs based on the features of the variables used in their code.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> Geometry, Congruence and Coordinate Geometry, Proof, Algebra, Functions, Function Composition</p>
				</GridItem>

				<GridItem>
					<Block className="text-2xl -mb-5 -ml-5">Making Flags</Block>
					<p>The Making Flags module is an experience that brings all of the previous modules into use. The objective of this module is for students to pick a flag of choice, and use the skills they have acquired to write a program where they construct their flag.</p>
					<p className="mt-auto min-h-[84px]"><strong>Math Concepts:</strong> The Making Flags Module brings in all math content from earlier modules.</p>
				</GridItem>
			</div>
		</DocsLayout>
	)
}
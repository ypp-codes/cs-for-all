import { DocsLayout } from '@/components/DocsLayout'
import { Block } from '../permissions-consent/page'

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Pedagogical Practices" }} nodes={[]}>
		<h2 className="bg-gradient-to-r from-orange-600 to-orange-600 via-orange-400 bg-clip-text text-transparent">The Algebra Project</h2>
		<div className="flex flex-col gap-2 sm:flex-row">
			<Block border>Facilitator Competencies</Block>
			<Block border>Model of Excellence</Block>
			<Block border>5 Step Curricular Process</Block>
		</div>
		<h2 className="bg-gradient-to-r from-orange-600 to-orange-600 via-orange-400 bg-clip-text text-transparent">The Young People's Project</h2>
		<div className="flex flex-col gap-2 sm:flex-row">
			<Block border>Learning Styles</Block>
			<Block border>Model of Distributed Excellence</Block>
			<Block border>Teacher Youth Pedagogical Development</Block>
		</div>
		</DocsLayout>
	)
}
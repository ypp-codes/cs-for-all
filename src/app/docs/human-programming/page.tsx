import { DocsLayout } from '@/components/DocsLayout'

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Human Programming" }} nodes={[]}>
		<p>This is a template page.</p>
		</DocsLayout>
	)
}
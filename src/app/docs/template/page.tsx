import { DocsLayout } from '@/components/DocsLayout'

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Template", description: "" }} nodes={[]}>
		<p>This is a template page.</p>
		</DocsLayout>
	)
}
import { DocsLayout } from '@/components/DocsLayout'

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Teacher Commitments" }} nodes={[]}>
			<div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid px-10 *:w-fit *:p-3 *:m-3 *:border-secondary *:border *:rounded-lg *:transition-all">
				<div className="hover:scale-[1.03] font-display">
					<strong>Stipend</strong>
					<p>
						All teachers who participate in this project will be given a $2500 honorarium.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>Teacher Pre-Interview</strong>
					<p>
						Before teachers do any training, a 20 minute pre-interview with researchers are conducted to learn about their experience as a math educator prior to incorporating CS.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>Training (Summer)</strong>
					<p>
						The summer training is a 5 day (35 hours) experience in the month of July/August. Teachers will learn the CS modules and YPP pedagogy that will be used to integrate into their classrooms.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>Practice (Summer)</strong>
					<p>
						In addition to the summer training, educators will have the opportunity to practice implementing the new materials over a 4 day span (15 hours) in the month of August with a group of high school students employed by YPP.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>Post Training Interview</strong>
					<p>
						At the conclusion of the summer training, teachers are asked to take part in another interview with project researchers in efforts to learn about how the training has impacted them as a math educator.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>School Year Implementation</strong>
					<p>
						School implementation is projected to span from September to December at the equivalent of 25 instructional hours which includes the current math curriculum. Some teachers decide to spread out the content through out the full year.
					</p>
				</div>
				<div className="hover:scale-[1.03] font-display">
					<strong>End of Year Interview</strong>
					<p>
						At the conclusion of the school year, project researchers will ask teachers to take part in a final interview in efforts to learn about how the entire experience has impacted them as a math and CS educator.
					</p>
				</div>

			</div>
		</DocsLayout>
	)
}

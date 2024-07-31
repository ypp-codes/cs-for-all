import { DocsLayout } from '@/components/DocsLayout'

export default function Page() {
	return (
		<DocsLayout frontmatter={{ title: "Math and Computer Science?", description: "" }} nodes={[]}>
			<iframe className="w-[90%] m-auto aspect-video" src="https://www.youtube.com/embed/E7PxbzUo7Jk?si=08-gAoQVQW1iR1fi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

			<details>
				<summary>
					Video Transcript
				</summary>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Cliff Freeman 0:04
				</strong>  Have you ever witnessed a class of ninth graders design, revise and lead coding boot camps for 1500 middle school students in one school year. Here's a group in Boston, Massachusetts, were using math and coding as an organizing tool to significantly change who participates in STEM learning.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Tyla Smart 0:27
				</strong>  A lot of students of color don't go into STEM because they either don't know what STEM is, or they just think that it's too hard, or they can't do it, when in reality, anyone can do it, you just have to learn.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Andy Tran-Artica 0:41
				</strong>  This is a new experience. For me, I did not know anything about coding. So I'm very interested in this course.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Dr. Renee McCall 0:49
				</strong>  We wanted to ensure that students are walking away from Excel High School with the necessary skills that they needed to be successful. In both college or career, we wanted to be creative. And what we were asking our students to do, and we wanted it again to be authentic. So we're not just going to pay lip service to the development of a leader at school, or the development of advocacy and our students, but we really wanted to have an opportunity for them to do so.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Chad Milner 1:15
				</strong>  So this project is really about introducing students to literacies of the 21st century, doing it in a way that is relevant to them, bringing in college students and younger instructors who can relate to them, and having them go out into their communities and teaching a small part of what they learned.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Tyla Smart 1:34
				</strong>  When the students come in, they go to each station and our literacy workers teach them about strings, variables, things like that. And they give them a presentation on like, what it is and how it can be used in Python. And then they have three levels of tasks. And they have to use the information that they got from our literacy worker to code and make programs.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Luz Alonzo 2:00
				</strong>  I'm also like the bootcamp because I learned some stuff from the students. How they feel and how the teacher feel when they're going to teach something to the students</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Tracy Kimsey 2:10 </strong>
					Our YPP class meets daily for about an hour. And the beauty in this work is that we use the near peer model so that there are students from college coming in to teach our high schoolers and to really provide the day to day instruction and support.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Somtoo Ebele 2:25
				</strong>  Working here actually did shaped my opinion on being in the computer science field. Because before when I would tell everyone I wanted to study computer science, they would always ask me like, oh, well, what do you want to do with that? And I never really knew the answer. But a couple months ago, I was thinking like, why don't I just learn as much as I can get my knowledge and give back to the community</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Cliff Freeman 2:44
				</strong>  is very simple. College students teaching computer science in high school classrooms to better computer science learning and computational thinking.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Amina Osman 2:55
				</strong>  You know, like, when you help a person out, it's like, you go home, it's like, Oh, I did something great today help I someone out, I taught someone today they learn something my knowledge is going to be passed on to the younger generations.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Tracy Kimsey 3:10
				</strong>  This class and the format of it is very non traditional and innovative, and how we look at educating high school students. So being willing to take that jump and accept trying something different and not being focused on the standards and the scope and sequence. It is a risk. But when you take it, it's pretty incredible how you can still get to that same end point by doing it a little differently.</p>
				<p className="max-w-3xl w-full mx-auto decoration-primary/6"><strong className="font-bold">Dr. Renee McCall 3:37
				</strong>  When we think about creating and developing leaders, this is truly what we want. If we want to change the issues that we face in society. The ability to develop student voice is so critical. It is our young people who are going to be our future and to hear it from their voice from their point of view, their perspective, their reach. All of that is critical I think and thinking about a better tomorrow.</p>
			</details>

			<p>
				In 2017, YPP  launched an innovative "Service-Learning" elective through a partnership with Boston Public Schools and the GE Foundation, at the Excel High School in South Boston. For the elective, which was lead by YPP instructors, College Math Literacy Workers,  and a teacher of record from the school, the high school students were taught core coding and problem-solving skills, then through out the year they taught BPS middle schools students at special STEM Bootcamp events.  This elective course, named Exploring STEM Literacy, takes on a robust near-peer approach at teaching Computer Science in schools where Computer Science learning is non-existent or limited to advanced placement classes.
			</p>
			<p>
				The course was designed and taught by a YPP instructor with support from a team of YPP trained STEM Literacy Instructors, current college students. Much of the design and success of the course was based on feedback and recommendations of students in the course. This near-peer model is central to YPP’s work, and it creates a different type of relationship between students, instructors, and the content. These relationships support the project-based approach to all coursework. The course designers approached computer science not only as a set of knowledge and skills but as an approach to problem-solving. They created projects that required students to work in ways that STEM professionals work: collaboratively, adaptive, and self-directed. YPP's signature near-peer education model is used, by providing the opportunity for the high school STEM students to teach the concepts they learn to their younger middle school peers.
			</p>
		</DocsLayout>
	)
}
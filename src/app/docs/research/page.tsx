import { DocsLayout } from '@/components/DocsLayout'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  PlyrLayout,
  plyrLayoutIcons,
} from '@vidstack/react/player/layouts/plyr'
export default function Page() {
  return (
    <DocsLayout frontmatter={{ title: 'The Research Project' }} nodes={[]}>
      <div className="text-xl">
        National Science Foundation supported research project titled:{' '}
        <em>
          Building Capacity in Computer Science Education and Student Near Peer
          Classroom Mentorship.
        </em>
      </div>

      <MediaPlayer title="Math and Computer Science?" src="vimeo/710820591">
        <MediaProvider />
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>

      <details>
        <summary>Video Transcript</summary>
        <div className="space-y-3 px-10 pb-5">
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            Titled: Building Capacity in Computer Science Education and Student
            Near Peer Classroom Mentorship, we are developing a
            research-practice partnership between us, The Young People&apos;s
            Project (
            <a
              className="hover:text-primary-700 text-primary underline underline-offset-2 transition-colors"
              target="_blank"
              href="http://www.typp.org/"
            >
              YPP
            </a>
            ), Boston Public Schools,{' '}
            <a
              className="hover:text-primary-700 text-primary underline underline-offset-2 transition-colors"
              target="_blank"
              href="https://bootstrapworld.org/"
            >
              Bootstrap
            </a>
            , and{' '}
            <a
              className="hover:text-primary-700 text-primary underline underline-offset-2 transition-colors"
              target="_blank"
              href="https://sites.bu.edu/earlcenter/"
            >
              Boston University
            </a>
            . YPP is building off a previously funded National Science
            foundation grant where high school students were trained to code
            math games for middle grade students.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            The main idea for this project is to build teacher capacity in
            Computer science education! Our work is to provide professional
            development for Boston Public School teachers which exposes them to
            a classroom model of instruction developed by the Young
            People&apos;s Project and the Algebra Project, where we utilize the
            Bootstrap materials to integrate Computer Science into existing
            9th-grade algebra classrooms.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            For over 25 years, YPP has been at the forefront of developing young
            people as Math Literacy Workers, or MLWs for short.{' '}
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            MLWs are high school and college age students who work
            collaboratively with each other to design, plan, implement, and
            iterate Math learning experiences for elementary and middle school
            students in their neighborhoods. One of the primary roles for the
            College Math Literacy Workers is to help develop and nurture high
            school MLWs to become model youth leaders and champions of math
            literacy in their community.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            The critical component of this project is the inclusion of local
            college students who are studying or interested in computer science.
            These college age students, predominantly students of color who come
            from the same neighborhoods as the high school students they will
            teach in schools, are hired, trained, and developed by YPP to enter
            the classroom alongside math teachers as computer science content
            experts serving as an invaluable resource to the classroom culture.
            Through our work as researchers and practitioners, we have learned
            that institutions entrusted to educate youth miss out on incredible
            educational and youth development opportunities when neer-peer
            cascading structures of instruction are not leveraged.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            When YPP was founded, in Jackson Mississippi, by a hand full of 8th
            graders and 20 year olds, all former Algebra project students, it
            was done so as one possible answer to the question “what and how
            much do young people have to do to help get Jim Crow out of
            education in the United States?
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            We hypothesize that this NSF supported work will help us move the
            needle on this question, as we build capacity in educators of
            students that in many cases would not have had equitable
            opportunities to learn computer science in expensive ways during
            their high school careers.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            We see this project an opportunity for us to share, contribute and
            enrich the research + practitioner communities within Mathematics
            and Computer Science Education with the work we have pioneered via
            cascading near-peer instruction in mathematics.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            If you want to stay informed on our progress, make sure to visit our
            project website, at yppcsforall.org.
          </p>
          <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
            Thanks for listening, and Keep on Pushing.
          </p>
        </div>
      </details>
      <p>
        Colleagues from The Young People&apos;s Project (YPP), Boston Public
        Schools (BPS), Bootstrap, and Boston University aim to increase the
        capacity of mathematics teachers to integrate computer science into
        their classrooms. The goal of this project is to provide a model of
        professional development for BPS teachers that uses a culturally
        sustaining classroom model of instruction developed by YPP and the
        Algebra Project. With the help of local college-age students, the
        program integrates Bootstraps computer science (CS) curriculum into
        existing Algebra and geometry classrooms. We reached 4 algebra 1 and
        geometry educators in year 1 and plan to reach 18 total over three
        years. We expect to reach approximately 1500 students.
      </p>

      <p>
        Currently, YPP is recruiting and training local College STEM Literacy
        Workers (CSLW) and teachers to support classroom implementation. The
        training is broken up into four topics: 1) history, mission, vision, and
        culture of the YPP; 2) culturally sustaining CS education - effective
        teaching and the power of young people; 3) computational thinking
        practices through experiential learning; 4) effective professional
        development and the Model of Excellence (MOE). We expect CSLW and
        classroom teachers to develop awareness about, and competence in, their
        ability to facilitate effective learning, including meaningful student
        discourse about computer science.
      </p>

      <p>
        Teacher and CSLW learning include regular conversations among
        stakeholders to assess and provide feedback on progress, participant
        observations of workshops and classroom implementations, interviews with
        teachers and CSLW, and classroom assessments of students&apos;
        computational thinking practices. Participating schools have already
        begun to integrate and expand computer science opportunities across the
        school curriculum.
      </p>

      <p>
        Our first professional development was co-led by CSLWs and colleagues
        from Bootstrap as part of the 2021 Math and Computational Thinking Lab
        (MCTL). The YPP/Bootstrap MCTL is a 50 hour experience with rich
        mathematical and CS content for teachers who intend to teach in the fall
        semester. It is intended to place the PD in the context of YPP&apos;s
        work to broaden participation in STEM through near peer learning and
        teaching, introduce Algebra Project and YPP pedagogies of experiential
        learning and teaching. We will implement the second implementation cycle
        in 2022-2023
      </p>
    </DocsLayout>
  )
}


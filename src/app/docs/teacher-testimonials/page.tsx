import { DocsLayout } from '@/components/DocsLayout'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  PlyrLayout,
  plyrLayoutIcons,
} from '@vidstack/react/player/layouts/plyr'
export default function Page() {
  return (
    <DocsLayout
      frontmatter={{ title: 'How to Broaden Participation in CS Education' }}
      nodes={[]}
    >
      <MediaPlayer title="Math and Computer Science?" src="https://vimeo.com/1012962496/47edf1d6ff">
        <MediaProvider />
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>

      <p>
        Building Capacity in Computer Science Education and Student Near Peer
        Classroom Mentorship is a Researcher-Practitioner Partnership (RPP)
        collaboration between The Young People's Project (YPP), Boston Public
        Schools (BPS), Bootstrap, and Boston University. It aims to increase the
        number of high school computer science teachers by designing,
        evaluating, and iterating on a professional development model that uses
        culturally relevant pedagogy and integration into mathematics
        classrooms. The goal of this project is to provide professional
        development for BPS teachers that uses a classroom model of instruction
        developed by YPP, the Algebra Project, and Bootstrap and integrates CS
        into existing 9th grade mathematics classrooms. The project promises to
        build the computer science teaching capacity in BPS, and to test a model
        of computer science (CS) teaching that is responsive to the needs of
        students from racial/ethnic groups underrepresented in CS. Greater
        capacity will include providing learning opportunities for BPS teachers
        currently teaching Algebra or other entry level mathematics courses in
        high schools as well as an infusion of college students who work as
        learners and educators alongside classroom teachers. The infusion of
        college students, YPP's Model of Excellence, and a discourse-based
        curriculum supports a culturally relevant approach to CS learning that
        can provide entry points for a target population of students not
        currently offered computer science education in BPS. To develop
        teachers' capacity for CS teaching and leadership, the project will
        build an effective research practice partnership that includes a
        designed based implementation research process focused on the design and
        impact of the professional learning opportunity for teachers.
      </p>

      
    </DocsLayout>
  )
}

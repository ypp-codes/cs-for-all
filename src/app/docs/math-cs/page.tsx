import { DocsLayout } from '@/components/DocsLayout'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  PlyrLayout,
  plyrLayoutIcons,
} from '@vidstack/react/player/layouts/plyr'

export default function Page() {
  return (
    <DocsLayout
      frontmatter={{ title: 'Building Capacity in Computer Science Education' }}
      nodes={[]}
    >
      <MediaPlayer
        title="Building Capacity in CS Edu."
        src="https://youtu.be/EWUxKhSsDPQ"
      >
        <MediaProvider />
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>

      <details>
        <summary>Video Transcript</summary>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          Ok. So you're looking for a practical strategy to offer computer
          science learning opportunities for the students in your community.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          Well, you've clicked, or got sent the right video... because YPP's
          Exploring STEM Literacy learning experiences are designed to: Expand
          access to CS learning opportunities by offering a radically different
          on-ramp for students—one that does not require prior mastery in
          mathematics but instead uses CS as a tool to deepen student
          mathematical understanding. Equip students with the skills and
          confidence to teach what they've learned to younger near-peers in
          their communities, fostering a cycle of mentorship and
          knowledge-sharing. Provide a proven model that empowers school
          communities to see their students as resources, and in this case, a
          resource to integrate CS into the regular school day, ensuring
          equitable access for all students.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          What if I told you that in 2018, a cohort of just twenty-three
          9th-grade students learned enough integrated Math + CS to teach 1,500
          middle and elementary school students—all in just one school year?
          Yes, you heard that right. Students teaching students. Students as the
          teacher. We both know that our current education system is not
          equipped to meet the growing demand for equitable access to computer
          science education. The reality is stark: far too many children
          graduate without experiencing even one semester of computer science,
          leaving them unprepared for the opportunities and challenges of our
          information age economy.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          I sense a few puzzled looks. You wonder what demand I'm referring to.
          Let me show you a rather dated document that still serves as an OPEN
          question and WORK for the country. Convened by members of Congress,
          large national agencies organized themselves to expound on this
          approaching demand.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          Published in 2007, and revisited in 2010, the Rising Above the
          Gathering Storm report concluded that the country was at best in a
          stall and surely in decline in terms of science and innovation.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          As Bob Moses helped us see so clearly in his book Radical Equations,
          we can see how the U.S. got here. He said nations and institutions are
          now making a global transition from reliance upon technology that
          primarily organizes physical labor to technologies that directly
          organize mental labor.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          At The Young People's Project (or YPP for short), we agree with this
          recommendation. Hence why we have been steadily chipping away at math
          literacy efforts since 1996. But the organizing tradition we inherit
          from Ella Baker, the Student Nonviolent Coordinating Committee, the
          Algebra Project, and other grassroots efforts who worked to bring
          about change for those on the bottom teaches us this: a purely
          top-down strategy that promises to benefit all is a good place to
          start, but cannot succeed with great strength without a bottom-up
          strategy relentlessly committed to raising the floor for those of us
          who are routinely disenfranchised and marginalized.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          So we are here, at a critical junction. We prepare children for what
          is to come, and many believe is already here, or we don’t. The
          Exploring STEM Literacy integrated Math + CS teaching and learning
          experiences are an easy set of open-source materials that your school
          community can pick up today.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          The storm is upon us, and the time to act is now. To ensure the
          students in your community gain access to the critical literacies
          required for their generation, let us rise above the gathering storm
          together. Though you may not have the teaching capacity right now to
          meet the demand outlined in the Rising Above the Gathering Storm
          report, every community, in every county, is rich with the potential
          of its children—brilliant resources ready to tackle the challenge of
          building capacity in computer science education by teaching each
          other. All it takes to begin is one courageous adult in your community
          to learn a bit and teach the bit to their students with the intention
          that they would do the same.
        </p>
        <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
          <strong className="font-bold">
            So. What do you think? Shall we rise?
          </strong>
        </p>
      </details>

      <p className="decoration-primary/6 mx-auto w-full max-w-3xl">
        Looking for a practical strategy to bring computer science education to
        your community? This video essay explores how YPP’s Exploring STEM
        Literacy learning experiences can transform your school’s approach to
        teaching Math + CS, while fostering mentorship, equity, and empowerment.
        <p></p>
        <br />
        <strong>00:00 - 00:12</strong>: Introduction
        <br />
        <strong>00:12 - 01:12</strong>: What is Exploring STEM Literacy?
        <br />
        <strong>01:13 - 02:07</strong>: What do young people have to do with it?
        <br />
        <strong>02:08 - 03:21</strong>: The STEM Demand?: Rising Above The
        Gathering Storm
        <br />
        <strong>03:22 - 04:04</strong>: A recommendation to the Nation
        <br />
        <strong>04:05 - 04:48</strong>: A grassroots bottom up solution
        <br />
        <strong>04:49 - 05:13</strong>: YPP's contribution
        <br />
        <strong>05:13 - 07:16</strong>: Give the youth what they need
      </p>
    </DocsLayout>
  )
}

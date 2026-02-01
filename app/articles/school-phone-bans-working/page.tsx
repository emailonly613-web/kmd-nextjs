import Link from 'next/link'

export const metadata = {
  title: 'School Phone Bans Are Working: Results from 31 States | KosherMyDevice',
  description: 'School phone bans show improved test scores and reduced discipline issues. Research from Florida and 31 states proves phones in classroom restrictions work.',
  openGraph: {
    title: 'School Phone Bans Are Working: What 31 States Have Learned',
    description: 'Test scores up, discipline issues down. The evidence from America\'s largest education experiment.',
  },
}

export default function SchoolPhoneBansWorkingPage() {
  return (
    <article className="pt-24">
      <header className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>&gt;</span>
            <Link href="/articles" className="hover:text-blue-600">Articles</Link>
            <span>&gt;</span>
            <span className="text-gray-600">School Phone Bans Working</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">Research &bull; 11 min read</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>School Phone Bans Are Working: What 31 States Have Learned</h1>
          <p className="text-xl text-gray-500 leading-relaxed">Florida led the way in 2023. Now 31 states plus DC have enacted school phone restrictions. The early results are compelling: improved test scores, better behavior, and students who are actually present in class.</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          For years, the debate about phones in schools was theoretical. Should they be banned? Would students revolt? Would parents demand constant access to their children? The arguments went back and forth while smartphones continued their march into every classroom.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Then Florida decided to find out. In July 2023, it became the first state to mandate that all public schools ban phone use during instructional time. Within months, the results started coming in. And now, with 31 states having followed suit, we have real data on what happens when schools take control of the phone problem.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Florida Results: Hard Data</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          A December 2025 study from Northwestern University provided the most rigorous analysis to date of Florida&apos;s phone ban. Comparing spring 2023 (before the ban) to spring 2025 (after implementation), researchers found:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-navy mb-4">Key Findings from Florida Study</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">+1.2</span>
              <span className="text-gray-600">percentile point improvement in standardized test scores across all students</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">+1.4</span>
              <span className="text-gray-600">percentile point improvement for male students (larger effect than female students)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">-67%</span>
              <span className="text-gray-600">reduction in smartphone activity on school grounds during school hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">&darr;</span>
              <span className="text-gray-600">Significant decrease in unexcused absences</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          These may seem like modest numbers, but consider the scale. A 1.2 percentile point improvement across millions of students represents a massive educational gain — achieved through a policy change that costs essentially nothing to implement.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The larger effect on male students aligns with research showing boys are more susceptible to the distraction effects of devices. <Link href="/articles/smartphone-addiction-crisis" className="text-blue-600 hover:underline">Phone addiction statistics</Link> consistently show that while overall rates are similar, the behavioral manifestations differ by gender.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Teacher Reports: What Educators See</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Beyond test scores, surveys of educators paint a consistent picture of classroom transformation:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-navy mb-4">National Teacher Survey Results (2024-2025)</h4>
          <p className="text-sm text-gray-500 mb-4">Survey of 20,000+ K-12 teachers across the United States</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Support phone ban during instruction</span>
                <span className="font-bold text-navy">90%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '90%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Support bell-to-bell bans</span>
                <span className="font-bold text-navy">75%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '75%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Report improved classroom behavior</span>
                <span className="font-bold text-navy">78%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '78%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Report increased student engagement</span>
                <span className="font-bold text-navy">62%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '62%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Teachers consistently report that phone-free classrooms feel different. Students make eye contact. Discussions happen. The constant checking, the notifications, the social media drama that used to spill into every period — it&apos;s simply absent.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          &quot;It&apos;s like teaching 15 years ago,&quot; one Florida high school teacher reported. &quot;Students are actually in the room with me, not somewhere else in their heads.&quot;
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The State-by-State Movement</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Following Florida&apos;s lead, states have moved quickly to implement their own restrictions. As of January 2026:
        </p>

        <div className="bg-navy text-white rounded-xl p-6 mb-8">
          <h4 className="font-bold text-gold mb-4">School Phone Ban Status by State</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-white/60 text-sm mb-2">States with Statewide Legislation (31 + DC)</p>
              <p className="text-white text-sm">Florida, Indiana, Louisiana, South Carolina, Oklahoma, Virginia, California, Ohio, Pennsylvania, Texas, New York, Illinois, and others</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2">Implementation Approaches</p>
              <ul className="text-white text-sm space-y-1">
                <li>• Bell-to-bell bans (strictest)</li>
                <li>• Instructional time only</li>
                <li>• Phone pouches (Yondr bags)</li>
                <li>• Phone lockers</li>
                <li>• Morning collection</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The rapid spread reflects a bipartisan consensus that&apos;s rare in education policy. Phone bans have support across political lines because the problem affects everyone&apos;s children equally.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Implementation Matters: What Works Best</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Not all phone policies produce equal results. Research comparing different approaches has identified clear patterns:
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Stricter Policies Work Better</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Bell-to-bell bans (phones away from first bell to last) outperform class-time-only restrictions. When students can use phones during passing periods, lunch, and breaks, the mental &quot;pull&quot; of the device remains active throughout the day. Continuous phone-free time allows for genuine mental reset.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Physical Solutions Reduce Enforcement Burden</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Schools using phone pouches (like Yondr bags) or morning collection report easier enforcement than those relying on policy alone. When the phone is physically inaccessible, there&apos;s no negotiation, no &quot;I was just checking the time,&quot; no constant monitoring needed.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Consistency Is Key</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Schools with inconsistent enforcement see minimal benefits. If some teachers enforce while others don&apos;t, students spend mental energy calculating where they can get away with phone use rather than adapting to a phone-free environment.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Communication with Parents Matters</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The most successful implementations include clear communication with parents about why the policy exists, how emergencies will be handled (the school office remains available), and what the expected benefits are. Parent buy-in reduces pushback and student resistance.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Attention Economy Problem</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Understanding why phone bans work requires understanding why phones are so problematic in educational settings:
        </p>

        <ul className="list-disc pl-6 mb-6 text-lg text-gray-600 space-y-2">
          <li><strong>Continuous partial attention:</strong> Even when not actively using phones, students who have them available experience &quot;attention residue&quot; — part of their mental capacity is devoted to wondering what they&apos;re missing.</li>
          <li><strong>Notification interruption:</strong> A single notification can derail focus for up to 20 minutes as the brain struggles to return to the original task.</li>
          <li><strong>Social comparison:</strong> Social media creates constant opportunities for social drama that intrudes on learning.</li>
          <li><strong>Sleep deprivation effects:</strong> 67% of teens lose sleep to phone use, arriving at school already cognitively impaired.</li>
        </ul>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          <Link href="/articles/social-media-teen-mental-health" className="text-blue-600 hover:underline">Research on social media and teen mental health</Link> shows that the effects extend beyond academics into emotional wellbeing, creating a compound problem that phone bans help address.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Student Responses: More Positive Than Expected</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          One of the biggest fears around school phone bans was student resistance. The reality has been more nuanced:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-navy mb-4">Student Survey Results Post-Ban Implementation</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">42%</span>
              <span className="text-gray-600">of students report the ban had a positive effect on their learning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 font-bold">35%</span>
              <span className="text-gray-600">report no significant effect either way</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold">23%</span>
              <span className="text-gray-600">report negative feelings about the policy</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Interestingly, even students who initially opposed bans often report relief after adjustment. Many describe a sense of &quot;permission&quot; to disconnect that they didn&apos;t feel able to give themselves.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          &quot;I was so mad at first,&quot; one California junior said. &quot;But honestly? It&apos;s kind of nice not worrying about what&apos;s happening on my phone all day. I didn&apos;t realize how much energy that took.&quot;
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The International Perspective</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The US is following, not leading, on this issue. Countries that implemented school phone bans earlier provide longer-term data:
        </p>

        <ul className="list-disc pl-6 mb-6 text-lg text-gray-600 space-y-2">
          <li><strong>France:</strong> Banned phones in schools in 2018. Academic performance improvements measured within first year.</li>
          <li><strong>Netherlands:</strong> 2024 ban showed immediate improvements in classroom focus and student interaction.</li>
          <li><strong>Finland:</strong> Despite being tech-forward, Finnish schools have restricted phone use for years with strong educational outcomes.</li>
          <li><strong>UK:</strong> Growing movement with multiple successful implementations; government guidance strengthened in 2024.</li>
        </ul>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The international evidence aligns with US findings: removing phones from educational environments produces measurable benefits with minimal downsides.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Implications for Parents and Schools</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The success of school phone bans carries lessons beyond the classroom:
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>For Parents</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          If your child&apos;s school hasn&apos;t implemented a ban, advocate for one. The evidence is now overwhelming. And consider applying similar principles at home — phone-free homework time, phone-free meals, phone-free bedrooms produce similar benefits in the home environment.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>For Schools Still Debating</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The question is no longer &quot;should we?&quot; but &quot;how strictly?&quot; Research clearly favors more comprehensive approaches. Bell-to-bell bans with physical collection mechanisms produce the best results. Half-measures produce half-results.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>For Jewish Day Schools and Yeshivas</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Many <Link href="/articles/yeshiva-device-management" className="text-blue-600 hover:underline">yeshivas have been ahead of this curve</Link>, implementing device restrictions based on Torah values before the secular research caught up. The data now confirms what many rabbeim intuited: phones and learning don&apos;t mix.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Broader Lesson</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          School phone bans are working because they address a systems problem with a systems solution. Individual willpower — telling students to &quot;just focus&quot; while a notification-machine buzzes in their pocket — was never going to work.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The same principle applies to device protection more broadly. <Link href="/articles/device-owner-vs-filters" className="text-blue-600 hover:underline">System-level controls</Link> that remove the problem work better than willpower-based approaches that require constant resistance.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Thirty-one states implementing phone restrictions isn&apos;t just solving an education problem. It&apos;s demonstrating that intentional technology boundaries work — and that the short-term friction of implementation is worth the long-term benefits.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-xl font-bold text-navy mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>Need Device Solutions for Your School?</h3>
          <p className="text-gray-500 mb-4">Enterprise device management for yeshivas, day schools, and educational institutions. System-level control that students can&apos;t bypass.</p>
          <Link href="/enterprise/schools" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">School Solutions &rarr;</Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="font-bold text-navy mb-4">Related Articles</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/yeshiva-device-management" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-blue-600">Education</span>
              <p className="font-semibold text-navy">Yeshiva Device Management</p>
            </Link>
            <Link href="/articles/smartphone-addiction-crisis" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-blue-600">Research</span>
              <p className="font-semibold text-navy">The Smartphone Addiction Crisis</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

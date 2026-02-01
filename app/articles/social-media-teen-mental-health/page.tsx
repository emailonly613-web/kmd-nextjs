import Link from 'next/link'

export const metadata = {
  title: 'Social Media and Teen Mental Health: The Research Is Clear | KosherMyDevice',
  description: 'Social media depression and anxiety research: 48% of teens say social media is negative. Instagram teen mental health data and what parents can do.',
  openGraph: {
    title: 'Social Media and Teen Mental Health: What the Research Shows',
    description: 'The debate is over. Heavy social media use is linked to worse mental health in teens.',
  },
}

export default function SocialMediaTeenMentalHealthPage() {
  return (
    <article className="pt-24">
      <header className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>&gt;</span>
            <Link href="/articles" className="hover:text-blue-600">Articles</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Social Media Teen Mental Health</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">Research &bull; 12 min read</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Social Media and Teen Mental Health: The Research Is Now Clear</h1>
          <p className="text-xl text-gray-500 leading-relaxed">For years, the tech industry claimed we needed more research. The research is in. Heavy social media use is associated with worse mental health outcomes in adolescents — and the effects are strongest for girls.</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The correlation between the rise of social media and the surge in teen mental health problems is no longer debatable. What began as concern in the early 2010s has become one of the most well-documented public health findings of our era.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Teen depression rates began climbing around 2012 — the same year smartphone ownership crossed 50% among teenagers. This isn&apos;t coincidence. Multiple converging lines of evidence now point to social media as a significant contributing factor.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Timeline That Changed Everything</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          To understand the current crisis, we need to see the timeline clearly:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2007</span>
              <span className="text-gray-600">iPhone launches. Facebook opens to general public. Instagram doesn&apos;t exist yet.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2010</span>
              <span className="text-gray-600">Instagram launches. Teen mental health metrics are stable.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2012</span>
              <span className="text-gray-600">Smartphone ownership crosses 50% among teens. First visible uptick in depression rates.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2014</span>
              <span className="text-gray-600">Instagram usage surges. Teen depression rates accelerate sharply.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2016</span>
              <span className="text-gray-600">TikTok launches. Teen anxiety rates reach historic highs.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2019</span>
              <span className="text-gray-600">Teen depression rates 60% higher than 2010. Suicide rates at 40-year high.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2021</span>
              <span className="text-gray-600">Facebook internal research leaked showing Instagram&apos;s harms to teen girls.</span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-navy text-white px-2 py-1 rounded text-sm font-bold">2024</span>
              <span className="text-gray-600">Surgeon General calls for warning labels on social media.</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Core Statistics</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Let&apos;s establish the baseline data on social media use and mental health:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-navy mb-4">Teen Social Media & Mental Health Data</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">48%</span>
              <span className="text-gray-600">of teens believe social media has a mostly negative effect on their generation (up from 32% in 2022)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">4.8 hrs</span>
              <span className="text-gray-600">average daily social media use among teens</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">13%</span>
              <span className="text-gray-600">of teen girls show clinically problematic social media use</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">67%</span>
              <span className="text-gray-600">of teens report losing sleep due to phone and social media use</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">57%</span>
              <span className="text-gray-600">increase in depression rates among teen girls since 2012</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Dose-Response Relationship</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          One of the strongest pieces of evidence is the dose-response relationship — the more social media teens use, the worse the outcomes:
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">&lt;30 min/day</span>
            <span className="text-gray-600">Minimal measurable effects on mood or mental health</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">1-2 hrs/day</span>
            <span className="text-gray-600">Some mood associations begin to appear</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">3-4 hrs/day</span>
            <span className="text-gray-600">Doubles risk of depression and anxiety symptoms</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">5+ hrs/day</span>
            <span className="text-gray-600">Strong associations with clinical depression, anxiety, and self-harm</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The average teen uses social media 4.8 hours daily. The majority are in the highest-risk category.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Why Girls Are Hit Harder</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The research consistently shows girls experience more severe effects from social media than boys:
        </p>

        <ul className="list-disc pl-6 mb-6 text-lg text-gray-600 space-y-2">
          <li>13% of teen girls show problematic social media use vs. 9% of boys</li>
          <li>46% of teen girls say social media worsens their body image (vs. 24% of boys)</li>
          <li>Correlation with depression is significantly stronger for girls</li>
          <li>Girls spend more time on image-focused platforms (Instagram, TikTok)</li>
          <li>Social comparison and appearance-based content hits girls harder developmentally</li>
        </ul>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Facebook&apos;s own internal research, leaked in 2021, showed the company knew Instagram was particularly harmful to teenage girls. Internal presentations stated: &quot;We make body image issues worse for one in three teen girls.&quot;
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Despite this knowledge, the company made minimal changes and continued marketing to teens.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Five Mechanisms of Harm</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Researchers have identified several ways social media harms teen mental health:
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>1. Social Comparison</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Social media presents curated highlight reels as if they were everyday reality. Teens compare their ordinary lives to everyone else&apos;s best moments, creating a perpetual sense of inadequacy. This is especially damaging during adolescence when identity formation is most vulnerable.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>2. Sleep Disruption</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          67% of teens lose sleep to phone and social media use. The blue light suppresses melatonin, the engaging content keeps them awake, and the variable reward mechanism makes it hard to stop. Sleep deprivation alone causes anxiety and depression — and teens are chronically underslept because of their phones.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>3. Displacement of Beneficial Activities</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Time spent on social media displaces activities that actually support mental health: face-to-face time with friends, physical activity, sleep, hobbies, and family connection. There are only so many hours in a day, and 5 hours on social media means 5 fewer hours for everything else.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>4. Cyberbullying and Social Drama</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Bullying that once ended when school ended now follows teens home and into their bedrooms. Group chats enable pile-on dynamics. Screenshots make every mistake permanent. Social dynamics that used to be confined to school hours now operate 24/7.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>5. Dopamine Dysregulation</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Social media provides variable reward feedback (likes, comments, messages) that activates the same brain circuits as gambling. Over time, this dysregulates the dopamine system, making ordinary life feel dull and boring while creating cravings for more stimulation. The result is <Link href="/articles/smartphone-addiction-crisis" className="text-blue-600 hover:underline">smartphone addiction</Link> that mirrors substance dependency.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Surgeon General&apos;s Warning</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          In 2023, the U.S. Surgeon General issued an official advisory on social media and youth mental health — a step typically reserved for serious public health threats. The advisory recommended:
        </p>

        <div className="bg-navy text-white rounded-xl p-6 mb-8">
          <h4 className="font-bold text-gold mb-4">Surgeon General Recommendations</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gold">•</span>
              <span>Age-appropriate health warnings on social media platforms, similar to cigarette warnings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">•</span>
              <span>Delaying social media access until after middle school</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">•</span>
              <span>Creating phone-free zones in homes (bedrooms, mealtimes)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">•</span>
              <span>Industry transparency about algorithms and their effects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">•</span>
              <span>Parents modeling healthy technology use themselves</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The advisory explicitly stated: &quot;We do not yet have enough evidence to determine if social media is sufficiently safe for children and adolescents.&quot; After over a decade of research, the conclusion is that safety has not been established — which should give every parent pause.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Platform Differences Matter</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Not all social media platforms affect teens equally:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-navy mb-4">Platform Impact Levels</h4>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-navy">Instagram / TikTok (Highest Risk)</p>
              <p className="text-gray-600 text-sm">Image-based, algorithm-driven, heavy social comparison, beauty filters, infinite scroll</p>
            </div>
            <div>
              <p className="font-semibold text-navy">Snapchat (High Risk)</p>
              <p className="text-gray-600 text-sm">Streaks create compulsive behavior, beauty filters, location tracking enables drama</p>
            </div>
            <div>
              <p className="font-semibold text-navy">Twitter/X, Facebook (Moderate Risk)</p>
              <p className="text-gray-600 text-sm">Less image-focused but still infinite scroll, conflict-driven engagement</p>
            </div>
            <div>
              <p className="font-semibold text-navy">YouTube (Lower Risk)</p>
              <p className="text-gray-600 text-sm">Longer-form content, less social comparison, but still algorithmic rabbit holes</p>
            </div>
            <div>
              <p className="font-semibold text-navy">Messaging (Context Dependent)</p>
              <p className="text-gray-600 text-sm">WhatsApp, iMessage less harmful than feeds, but group chats can enable drama</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>What Parents Can Actually Do</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Given the evidence, what should parents do? The research points to clear interventions:
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>1. Delay Social Media Access</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The Surgeon General recommends no social media until after middle school (age 14+). <Link href="/articles/when-should-child-get-phone" className="text-blue-600 hover:underline">When to give kids a phone</Link> and when to allow social media are separate decisions. A phone can exist without social media.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>2. Remove Social Media Entirely</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The research suggests that limiting use is less effective than removing access. Trying to moderate an addictive behavior is harder than eliminating it. A phone without social media apps is significantly less harmful.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>3. Use System-Level Controls</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          <Link href="/articles/filter-apps-dont-work" className="text-blue-600 hover:underline">Filter apps don&apos;t work</Link> because teens can bypass them. <Link href="/articles/device-owner-vs-filters" className="text-blue-600 hover:underline">Device Owner technology</Link> that prevents app installation entirely is more effective than trying to monitor or limit use after access is granted.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>4. Create Phone-Free Zones</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Bedrooms and mealtimes should be phone-free for the entire family. Phones charge outside bedrooms overnight. Dinner happens without devices present. These structural changes matter more than rules about content.
        </p>

        <h3 className="text-xl font-bold text-navy mt-8 mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>5. Model Better Behavior</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Parents who are constantly on their phones raise children who are constantly on their phones. The family norms around technology matter as much as the explicit rules.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10 mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Bottom Line</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The research debate is over. The correlation between social media use and teen mental health problems is well-established, the dose-response relationship is clear, and the mechanisms are understood. The remaining question is what we do about it.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Waiting for tech companies to self-regulate has proven futile. They profit from engagement, and harmful content is often the most engaging. Regulatory change is slow. The most effective intervention remains parental action: limiting and delaying access, removing the most harmful platforms, and using technology that prevents bypass.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          A phone without social media is still a phone. It can still make calls, send texts, navigate, and run useful apps. What it can&apos;t do is extract attention for profit while damaging mental health. That trade-off — functionality without harm — is increasingly what parents are choosing.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-xl font-bold text-navy mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Protect Your Teen?</h3>
          <p className="text-gray-500 mb-4">Our device lockdown removes social media access entirely. No apps to delete, no accounts to monitor, no willpower required.</p>
          <Link href="/service" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">Learn About Our Service &rarr;</Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="font-bold text-navy mb-4">Related Articles</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/when-should-child-get-phone" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-blue-600">Parenting</span>
              <p className="font-semibold text-navy">When Should Your Child Get a Phone?</p>
            </Link>
            <Link href="/articles/dopamine-detox-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-blue-600">Wellness</span>
              <p className="font-semibold text-navy">The Science of Dopamine Detox</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

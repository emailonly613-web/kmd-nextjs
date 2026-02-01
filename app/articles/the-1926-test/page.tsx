import Link from 'next/link'

const meshalim = [
  { num: 1, title: 'The Interrupting Fool', content: `Imagine hiring a man whose only job is to tap you on the shoulder every few minutes.\n\nDuring davening — tap. While learning — tap. In the middle of telling your child a story — tap. During the most intimate moment with your wife — tap.\n\n"Nothing important," he says each time. "Just checking if you forgot about me."\n\nYou'd fire him immediately. You'd never hire him in the first place.`, punchline: 'Today, we pay $1,000 for the privilege. We call them "notifications."' },
  { num: 2, title: 'The Pocket Brothel', content: `Imagine a man in 1926 who carries a satchel everywhere. Inside: entry tickets to every brothel, gambling den, opium house, and lashon hara circle in the city.\n\nHe doesn't visit these places every day. But he could. The tickets are always there. And sometimes, late at night, when he's tired and his guard is down...\n\nHis rav tells him: "Get rid of the satchel."\n\nHe objects: "But I also keep my business papers in there! And pictures of my children!"`, punchline: 'That\'s a smartphone without protection. The business papers don\'t justify the rest.' },
  { num: 3, title: 'The Key to Every Door', content: `Imagine telling your 12-year-old in 1926:\n\n"Here's a master key to the city. Every door is now open to you — the library, yes, but also the bars, the back alleys, the places I've never told you about because you're too young. Strangers will approach you with offers. Some will want to be your 'friend.' I won't be there to protect you."\n\nAny parent would be arrested for negligence.`, punchline: 'An unfiltered smartphone in a child\'s hands is that key. Every door. No supervision.' },
  { num: 4, title: 'The Third Person in Every Marriage', content: `Imagine a 1926 couple who never has a meal alone. Never has a conversation without a third party present. Never goes to sleep without someone else in the room — glowing faintly, demanding attention.\n\nThe wife speaks — the husband's eyes drift to the visitor. The husband speaks — the wife glances away mid-sentence.\n\nThey're never fighting. They're just... never fully together.`, punchline: 'The average couple spends 4+ hours daily on phones. Often in the same room. Alone together.' },
  { num: 5, title: 'The Voluntary Prison', content: `Imagine a free man in 1926 who builds his own jail cell. No one forces him inside. But every few minutes, he walks in, sits down, and stares at the wall. Sometimes for hours.\n\nHis family calls to him. His children want to play. His business needs attention. But something keeps pulling him back.\n\n"I can leave whenever I want," he insists.`, punchline: '99.2% of people feel anxiety when separated from their phone. The prison has no bars because it doesn\'t need them.' },
  { num: 6, title: 'The Stolen Clock', content: `In 1926, a man's time was his own. He decided when to work, when to rest, when to think, when to pray.\n\nNow imagine a man who gave that away. He handed a stranger a bell and said: "Ring this whenever you want my attention. Day or night. I'll come running."\n\nThe stranger rings constantly. For nothing. For opinions. For entertainment.\n\nThe man wonders why he's exhausted. Why hours vanish like smoke.`, punchline: 'The average person touches their phone 2,617 times per day. Each touch answers a bell that didn\'t need to ring.' },
]

export default function The1926TestPage() {
  return (
    <article className="pt-24">
      <header className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>›</span>
            <Link href="/articles" className="hover:text-blue-600">Articles</Link>
            <span>›</span>
            <span className="text-gray-600">The 1926 Test</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4">Perspective</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">The 1926 Test: What Your Phone Would Look Like to Your Great-Grandfather</h1>
          <p className="text-xl text-gray-500 leading-relaxed">We tell ourselves we're just "connected." But strip away the technology and look at the behavior itself. What would a person in 1926 think if they saw how we live?</p>
          <div className="mt-4 text-sm text-gray-400">6 min read</div>
        </div>
      </header>
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">The statistics are familiar. 57% addiction rate. 5.3 hours of daily screen time. 144 phone checks per day.</p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">But numbers don't land. So let's translate modern phone behavior into what it would actually look like 100 years ago.</p>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 font-semibold">Your great-grandfather didn't have more willpower than you. He just didn't face this test.</p>
        
        {meshalim.map((m) => (
          <div key={m.num} className="bg-gray-50 border-l-4 border-gold rounded-r-2xl p-8 mb-8">
            <h3 className="flex items-center gap-3 text-xl font-display font-bold text-navy mb-4">
              <span className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold">{m.num}</span>
              {m.title}
            </h3>
            {m.content.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
            ))}
            <div className="bg-navy text-white p-4 rounded-lg mt-6">
              <p className="font-medium">{m.punchline}</p>
            </div>
          </div>
        ))}
        
        <div className="bg-gradient-to-br from-navy to-[#1a2d4a] text-white rounded-2xl p-10 text-center my-12">
          <h2 className="text-2xl font-display font-bold mb-4">The Point</h2>
          <p className="text-white/80 leading-relaxed mb-4">A man in 1926 with all these behaviors would be pitied. A curiosity. A warning to others.</p>
          <p className="text-white/80 leading-relaxed mb-4">A man in 2026 without these behaviors is considered strange.</p>
          <p className="text-gold text-xl font-semibold">We didn't get weaker. The test got harder.</p>
        </div>
        
        <h2 className="text-2xl font-display font-bold text-navy mt-12 mb-4">What Can Be Done</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The answer isn't to abandon technology. The answer is <strong>boundaries</strong>. Specifically, boundaries that don't depend on willpower.</p>
        <p className="text-gray-600 leading-relaxed mb-8">A phone that can't access problematic content in the first place. Technology that your great-grandfather would look at and nod: "This makes sense. This is a tool. This is not a master."</p>
        
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-display font-bold text-navy mb-2">Ready for a Phone You'd Be Proud to Show Your Zeide?</h3>
          <p className="text-gray-500 mb-4">Devices that do what you need — without the rest.</p>
          <Link href="/#solutions" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">Explore Solutions →</Link>
        </div>
      </div>
    </article>
  )
}

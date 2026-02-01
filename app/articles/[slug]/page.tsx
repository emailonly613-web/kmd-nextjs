import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/articles'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} | KosherMyDevice`,
    description: article.excerpt
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  
  const categoryColors: Record<string, string> = {
    research: 'bg-blue-50 text-blue-600',
    parenting: 'bg-green-50 text-green-600',
    technology: 'bg-purple-50 text-purple-600',
    wellness: 'bg-orange-50 text-orange-600',
    perspective: 'bg-amber-50 text-amber-700',
  }
  
  return (
    <article>
      <header className="pt-28 pb-12 bg-gray-50">
        <div className="container-narrow">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>›</span>
            <Link href="/articles" className="hover:text-blue-500">Knowledge Hub</Link>
          </nav>
          <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full mb-4 ${categoryColors[article.categorySlug] || 'bg-gray-100'}`}>
            {article.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
          <span className="text-sm text-gray-400">{article.readTime}</span>
        </div>
      </header>
      
      <div className="py-12">
        <div className="container-narrow prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
      </div>
      
      <div className="container-narrow pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-2">Ready for Real Protection?</h3>
          <p className="text-gray-500 mb-6">Our devices provide system-level security that can't be bypassed.</p>
          <Link href="/#solutions" className="btn btn-primary btn-large">Explore Solutions →</Link>
        </div>
      </div>
    </article>
  )
}

function formatContent(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3 class="font-display text-xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="font-display text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
    .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
}

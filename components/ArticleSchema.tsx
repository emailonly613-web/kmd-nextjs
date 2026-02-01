interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  datePublished?: string
  dateModified?: string
  author?: string
}

export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished = '2026-01-31',
  dateModified = '2026-01-31',
  author = 'KosherMyDevice',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://koshermydevice.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KosherMyDevice',
      url: 'https://koshermydevice.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://koshermydevice.com/logo.png',
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://koshermydevice.com/articles/${slug}`,
    },
    image: 'https://koshermydevice.com/og-image.png',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

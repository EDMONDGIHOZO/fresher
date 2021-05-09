import { metadata as siteMeta } from 'config'

export type SEOProps = {
  title: string
  description: string
}

const SEO = ({ title, description }: SEOProps) => {
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName

  const pageDescription = description
    ? `${description} :: ${siteMeta.description}`
    : siteMeta.description

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="linkedin:site" content={siteMeta.author.linkedin} />
      <meta property="linkedin:title" content={pageTitle} />
      <meta property="linkedin:description" content={pageDescription} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default SEO

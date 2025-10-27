export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://legacycargove.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /importaciones-venezuela
Allow: /importaciones-china-venezuela
Allow: /importaciones-panama-venezuela
Allow: /importaciones-estados-unidos-venezuela
Allow: /service-maritimo
Allow: /service-aereo
Allow: /service-terrestre
Allow: /calculator
Allow: /tracking
Allow: /contact
Allow: /about
Allow: /faq

# Host
Host: https://legacycargove.com`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

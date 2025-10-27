import React from 'react'

const Breadcrumbs = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {index === items.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a 
                    href={item.url} 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumbs

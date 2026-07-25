import Link from "next/link";
import Script from "next/script";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  schemaId: string;
}

const SITE_URL = "https://www.azerasansor.com";

export function Breadcrumb({ items, schemaId }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href === "/" ? "" : item.href}` : undefined,
    })),
  };

  return (
    <>
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="hover:text-brand-yellow transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? "text-brand-yellow font-medium" : ""}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && <span className="text-gray-600" aria-hidden="true">›</span>}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

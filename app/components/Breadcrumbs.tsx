import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight size={13} className="text-slate-300" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-[#7B2CBF]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

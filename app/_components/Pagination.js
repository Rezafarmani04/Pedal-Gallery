'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Pagination({ currentPage, totalItems, pageSize }) {
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / pageSize);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <div className="flex justify-center mt-12 gap-4 items-center">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 bg-primary-800 rounded-lg hover:bg-accent-500 transition-colors"
        >
          <ArrowRightIcon className="h-4 w-4" />
          قبلی
        </Link>
      )}

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentPage === page
                ? 'bg-accent-500 text-primary-900 font-bold'
                : 'bg-primary-700 hover:bg-primary-600'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 bg-primary-700 rounded-lg hover:bg-accent-500 transition-colors"
        >
          بعدی
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

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

  function getVisiblePages() {
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    if (currentPage <= 2) {
      end = 3;
    } else if (currentPage >= totalPages - 1) {
      start = totalPages - 2;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  return (
    <div className="flex justify-center mt-12 gap-2 sm:gap-4 items-center flex-wrap">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 sm:px-4 bg-primary-800 rounded-lg hover:bg-accent-500 transition-colors text-sm sm:text-base"
        >
          <ArrowRightIcon className="h-4 w-4" />
          <span className="hidden sm:inline">قبلی</span>
        </Link>
      )}

      <div className="flex gap-1 sm:gap-2">
        {currentPage > 2 && totalPages > 3 && (
          <>
            <Link
              href={createPageURL(1)}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-primary-600 text-sm sm:text-base`}
            >
              1
            </Link>
            {currentPage > 3 && <span className="flex items-center">...</span>}
          </>
        )}

        {getVisiblePages().map((page) => (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-sm sm:text-base ${
              currentPage === page
                ? 'bg-accent-500 text-primary-900 font-bold'
                : 'bg-primary-700 hover:bg-primary-600'
            }`}
          >
            {page}
          </Link>
        ))}

        {currentPage < totalPages - 1 && totalPages > 3 && (
          <>
            {currentPage < totalPages - 2 && (
              <span className="flex items-center">...</span>
            )}
            <Link
              href={createPageURL(totalPages)}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-primary-600 text-sm sm:text-base`}
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 sm:px-4 bg-primary-700 rounded-lg hover:bg-accent-500 transition-colors text-sm sm:text-base"
        >
          <span className="hidden sm:inline">بعدی</span>
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

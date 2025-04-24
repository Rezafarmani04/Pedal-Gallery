'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set('search', searchTerm);
      params.set('page', '1');
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جستجوی خودرو ..."
          className="w-full pr-8 pl-4 py-3 rounded-lg border border-primary-700 bg-primary-50 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-accent-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

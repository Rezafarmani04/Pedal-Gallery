'use client';

import { useState, useEffect } from 'react';

export default function ClientProfileForm({ session }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [showNameSuggestion, setShowNameSuggestion] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setFullName(session.user.name);
    }
  }, [session]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setShowNameSuggestion(true);
      return;
    }

    setIsSubmitted(true);

    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        اطلاعات خود را وارد کنید
      </h2>

      <p className="text-lg mb-8 text-primary-100">
        فراهم کردن این اطلاعات باعث می‌شود فرایند خرید و فروش خودرو برای شما
        آسان‌تر و سریع‌تر باشد.
      </p>

      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-md mb-6 text-center animate-fade-out">
          اطلاعات با موفقیت ثبت شد
        </div>
      )}

      {showNameSuggestion && (
        <div className="bg-yellow-500 text-white p-3 rounded-md mb-4 text-center">
          لطفاً نام و نام خانوادگی خود را وارد کنید
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label>نام و نام خانوادگی</label>
          <input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setShowNameSuggestion(false);
            }}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder={session?.user?.name || 'نام کامل خود را وارد کنید'}
          />
        </div>

        <div className="space-y-2">
          <label>ایمیل</label>
          <input
            disabled
            value={session?.user?.email || ''}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phonenumber">شماره موبایل</label>
          <input
            name="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="09xxxxxxxxx"
            required
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button
            type="submit"
            className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all"
          >
            ثبت اطلاعات
          </button>
        </div>
      </form>

      <style jsx global>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out 2.5s forwards;
        }
      `}</style>
    </div>
  );
}

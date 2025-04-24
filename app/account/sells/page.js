'use client';

import { useState, useEffect } from 'react';
import { FaCar, FaPhone } from 'react-icons/fa';

export default function SellCarPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    carPrice: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      setShowValidationError(true);
      return;
    }

    console.log('Form submitted:', formData);
    setShowSuccessMessage(true);
    setShowValidationError(false);

    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        city: '',
        carBrand: '',
        carModel: '',
        carYear: '',
        carPrice: '',
      });
    }, 3000);
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-primary-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-10">
            <FaCar className="mx-auto h-12 w-12 text-accent-500" />
            <h2 className="mt-4 text-3xl font-bold text-accent-400">
              فرم فروش خودرو
            </h2>
            <p className="mt-2 text-lg text-primary-300">
              اطلاعات خودروی خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند
            </p>
          </div>

          {showSuccessMessage && (
            <div className="mb-6 bg-green-500 text-white p-4 rounded-lg text-center animate-fade-out">
              درخواست فروش خودرو ی شما با موفقیت ثبت شد. با شما تماس میگیریم.
            </div>
          )}

          {showValidationError && (
            <div className="mb-6 bg-red-500 text-white p-4 rounded-lg text-center">
              لطفاً تمام فیلدهای ضروری را پر کنید
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  نام
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  شماره تماس
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-primary-400">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="09xxxxxxxxx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  شهر
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  برند خودرو
                </label>
                <input
                  type="text"
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  مدل خودرو
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  سال ساخت
                </label>
                <input
                  type="number"
                  name="carYear"
                  value={formData.carYear}
                  onChange={handleChange}
                  required
                  min="1350"
                  max="1402"
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-1">
                  قیمت پیشنهادی (تومان)
                </label>
                <input
                  type="text"
                  name="carPrice"
                  value={formData.carPrice}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-primary-100 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                ثبت درخواست فروش
              </button>
            </div>
          </form>
        </div>
      </div>

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

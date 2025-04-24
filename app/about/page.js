export const metadata = {
  title: 'درباره ی ما',
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 md:gap-x-24 gap-y-16 md:gap-y-32 text-base md:text-lg items-center">
      <div className="md:col-span-3 order-1">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          به پدال گالری خوش آمدید
        </h1>

        <div className="space-y-4 md:space-y-8">
          <p>
            جایی که شما با خیال راحت خودروی مورد نظر خود را پیدا میکنید و با
            خیال راحت خریداری میکنید زیرا حتما شما میدانید که در بازار خودروی
            ایران خرید خودرو فقط خرید یک کالای مصرفی نیست و حتما این امر به دقت
            بالا نیاز دارد.
          </p>
          <p>
            تیم مجموعه ی خوب ما با نهایت تلاش میکوشد تا با برسی های دقیق و لازم
            فضایی امن برای خرید و فروش خودرو شما آماده کند.
          </p>
          <p>
            دو تیم ماهر در زمینه تشخیص بدنه و فنی خودرو در اینجا مشغول به کار
            هستند که همین امر باعث راحتی خیال شما و اعتماد به عملکرد خوش سابقه
            ما خواهد بود.
          </p>
        </div>
      </div>

      <div className="md:col-span-2 order-2">
        <img
          src="/about-1.jpg"
          alt="دست دادن دو فرد"
          className="w-full h-auto "
        />
      </div>

      <div className="md:col-span-2 order-4 md:order-3">
        <img
          src="/about-2.jpg"
          alt="عکس از آقای یوسفی"
          className="w-full h-auto "
        />
      </div>

      <div className="md:col-span-3 order-3 md:order-4">
        <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-accent-400 font-medium">
          تاسیس از سال 1392
        </h1>

        <div className="space-y-4 md:space-y-8">
          <p>
            از سال 1392 این مجموعه توسط آقای محمدرضا یوسفی راه اندازی و مدیریت
            شد. خیلی از مشتری های عزیز ما فقط و فقط به اعتبار نام ایشان از ما
            بدون هیچ پرسشی و با خیال راحت خرید میکنند. اقای یوسفی در زمینه ی
            خودرو های وارداتی نیز فعالیت های مثبتی داشته اند.
          </p>
          <p>
            در طی این سال ها به لطف شما عزیزان ما توانسته توانسته ایم نیاز های
            مردم و درخواست های آن ها را پیدا کرده و بی آن که نیاز به گفتن و
            نگرانی باشد آن هارا برایشان چه هنگام خرید و چه هنگام فروش فراهم
            سازیم.
          </p>

          <div>
            <a
              href="/cars"
              className="inline-block mt-4 bg-accent-500 px-6 py-4 md:px-8 md:py-5 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all "
            >
              بررسی خودرو ها
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import AnimatedTitle2 from '@/components/AnimatedTitle2';

const Contact = () => {
  return (
    <div className="px-6 py-12">
      <div dir="rtl" className="text-right">
        <h1 className="text-black font-bold text-3xl mb-8">
          <AnimatedTitle2 title="أسئلتك تهمنا!" isArabic />
        </h1>
        <h1 className="text-black font-bold text-3xl">
          <AnimatedTitle2 title="دعنا نبدأ الحديث — فريقنا هنا ليقدم لك كل الإجابات التي تبحث عنها." isArabic />
        </h1>
      </div>
      <div className='mt-14'>
        <div>
      <form
  className="max-w-xl mx-auto w-full z-2 backdrop-blur-md bg-white/10 border border-white/30 p-8 rounded-3xl shadow-2xl space-y-6"
  dir="rtl"
>
  <h2 className="text-3xl font-bold text-black text-right">تواصل معنا</h2>

  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium text-black">الاسم الكامل</label>
    <input
      type="text"
      placeholder="اكتب اسمك هنا"
      className="p-3 rounded-xl bg-white/20 text-black placeholder-black/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium text-black">البريد الإلكتروني</label>
    <input
      type="email"
      placeholder="example@email.com"
      className="p-3 rounded-xl bg-white/20 text-black placeholder-black/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium text-black">الرسالة</label>
    <textarea
      rows="5"
      placeholder="اكتب رسالتك هنا..."
      className="p-3 rounded-xl bg-white/20 text-black placeholder-black/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white resize-none"
    ></textarea>
  </div>

  <button
  type="submit"
  className="relative w-full py-3 rounded-xl bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group"
>
  <span className="relative z-10">إرسال</span>
  <span
    className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition duration-300 rounded-xl"
  ></span>
</button>

</form>
</div>
</div>
    </div>
  );
};

export default Contact;

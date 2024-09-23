import React from "react";

const Questions = () => {
  return (
    <div className="mt-8 flex flex-col px-4 text-gray-700 space-y-4 mx-[2em]">
      <p className="py-4 text-2xl font-semibold ">الاسئلة الشائعة</p>
      <ul className="">
        <li>
          <p className="font-semibold py-[1em]">ما هو موقع أحلامي؟</p>
          <h4 className="py-[1em] text-gray-600">
            أحلامي هي بوابتك لفهم نفسك بشكل أعمق من خلال استكشاف أحلامك. نحن
            نستخدم تقنية الذكاء الاصطناعي (AI) إلى جانب مترجمي الأحلام المتمرسين
            لتقديم تفسيرات شخصية وثاقبة للأحلام
          </h4>
        </li>
        <li>
          <p className="font-semibold py-[1em]">كيف يعمل موقع أحلامي؟</p>
          <h4 className="py-[1em]  text-gray-600">
            يستخدم قاموس تفسير الأحلام لدينا أحدث تقنيات الذكاء الاصطناعي لتحليل
            أحلامك وتقديم أدق وأكثر تفسير شمولًا. نأخذ في الاعتبار جميع تفاصيل
            حلمك، بما في ذلك المكان والشخصيات والمشاعر التي شعرت بها، لنقدم لك
            أدق تفسير ممكن. يمكنك إدخال حلمك ومشاعرك أثناء الحلم وأي مرجعية لديك
            مرتبطة بالحلم لتحصل على أدق تفسير للأحلام بشكل مجاني وفوري.
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Questions;

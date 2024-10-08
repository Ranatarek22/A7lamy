import React from "react";

const PrivacyPolicy = () => {
  const policyContent = [
    {
      title: "سياسة الخصوصية",
      content: (
        <p>
          أحد أولوياتنا الرئيسية، والتي يمكن العثور عليها في، هو خصوصية زوارنا.
          يوضح هذا الوثيقة أنواع المعلومات التي نجمعها ونسجلها، وكيفية استخدامنا
          لها. يرجى عدم التردد في الاتصال بنا إذا كان لديك أي أسئلة إضافية أو
          تحتاج إلى تفاصيل إضافية حول سياسة الخصوصية الخاصة بنا. تنطبق هذه
          السياسة على الأنشطة العبر الإنترنت فقط وتنطبق على المعلومات المبادلة
          و/أو المجمعة من قبل زوار موقعنا على الويب. هذه السياسة لا تمتد إلى
          البيانات المجمعة خارج هذا الموقع أو عن طريق وسائل أخرى. الموافقة
        </p>
      ),
    },
    {
      title: "الاتصال بنا",
      content: (
        <p>
          يرجى عدم التردد في الاتصال بنا إذا كان لديك أي أسئلة إضافية أو تحتاج
          إلى تفاصيل إضافية حول سياسة الخصوصية الخاصة بنا.
        </p>
      ),
    },
    {
      title: "الموافقة",
      content: (
        <p>
          من خلال استخدام موقعنا{" "}
          <a
            href="https://www.a7lamy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.a7lamy.com
          </a>
          ، فإنك توافق وتلتزم بشروط سياسة الخصوصية الخاصة بنا.
        </p>
      ),
    },
    {
      title: "المعلومات التي نجمعها",
      content: (
        <p>
          سيتم شرح المعلومات الشخصية التي يُطلب منك تقديمها، وكذلك أسباب طلبها،
          عندما يتم طلبها منك.
        </p>
      ),
    },
    {
      title: "كيفية استخدام معلوماتك",
      content: (
        <ul>
          <li>توفير وتشغيل وصيانة موقعنا على الويب</li>
          <li>تحسين وتخصيص وتوسيع موقعنا على الويب</li>
          <li>الكشف عن كيفية استخدامك لموقعنا على الويب وتقييمه</li>
          <li>إنشاء منتجات وخدمات وميزات وإمكانيات جديدة</li>
          <li>التفاعل معك لأسباب متنوعة، بما في ذلك دعم العملاء</li>
          <li>إرسال رسائل بريد إلكتروني إليك</li>
          <li>العثور على الاحتيال ومنعه</li>
        </ul>
      ),
    },
    {
      title: "سجلات الدخول",
      content: (
        <p>
          استخدام سجلات الدخول أمر متبع. عندما يزور الناس المواقع الإلكترونية،
          تسجل هذه الملفات هوياتهم. يقوم جميع شركات الاستضافة بهذه المهمة كجزء
          من تحليلاتها.
        </p>
      ),
    },
    {
      title: "ملفات تعريف الارتباط وأدوات الويب",
      content: (
        <p>
          تستخدم a7lamy، مثل أي موقع آخر، "ملفات تعريف الارتباط" (الكوكيز). يتم
          استخدام هذه الملفات لحفظ معلومات مثل اهتمامات الزوار والصفحات التي تم
          الوصول إليها أو زيارتها على الموقع.
        </p>
      ),
    },
    {
      title: "حقوق الخصوصية لقانون حماية الخصوصية في كاليفورنيا",
      content: (
        <p>
          لدى المستهلكين في كاليفورنيا الحق، بين أمور أخرى، بموجب قانون حماية
          الخصوصية في كاليفورنيا: طلب من الشركات التي تجمع بيانات شخصية للمستهلك
          الكشف عن الفئات والقطع الفردية من البيانات التي تم جمعها.
        </p>
      ),
    },
    {
      title: "حقوق حماية البيانات طبقًا لقوانين حماية البيانات العامة",
      content: (
        <p>
          نحن نرغب في التأكد من أنك تفهم حقوق خصوصية بياناتك تمامًا. لدى أي
          مستهلك الحقوق التالية...
        </p>
      ),
    },
    {
      title: "معلومات الأطفال",
      content: (
        <p>
          أولوية أخرى لدينا هي تحسين الحماية على الإنترنت للأطفال. يجب على
          الآباء والأوصياء مراقبة والمشاركة والمراقبة وتوجيه أنشطة أطفالهم على
          الإنترنت.
        </p>
      ),
    },
  ];

  return (
    <div className="mt-8 flex flex-col px-4 text-gray-700 space-y-4 mx-[2em]">
      <ul>
        {policyContent.map((policy, index) => (
          <li key={index} className="mb-6">
            <p className="py-4 text-2xl font-semibold">{policy.title}</p>
            <div className="py-[1em] text-gray-600">{policy.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacyPolicy;

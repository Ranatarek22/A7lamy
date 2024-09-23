import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-6 border-t h-20 md:text-sm">
        <div className="text-center flex flex-col md:flex-row gap-2 items-center justify-center text-gray-600">
          <a href="" className="underline underline-offset-4">
            الشروط والاحكام
          </a>
          <a href="" className="underline underline-offset-4">
            السياسه والخصوصيه
          </a>
          <a href="" className="underline underline-offset-4">
            البنود
          </a>
          <a href="" className="underline underline-offset-4">
            عن احلامى
          </a>
          <a href="" className="underline underline-offset-4">
            المدونه
          </a>
          <a href="" className="underline underline-offset-4">
            الاساله الشائعه
          </a>
          <a href="" className="underline underline-offset-4">
            تواصل معنا
          </a>
          <div className="py-4 md:flex md:flex-row-reverse md:items-center md:justify-between text-center text-gray-500">
            <p className="text-sm pb-2 md:py-0">
              أحلامي لتفسير الأحلام بواسطة الذكاء الاصطناعي
            </p>
            أحلامي © 2024 جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

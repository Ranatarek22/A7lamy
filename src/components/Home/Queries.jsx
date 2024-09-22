import { Button } from "@material-tailwind/react";
import React from "react";

const Queries = () => {
  return (
    <div className="flex justify-center">
      <div className="flex  w-[90%] p-4 my-7 rounded-2xl md:flex md:justify-between md:items-center text-center bg-blue-100">
        <p>
          احصل الآن على تفسير شامل وعميق لحلمك مقابل سعر رمزي وخلال ٢٤ ساعة.
        </p>
        <Button className="bg-indigo-500"> التفسير الشامل</Button>
      </div>
    </div>
  );
};

export default Queries;

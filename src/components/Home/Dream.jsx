import { Textarea, Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { apiInstance } from "../../axios";

const Dream = () => {
  const [dreamText, setDreamText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("content", dreamText);

      const res = await apiInstance.post("/ask", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching the response:", error);
      setResponse("حدث خطأ أثناء جلب التفسير.");
    }
  };

  return (
    <div className="rounded-2xl bg-blue-50 p-4 mx-[2em] h-auto">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          اكتب نبذة مختصرة عن الحلم أو الرؤيا
        </label>
        <div className="relative bg-white w-full px-[2em]">
          <Textarea
            variant="static"
            placeholder="اكتب نبذة مختصرة عن الحلم أو الرؤيا وسيقوم الذكاء الاصناعي بتفسير حلمك بناء على علم أفضل المختصين والمفسرين وعلماء النفس وكبار المشايخ."
            rows={8}
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
          />
          <div className="flex w-full justify-between py-1.5">
            <IconButton variant="text" color="blue-gray" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button
            size="sm"
            className="py-2 px-4 rounded-full mt-10 w-1/2 text-center mx-auto bg-indigo-300 text-white"
            type="submit"
          >
            عرض التفسير
          </Button>
        </div>
        {response && (
          <div className="mt-4 p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-semibold">التفسير:</h3>
            <p>{response}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Dream;

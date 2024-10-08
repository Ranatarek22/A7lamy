import { Textarea, Button, IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { apiInstance } from "../../axios";
import { useNavigate } from "react-router-dom";

const Dream = () => {
  const [dreamText, setDreamText] = useState("");
  const [response, setResponse] = useState("");
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || "X"
  );
  const [isFreeTrialUsed, setIsFreeTrialUsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasUsedTrial = localStorage.getItem("freeTrialUsed");
    // let newToken = localStorage.getItem("token") || "X";
    // console.log("new token" + newToken);
    // setToken(newToken);
    if (hasUsedTrial === "true") {
      setIsFreeTrialUsed(true);
    }
  }, []);
  console.log(token);

  const submitDream = async (e) => {
    e.preventDefault();

    if (isFreeTrialUsed && token !== "X") {
      try {
        const formData = new FormData();
        formData.append("content", dreamText);
        formData.append("token", token);

        const res = await apiInstance.post("/ask", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const newToken = res.data.message;
        setToken(newToken);
        console.log(token);
        if (res.status === 200) {
          // const newToken = res.data.message;
          // setToken(newToken);
          // console.log(token);

          setResponse(res.data.data);
          localStorage.setItem("token", newToken);
          localStorage.setItem("freeTrialUsed", "true");
          setIsFreeTrialUsed(true);
        } else if (res.status === 403 || res.status === 404) {

          setResponse(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching the response:", error);
        setResponse("حدث خطأ أثناء جلب التفسير.");
      }
    } else if (isFreeTrialUsed === false) {
      try {
        const formData = new FormData();
        formData.append("content", dreamText);
        formData.append("token", token);
        console.log(token + "token");
        const res = await apiInstance.post("/ask", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const newToken = res.data.message;
        setToken(newToken);
        console.log(token);
        if (res.status === 200) {
          // Success logic for status 200
          const newToken = res.data.message;
          setToken(newToken);
          console.log(token);

          setResponse(res.data.data);
          localStorage.setItem("token", newToken);
          localStorage.setItem("freeTrialUsed", "true");
          setIsFreeTrialUsed(true);
          console.log(res.status);
        } else if (res.status === 403 || res.status === 404) {
          // Logic for status 403 or 404

          console.log(res.status);
          setResponse(res.data.data);
        }
      } catch (error) {
        console.log(token);
        console.error("Error fetching the response:", error);
        setResponse("حدث خطأ أثناء جلب التفسير.");
      }
    }
  };
  const payment = async () => {
    let newToken = localStorage.getItem("token");
    console.log(newToken);
    if (isFreeTrialUsed === "true") {
      if (newToken !== "X") {
        setToken(newToken);
      } else if (token !== "X") {
        setToken(token);
      }
    } else {
      setToken(token);
    }
    console.log("payment token " + token);

    try {
      const res = await apiInstance.get(`/payment`, {
        params: { token },
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      localStorage.setItem("token", token);
      window.location.href = res.data.data;
    } catch (error) {
      console.error("Error fetching ", error);
    }
  };

  const recharge = () => {
    alert("يرجى الانتقال إلى صفحة الشحن لإكمال العملية.");
  };

  return (
    <div className="rounded-2xl bg-blue-50 p-4 mx-[2em] h-auto">
      <form className="flex flex-col justify-center" onSubmit={submitDream}>
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
            <div className="flex w-full mx-0 flex-row-reverse">
              <Button
                size="sm"
                className="py-2 rounded-full mt-10 w-[25%] text-center mx-auto bg-indigo-300 text-white"
                type="submit"
              >
                عرض التفسير
              </Button>

              <Button
                size="sm"
                className="py-2  rounded-full  mt-10 w-[25%] text-center bg-red-400 text-white"
                onClick={payment}
              >
                شحن
              </Button>
            </div>
          </div>
        </div>

        {/* {!isFreeTrialUsed ? (
          <div className="flex justify-center items-center gap-2"></div>
        ) : (
          <div className="flex justify-center items-center gap-2 mt-4">
            <p>لقد استنفدت محاولتك المجانية.</p>
          </div>
        )} */}

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

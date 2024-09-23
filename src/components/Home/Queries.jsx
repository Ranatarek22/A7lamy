import { Button } from "@material-tailwind/react";
import React from "react";

const Queries = ({ parag, btn, flag }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex w-full mx-[2em] p-4 my-7 rounded-2xl md:flex md:justify-between md:items-center text-center 
        ${flag ? "bg-blue-100" : "bg-white border border-gray-300"}`}
      >
        <p>{parag}</p>
        <Button className="bg-indigo-500 mx-[1em] p-[1em] "> {btn}</Button>
      </div>
    </div>
  );
};

export default Queries;

import React, { memo } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Button = ({ text, textColor, bgColor, icAfter, onClick, fullWidth }) => {
  return (
    <button
      type="button"
      className={`p-2 ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } outline-none rounded-md hover:underline flex items-center justify-center gap-1 font-medium`}
      onClick={onClick}
    >
      <span className="text-center">{text}</span>
      {icAfter && (
        <span>
          <icAfter />
        </span>
      )}
    </button>
  );
};

export default memo(Button);

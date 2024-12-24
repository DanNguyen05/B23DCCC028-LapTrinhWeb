import React from "react";

const InputFormV2 = ({
  label,
  unit,
  value,
  setValue,
  name,
  small,
  invalidFields,
  setInvalidFields,
  direction,
}) => {
  return (
    <div className={`flex ${direction ? direction : "flex-col"}`}>
      <label className="flex-none w-48" htmlFor="title">
        {label}
      </label>
      <div className="flex flex-col items-center flex-auto">
        <div className="flex items-center w-full">
          <input
            type="text"
            id="title"
            className={`${
              unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
            } outline-none border flex-auto border-gray-300 p-2`}
            value={value}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [name]: e.target.value }))
            }
            onFocus={() => setInvalidFields && setInvalidFields([])}
          />
          {unit && (
            <span className="flex items-center justify-center flex-none w-16 p-2 bg-gray-200 border rounded-tr-md rounded-br-md">
              {unit}
            </span>
          )}
        </div>
      </div>
      {small && <small className="whitespace-nowrap opacity-70">{small}</small>}
      {invalidFields?.some((item) => item.name === name) && (
        <small className="block w-full text-red-500">
          {invalidFields?.find((item) => item.name === name)?.message}
        </small>
      )}
    </div>
  );
};
export default InputFormV2;

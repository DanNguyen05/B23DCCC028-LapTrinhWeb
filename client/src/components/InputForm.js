import React, { memo } from "react";

const InputForm = ({
  label,
  value,
  setValue,
  keyPayload,
  invalidFields,
  setInvalidFields,
  type,
}) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={type || "text"}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        onFocus={() => setInvalidFields("")}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((item) => item.name === keyPayload) && (
          <small className="italic text-red-500">
            {invalidFields.find((item) => item.name === keyPayload)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);

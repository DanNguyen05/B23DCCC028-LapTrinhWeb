import React from "react";

const InputReadOnly = ({ label, value, direction, editPhone }) => {
  return (
    <div className={`flex ${direction ? direction : "flex-col gap-2"}`}>
      <label className="flex-none w-48 font-medium" htmlFor="exactly-address">
        {label}
      </label>
      <div className="flex-auto">
        <input
          type="text"
          id="exactly-address"
          readOnly
          className="w-full p-2 bg-gray-100 border border-gray-200 rounded-md outline-none"
          value={value || ""}
        />
        {editPhone && (
          <small className="py-4 text-blue-500 cursor-pointer">
            Đổi số điện thoại
          </small>
        )}
      </div>
    </div>
  );
};

export default InputReadOnly;

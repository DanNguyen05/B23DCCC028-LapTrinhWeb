import React, { memo } from "react";

const Select = ({
  label,
  options,
  value,
  setValue,
  type,
  reset,
  name,
  invalidFields,
  setInvalidFields,
}) => {
  const handleErrorText = () => {
    let nameInvalid = invalidFields?.find((item) => item.name === name);
    let addressInvalid = invalidFields?.find((item) => item.name === "address");
    return (
      `${nameInvalid ? nameInvalid.message : ""}` ||
      `${addressInvalid ? addressInvalid.message : ""}`
    );
  };

  return (
    <div className="flex flex-col flex-1 gap-2">
      <label className="font-medium" htmlFor="select-address">
        {label}
      </label>
      <select
        value={reset ? "" : value}
        onChange={(e) => {
          !name
            ? setValue(e.target.value)
            : setValue((prev) => ({ ...prev, [name]: e.target.value }))
        }}
        id="select-address"
        className="w-full p-2 border border-gray-300 rounded-md outline-none"
        onFocus={() => setInvalidFields([])}
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          return (
            <option
              key={
                type === "province"
                  ? item?.code
                  : type === "district"
                  ? item?.district_id
                  : item?.code
              }
              value={
                type === "province"
                  ? item?.code
                  : type === "district"
                  ? item?.district_id
                  : item?.code
              }
            >
              {type === "province"
                ? item?.name
                : type === "district"
                ? item?.name
                : item?.value}
            </option>
          );
        })}
      </select>
      {invalidFields && (
        <small className="text-red-500">{handleErrorText()}</small>
      )}
    </div>
  );
};

export default memo(Select);

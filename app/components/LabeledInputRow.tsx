import React from "react";

interface ILabeledInputRow {
  labelClassName: string;
  labelText: string | JSX.Element;
  inputClassName: string;
  inputId: string;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
  required: boolean;
}

const LabeledInputRow = ({
  labelClassName,
  labelText,
  inputClassName,
  inputId,
  inputType,
  inputName,
  inputPlaceholder,
  required,
}: ILabeledInputRow) => {
  return (
    <>
      <label className={labelClassName} htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className={inputClassName}
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        required={required}
      />
    </>
  );
};

export default LabeledInputRow;

import React, { FC, HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  title: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage: string;
  pattern?: string;
  required?: boolean;
  inputProps: any;
  isValid: boolean;
}

const TextInput: FC<TextInputProps> = ({
  title,
  placeholder,
  type,
  errorMessage,
  pattern,
  required,
  inputProps,
  isValid,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-sm mb-2">{title}</p>
        <p className="font-bold text-sm mb-2 text-red-500">
          {isValid && errorMessage}
        </p>
      </div>
      <input
        type={type || "text"}
        placeholder={placeholder || title}
        pattern={pattern}
        required={required}
        className="w-full py-4 px-6 rounded-lg border border-gray-300 invalid:bg-red-100 invalid:border-2 invalid:border-red-500 invalid:text-red-600 focus:outline-none"
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;

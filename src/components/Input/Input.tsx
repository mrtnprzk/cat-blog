import type { FC, ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  textarea?: boolean;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  textarea = false,
  type = "text",
}) => {
  const inputClass = "border rounded py-1.5 px-3";

  return (
    <div className="flex flex-col space-y-2">
      {label ? <label>{label}</label> : null}
      {textarea ? (
        <textarea className={inputClass} />
      ) : (
        <input
          type={type}
          className={inputClass}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;

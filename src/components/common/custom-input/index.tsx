// React
import {
  useState,
  ReactNode,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from "react";
// Icons
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

type InputProps = {
  label?: string;
  icon?: ReactNode;
  //   error?: { [key: string]: { message?: string } };
  error?: { [key: string]: string | undefined };
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  error = {},
  icon,
  type = "text",
  isRequired = true,
  containerClassName = "",
  inputClassName = "",
  iconClassName = "",
  ...props
}: InputProps) => {
  // ################### REACT HOOKS ###################
  const [inputType, setInputType] = useState<string>(type);

  // ################### SETTINGS ###################
  const hasErr = props?.name && error[props.name];

  // ################### HANDLER ###################
  const toggleType = () =>
    setInputType((prev) => (prev === "password" ? "text" : "password"));

  // ################### CONTENT ###################
  let inputIcon;
  if (type === "password") {
    inputIcon = (
      <span
        onClick={toggleType}
        className={`text-contentColor absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl ${iconClassName}`}
      >
        {inputType === "password" ? <EyeOff /> : <Eye />}
      </span>
    );
  } else if (icon) {
    inputIcon = (
      <span
        className={`text-contentColor absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl ${iconClassName}`}
      >
        {icon}
      </span>
    );
  }

  return (
    <div className={containerClassName}>
      {label && (
        <Label
          htmlFor={props.name}
          className={`text-headingColor mb-2 block text-md ${isRequired ? "after:text-red-500 after:content-['*']" : ""}`}
        >
          {label}
        </Label>
      )}
      <div
        className={`relative w-full overflow-hidden rounded-md border ${hasErr ? "border-red-600" : "border-borderColor"} focus-within:border-primary`}
      >
        <Input
          id={props.name}
          type={inputType}
          className={`${icon ? "pe-14 ps-2" : "px-2"} ${inputClassName}`}
          //   className={`size-full rounded-xl ${icon ? "pe-14 ps-2" : "px-2"} ${inputClassName}`}
          autoComplete={type === "password" ? "off" : "on"}
          {...props}
        />
        {inputIcon}
      </div>

      {hasErr && (
        <small className="flex items-center gap-2 text-red-400">
          {/* <CircleAlert /> {error[props.name as string].message} */}
          <CircleAlert size={16} /> {error[props.name as string]}
        </small>
      )}
    </div>
  );
};
export default InputField;

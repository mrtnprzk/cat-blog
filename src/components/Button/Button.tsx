import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("text-white w-fit py-1.5 px-3 rounded", {
  variants: {
    variant: {
      default: "bg-fontBlue",
      gray: "bg-fontGrayLight",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
};

export default Button;

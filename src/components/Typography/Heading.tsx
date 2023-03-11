import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("font-bold text-black", {
  variants: {
    size: {
      xs: "text-[1rem] leading-[1.25rem]",
      sm: "text-[1.75rem] leading-[1.25rem] text-fontGrayDark",
      md: "text-[2rem] leading-[1.25rem]",
      lg: "text-[2.5rem] leading-[3rem]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, ...props }) => {
  return (
    <h2 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h2>
  );
};

export default Heading;

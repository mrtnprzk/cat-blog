import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const paragraphVariants = cva("text-fontGrayDark", {
  variants: {
    size: {
      sm: "text-[0.875rem] leading-[1.25rem] text-fontGrayLight",
      md: "text-[1rem] leading-[1.5rem]",
      lg: "text-[1.25rem] leading-[2.125rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <p {...props} className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  );
};

export default Paragraph;

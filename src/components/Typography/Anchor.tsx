import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const anchorVariants = cva("text-fontBlue", {
  variants: {
    size: {
      sm: "text-[0.875rem] leading-[1.25rem]",
      md: "text-[1rem] leading-[1.5rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AnchorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof anchorVariants> {}

const Anchor: FC<AnchorProps> = ({ children, className, size, ...props }) => {
  return (
    <span {...props} className={cn(anchorVariants({ size, className }))}>
      {children}
    </span>
  );
};

export default Anchor;

import { FC } from "react";

interface ArrowRightProps {
  size?: Number;
}

const ArrowRight: FC<ArrowRightProps> = ({ size = 5 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-${size} h-${size}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default ArrowRight;
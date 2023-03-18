import { FC } from "react";
import Button from "../Button/Button";

interface FeaturedImageProps {
  label: string;
}

//TODO: Add image upload functionality

const FeaturedImage: FC<FeaturedImageProps> = ({ label }) => {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label>{label}</label>
      <Button variant="gray">Upload an Image</Button>
    </div>
  );
};

export default FeaturedImage;

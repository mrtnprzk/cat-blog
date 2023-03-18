import { FC } from "react";
import Image from "next/image";

import ChevronDown from "@/components/Icons/ChevronDown";
import ChevronUp from "@/components/Icons/ChevronUp";
import Heading from "@/components/Typography/Heading";
import Paragraph from "@/components/Typography/Paragraph";

interface CommentProps {
  imgSrc: string;
  author: string;
  text: string;
}

const Comment: FC<CommentProps> = ({ imgSrc, author, text }) => {
  return (
    <div className="flex space-x-6">
      <div
        className={`relative w-11 h-11 rounded-full overflow-hidden ${
          !imgSrc && "bg-fontGrayLight"
        }`}
      >
        <Image src={imgSrc} alt="img" fill className="object-cover" />
      </div>
      <div className="flex flex-col space-y-2 w-fit">
        <div className="flex items-center space-x-2">
          <Heading size={"xs"}>{author}</Heading>
          <Paragraph size={"sm"}>2 hours ago</Paragraph>
        </div>
        <Paragraph>{text}</Paragraph>
        <div className="flex item-center">
          <Paragraph className="pr-2 border-r">+3</Paragraph>
          <div className="px-2 border-r">
            <ChevronUp  onClick={() => alert('TODO thumbs up')} />
          </div>
          <div className="px-2 border-r">
            <ChevronDown onClick={() => alert('TODO thumbs down')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

import { FC, useState } from "react";
import Image from "next/image";

import Heading from "@/components/Typography/Heading";
import Comment from "../Comment/Comment";
import Input from "@/components/Input/Input";
import { Comment as CommentType } from "../types";

interface CommentSectionProps {
  id: string;
  comments: CommentType[];
}

const CommentSection: FC<CommentSectionProps> = ({ id, comments }) => {
  const [value, setValue] = useState("");

  const imgSrc = "/delete/avatar.jpeg"; //TODO fetch imgSrc

  return (
    <div className="flex flex-col gap-6">
      <Heading size={"sm"}>Comments ({comments?.length ?? "NaN"})</Heading>
      <div className="flex items-center space-x-6">
        <div
          className={`relative w-11 h-11 rounded-full overflow-hidden ${
            !imgSrc && "bg-fontGrayLight"
          }`}
        >
          <Image src={imgSrc} alt="img" fill className="object-cover" />
        </div>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Join the discussion"
        />
      </div>

      {comments?.map(({ author, text }, i) => (
        <Comment key={i} imgSrc={imgSrc} author={author} text={text} />
      ))}
    </div>
  );
};

export default CommentSection;

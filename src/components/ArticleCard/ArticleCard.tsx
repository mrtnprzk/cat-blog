import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Anchor from "../Typography/Anchor";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

interface ArticleCardProps {
  id: number;
  title: string;
  paragraph: string;
  author: string;
  date: string;
  imgSrc: string;
  comments: number;
}

const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  paragraph,
  author,
  date,
  comments,
  imgSrc,
}: ArticleCardProps) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6 md:flex-row md:h-60">
      <div
        className={`relative h-64 w-full overflow-hidden md:w-64 md:h-full ${
          !imgSrc && "bg-fontGrayLight"
        }`}
      >
        <Image src={imgSrc} alt="img" fill className="object-cover" />
      </div>
      <div className="flex flex-col max-w-md max-h-60 lg:max-w-xl gap-2 md:gap-4">
        <Heading size={"sm"} className="line-clamp-2">
          {title}
        </Heading>
        <div className="flex items-center space-x-3">
          <Paragraph size={"sm"}>{author ?? "NaN"}</Paragraph>{" "}
          <span className="bg-fontGrayLight w-1 h-1 rounded-full" />{" "}
          <Paragraph size={"sm"}>{date ?? "-"}</Paragraph>
        </div>
        <Paragraph className="max-h-28 line-clamp-4">{paragraph}</Paragraph>
        <div className="flex items-center space-x-5">
          <Link href={`/${id}`}>
            <Anchor size={"sm"}>Read whole article</Anchor>
          </Link>
          <Paragraph size={"sm"}>{comments ?? 0} comments</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

import Heading from "@/components/Typography/Heading";
import Paragraph from "@/components/Typography/Paragraph";
import Image from "next/image";
import { FC } from "react";

interface ArticleSectionProps {
  title: string;
  paragraph: string;
  author: string;
  date: string;
  imgSrc: string;
}

const ArticleSection: FC<ArticleSectionProps> = ({
  title,
  paragraph,
  author,
  date,
  imgSrc,
}) => {
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex items-center space-x-3">
        <Paragraph size={"sm"}>{author}</Paragraph>{" "}
        <span className="bg-fontGrayLight w-1 h-1 rounded-full" />{" "}
        <Paragraph size={"sm"}>{date}</Paragraph>
      </div>
      <div
        className={`relative overflow-hidden w-full h-72 md:h-96 lg:h-[504px] ${
          !imgSrc && "bg-fontGrayLight"
        }`}
      >
        <Image src={imgSrc} alt="img" fill className="object-cover" />
      </div>
      <Paragraph>{paragraph}</Paragraph>
    </>
  );
};

export default ArticleSection;

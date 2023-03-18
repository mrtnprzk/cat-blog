import { FC } from "react";

import ArticleSection from "./ArticleSection/ArticleSection";
import CommentSection from "./CommentSection/CommentSection";
import { Comment } from "./types";

interface ArticlePostProps {
  id: string;
  title: string;
  paragraph: string;
  author: string;
  date: string;
  imgSrc: string;
  comments: Comment[];
}

const ArticlePost: FC<ArticlePostProps> = ({
  id,
  title,
  paragraph,
  author,
  date,
  imgSrc,
  comments,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <ArticleSection
        title={title}
        paragraph={paragraph}
        author={author}
        date={date}
        imgSrc={imgSrc}
      />
      <div className="border border-t-fontGrayLight mt-4" />
      <CommentSection id={id} comments={comments} />
    </div>
  );
};

export default ArticlePost;

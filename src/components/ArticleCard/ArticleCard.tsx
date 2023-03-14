import Image from "next/image";
import { FC } from "react";
import Anchor from "../Typography/Anchor";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

interface ArticleCardProps {}

const ArticleCard: FC<ArticleCardProps> = ({}) => {
    //TODO Finish this component

  return (
    <div className="flex flex-col gap-3 md:gap-6 md:flex-row md:h-60">
      <div className="relative h-64 w-full overflow-hidden md:w-64 md:h-full">
        <Image src={"/delete/cat.png"} alt="img" fill className="object-cover"/>
      </div>
      <div className="flex flex-col max-w-md lg:max-w-xl gap-2 md:gap-4">
        <Heading size={'sm'}>Why Do Cats Have Whiskers?</Heading>
        <div className="flex">
          <span>Elisabeth Strain</span> <span>.</span> <span>02/13/17</span>
        </div>
        <Paragraph>
          A cat whiskers — or vibrissae — are a well-honed sensory tool that
          helps a cat see in the dark and steer clear of hungry predators.
          Whiskers are highly sensitive tactile hairs that grow in patterns on a
          cat muzzle, above its eyes and elsewhere on its body, like the ears,
          jaw and forelegs
        </Paragraph>
        <div className="flex">
          <Anchor>Read whole article</Anchor>
          <Paragraph>0 comments</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

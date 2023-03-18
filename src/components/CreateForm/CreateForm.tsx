import { FC, Dispatch, SetStateAction, FormEvent } from "react";

import Button from "../Button/Button";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import Input from "../Input/Input";
import Heading from "../Typography/Heading";

interface CreateFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateForm: FC<CreateFormProps> = ({
  title,
  setTitle,
  text,
  setText,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-4 mb-2 md:flex-row md:items-center md:gap-8">
        <Heading>Create new article</Heading>
        <Button type="submit">Publish Article</Button>
      </div>
      <Input
        label="Article Title"
        placeholder="My First Article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FeaturedImage label="Featured image" />
      <Input
        textarea
        label="Content"
        placeholder="Supports markdown. Yay!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default CreateForm;

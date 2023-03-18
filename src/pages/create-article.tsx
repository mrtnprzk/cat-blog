import { useState, FormEvent } from "react";
import CreateForm from "@/components/CreateForm/CreateForm";

//TODO CreateArticle mutation success and error handling + validation

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, text);
  };

  return (
    <CreateForm
      title={title}
      setTitle={setTitle}
      setText={setText}
      text={text}
      onSubmit={submitHandler}
    />
  );
}

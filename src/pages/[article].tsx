import { useRouter } from "next/router";

export default function Article() {
  const { query } = useRouter();

  return <h1 className="text-3xl font-bold">Article {query.article}</h1>;
}

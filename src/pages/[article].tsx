import { useRouter } from "next/router";

import Heading from "@/components/Typography/Heading";

export default function Article() {
  const { query } = useRouter();

  return <Heading>Article {query.article}</Heading>;
}

import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Heading from "@/components/Typography/Heading";

export default function Home() {
  //TODO fetch articles and map them with proper props

  return (
    <div className="flex flex-col gap-14">
      <Heading>Recent articles</Heading>
      <div className="flex flex-col gap-8">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </div>
  );
}

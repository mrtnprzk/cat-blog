import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Heading from "@/components/Typography/Heading";

export default function Home() {
  //TODO fetch articles and map them with proper props

  return (
    <div className="flex flex-col gap-7 md:gap-10 lg:gap-14">
      <Heading>Recent articles</Heading>
      <div className="flex flex-col gap-8">
        {[...Array(4)].map((_, i) => (
          <ArticleCard
            key={i}
            id={i}
            title={"Why Do Cats Have Whiskers?"}
            paragraph={
              "A cat whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs A cat whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs"
            }
            author={"Elisabeth Strain"}
            date={"02/13/17"}
            imgSrc={"/delete/cat.png"}
            comments={3}
          />
        ))}
      </div>
    </div>
  );
}

import { useRouter } from "next/router";

import ArticlePost from "@/components/ArticlePost/ArticlePost";

//TODO fetch article by id and pass it to ArticlePost

const DUMMY_COMMENT = [
  {author: "Lily Hawkins", text: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat."},
  {author: "Annette Bell", text: "A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not"},
  {author: "Priscilla Simmmons", text: "In its flawless grace and superior self-sufficiency I have seen a symbol of the perfect beauty and bland impersonality of the universe itself, objectively considered, and in its air of silent mystery there resides for me all the wonder and fascination of the unknown"},
  {author: "Pat Miles", text: "I regard cats as one of the great joys in the world. I see them as a gift of highest order"},
]

export default function Article() {
  const { query } = useRouter();

  if (!query?.article) return null;

  return (
    <ArticlePost
      id={query?.article as string}
      title={"Why Do Cats Have Whiskers?"}
      paragraph={
        "Men might grow a beard or maintain a mustache just for extra style points, but the facial hair of the cat has nothing to do with fashion. A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs. At the root of each of these long, stiff hairs is a follicle loaded with nerves.By brushing its whiskers against an object, a cat can detect the precise location, size and texture of the object, even in the dark. This feature proves particularly useful for a cat trying to gauge whether it can fit into a tight space. Whiskers also detect changes in air currents, helping cats detect approaching dangers. Whiskers not only make cats aware of their surroundings, but can also provide humans with some insight into their pet's state of mind. For example, a set of taut whiskers, pulled back across the face, is a good indication that Kitty feels threatened, while relaxed whiskers, pointing away from the face, indicate a content cat. Of course, cats aren't the only mammals with whiskers. Most mammalian species, including primates, are equipped with these extrasensory receptors. Biologists think mammals developed whiskers because they needed help sensing their environments at night. The first small mammals shared the world with dinosaurs and had to adapt to hunting nocturnally, when their predators were less active. Whiskers helped these hungry animals find food and navigate dark terrain. This evolutionary adaptation also helps to explain why the whiskers of many nocturnal or aquatic carnivores — like rats, seals and walruses — are so prominent."
      }
      author={"Elisabeth Strain"}
      date={"02/13/17"}
      imgSrc={"/delete/cat.png"}
      comments={DUMMY_COMMENT}
    />
  );
}

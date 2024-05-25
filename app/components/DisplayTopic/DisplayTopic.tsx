import Image from "next/image";
import { useAppContext } from "@/app/context";
import Link from "next/link";

interface DisplayTopicProps {
  img: string;
  title: string;
}

export default function DisplayTopic({ img, title }: DisplayTopicProps) {
  const { setSelectedTopic} = useAppContext();

  return (
    <Link href="/">
      <section
        onClick={() => setSelectedTopic({ title: "", img: "" })}
        className="flex flex-row">
        <Image src={img} alt={title} width={20} height={20} />
        <p>{title}</p>
      </section>
    </Link>
  );
}

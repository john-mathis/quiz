import Image from "next/image";

interface DisplayTopicProps{
    img:string,
    title:string
}

export default function DisplayTopic({img, title}:DisplayTopicProps){
    return(<section className="flex flex-row">
    <Image src={img} alt={title} width={20} height={20}/>
    <p>{title}</p>
    </section>)

}
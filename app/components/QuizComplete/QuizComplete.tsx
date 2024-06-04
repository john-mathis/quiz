import Image from "next/image";



interface QuizCompleteProps {
  questionsCorrect: number;
  topic: {title:string, img:string}
}
export default function QuizComplete({questionsCorrect, topic}:QuizCompleteProps) {
  return (
    <section className="xl-flex xl-flex-row mt-8 xs:w-[18rem] w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] xl:w-[35rem]">

      <div className="text-4xl">
        <p className="font-extralight">
          Quiz completed 
        </p>
        <p className="font-semibold">You scored...</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 rounded-xl bg-white dark:bg-[--grey-navy] h-[15.12rem]">
        <div className="flex justify-center mb-8">
        <Image src={topic.img} alt={""} width={20}  height={20}/>
        <p className="text-[1.1rem]">{topic.title}</p>
       </div>

        <div className="flex flex-col items-center justify-center">
        <p className="text-7xl">{questionsCorrect}</p> 
        <p>out of 10</p>
        </div>


      </div>


    </section>
  );
}

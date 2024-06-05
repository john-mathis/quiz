import Image from "next/image";



interface QuizCompleteProps {
  questionsCorrect: number;
  topic: {title:string, img:string}
}
export default function QuizComplete({questionsCorrect, topic}:QuizCompleteProps) {
  return (
    <section>
      <div className="lg:flex justify-between mt-8 xs:w-[18rem] w-[20.43rem] md:w-[40rem] lg:w-[55.5rem] xl:w-[72.5rem]">
      <div className="xl:text-6xl lg:w-2/4 lg:mt-8 lg:text-5xl text-4xl">
        <p className="font-extralight">
          Quiz completed 
        </p>
        <p className="font-semibold">You scored...</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 rounded-xl bg-white dark:bg-[--grey-navy] h-[15.12rem] lg:h-[24.25rem] lg:w-[33.25rem] xl:w-[35rem]">
        <div className="flex justify-center mb-8">
        <Image src={topic.img} alt={""} width={20}  height={20}/>
        <p className="text-[1.1rem]">{topic.title}</p>
       </div>

        <div className="flex flex-col items-center justify-center">
        <p className="text-7xl">{questionsCorrect}</p> 
        <p>out of 10</p>
        </div>
      </div>
      </div>
    </section>
  );
}

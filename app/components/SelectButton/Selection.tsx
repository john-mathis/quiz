import Image from "next/image";

interface SelectionProps {
  img: string;
  title: string;
}

export default function Selection({ img, title }: SelectionProps) {
  return (
    <div className=" flex justify-start items-center px-3 w-[20rem] xs:w-[15rem] md:w-[40rem] h-16 bg-white dark:bg-[--grey-navy] rounded-lg text-white cursor-pointer">
      <Image src={img} alt="" height={40} width={40} />
      <p className="ml-4 text-[--dark-navy] dark:text-white">{title}</p>
    </div>
  );
}

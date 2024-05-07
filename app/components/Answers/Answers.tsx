"use client"
import Selection from "../SelectButton/Selection"
import Data from "../../data.json"

interface QuestionProps{
    letterChoice:string;
    answer:string;
}

export default function Answers({letterChoice, answer}:QuestionProps){
    console.log(Data)
    return (
        <section>
            <div className=" flex justify-start items-center px-3 w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[30.25rem] h-16 bg-white dark:bg-[--grey-navy] rounded-lg text-white cursor-pointer">
            <p className="ml-4 text-[--dark-navy] dark:text-white">{}</p>

            </div>
        </section>
    )
}
"use client"

import { useAppContext } from "@/app/context";
import DisplayTopic from "../DisplayTopic/DisplayTopic";
import ToggleMode from "./ToggleMode";
import { useState,useEffect } from "react";



export default function ToggleModeContainer() {
    const [objectIsEmpty, setObjectIsEmpty] = useState(true);
    const { selectedTopic } = useAppContext();

    useEffect(() => {
        const isObjectEmpty = () => {
            if (Object.keys(selectedTopic).length === 0) {
                setObjectIsEmpty(true);
            } else {
                setObjectIsEmpty(false);
            }
        };

        isObjectEmpty();
    }, [selectedTopic]);

    console.log(selectedTopic);
    
    return (
        <section className={`flex ${objectIsEmpty ? "justify-end" : "justify-between"} mx-auto pt-4 w-[20.43rem] md:w-[40rem] md:pt-8 lg:w-[55.5rem] xl:w-[72.5rem]`}>
            {objectIsEmpty ? "" : <DisplayTopic img={selectedTopic.img} title={selectedTopic.title} />}
            <ToggleMode />
        </section>
    );
}

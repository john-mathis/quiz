"use client";

import { useAppContext } from "@/app/context";
import DisplayTopic from "../DisplayTopic/DisplayTopic";
import ToggleMode from "./ToggleMode";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import path from "path";

export default function ToggleModeContainer() {
  const [objectIsEmpty, setObjectIsEmpty] = useState(true);
  const { selectedTopic } = useAppContext();
  const router = useRouter();
  const pathName = usePathname()

  useEffect(() => {
    if (selectedTopic.title === ""  ) {
      router.push("/");
      setObjectIsEmpty(true);
    } else {
      // router.push(`QuestionPage/${selectedTopic.title}`);
      setObjectIsEmpty(false);
    }
    
  }, [selectedTopic, router, objectIsEmpty]);


  return (
    <section
      className={`flex ${objectIsEmpty ? 'justify-end' : 'justify-between'} 
      } mx-auto pt-4 w-[20.43rem] md:w-[40rem] md:pt-8 lg:w-[55.5rem] xl:w-[72.5rem]`}
    >
      {objectIsEmpty ? (
        ""
      ) : (
        <DisplayTopic img={selectedTopic.img} title={selectedTopic.title} />
      )}
      <ToggleMode />
    </section>
  );
}

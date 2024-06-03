"use client";

import { useAppContext } from "@/app/context";
import DisplayTopic from "../DisplayTopic/DisplayTopic";
import ToggleMode from "./ToggleMode";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ToggleModeContainer() {
  const [objectIsEmpty, setObjectIsEmpty] = useState(true);
  const { selectedTopic, setSelectedTopic } = useAppContext();
  const router = useRouter();
  const pathName = usePathname();

  console.log(selectedTopic);
  console.log(pathName);

  useEffect(() => {
    if (selectedTopic.title === "") {
      router.push("/");
      setObjectIsEmpty(true);
    } else if (selectedTopic.title !== "") {
      router.push(`QuestionPage/${selectedTopic.title}`);
      setObjectIsEmpty(false);
    }
  }, [selectedTopic, router]);

  // Effect to handle URL path changes

  return (
    <section
      className={`flex ${
        objectIsEmpty ? "justify-end" : "justify-between"
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

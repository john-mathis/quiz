"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ToggleMode() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) {
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />;
  }

  const handleToggle = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else if (resolvedTheme === "dark") {
      setTheme("light");
    }
  };

  // }
  return (
    <section>
      <div className="flex flex-row">
      <Image
        src={`${
          resolvedTheme === "dark"
            ? "/icon-sun-dark.svg"
            : "/icon-sun-light.svg"
        }`}
        alt={""}
        width={16}
        height={16}
      />
      <label className="relative inline-block w-[2rem] h-[1.25rem]">
        <input
          className="opacity-0 w-0 h-0 before:translate-x-[.5rem]"
          type="checkbox"
          onClick={handleToggle}
        />
        <span className="slider round bg-[--purple] before:translate-x-[.5rem] absolute cursor-pointer bg-[#ccc] transition-[0.4s] inset-0 before:absolute before:content-[''] before:h-[1rem] before:w-[1rem] before:bg-[white] before:transition-[0.4s] before:left-1 before:bottom-1 before:rounded-[50%] rounded-[2.12rem]"></span>
      </label>
      <Image
        src={`${
          resolvedTheme === "dark"
            ? "/icon-moon-dark.svg"
            : "/icon-moon-light.svg"
        }`}
        alt={""}
        width={16}
        height={16}
      />
      </div>
    </section>
  );
}

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

  // if (resolvedTheme === "dark") {
  //   return (
  //     <IoSunnyOutline
  //       className="cursor-pointer"
  //       onClick={() => setTheme("light")}
  //     />
  //   );
  // }
  // if (resolvedTheme === "light") {
  //   return (
  //     <IoMoonOutline
  //       className="cursor-pointer"
  //       onClick={() => setTheme("dark")}
  //     />
  //   );
  // }
  return (
    <section className="flex justify-end w-[20.43rem] md:w-[40rem] mx-auto pt-4">
      {/* {resolvedTheme === "dark" ? (
        <IoSunnyOutline
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <IoMoonOutline
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )} */}

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
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            if (resolvedTheme === "light") {
              setTheme("dark");
            } else if (resolvedTheme === "dark") {
              setTheme("light");
            }
          }}
        />
        <span className="slider round"></span>
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
    </section>
  );
}

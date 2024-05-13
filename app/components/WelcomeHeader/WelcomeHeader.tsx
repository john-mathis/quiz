export default function WelcomeHeader() {
  return (
    <section className="pt-20 mx-auto text-left w-[20.43rem] xs:w-[15rem] md:w-[40rem] lg:w-[29.06rem] lg:flex lg:flex-col lg:justify-start lg:pt-0 lg:h-[18.25rem] xl:w-[72.5rem]">
      <h1 className="text-4xl xs:text-2xl md:w-[25rem]">
        Welcome to the <span className="font-semibold">Frontend Quiz!</span>{" "}
      </h1>
      <p className="mt-4 mb-8 lg:mt-8 italic text-[--grey-navy] dark:text-[--light-blue]">
        Pick a subject to get started.
      </p>
    </section>
  );
}

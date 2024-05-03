export default function WelcomeHeader() {
  return (
    <section className="pt-20 mx-auto text-left w-[20.43rem] md:w-[40rem]">
      <h1 className="text-4xl md:w-[25rem]">
        Welcome to the <span className="font-semibold">Frontend Quiz!</span>{" "}
      </h1>
      <p className="mt-4 mb-8 italic text-[--grey-navy] dark:text-[--light-blue]">
        Pick a subject to get started.
      </p>
    </section>
  );
}

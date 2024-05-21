import Image from "next/image";
export default function SelectAnswerError() {
  return (
    <div className="flex flex-row justify-center items-center mt-8 text-center m-auto">
      <Image
        className="text-white"
        src={"/icon-error.svg"}
        alt="error icon"
        width={32}
        height={32}
      />
      <p>Please select an answer</p>
    </div>
  );
}

import Questions from "../components/Questions/Questions";
import SubmitButton from "../components/SubmitButton/SubmitButton";

export default function question() {
  

  return (
    <div className="mx-auto flex flex-col items-center">
      <Questions />
      <SubmitButton />
    </div>
  );
}

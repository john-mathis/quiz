interface SubmitButtonProps {
  action: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitButton({ action }: SubmitButtonProps) {
  return (
    <button
      onClick={action}
      className="w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] h-[3.5rem] md:h-[5.75rem] mt-6 bg-[--purple] rounded-lg "
    >
      Submit Answer
    </button>
  );
}

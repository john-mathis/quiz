interface PrimaryButtonProps {
  action: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function PrimaryButton({ action, text }: PrimaryButtonProps) {
  return (
    <button
      onClick={action}
      className="xs:w-[18rem] w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] h-[3.5rem] md:h-[5.75rem] mt-6 bg-[--purple] rounded-lg text-white"
    >
      {text}
    </button>
  );
}

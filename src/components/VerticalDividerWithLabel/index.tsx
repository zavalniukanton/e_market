interface VerticalDividerWithLabelProps {
  label: string;
}

const VerticalDividerWithLabel = ({ label }: VerticalDividerWithLabelProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-px h-full bg-zinc-300" />
      <p className="my-1 mx-6 text-sm text-zinc-500">{label}</p>
      <div className="w-px h-full bg-zinc-300" />
    </div>
  );
};

export default VerticalDividerWithLabel;

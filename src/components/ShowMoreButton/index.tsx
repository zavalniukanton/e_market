import { TiArrowDown } from "react-icons/ti";

interface ShowMoreButtonProps {
  onShowMore: () => void;
}

const ShowMoreButton = ({ onShowMore }: ShowMoreButtonProps) => {
  return (
    <button
      className="absolute right-0 flex justify-center items-center h-10 w-40 rounded border border-zinc-300 text-sky-600 hover:text-red-500"
      onClick={onShowMore}
    >
      Показать еще
      <TiArrowDown style={{ marginLeft: 4 }} />
    </button>
  );
};

export default ShowMoreButton;

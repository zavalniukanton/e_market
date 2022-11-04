import Link from "next/link";

const AllPromotionsButton = () => {
  return (
    <Link href="/promotions" passHref>
      <a className="flex justify-center items-center h-10 w-40 ml-auto rounded border border-zinc-300 text-sky-600 hover:text-red-500">
        Все акции
        <span className="ml-2 text-zinc-500">96</span>
      </a>
    </Link>
  );
};

export default AllPromotionsButton;

import { useState } from "react";

import { Product } from "@models/product.interface";
import ProductCard from "@components/ProductCard";
import ShowMoreButton from "@components/ShowMoreButton";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

const ProductsSection = ({ title, products }: ProductsSectionProps) => {
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const showMoreHandler = () => {
    setIsShowMoreClicked(true);
  };

  const fisrtProductsRow = products.filter((_, index) => index < 6);
  const isShowMoreButtonVisible = products.length >= 6 && !isShowMoreClicked;

  return (
    <section className={`${products.length >= 6 ? "mb-6" : "mb-16"}`}>
      <h2 className="mb-4 text-xl">{title}</h2>

      <div className="grid grid-cols-6 gap-2 mb-2">
        {isShowMoreClicked
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : fisrtProductsRow.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {isShowMoreButtonVisible && (
        <ShowMoreButton onShowMore={showMoreHandler} />
      )}
    </section>
  );
};

export default ProductsSection;

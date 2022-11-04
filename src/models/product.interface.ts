import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  currency: string;
  image: StaticImageData;
}

export interface ProductType {
  description_ru: string;
  description_uz: string;
  image: string;
  name_uz: string;
  name_ru: string;
  price_usd: string;
  price_uzs: string;
  slug: string;
}

export interface DesktopType {
  fps: string;
  brand: {
    id: number;
    name: "HP";
  };
  cooler: string;
  description_ru: string;
  description_uz: string;
  image: string;
  memory: string;
  monitor: number;
  name_ru: string;
  name_uz: string;
  price_usd: string;
  price_uzs: string;
  processor: string;
  resolution: string;
  videocard: string;
}
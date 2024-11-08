import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugifyString = (value: string) => {
  return value.replace(/ /g, "-");
};

export const deSlugifyString = (value: string) => {
  return value.replace(/-/g, " ");
};

export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

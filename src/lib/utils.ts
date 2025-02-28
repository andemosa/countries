import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const getCurrencyNames = (
  currencies: Record<string, { name: string; symbol: string }>
) => {
  const currencyNames: string[] = [];
  for (const key in currencies) {
    if (currencies.hasOwnProperty(key)) {
      currencyNames.push(currencies[key].name);
    }
  }
  return currencyNames.join(", ");
};

export const getLanguageNames = (languages: Record<string, string>) => {
  const languageNames: string[] = [];
  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      languageNames.push(languages[key]);
    }
  }
  return languageNames.join(", ");
};

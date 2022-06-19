import { API } from "../../types";
import { dailyCategories, hourlyCategories } from "./categories";

export type Quote = {
  author?: string;
  quote: string;
  timestamp: number;
};

type Data = {
  categories: QuoteCategory[];
};

type Cache = Quote;

export type Props = API<Data, Cache>;

export const defaultData: Data = {
  categories: ["inspire"],
};

export type QuoteCategory =
  | typeof dailyCategories[number]["key"]
  | typeof hourlyCategories[number]["key"];

export type TSSQuoteResponse = {
  contents: {
    quotes: {
      quote: string;
      author: string;
      category: string;
    }[];
  };
  error: Error;
};

export type TSSBibleResponse = {
  contents: {
    verse: string;
    number: string;
    chapter: string;
    book: string;
  };
  error: Error;
};

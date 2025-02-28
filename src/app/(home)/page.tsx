"use client";

import useSWR from "swr/immutable";

import SkeletonDisplay from "./_components/SkeletonDisplay";
import CountriesDisplay from "./_components/CountriesDisplay";

import { countriesData } from "@/data";
import { fetcher } from "@/lib/utils";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (isLoading) return <SkeletonDisplay />;

  //show local data as fallback
  if (error) return <CountriesDisplay countries={countriesData} />;

  return <CountriesDisplay countries={data} />;
}

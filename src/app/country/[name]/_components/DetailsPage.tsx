"use client";

import useSWR from "swr/immutable";
import Link from "next/link";

import CountryDetails from "./CountryDetails";
import SkeletonDisplay from "./SkeletonDisplay";

import { countriesData } from "@/data";
import { ICountry } from "@/types";
import { fetcher } from "@/lib/utils";

const DetailsPage = ({ code }: { code: string }) => {
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/alpha/${code}`,
    fetcher
  );

  if (isLoading) return <SkeletonDisplay />;

  //show local data as fallback
  if (error) {
    const countryData = countriesData.find((c) => c.cca3 === code) as ICountry;

    if (!countryData)
      return (
        <div className="py-6 text-center space-y-4">
          <h3 className="font-semibold text-lg text-red-500">
            There is no country matching this code
          </h3>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      );

    return <CountryDetails {...countryData} />;
  }

  if (data) {
    const countryData = data[0];
    return <CountryDetails {...countryData} />;
  }

  return null;
};

export default DetailsPage;

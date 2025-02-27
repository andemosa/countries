"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import CountryGrid from "./CountryGrid";

import { ICountry } from "@/types";

const displayCountries = (
  countries: ICountry[],
  region: string,
  country: string
) => {
  if (!countries) return [];

  if (region) {
    return countries.filter((c) => c.region.toLowerCase() === region);
  }

  if (country) {
    return countries.filter((c) =>
      c.name?.common?.toLowerCase().includes(country.toLowerCase())
    );
  }

  return countries;
};

const CountriesDisplay = ({ countries }: { countries: ICountry[] }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const countriesToShow = displayCountries(countries, region, country).sort(
    (a, b) => a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="space-y-6">
      <SearchBar
        country={country}
        region={region}
        setCountry={setCountry}
        setRegion={setRegion}
      />
      <CountryGrid countries={countriesToShow} />
    </div>
  );
};

export default CountriesDisplay;

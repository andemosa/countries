import CountryCard from "./CountryCard";

import { ICountry } from "@/types";

const CountryGrid = ({ countries }: { countries: ICountry[] }) => {
  return (
    <>
      {!countries || !countries.length ? (
        <div className="py-6 text-center">
          <h3 className="font-semibold text-lg text-red-500">
            There are no countries to display
          </h3>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country) => (
            <CountryCard key={country.name.common} {...country} />
          ))}
        </div>
      )}
    </>
  );
};

export default CountryGrid;

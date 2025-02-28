import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ICountry } from "@/types";
import { countriesData } from "@/data";
import { getCurrencyNames, getLanguageNames } from "@/lib/utils";

const CountryDetails = ({
  flags,
  name,
  tld,
  currencies,
  languages,
  capital,
  borders,
  population,
  region,
  subregion,
}: ICountry) => {
  return (
    <div className="space-y-8">
      <Link href="/">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[3/2] w-full">
          <img
            src={flags?.svg || "/placeholder.svg"}
            alt={`Flag of ${name?.common}`}
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{name?.official}</h1>

          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            <p>
              <span className="font-semibold">Native Name:</span>&nbsp;
              {name?.common}
            </p>
            <p>
              <span className="font-semibold">Population:</span>&nbsp;
              {population?.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {region}
            </p>
            {subregion ? (
              <p>
                <span className="font-semibold">Sub Region:</span>&nbsp;
                {subregion}
              </p>
            ) : null}
            {capital && capital.length ? (
              <p>
                <span className="font-semibold">Capital:</span> {capital[0]}
              </p>
            ) : null}
            {tld && tld.length ? (
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {tld.join(", ")}
              </p>
            ) : null}

            <p>
              <span className="font-semibold">Currencies:</span>&nbsp;
              {getCurrencyNames(currencies)}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>&nbsp;
              {getLanguageNames(languages)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">Border Countries:</span>
            {borders?.map((c) => (
              <BorderButton code={c} key={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BorderButton = ({ code }: { code: string }) => {
  const country = countriesData.find((c) => c.cca3 === code) as ICountry;

  return (
    <Link href={`/country/${country.cca3}`}>
      <Button variant="outline">
        {country.name.common}
      </Button>
    </Link>
  );
};

export default CountryDetails;

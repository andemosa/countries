import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { ICountry } from "@/types";

const CountryCard = ({
  name,
  flags,
  population,
  region,
  capital,
  cca3,
}: ICountry) => {
  return (
    <Link href={`/country/${cca3}`}>
      <Card className="h-full transition-transform hover:transform hover:scale-105">
        <CardHeader className="p-0">
          <div className="relative aspect-[3/2] w-full">
            <img
              src={flags.svg || "/placeholder.svg"}
              alt={`Flag of ${name.common}`}
              className="object-cover h-[200px]"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-bold">{name.official}</h2>
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Population:</span>&nbsp;
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {capital?.[0]}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;

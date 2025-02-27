"use client";

import { Dispatch, SetStateAction } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchBar = ({
  country,
  region,
  setCountry,
  setRegion,
}: {
  setCountry: Dispatch<SetStateAction<string>>;
  setRegion: Dispatch<SetStateAction<string>>;
  country: string;
  region: string;
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="relative flex-1 md:max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10"
          placeholder="Search for a country..."
          type="search"
          value={country}
          onChange={(e) => {
            setRegion("");
            setCountry(e.target.value);
          }}
        />
      </div>
      <Select
        value={region}
        onValueChange={(value) => {
          setCountry("");
          setRegion(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="americas">America</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
          <SelectItem value="antarctic">Antarctic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchBar;

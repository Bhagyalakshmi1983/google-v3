import React from "react";
import SearchHeaderOption from './SearchHeaderOption';
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full  text-sm text-gray-700 lg:justify-start lg:pl-52 border-b justify-center">
      <SearchHeaderOption title="All" Icon={MagnifyingGlassIcon}
        selected={router.query.searchType ==="" ||!router.query.searchType} />
      <SearchHeaderOption title="images" Icon={PhotoIcon}
        selected={router.query.searchType === "Image" } />
    </div>
  );
}

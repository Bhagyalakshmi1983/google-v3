import Head from "next/head";
import SearchHeader from "../Components/searchHeader";
import React from "react";

export default function search() {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/*Search Header*/}
      <SearchHeader />
      {/*Search Result*/}
    </div>
  );
}

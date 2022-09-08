import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../Components/searchHeader";
import Response from "../Response";
import SearchResults from "../Components/SearchResults";
import ImageResults from "../Components/ImageResults";

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      {/*Search Header*/}
      <SearchHeader />
      {/*Search Web and Images Result*/}
      {router.query.searchType === "image" ? (

        <ImageResults results={results} />
      ) : (

        <SearchResults results={results} />
      )}
    </div>
  );
}
export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response) => response.json());
  return {
    props: {
      results: data
    }
  };
}

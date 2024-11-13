import React from "react";
import Link from "next/link";

type LoadMoreProps = {
  basePath: string;
  page: number;
};
export function LoadMore({ basePath, page }: LoadMoreProps) {
  const createPageUrl = (pageNumber: number) =>
    `${basePath}?page=${pageNumber}`;

  return (
    <Link
      className="self-center text-primary-400 bg-primary-100 py-4 px-8 cursor-pointer rounded-lg"
      href={createPageUrl(page + 1)}
    >
      Load More
    </Link>
  );
}

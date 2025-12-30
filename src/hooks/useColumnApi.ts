import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { columnApi } from "~/apis";
import { Column } from "~/models";

type UseFetchColumnPostsQuery = UseInfiniteQueryResult<
  Column[],
  AxiosError<void>
>;

export const useFetchColumnPostsQuery = (): UseFetchColumnPostsQuery =>
  useInfiniteQuery({
    queryKey: ["fetchColumnPosts"],
    queryFn: ({ pageParam = 0 }) =>
      columnApi.fetchColumnPosts({
        page: pageParam,
        size: 10,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.data?.data?.length) {
        return undefined;
      }

      const currentPage = lastPage.data.paging.currentPage;
      const totalPage = lastPage.data.paging.totalPage;
      if (currentPage >= totalPage) {
        return undefined;
      }
      const hasMore = currentPage < totalPage;
      return !hasMore ? undefined : currentPage + 1;
    },
    select: (data) => data.pages.flatMap((page) => page.data.data),
  });

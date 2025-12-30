export type ColumnRequest = {
  size: number;
  page: number;
};

export type Column = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type ColumnResponse = {
  paging: {
    currentPage: number;
    totalPage: number;
  };
  data: Column[];
};

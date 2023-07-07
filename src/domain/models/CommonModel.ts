export type CommonVariables = {
  page: number;
  size: number;
  [key: string]: any;
};

export type CommonPaginationSort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export type CommonPaginationPageable = {
  sort: CommonPaginationSort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export type CommonPagination<Data = any> = {
  content: Data[];
  sort: CommonPaginationSort;
  pageable: CommonPaginationPageable;

  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements: number;

  first: boolean;
  last: boolean;
  empty: boolean;
};

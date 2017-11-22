const PAGES = 'PAGES';
const pages = (item: number) => ({
  type: PAGES,
  amount: item
});

const CHANGE_PAGE = 'CHANGE_PAGE';
const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  page: page
});

export const resume = {
  PAGES: PAGES,
  pages: pages,
  CHANGE_PAGE: CHANGE_PAGE,
  changePage: changePage
};

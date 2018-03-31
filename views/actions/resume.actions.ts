const PAGES = 'PAGES';
const pages = (item: number) => ({
  type: PAGES,
  payload: item
});

const CHANGE_PAGE = 'CHANGE_PAGE';
const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  payload: page
});

const PAGE_RESIZE = 'PAGE_RESIZE';
const pageResize = (pixels: number) => ({
  type: PAGE_RESIZE,
  payload: pixels
});

export const resume = {
  PAGES: PAGES,
  pages: pages,
  CHANGE_PAGE: CHANGE_PAGE,
  changePage: changePage,
  PAGE_RESIZE: PAGE_RESIZE,
  pageResize: pageResize
};

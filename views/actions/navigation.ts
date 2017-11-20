const SELECT_BANNER = 'SELECT_BANNER';
const selectBanner = (item: number) => ({
  type: SELECT_BANNER,
  selectedItem: item
});

export const navigation = {
  SELECT_BANNER: SELECT_BANNER,
  selectBanner: selectBanner
};

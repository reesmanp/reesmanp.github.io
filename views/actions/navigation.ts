const SELECTED_BANNER = 'SELECTED_BANNER';
const selectedBanner = (item: number) => ({
  type: SELECTED_BANNER,
  selectedItem: item
});

export {
  selectedBanner
};

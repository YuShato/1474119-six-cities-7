import dayjs from 'dayjs';

export const getMonth = (date) => new Date(date).toLocaleString('ru', {
  month: 'long',
});

export const getYear = (date) => new Date(date).getFullYear();

export const getDate = (date) => dayjs(date).format('YYYY-MM-DD');

export const getSorting = (offers, sortOption) => {
  switch (sortOption.id) {
    case 'price-from-low':
      return offers.sort((a, b) => a.price - b.price);
    case 'price-from-high':
      return offers.sort((a, b) => b.price - a.price);
    case 'price-top-rated':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

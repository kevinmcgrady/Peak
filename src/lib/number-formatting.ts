export const formatCurrency = (number: number) => {
  return Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(number);
};

export const calculateFee = (price: number) => {
  return (price / 100) * 3;
};

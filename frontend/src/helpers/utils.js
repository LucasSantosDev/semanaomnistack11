export const dot3 = (txt, limit = 150) => {
  return txt.length > limit ? `${txt.substring(0, limit)}...` : txt;
};

export const formatCurrencyBR = value => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};



export const formattedAmount = (amount) => {
  // Создаем объект для форматирования чисел
  // 'ru-RU' - это локаль, которая использует пробел для разделения тысяч
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formatter.format(amount);
};
export default function filter(obj: { [key: string]: number }) {
  // Преобразование объекта в массив пар ключ-значение
  const entries = Object.entries(obj);

  // Сортировка массива по убыванию значений
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  // Создание нового массива из отсортированных пар ключ-значение
  return sortedEntries.map(([key, value]) => ({ [key]: value }));
}

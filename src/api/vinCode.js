export const decodeVin = async (vin) => {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
    );
    const data = await response.json();
    return data.Results.filter((result) => result.Value); // Возвращаем только результаты, где значение заполнено
  } catch (error) {
    console.error("Помилка при розшифровці VIN:", error);
    return [];
  }
};

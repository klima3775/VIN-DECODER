export const fetchVariableDetails = async (variableId) => {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const variableDetail = data.Results.find(
      (v) => v.ID === parseInt(variableId)
    );
    return variableDetail;
  } catch (error) {
    console.error("Помилка при отриманні деталей змінної:", error);
    throw error;
  }
};

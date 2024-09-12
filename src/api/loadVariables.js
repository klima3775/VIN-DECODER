export const fetchVariablesList = async () => {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error("Error fetching variables list:", error);
    throw error;
  }
};

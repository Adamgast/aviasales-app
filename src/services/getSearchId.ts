export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const result = await response.json();
  return result.searchId;
};

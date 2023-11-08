export const getTickets = async (searchId: string) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  if (!response.ok) throw new Error(`Status code ${response.status}`);
  const result = await response.json();
  return result;
};

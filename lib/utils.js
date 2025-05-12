export function parseServerActionResponse(response) {
  return JSON.parse(JSON.stringify(response));
}

export function formatDate(input) {
  const date = new Date(input);
  return date.toISOString().split("T")[0]; // returns "YYYY-MM-DD"
}

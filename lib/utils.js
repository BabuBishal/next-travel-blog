export function parseServerActionResponse(response) {
  return JSON.parse(JSON.stringify(response));
}

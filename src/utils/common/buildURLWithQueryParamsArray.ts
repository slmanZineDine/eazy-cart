/** ----------------------------------------------
 * Constructs a URL with query parameters based on the input values.
 * @param {string} URL - The base URL.
 * @param {{ key: string, value: string | number }[]} queryParamsArray - An array of query parameters
 *                (e.g., [{ key: 'page', value: 2 }, { key: 'searchKeyword', value: 'healthcare' }]).
 * @returns {string} The complete URL with query parameters.
 * @example
 * // returns 'https://example.com?page=2&searchKeyword=healthcare'
 * buildURLWithQueryParamsArray('https://example.com', [
 *   { key: 'page', value: 2 },
 *   { key: 'searchKeyword', value: 'healthcare' }
 * ]);
 ---------------------------------------------- */

function buildURLWithQueryParamsArray(
  URL: string,
  queryParamsArray: {
    key: string;
    value: string | number | boolean | undefined;
  }[],
): string {
  const searchParams = new URLSearchParams();

  queryParamsArray.forEach(({ key, value }) => {
    if (value) {
      searchParams.append(key, String(value));
    }
  });

  const queryParams = searchParams.toString();
  const fullURL = queryParams ? `${URL}?${queryParams}` : URL;

  return fullURL;
}

export default buildURLWithQueryParamsArray;

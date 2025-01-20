/**
 * Translates a given text by replacing placeholders with corresponding values.
 *
 * @param text - The text containing placeholders to be replaced.
 * @param replacements - An object containing placeholder-value pairs.
 * @param replacements[key] - The value to replace the placeholder with.
 *
 * @returns - The translated text with all placeholders replaced.
 *
 * @example
 * // Example usage:
 * const text = "There are {{count}} products in your cart";
 * const replacements = { count: 5 };
 * const translatedText = translate(text, replacements);
 * console.log(translatedText); // Output: "There are 5 products in your cart"
 */

function translate(
  text: string,
  replacements: { [key: string]: string | number },
) {
  let translation = text;
  for (const [placeholder, value] of Object.entries(replacements)) {
    translation = translation.replace(`{{${placeholder}}}`, `${value}`);
  }
  return translation;
}

export default translate;

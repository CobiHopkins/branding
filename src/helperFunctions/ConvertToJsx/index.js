/**
 * Splits a given content string into an array of paragraphs.
 *
 * This function takes a string that uses '[paragraph]' as a delimiter
 * and splits it into an array of strings, where each element represents
 * a paragraph of the original content.
 *
 * @param {string} content - The input string containing paragraph delimiters.
 * @returns {string[]} An array of paragraph strings.
 *
 * @example
 * const result = ConvertToJsx("Hello[paragraph]World");
 * 
 * result: ["Hello", "World"]
 */
export const ConvertToJsx = (content) => {

    const data = content.split('[paragraph]');

    return data;
}
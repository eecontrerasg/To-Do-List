/**
 * Function to check is value is genuinely an Empty value
 * @param {*} value
 * @returns
 */
export const isEmpty = (value) =>
  typeof value === "undefined" ||
  value === null ||
  value === false ||
  value === "" ||
  value.length === 0 ||
  value === "undefined" ||
  value === "null";

/**
 * Search by text over a table data source
 * @param {String} text
 * @param {Array} tableArr
 * @param {Array} notAllowedKeys
 * @returns
 */
export const searchTextInTable = (text, tableArr, notAllowedKeys = []) => {
  if (isEmpty(tableArr)) return null;

  return tableArr.filter((entry) => {
    let matchingFlag = false;
    Object.keys(entry).forEach((key) => {
      try {
        if (
          entry[key].toLowerCase().includes(text.toLowerCase()) &&
          !notAllowedKeys.includes(key)
        ) {
          matchingFlag = true;
        }
      } catch (error) {
        // do nothing
      }
    });
    return matchingFlag;
  });
};

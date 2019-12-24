/** Returns true if path exists, false otherwise.
 * @param {*} object object/array to reference
 * @param {*} objectPath Path to get to the specific endpoint. Each key is seperated by a dot. e.g: 'country.province.city'
 ** notation: pathExists(object,objectPath)
 ** example: const obj1 = {a:1,b:[1,2,3]}
 *** objectPathExists(obj1,"b.1") //true
 *** objctPathExists(obj1,"a.x.2") //false
 */
const pathExists = (object, objectPath) => {
  const isObject = Object.prototype.toString.call(object) === "[object Object]";
  const isArray = Object.prototype.toString.call(object) === "[object Array]";
  const isString = typeof objectPath === "string";

  if ((!isObject && !isArray) || !isString) {
    return false;
  }

  const path = objectPath.split(".");
  let concatenatedPath = "";
  for (const varPath of path) {
    concatenatedPath += `['${varPath}']`;
    let data = eval(`object${concatenatedPath}`);
    if (data === undefined || data === null) {
      return false;
    }
  }
  return true;
};

module.exports = pathExists;

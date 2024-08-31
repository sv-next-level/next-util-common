/**
 * Check if javascript object is empty or not.
 *
 * @link https://stackoverflow.com/a/32108184
 * @param obj - Object
 * @returns boolean
 */
export function isEmpty(obj: Object) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
}

/**
 * Check if object is empty or not.
 *
 * @link https://stackoverflow.com/a/32108184
 * @param obj - Object
 * @returns boolean
 */
export function isEmptyObject(value: any) {
  if (value == null) {
    // null or undefined
    return false;
  }

  if (typeof value !== "object") {
    // boolean, number, string, function, etc.
    return false;
  }

  const proto = Object.getPrototypeOf(value);

  // consider `Object.create(null)`, commonly used as a safe map
  // before `Map` support, an empty object as well as `{}`
  if (proto !== null && proto !== Object.prototype) {
    return false;
  }

  return isEmpty(value);
}

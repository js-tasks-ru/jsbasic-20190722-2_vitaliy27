/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {
  let clon = {};

    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] != null) {
        clon[key] = clone(obj[key]);
      } else {
        clon[key] = obj[key];
      }
    }
    return clon;
}

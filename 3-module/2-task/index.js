/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbers = [];
  let arr = str.split(',');
    
  if (arr.length > 3) {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(+arr[i])) {
        numbers.push(+arr[i])
      }
    }
  } else {    
    arr = arr.join('').split(' '); 
    for (let i= 0; i < arr.length; i++) {
      if (!isNaN(+arr[i])) {
        numbers.push(+arr[i]);
      }
    }
  }

  let minNumbers = Math.min(...numbers);
  let maxNumbers = Math.max(...numbers);

  return {
    min: minNumbers,
    max: maxNumbers
  };
}

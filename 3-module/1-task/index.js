/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let workers = data.filter((work) => (work.age <= age)).map((work) => work.name + ", " + work.balance);
      
  let list = workers.join("\n");
  return list;
}

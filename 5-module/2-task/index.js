/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.thead = document.createElement('thead');
  this.el.prepend(this.thead);
  this.tr = document.createElement('tr');
  this.thead.prepend(this.tr);

  // Распаковываю свойства объекта в заголовок
  for (let key in items[0]) {
    let str = key.charAt(0).toUpperCase() + key.slice(1);

    this.td = document.createElement('td');
    this.text = document.createTextNode(str);
    this.td.append(this.text);
    this.tr.append(this.td);
  }


  // СОЗДАЮ ТЕЛО ТАБЛИЦЫ ////////////////////////////////////////////////

  this.tbody = document.createElement('tbody');
  this.el.append(this.tbody);

  // Распаковываю массив объектов в тело таблицы
  for (let item of items) {
    this.tr = document.createElement('tr');
    this.tbody.append(this.tr);

    for (let key in item) {
      let str = item[key];

      this.td = document.createElement('td');
      this.tr.append(this.td);
      this.text = document.createTextNode(str);
      this.td.append(this.text);
    }
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let sortedRows = Array.from(this.el.rows).slice(1);
    if (column === 2) { 
      sortedRows.sort((rowA, rowB) =>
                          rowA.cells[column].innerHTML -
                          rowB.cells[column].innerHTML);
    } else {
      sortedRows.sort((rowA, rowB) =>
                          rowA.cells[column].innerHTML >
                          rowB.cells[column].innerHTML
                          ? 1 : -1);
    }

    if (desc === true) {
      sortedRows.reverse();
    }

    this.el.tBodies[0].append(...sortedRows);
  };
}

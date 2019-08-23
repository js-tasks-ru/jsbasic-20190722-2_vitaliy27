/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let trThead = table.rows[0];
  let index3 = 0;  // Ячейка 'Status'
  let index2 = 0;  // Ячейка 'Gender'
  let index1 = 0;  // Ячейка 'Age'
  

  // Определяю индексы ячеек с содержимым 'Status', 'Gender' и 'Age'

  for (let i = 0; i < trThead.cells.length; i++) {
    if (trThead.cells[i].innerHTML === 'Status') {
      index3 = trThead.cells[i].cellIndex;
    }

    if (trThead.cells[i].innerHTML === 'Gender') {
      index2 = trThead.cells[i].cellIndex;
    }

    if (trThead.cells[i].innerHTML === 'Age') {
      index1 = trThead.cells[i].cellIndex;
    }
  }


  let rows = table.rows; // коллекция строк
  
  // Присваиваю класс available/unavailable строкам, в зависимости от 
  // значения атрибута data-available у ячейки Status
  // Присваиваю строкам атрибут hidden, если такого атрибута нет вообще.

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[index3].getAttribute('data-available') === 'true') {
      rows[i].classList.add('available');
    } else if (rows[i].cells[index3].getAttribute('data-available') === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', true);
    }
  }

  
  // Присваиваю класс male/female строкам, в зависимости 
  // от содержимого ячейки Gender

  for (let i = 0; i < rows.length; i++ ) {
    if (rows[i].cells[index2].innerHTML === 'f') {
      rows[i].classList.add('female');
    }

    if (rows[i].cells[index2].innerHTML === 'm') {
      rows[i].classList.add('male');
    }
  }


  // Устанавливаю inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

  for (let i = 0; i < rows.length; i ++) {
    if (rows[i].cells[index1].innerHTML < 18) {
      rows[i].setAttribute('style', 'text-decoration: line-through');
    }
  }
}

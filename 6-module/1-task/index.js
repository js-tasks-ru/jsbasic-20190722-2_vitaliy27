/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.classList.add("pure-table");

    this.render(data);
    this.el.addEventListener('click', 
            event => {
              this.onClick(event);
              this.onRemoved(this.idRemove);
            });
    
  }

  render(data) {

    /////////// ЗАГОЛОВОК ТАБЛИЦЫ (начало) ///////////
    this.thead = document.createElement('thead');
    this.el.append(this.thead);
    this.tr = document.createElement('tr');
    this.thead.append(this.tr);

    // Заполняю ячейки заголовка
    let counter1 = 0;
    for (let key in this.data[0]) {
      counter1++;
      if (key === 'id') {
        continue;
      }

      let str = key.charAt(0).toUpperCase() + 
                key.slice(1);
      this.text = document.createTextNode(str);
      this.td = document.createElement('td');
      this.td.append(this.text);
      this.tr.append(this.td);
    }

    if (counter1 > this.tr.cells.length) {
      this.td = document.createElement('td');
      this.tr.append(this.td);
    }
    /////////// ЗАГОЛОВОК ТАБЛИЦЫ (конец) ///////////
    

    

    /////////// ТЕЛО ТАБЛИЦЫ (начало) ///////////////
    this.tbody = document.createElement('tbody');
    this.el.append(this.tbody);

    // Создаю строки таблицы, ячейки заполняю данными из массива объектов
    let counter2 = 0;
    for (let prop of this.data) {
      this.tr = document.createElement('tr');
      this.tbody.append(this.tr);

      for (let key in prop) {
        counter2++;
        if (key === 'id') {
          continue;
        }

        this.td = document.createElement('td');
        this.text = document.createTextNode(prop[key]);
        this.td.append(this.text);
        this.tr.append(this.td);
      }

      if (counter2 > this.tr.cells.length) {
        this.td = document.createElement('td');
        this.a = document.createElement('a');
        this.text = document.createTextNode('X');
        this.a.append(this.text);
        this.td.append(this.a);
        this.tr.append(this.td);
        this.a.setAttribute('href', '#delete');
      }
    }
    /////////// ТЕЛО ТАБЛИЦЫ (конец) ///////////////
  } 

  onClick(event) {
    let target = event.target;
    
    if (target.tagName !== 'A') {
      return;
    }

    while (target.tagName !== 'TR') {
      target = target.parentNode;
    }

    let nameRemove = target.cells[0].innerHTML;
    this.idRemove = '';
    //console.log(nameRemove);

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name === nameRemove) {
        this.idRemove = this.data[i].id;
      }
    }
    //this.onRemoved(idRemove);
    target.remove();
    
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;

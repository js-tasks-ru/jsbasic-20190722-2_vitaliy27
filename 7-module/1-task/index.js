const END = 'завершенно'; // данные текст нужно выводить если событие прошло
const MS_IN_SEC = 1000; // количество миллисекнуд в секнуден
const MS_IN_MINUTE = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;


class TimeLeft {
  /**
   * @param el {Element} - ссылка на корневой элемент
   */
  constructor(el) {
    this.el = el;
    this.dataFrom = this.el.getAttribute('data-from');
    this.dataTo = this.el.getAttribute('data-to');
    
    this.render(el);
  }

  render(el) {
    this._fromDate = this.parseDate(this.dataFrom);
    this._toDate = this.parseDate(this.dataTo);
    this._result = [];

    let days, hours, minutes, second;
    let resultDays, resultHours, resultMinutes, resultSecond;

    let nameDays = ["день", "дня", "дней"];
    let nameHours = ["час", "часа", "часов"];
    let nameMinutes = ["минута", "минут", "минуты"];
    let nameSecond = ["секунда", "секунд", "секунды"];

    let numberOfMilliseconds = this._toDate - this._fromDate;
    let notEqualDates = this._fromDate < this._toDate;
    //let equalDates = this._fromDate === this._toDate;

    if (notEqualDates) {

      // Получаю количество дней
      days = Math.floor(numberOfMilliseconds / MS_IN_DAY);

      if (days !== 0) {
        resultDays = days + '';
        let lastSymbol = resultDays.slice(-1);
        let lastTwoSymbol = resultDays.slice(-2);

        if (lastSymbol === '1' && lastTwoSymbol !== '11') {
          resultDays = `${days} ${nameDays[0]}`;
          this._result.push(resultDays);

        } else if (
            lastSymbol === '0' || 
            lastSymbol >= '5' && lastSymbol <= '9' || 
            lastTwoSymbol === '11' || 
            lastTwoSymbol >= '12' && lastTwoSymbol <= '14') {
              resultDays = `${days} ${nameDays[2]}`; 
              this._result.push(resultDays);

        } else {
          resultDays = `${days} ${nameDays[1]}`;
          this._result.push(resultDays);

        }
      } else resultDays = '';


      // Получаю количество часов
      hours = (numberOfMilliseconds - days * MS_IN_DAY) / MS_IN_HOUR;
      hours = Math.floor(hours);
      
      if (hours !== 0) {
        resultHours = hours + '';
        if (hours === 1 || hours === 21) {
          resultHours = `${resultHours} ${nameHours[0]}`;
          this._result.push(resultHours);

        } else if (hours >= 5 && hours <= 20) {
          resultHours = `${resultHours} ${nameHours[2]}`;
          this._result.push(resultHours);

        } else {
          resultHours = `${resultHours} ${nameHours[1]}`;
          this._result.push(resultHours);

        }

      } else resultHours = '';

      // Получаю количество минут
      minutes = (numberOfMilliseconds - days * MS_IN_DAY - 
                 hours * MS_IN_HOUR) / MS_IN_MINUTE;
      minutes = Math.floor(minutes);
      
      if (minutes !== 0) {
        resultMinutes = minutes + '';
        let lastSymbolMin = resultMinutes.slice(-1);
        let lastTwoSymbolMin = resultMinutes.slice(-2);

        if (lastSymbolMin === '1' && lastTwoSymbolMin !== '11') {
          resultMinutes = ` ${resultMinutes} ${nameMinutes[0]}`;
          this._result.push(resultMinutes);

        } else if (lastSymbolMin >= '2' && lastSymbolMin <= '4') {
          resultMinutes = `${resultMinutes} ${nameMinutes[2]}`;
          this._result.push(resultMinutes);

        } else {
          resultMinutes = `${resultMinutes} ${nameMinutes[1]}`;
          this._result.push(resultMinutes);

        }

      } else resultMinutes = '';

      
      // Получаю количество секунд
      second = (numberOfMilliseconds - days * MS_IN_DAY - 
                hours * MS_IN_HOUR - 
                minutes * MS_IN_MINUTE) / MS_IN_SEC;
      second = Math.floor(second);

      if (second !== 0) {
        resultSecond = second + '';
        let lastSymbolSec = resultSecond.slice(-1);
        let lastTwoSymbolSec = resultSecond.slice(-2);

        if (lastSymbolSec === '1' && lastTwoSymbolSec !== '11') {
          resultSecond = `${resultSecond} ${nameSecond[0]}`;
          this._result.push(resultSecond);

        } else if (lastSymbolSec >= '2' && lastSymbolSec <= '4') {
          resultSecond = `${resultSecond} ${nameSecond[2]}`;
          this._result.push(resultSecond);

        } else {
          resultSecond = `${resultSecond} ${nameSecond[1]}`;
          this._result.push(resultSecond);

        }

      } else resultSecond = '';


    } else {
      resultDays = 'завершенно';
      this._result.push(resultDays);
    }

    this.el.innerHTML = this._result.join(', ');

   
  }

  /**
   * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
   * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
   * @return {Date} - возвращаем объект даты
   */
  parseDate(str) {
    this.str = str;
    this.year = this.str.slice(0, 4);
    this.month = this.str.slice(5, 7);
    this.day = this.str.slice(8, 10);
    this.hours = this.str.slice(11, 13);
    this.minutes = this.str.slice(14, 16);
    this.second = this.str.slice(17);

    return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.second);

  }

  /**
   * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
   * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
   * @param el
   */
  static create(el) {
    return new TimeLeft(el);
  }
}

window.TimeLeft = TimeLeft;

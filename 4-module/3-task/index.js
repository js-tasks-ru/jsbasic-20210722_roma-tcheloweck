function highlight(table) {
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let cell = rows[i].lastElementChild;

    if (cell.dataset.available === 'true') {
      rows[i].classList.add('available');
    } else if (cell.dataset.available === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', '');
    }

    cell = rows[i].lastElementChild.previousElementSibling;

    if (cell.textContent === 'm') {
      rows[i].classList.add('male');
    } else if (cell.textContent === 'f') {
      rows[i].classList.add('female');
    }

    cell = rows[i].cells[1];
    let age = +cell.textContent;
    
    if (age < 18) {
      rows[i].style.cssText = `text-decoration: line-through;`;
    }
  }
}

// Функция `highlight` для каждой строки `tr` таблицы должна сделать следующее:
// - Проставить класс `available/unavailable` в зависимости от значения атрибута `data-available` у ячейки `Status`. Если её значение `true` - класс `available`, если её значение `false` - класс `unavailable`.
// - Проставить атрибут `hidden`, если атрибута `data-available` нет вообще.
// - Проставить класс `male/female` в зависимости от содержимого ячейки `Gender`. Если её значение `m` - класс `male`, Если её значение `f` - класс `female`.
// - Добавить inline-стиль `style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18.

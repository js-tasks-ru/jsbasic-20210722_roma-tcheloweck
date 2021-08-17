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
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    
    this.addElements(rows);
  }
  
  addButton(row) {
    row.insertAdjacentHTML('beforeend', '<td><button>X</button></td>');
    function deleteRow(event) {
      if (event.target === row.querySelector('button')) {
        row.remove();
      }
    }
    row.addEventListener('click', deleteRow);
  }

  addElements(arr) {
    this.elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>`;

    let tbody = this.elem.querySelector('tbody');

    for (const item of arr) {
      let tr = document.createElement('tr');

      for (const key in item) {
        tr.insertAdjacentHTML('beforeend', 
          `<td>${item[key]}</td>`);
      }
      
      this.addButton(tr);

      tbody.append(tr);
    }
  }
}

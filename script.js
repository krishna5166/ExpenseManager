document.addEventListener('DOMContentLoaded', function () {
  const dialogForm = document.getElementById('dialog-form');
  const addNextButton = document.getElementById('add-next');
  const insertButton = document.getElementById('insert');
  const cancelButton = document.getElementById('cancel');
  const expenseTable = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
  const filterButton = document.querySelector('.filter-button');
  const descriptionFilter = document.querySelectorAll('.filter-input')[0];
  const categoryFilter = document.querySelectorAll('.filter-input')[1];
  const form = document.getElementById('expense-form');

  let rowCount = 1;

  document.getElementById('add-expense').addEventListener('click', function () {
    dialogForm.style.display = 'block';
  });

  addNextButton.addEventListener('click', function () {
    rowCount++;
    const newRow = document.createElement('div');
    newRow.className = 'expense-row';
    newRow.innerHTML = `
      <label for="date${rowCount}">Date</label>
      <input type="date" name="date${rowCount}" id="date${rowCount}" required>
      <label for="description${rowCount}">Description</label>
      <input type="text" name="description${rowCount}" id="description${rowCount}" required>
      <label for="category${rowCount}">Category</label>
      <input type="text" name="category${rowCount}" id="category${rowCount}" required>
      <label for="amount${rowCount}">Amount</label>
      <input type="number" name="amount${rowCount}" id="amount${rowCount}" required>
    `;
    form.insertBefore(newRow, addNextButton);
  });

  function addExpenseRow(date, description, category, amount) {
    const row = expenseTable.insertRow(-1);
    row.insertCell(0).textContent = date;
    row.insertCell(1).textContent = description;
    row.insertCell(2).textContent = category;
    row.insertCell(3).textContent = amount;
    const editCell = row.insertCell(4);
    const deleteCell = row.insertCell(5);
    editCell.innerHTML = '<button class="edit-btn">Edit</button>';
    deleteCell.innerHTML = '<button class="delete-btn">Delete</button>';
  }

  insertButton.addEventListener('click', function (e) {
    e.preventDefault();
    const rows = form.querySelectorAll('.expense-row');
    rows.forEach((r) => {
      const date = r.querySelector('input[name^="date"]').value;
      const desc = r.querySelector('input[name^="description"]').value;
      const cat = r.querySelector('input[name^="category"]').value;
      const amt = r.querySelector('input[name^="amount"]').value;
      addExpenseRow(date, desc, cat, amt);
      r.querySelectorAll('input').forEach((i) => (i.value = ''));
    });
    dialogForm.style.display = 'none';
  });

  cancelButton.addEventListener('click', function () {
    dialogForm.style.display = 'none';
  });

  expenseTable.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.closest('tr').remove();
    } else if (e.target.classList.contains('edit-btn')) {
      const row = e.target.closest('tr');
      const date = prompt('Date', row.cells[0].textContent) || row.cells[0].textContent;
      const desc = prompt('Description', row.cells[1].textContent) || row.cells[1].textContent;
      const cat = prompt('Category', row.cells[2].textContent) || row.cells[2].textContent;
      const amt = prompt('Amount', row.cells[3].textContent) || row.cells[3].textContent;
      row.cells[0].textContent = date;
      row.cells[1].textContent = desc;
      row.cells[2].textContent = cat;
      row.cells[3].textContent = amt;
    }
  });

  filterButton.addEventListener('click', function () {
    const descVal = descriptionFilter.value.toLowerCase();
    const catVal = categoryFilter.value.toLowerCase();
    const rows = expenseTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const rowDesc = row.cells[1].textContent.toLowerCase();
      const rowCat = row.cells[2].textContent.toLowerCase();
      if (rowDesc.includes(descVal) && rowCat.includes(catVal)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});

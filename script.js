document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add-expense').addEventListener('click', function () {
    var dialogForm = document.getElementById('dialog-form');
    dialogForm.style.display = 'block';
  });

  document
    .getElementById('modify-delete-expense')
    .addEventListener('click', function () {
      // You'll need to implement the functionality for this button.
    });

  var dialogForm = document.getElementById('dialog-form');
  var addNextButton = document.getElementById('add-next');
  var insertButton = document.getElementById('insert');

  addNextButton.addEventListener('click', function () {
    var description = document.getElementById('description1').value;
    var amount = document.getElementById('amount1').value;
    var expenseTable = document.getElementById('expense-table');
    var newRow = expenseTable.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = description;
    cell2.innerHTML = amount;
    document.getElementById('description1').value = '';
    document.getElementById('amount1').value = '';
  });

  insertButton.addEventListener('click', function () {
    var description = document.getElementById('description1').value;
    var amount = document.getElementById('amount1').value;
    var expenseTable = document.getElementById('expense-table');
    var newRow = expenseTable.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = description;
    cell2.innerHTML = amount;
    dialogForm.style.display = 'none';
  });

  var cancelButton = document.getElementById('cancel');
  cancelButton.addEventListener('click', function () {
    dialogForm.style.display = 'none';
  });
});
  
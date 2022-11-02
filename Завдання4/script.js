const table = document.getElementById('age-table');
table.getElementsByTagName('label');
const firstTD = table.rows[0].cells[0];

const form = document.getElementsByName('search');

const firstInput = form.getElementsByTagName('input')[0];
const inputs = form.querySelectorAll('input');
const lastInput = inputs[inputs.length-1];
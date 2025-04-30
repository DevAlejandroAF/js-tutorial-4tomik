document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const table = document.querySelector('#table');
  const alert = document.querySelector('#alert');
  const btn = document.querySelector('#add');
  let id = 1;

  const removeTodo = (id) => {
    document.getElementById(id).remove();
  }

  const addTodo = () => {
    if (title.value === '' || description.value === '') {
      alert.classList.remove('d-none');
      alert.innerText = 'Title and Description are required!';
      return;
    }

    alert.classList.add('d-none');
    const row = table.insertRow();
    row.setAttribute('id', id++);
    row.innerHTML = `
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td class="text-center">
        <input type="checkbox">
      </td>
      <td class="text-right">
      </td>
    `;

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-primary', 'mb-1');
    editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
    row.children[3].appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = (e) => {
      removeTodo(row.getAttribute('id'));
    };
    row.children[3].appendChild(removeBtn);
  }

  btn.onclick = addTodo;
});


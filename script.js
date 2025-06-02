const addBtn = document.getElementById('add-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  newTaskInput.value = '';
});

newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

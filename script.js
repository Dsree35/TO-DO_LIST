const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <input type="text" class="editInput">
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        const span = li.querySelector('span');
        const editInput = li.querySelector('.editInput');
        const editButton = li.querySelector('.editButton');
        const deleteButton = li.querySelector('.deleteButton');

        editButton.addEventListener('click', () => {
            li.classList.add('editing');
            editInput.value = span.textContent;
            editInput.focus();
        });

        editInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                span.textContent = editInput.value;
                li.classList.remove('editing');
            }
        });

        deleteButton.addEventListener('click', () => {
            li.remove();
        });


    }
});

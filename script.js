document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('.js-todo-list');
    const inputField = document.querySelector('.input-select');
    const themeSwitch = document.getElementById('theme-checkbox');

    // Add Todo Item
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && inputField.value.trim()) {
            const todoText = inputField.value.trim();
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            inputField.value = '';
        }
    });

    // Toggle Theme
    themeSwitch.addEventListener('change', () => {
        document.documentElement.setAttribute(
            'data-theme',
            themeSwitch.checked ? 'dark' : 'light'
        );
    });

    // Create Todo Item
    function createTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn" aria-label="Delete todo">❌</button>
        `;
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            listItem.remove();
        });
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        return listItem;
    }
});

}

toggleSwitch.addEventListener("change", switchTheme, false);


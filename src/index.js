$(document).ready(function () {
    const todoList = $('#todo-list');
    const tasks = [
        'Task 1',
        'Task 2',
        'Task 3'
    ];

    function renderTasks() {
        todoList.empty();
        tasks.forEach((task, index) => {
            const listItem = $(`<li class="list-group-item" data-task="${task}" data-toggle="modal" data-target="#taskModal">${task}</li>`);
            todoList.append(listItem);
        });
    }

    todoList.on('click', 'li', function () {
        const taskText = $(this).data('task');
        $('#task-text').text(taskText);
    });

    renderTasks();
});
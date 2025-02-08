// Load cookies
$(document).ready(function() {
    loadCookies();
});

function loadCookies() {
    const cookies = document.cookie.split('; ');
    const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));

    if (taskCookie) {
        const tasks = JSON.parse(taskCookie.split('=')[1]);
        tasks.forEach(function(task) {
            addTaskToDOM(task.content, task.time);
        });
    }
}

// Add task
$('button').click(function() {
    const taskContent = prompt("New task:");
    if (taskContent && taskContent.trim() !== "") {
        const currentTime = new Date().getTime();
        addTaskToDOM(taskContent, currentTime);
    }
})

// Add to DOM
function addTaskToDOM(taskContent, taskTime) {
    const $div = $('<div>', {
        class: 'task',
        alt: taskTime || new Date().getTime(),
        text: taskContent
    });

    
    $div.click(function() {
        if (confirm("Delete task?")) {
            $(this).remove();
            updateCookies();
        }
    });

    const $existingTasks = $('.task');
    let inserted = false;

    $existingTasks.each(function() {
        if (parseInt($(this).attr('alt')) < parseInt($div.attr('alt'))) {
            $(this).before($div);
            inserted = true;
            return false;
        }
    });
    if (!inserted) {
        $('#ft_list').append($div);
    }

    updateCookies();
}

// Update cookies
function updateCookies() {
    const tasks = [];
    
    $('.task').each(function() {
        tasks.push({
            content: $(this).text(),
            time: $(this).attr('alt')
        });
    });

    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/; max-age=" + 60 * 60 * 24 * 30;
}
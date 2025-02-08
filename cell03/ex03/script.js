let counter = 1;

//load cookies
window.onload = function() {
    loadcookies(); 
};

function loadcookies() {
    const cookies = document.cookie.split('; ');
    const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));

    if (taskCookie) {
        const tasks = JSON.parse(taskCookie.split('=')[1]);
        tasks.forEach(function(task) {
            addtaskToDOM(task);
        });
    }
}


// add task
function addtask() {
    let taskcontent = prompt("New task:");
    if (taskcontent && taskcontent.trim() !== "") {
        addtaskToDOM(taskcontent);
    }
};

// make func to save task to DOM
function addtaskToDOM(taskcontent) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.alt = String(counter);
    div.textContent = taskcontent;

    deldiv(div);

    const taskList = document.getElementById("ft_list");
    taskList.appendChild(div);

    cookies();

    counter++;
}

// delete div
function deldiv(div) {
    div.addEventListener('click', function() {
        let confirmDelete = confirm("Delete task?");
        if (confirmDelete) {
            div.remove();
            cookies();
        }
    });
}

// cookies
function cookies() {
    const taskList = document.getElementById("ft_list");
    const tasks = [];

    Array.from(taskList.children).forEach(function(task) {
        tasks.push(task.textContent);
    });

    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/; max-age=" + 60 * 60 * 24 * 30;
}


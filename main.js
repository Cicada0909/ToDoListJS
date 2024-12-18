const list = document.querySelector("#list");
const btnAddTask = document.querySelector("#btnAddTask");
const noneTask = document.querySelector(".none-task");

btnAddTask.addEventListener("click", (event) => addTask());

function addTask() {
    const getUserText = document.querySelector("#user-input");
    const taskText = getUserText.value || "Пустое значение";
    const daySelect = document.querySelector("#day-select");
    const selectedDay = daySelect.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `${taskText} - ${selectedDay}<button class="btnDeleteTask">X</button>`;
    const btnDeleteTask = newTask.querySelector(".btnDeleteTask");
    btnDeleteTask.addEventListener("click", () => deleteTask(newTask));
    list.appendChild(newTask)

    function deleteTask(taskElement) {
        taskElement.remove();
        if (list.childElementCount == 0) {
            noneTask.style.display = "block";
        }
    }

    if (list.childElementCount > 0) {
        noneTask.style.display = "none";
    }

    getUserText.value = ''; 
}


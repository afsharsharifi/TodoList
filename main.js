var allTask = document.getElementById("ongoing-task")
if (allTask.innerHTML == "") {
    document.write("No Task Added")
}

function AddNewTask() {
    var allTask = document.getElementById("ongoing-task")
    var newTaskTitle = document.getElementById("txtNewTaskTitle").value
    if (newTaskTitle != "") {
        allTask.innerHTML += '<a href="#"><li class="todo-task">' + newTaskTitle + '</li></a>'
        document.getElementById("txtNewTaskTitle").value = ""
    }
}
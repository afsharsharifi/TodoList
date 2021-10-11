var allTask = document.getElementById("ongoing-task")
if (allTask.innerHTML == "") {
    document.write("No Task Added")
}

function AddNewTask() {
    var allTask = document.getElementById("ongoing-task")
    var newTaskTitle = document.getElementById("txtNewTaskTitle").value
    if (newTaskTitle != "") {
        allTask.innerHTML += '<a href="#" class="a-task col s12 btn pink darken-2"><li class="todo-task left-align">' + newTaskTitle + '</li></a>'
        document.getElementById("txtNewTaskTitle").value = ""
    }
}

function DoneThisTask() {
    var this_task = document.getElementsByClassName("todo-task")
}
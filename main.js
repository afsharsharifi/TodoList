// const inputBox = document.querySelector(".NewTask input")
// const addBtn = document.querySelector(".NewTask button")
// const todoList = document.querySelector(".todoList")
// const deleteAllBtn = document.querySelector(".footer button")
const txtNewTask = document.getElementById("txtNewTask")
const btnAddTask = document.getElementById("btnAddTask")
const OngingTask = document.getElementById("Onging-Task")
const btnDoneAll = document.getElementById("btnDoneAll")


txtNewTask.onkeyup = () => {
    let NewTaskUser = txtNewTask.value

    if (NewTaskUser.trim() != 0) {
        document.getElementById("btnAddTask").disabled = false
    } else {
        document.getElementById("btnAddTask").disabled = true
    }
}


ShowTask()


btnAddTask.onclick = () => {
    let NewTaskUser = txtNewTask.value
    let getLocalStorage = localStorage.getItem("Ongoing Tasks")
    if (getLocalStorage == null) {
        TaskList = []
    } else {
        TaskList = JSON.parse(getLocalStorage)
    }
    TaskList.push(NewTaskUser)
    localStorage.setItem("Ongoing Tasks", JSON.stringify(TaskList))
    ShowTask()
}

function ShowTask() {
    let getLocalStorage = localStorage.getItem("Ongoing Tasks")
    if (getLocalStorage == null) {
        TaskList = []
    } else {
        TaskList = JSON.parse(getLocalStorage)
    }
    const PendingTask = document.getElementById("pendingTask")
    PendingTask.textContent = TaskList.length


    let newLiTag = ''
    TaskList.forEach((item, index) => {
        newLiTag += `<li> ${item} <span onclick = "DoneTask(${index})"><i class="tasks material-icons circle right">check</i></span></li>`
    });
    OngingTask.innerHTML = newLiTag
    txtNewTask.value = ""
    document.getElementById("btnAddTask").disabled = true
}

function DoneTask(index) {
    let getLocalStorage = localStorage.getItem("Ongoing Tasks")
    TaskList = JSON.parse(getLocalStorage)
    TaskList.splice(index, 1)
    localStorage.setItem("Ongoing Tasks", JSON.stringify(TaskList))
    ShowTask()
}

btnDoneAll.onclick = () => {
    TaskList = []
    localStorage.setItem("Ongoing Tasks", JSON.stringify(TaskList))
    ShowTask()
}

document.getElementById("txtNewTask").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btnAddTask").click()
        return false;
    }
});
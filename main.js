const inputBox = document.querySelector(".InputFiled input")
const addBtn = document.querySelector(".InputFiled button")
const todoList = document.querySelector(".todoList")
const deleteAllBtn = document.querySelector(".footer button")


inputBox.onkeyup = () => {
    let userData = inputBox.value

    if (userData.trim() != 0) {
        document.querySelector(".InputFiled button").disabled = false
    } else {
        document.querySelector(".InputFiled button").disabled = true
    }
}


ShowTask()


addBtn.onclick = () => {
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    ShowTask()
}

function ShowTask() {
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNum = document.querySelector(".pendingTask")
    pendingNum.textContent = listArr.length


    let newLiTag = ''
    listArr.forEach((item, index) => {
        newLiTag += `<li> ${item} <span onclick = "DoneTask(${index})"><i class="tasks material-icons circle right">check</i></span></li>`
    });
    todoList.innerHTML = newLiTag
    inputBox.value = ""
    document.querySelector(".InputFiled button").disabled = true
}

function DoneTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    ShowTask()
}

deleteAllBtn.onclick = () => {
    listArr = []
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    ShowTask()
}

document.getElementById("txtNewTask").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btnAddTask").click()
        return false;
    }
});
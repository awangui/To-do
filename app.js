
var addTask = document.getElementById("add");
var incompleteTasks = document.getElementById("incomplete");
var completeTasks = document.getElementById("complete");
var i=0;

document.querySelector("button").addEventListener("click", createNewTask);

function createNewTask(){
	var newTask = document.getElementById("new-task").value;
	var listItem = document.createElement("li");
	listItem.innerHTML= newTask;
	console.log(listItem);
	incompleteTasks.appendChild(listItem);
	i++;

}
document.getElementById("delete").addEventListener("click",deleteTask);
function deleteTask(){
	

}
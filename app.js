function newTask(){
	var li = document.createElement('li');
	var input = document.getElementById("new-task").value;
	var task = document.createTextNode(input);
	li.append(task);
	document.getElementById("incomplete").appendChild(li);
	//clear the input field
	document.getElementById("new-task").value="";
}
var list = document.querySelector('ul');
list.addEventListener('click', function(check){
	if(check.target.tagName === 'LI'){
		check.target.classList.toggle('checked');
	}
}, false);
//adding a close icon to each item
var taskList = document.getElementsByTagName("LI");
var i;
for(i=0; i<taskList.length; i++){
	var span = document.createElement("SPAN");
	var txt=document.createTextNode("\u00D7");
	span.className = "delete";
	span.appendChild(txt);
	taskList[i].appendChild(span);
}
//giving close icon functionality
var close = document.getElementsByClassName("delete");
var i;
for(i=0; i<close.length; i++){
	close[i].onclick = function(){
		var div=this.parentElement;
		div.style.display="none";
	}
}

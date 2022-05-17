window.count = 0;
function add()
{
	window.location.href = "add.html";
	count++;
}
window.studentnames = [];
window.studentregs = [];
function addd()
{
	names = document.getElementById("names").value;
	regs = document.getElementById("reg").value;
	studentnames.push(names);
	studentregs.push(regs);
	console.log(studentnames);
	console.log(studentregs);
	window.location.href = "index.html";
	count=count+1;
}
function deletee()
{
	window.location.href = "delete.html";
}
function deleteee()
{
	names = document.getElementById("namess").value;
	regs = document.getElementById("regg").value;
	studentnames.pop(names);
	studentregs.pop(regs);
	window.location.href = "index.html";
	count=count-1;
}
console.log(count)
function display()
{
	console.log(studentnames);
	console.log(studentregs);
	//window.location.href = "display.html";	
	/*for (var i = 0; i < count ;i++) {
		console.log(i)
	}*/
}
function MENU()
{
	window.location.href = "index.html";	
}
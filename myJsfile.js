function myfunction() {
document.getElementById("demo").innerHTML = "This is my new text";
}

document.getElementById('demo').style.color = "blue"
"blue"

function usingVariables(){
 var userName = prompt("what is your name?")
	var textElement = document.getElementById("text")
	textElement.innerHTML = "Hi  " + userName
  var header = document.getElementById("head")
	header.innerHTML = header.innerHTML + " By " + userName

}

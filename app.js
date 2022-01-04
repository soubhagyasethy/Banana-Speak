// console.log("Working from a different file")

// alert("this is working")

// var username = prompt("Give me your username")

// alert("this script works!!" + " " + username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

// outputDiv.innerText = "HIIIIIII"
console.log(txtInput);

function clickEventHandler(){
    outputDiv.innerText = "Hola" + " " + txtInput.value;
}
btnTranslate.addEventListener("click", clickEventHandler)
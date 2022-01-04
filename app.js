// console.log("Working from a different file")

// alert("this is working")

// var username = prompt("Give me your username")

// alert("this script works!!" + " " + username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');

console.log(txtInput);

function clickEventHandler(){
    console.log("Clicked");
    console.log("input", txtInput.value)
}
btnTranslate.addEventListener("click", clickEventHandler)
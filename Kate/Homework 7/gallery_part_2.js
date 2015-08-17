"use-strict"

var data = "";
var input = document.querySelector('#exampleInputName2');
var textArea = document.querySelector('.row textarea');
var deleteButton = document.querySelector('.col-xs-6 button');

input.addEventListener("keyup", displayTheData);

deleteButton.addEventListener("click", deleteTheData);

function displayTheData() {
    data = input.value;
    textArea.value = data;
}

function deleteTheData() {
    data = data.slice(0, data.length - 1);
    input.value = data;
    textArea.value = data;
}







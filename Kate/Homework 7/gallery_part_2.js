"use-strict"

var input = document.querySelector('#exampleInputName2');
var textArea = document.querySelector('textarea');
var deleteButton = document.querySelector('.col-xs-6 button');

input.addEventListener("keyup", displayTheData);
deleteButton.addEventListener("click", deleteTheData);

function displayTheData() {
    textArea.value = input.value;
}

function deleteTheData() {
	var text = input.value;
    var data = text.slice(0, text.length - 1);
    input.value = data;
    textArea.value = data;
}







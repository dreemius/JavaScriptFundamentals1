var i,
	total = 0,
	loopResult = document.getElementById("loopResult"),
	result = document.getElementById("result");

function randomNumber() {
	return Math.floor((Math.random() * 6) + 1);
}

function writeLoopResult(first, second) {
	loopResult.innerHTML += "First " + first + " Second " + second;
	if (first === second) {
		loopResult.innerHTML += " Double " + first;
	}
	loopResult.innerHTML += "</br>";
};

function calculateTotal(first, second) {
	total += first + second;
}

function writeResult(total) {
	if (total >= 105) {
		result.innerHTML += "Congratulation! You win! </br>";
		result.classList.add("win-result");
	} else {
		result.innerHTML += "It's a pity but you lose. </br>";
		result.classList.add("lose-result");
	}
	result.innerHTML += "Total " + total;
};

function run() {
	for (i = 15; i--;) {
		first = randomNumber();
		second = randomNumber();
		writeLoopResult(first, second);
		calculateTotal(first, second);
	};
	writeResult(total);
}

run();
const innerTexts = document.querySelector(".inner-text");
const btn = document.querySelector(".play-btn");

function btnClick() {
  const guessNum = parseInt(document.querySelector(".guess-num").value, 10);
  const limitNum = parseInt(
    document.querySelector(".limit-num input").value,
    10
  );
  if (!limitNum && limitNum !== 0) {
    alert("Please fill your first input");
    return;
  }
  if (!guessNum && guessNum !== 0) {
    alert("Please fill your last input");
    return;
  }
  let machineNum = Math.floor(Math.random() * (limitNum + 1));
  let s = "";
  if (machineNum === guessNum) {
    s = `You chose: ${guessNum} the machine chose: ${machineNum}\nYou won!😊`;
  } else {
    s = `You chose: ${guessNum} the machine chose: ${machineNum}\nYou lost...😅`;
  }
  innerTexts.innerText = s;
}

btn.addEventListener("click", btnClick);

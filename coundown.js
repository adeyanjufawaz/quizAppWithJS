function showResult() {
    let resultDIV = document.getElementById("result")
    let resultBOX = document.querySelector(".result__box")
    const quizSection = document.getElementById("quiz--section")
  
    resultBOX.style.display = "block"
    quizSection.style.display = "none"
  
    if (Math.round(correctAnswers/arr.length * 100)) {
      resultDIV.innerText = `YOU SCORED A TOTAL OF ${Math.round(correctAnswers/arr.length * 100)} %`
      console.log(`YOU SCORED A TOTAL OF ${Math.round(correctAnswers/arr.length * 100)} %`)
    } else {
      resultDIV .innerText = `YOU SCORED A TOTAL OF ${0}%`
      console.log(`YOU SCORED A TOTAL OF ${0}%`)
    }
}

// CountDown Timer 
let mins = 2;
let sec = 00;

let totalSecondsCountDown = 60

function updateUI() {
  let minutes = (document.getElementById("min").innerText = mins);
  let seconds = (document.getElementById("sec").innerText = sec);
}
mins--
if (sec == 0) {
  sec = totalSecondsCountDown
  sec--
}
updateUI();

function countdown() {
  sec--;
  updateUI();
  if (sec < 10) {
    seconds = document.getElementById("sec").innerText = `0${sec}`;
  }
  switch (true) {
    case sec == 0:
      mins--;
      sec = totalSecondsCountDown;
      break;
    case mins < 0:
      sec = "00";
      mins = 0;
      updateUI();
      showResult()
      clearInterval(countDownIntval);
  }
}

let countDownIntval = setInterval(countdown, 1000);
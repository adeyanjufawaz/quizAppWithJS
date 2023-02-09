let resultDIV = document.getElementById("result")
let resultBOX = document.querySelector(".result__box")
let assuranceSegment = document.querySelector(".assurance__segment")
const quizSection = document.getElementById("quiz--section")
const clock = document.getElementById("time") 

let Questions = [
    {
      question: "Which of these is not an european country",
      options: { a: "Italy", b: "Brazil", c: "Denmark", d: "France" },
      name: "Q13",
      answer: "Brazil",
      correct: false,
    },
    {
      question: "Which of the following is an output device",
      options: { a: "Keyboard", b: "Printer", c: "Mouse", d: "Scanner" },
      name: "Q1",
      answer: "Printer",
      correct: false,
    },
    {
      question: "What is capital of Poland",
      options: { a: "Gdansk", b: "Warsaw", c: "Poznan", d: "Lublin" },
      name: "Q9",
      answer: "Warsaw",
      correct: false,
    },
    {
      question: "One of these is not a factor that cause slow reading",
      options: { a: "flexibility", b: "word-by-word reading", c: "difficulty with the return sweep", d: "regression" },
      name: "Q2",
      answer: "flexibility",
      correct: false,
    },
    {
      question: "Nigeria gain independent in the year",
      options: { a: "1982", b: "1999", c: "1964", d: "1960" },
      name: "Q11",
      answer: "1960",
      correct: false,
    },
    {
      question: "2 * X = 16",
      options: { a: "88", b: "23", c: "4", d: "8" },
      name: "Q5",
      answer: "8",
      correct: false,
    },
    {
      question: "What is capital of DENMARK",
      options: { a: "Oslo", b: "Helsinki", c: "Tokyo", d: "Copenhagen" },
      name: "Q8",
      answer: "Copenhagen",
      correct: false,
    },
    {
      question: "29 - 10 =",
      options: { a: "82", b: "29", c: "19", d: "8" },
      name: "Q6",
      answer: "19",
      correct: false,
    },
    {
      question: "Who is the G.O.A.T of football",
      options: { a: "Mbappe", b: "Haaland", c: "Messi", d: "Neymar" },
      name: "Q7",
      answer: "Messi",
      correct: false,
    },
    {
      question: "20 * 2 =",
      options: { a: "16", b: "23", c: "34", d: "40" },
      name: "Q4",
      answer: "40",
      correct: false,
    },
    {
      question: "The busiest state in Nigeria",
      options: { a: "Lagos", b: "Delta", c: "Kwara", d: "Anambra" },
      name: "Q10",
      answer: "Lagos",
      correct: false,
    },
    {
      question: "4 + 8 =",
      options: { a: "22", b: "12", c: "34", d: "18" },
      name: "Q3",
      answer: "12",
      correct: false,
    },
];

const max = 10;
const arr = Questions.sort(() => Math.random() - Math.random()).slice(0, max);


let currentPage = 1;
const itemsPerPage = 1;
const itemsDIV = document.getElementById("list");
const pagesDIV = document.getElementById("pages");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function showListItems( currentPage, wrapper) {
  currentPage--;
  arr.forEach((cur,ind) => {
    let questionDIV = `
            <div class="element" id=mts--${ind + 1}>
                <h1>${cur.question}</h1>
                <label class="radio">
                    <input class="hello"type="radio" name=${cur.name}  value=${cur["options"].a} />${cur["options"].a}
                    <span></span>
                </label>
                <label class="radio">
                    <input type="radio" name=${cur.name}  value=${cur["options"].b} />${cur["options"].b}
                    <span></span>
                </label>
                <label class="radio">
                    <input type="radio" name=${cur.name}  value=${cur["options"].c} />${cur["options"].c}
                    <span></span>
                </label>
                <label class="radio">
                    <input type="radio" name=${cur.name}  value=${cur["options"].d} />${cur["options"].d}
                    <span></span>
                </label>
            </div>`;

            wrapper.insertAdjacentHTML("beforeend",questionDIV)
  });
  clearAllQuestions()
  // Show First Question
  document.getElementById(`mts--${currentPage+1}`).style.display = "block"
}
showListItems(currentPage, itemsDIV);

function setUpPagination (arrayOfItems,wrapper,itemsPerPage) {
  let pageCount = Math.ceil(arrayOfItems.length / itemsPerPage)
  
  for (let i = 1; i <= pageCount; i++) {
      let btn = paginationBtn(i)
      wrapper.appendChild(btn)
  }
}
setUpPagination(arr,pagesDIV,itemsPerPage)

function paginationBtn (page) {
  let button = document.createElement("button")
  button.classList.add("btn")
  button.innerText = page
  
  if (currentPage == page){button.classList.add("active")}

  button.addEventListener("click", () => {
    currentPage = page
    clearAllQuestions()
    displayCurPage()
    showActiveBtn()
  })

  return button
}

function clearAllQuestions () {
  let getAllQuest = document.querySelectorAll(".element")
  getAllQuest.forEach(cur => cur.style.display ="none")
}

function displayCurPage() {
  document.getElementById(`mts--${currentPage}`).style.display = "block"
}

let showActiveBtn = () => {
  let allbtns = document.querySelectorAll(".btn")
  allbtns.forEach(cur => {
      cur.classList.remove("active")
      if (Number(cur.innerText) == currentPage) {
          cur.classList.add("active")
      }
  })
}

let resArray = []
let correctAnswers;

arr.forEach(quest => {
  let allRadioBtns = Array.from(document.querySelectorAll(`input[name="${quest.name}"]`))

  allRadioBtns.forEach(btn => {
    btn.addEventListener("click",()=> {
      if (btn.value == quest.answer) {
        quest.correct = true
      } else if (btn.value !== quest.answer){
        quest.correct = false
      }
      if (resArray.includes(quest) == false) {
        resArray.push(quest)
      }
      let allCorrectAnswers = resArray.filter(cur => cur.correct == true)
      correctAnswers = allCorrectAnswers.length
    })
  })
})

prev.addEventListener("click",()=> {
  if (currentPage > 1) {
      currentPage--
      clearAllQuestions ()
      displayCurPage()
  }
  showActiveBtn()
})
next.addEventListener("click",()=> {
  if (currentPage < arr.length) {
      currentPage++
      clearAllQuestions ()
      displayCurPage()   
  }
  showActiveBtn()
})

// To Submit
let yesSubmit  = document.getElementById("yesSubmit")
let noDontSubmit  = document.getElementById("noDontSubmit")

function getAssurance () {
 clock.style.display = "none"
  assuranceSegment.style.display = "block"
  quizSection.style.display = "none"
}

function continueQuiz() {
  assuranceSegment.style.display = "none"
  quizSection.style.display = "block"
  clock.style.display = "block"
}

function showResult() {
  resultBOX.style.display = "block"
  assuranceSegment.style.display = "none"
  quizSection.style.display = "none"
  clock.style.display = "none"
  quizSection.innerText = ""

  console.log(quizSection.innerText)

  if (Math.round(correctAnswers/arr.length * 100)) {
    resultDIV.innerText = `YOU SCORED A TOTAL OF ${Math.round(correctAnswers/arr.length * 100)} %`
  } else {
    resultDIV .innerText = `YOU SCORED A TOTAL OF ${0}%`
  }
  console.log(arr)
}

function restartQuiz() {
  window.location.reload()
}

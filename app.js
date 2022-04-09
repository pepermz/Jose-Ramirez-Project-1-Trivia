let optionA = document.querySelector('#optionA')
let optionB = document.querySelector('#optionB')
let optionC = document.querySelector('#optionC')
let optionD = document.querySelector('#optionD')
let questionCard = document.querySelector('#question')
let nextBtn = document.querySelector('#nextBtn')
let total = document.querySelector('#totalBtn')
let score = 0
let i = 0

// Array of Questions 

const sports = [
    // 0 
    {
        questionCard:"Who won the world cup 2018?",
        optionA: "France",
        optionB: "Germany",
        optionC: "Mexico",
        optionD: "Brazil",
        answer: "France",
    },
    
    {
        questionCard:"What country is Lionel Messi from?",
        optionA: "Brazil",
        optionB: "Russia",
        optionC: "United States",
        optionD: "Argentina",
        answer: "Argentina",
    },
    {
        questionCard:"What year did London hosted the Olympics",
        optionA: "2009",
        optionB: "2012",
        optionC: "2020",
        optionD: "2001",
        answer: "2012",
    },
    {
        questionCard:"What is the national sport of Canada",
        optionA: "Soccer",
        optionB: "Tennis",
        optionC: "Lacrosse",
        optionD: "Hockey",
        answer: "Lacrosse",
    },
    {
        questionCard:"How many dimples does an average golf ball have?",
        optionA: "336",
        optionB: "1423",
        optionC: "3244",
        optionD: "653",
        answer: "336",
    },
    {
        questionCard:"The Olympics are held every how many years?",
        optionA: "5 years",
        optionB: "10 years",
        optionC: "8 years",
        optionD: "4 years",
        answer: "4 years",
    },
    {
        questionCard:"What does NBA stand for?",
        optionA: "National Basketball Association",
        optionB: "Not a Basketball Association",
        optionC: "National Ball of America",
        optionD: "National Bank of America",
        answer: "National Basketball Association",
    },
]

// This function removes the content including the styiling 

function removeContent() {
    if(optionA === optionA.classList.remove('bg-success')){
        optionA.classList.add('bg-primary')
    } else if (optionB === optionB.classList.remove('bg-success')){
        optionB.classList.add('bg-primary')
    } else if (optionC === optionC.classList.remove('bg-success')){
        optionC.classList.add('bg-pimary')
    } else if (optionD === optionD.classList.remove('bg-success')){
        optionD.classList.add('bg-primary')
    }
    if(optionA === optionA.classList.remove('bg-danger')){
        optionA.classList.add('bg-primary')
    } else if (optionB === optionB.classList.remove('bg-danger')){
        optionB.classList.add('bg-primary')
    } else if (optionC === optionC.classList.remove('bg-danger')){
        optionC.classList.add('bg-pimary')
    } else if (optionD === optionD.classList.remove('bg-danger')){
        optionD.classList.add('bg-primary')
    }
}

// This function will add content to the divs 

function addContent(){
    questionCard.innerHTML=sports[i].questionCard
    optionA.innerHTML=sports[i].optionA
    optionB.innerHTML=sports[i].optionB
    optionC.innerHTML=sports[i].optionC
    optionD.innerHTML=sports[i].optionD
}

// Adding event listener to next button 

nextBtn.addEventListener('click',()=>{
   if(i<sports.length){
    i++;
    questions()
    removeContent()
   } else {
       if(i>=sports.length && score>=10){
       alert(`${total.innerText} Congratulations! You have completed this category`)
       } else {
           alert(`${total.innerText} So bad! give it another shot!`)
       }
   }
    
})

// This function displays the total score

function displayTotal (){
    total.innerText = `Total Score: ${score}`
}

// function to iterate beween questions with a manual loop ( Thanks brian for the idea! )

 function questions(){
    addContent()
        optionA.addEventListener('click',(e)=> {
            if (e.target.innerHTML === sports[i].answer) {
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                console.log("correct")
                score += 1
                optionA.classList.add('bg-success')
            } else {
                console.log("incorrect")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionA.classList.add('bg-danger')
                score -= 1
            }
            console.log(score)
        })
        addContent() 
        optionB.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                console.log("correct")
                optionB.classList.add('bg-success')
                score += 1
            } else  {
                console.log("incoreect")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionB.classList.add('bg-danger')
                score -= 1
            }
            console.log(score)
        })
       
        optionC.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log("correct")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionC.classList.add('bg-success')
                score += 1
            } else {
                console.log('incorrect')
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionC.classList.add('bg-danger')
                score -= 1
            }
            console.log(score)
        })
       
        optionD.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log("correct")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionD.classList.add('bg-success')
                score += 1
            } else {
                console.log("incorrect")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionD.classList.add('bg-danger')
                score -= 1
            }
            console.log(score)
        })
    displayTotal()
 }



 questions()








































































































let optionA = document.querySelector('#optionA')
let optionB = document.querySelector('#optionB')
let optionC = document.querySelector('#optionC')
let optionD = document.querySelector('#optionD')
let questionCard = document.querySelector('#question')
// checking functionallity on buttons


optionA.addEventListener('click', ()=>{
    console.log("right answer")
})
optionB.addEventListener('click', ()=>{
    console.log("clicked B")
})
optionC.addEventListener('click', ()=>{
    console.log("clicked C")
})

optionD.addEventListener('click',()=>{
    console.log("clicked D")
})
questionCard.addEventListener('click',()=>{
    questionCard.innerHTML=sports[0].questionCard
   
})

// test question 

const sports = [
    // 0 
    {
        questionCard:"Who won the world cup 2018?",
        answer: "France",
        optionB: "Germany",
        optionC: "Mexico",
        optionD: "Brazil",
    },
    // 1
    {
        questionCard:"hiohd",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "D",
    },
]

// questionCard.innerHTML=sports[0].questionCard
function questions(){
    for (let i = 0; i < sports.length; i++) {
        questionCard.innerHTML=sports[i].questionCard
        optionA.innerHTML=sports[i].optionA
        optionB.innerHTML=sports[i].optionB
        optionC.innerHTML=sports[i].optionC
        optionD.innerHTML=sports[i].optionD
        if(sports[0].optionA===true){
            console.log("Right Answer")

        }
    }
    

}

questions()
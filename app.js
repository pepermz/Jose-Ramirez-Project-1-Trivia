let optionA = document.querySelector('#optionA')
let optionB = document.querySelector('#optionB')
let optionC = document.querySelector('#optionC')
let optionD = document.querySelector('#optionD')
let questionCard = document.querySelector('#question')
// checking functionallity on buttons


optionA.addEventListener('click', ()=>{
    
})
optionB.addEventListener('click', ()=>{
  
})
optionC.addEventListener('click', ()=>{
    
})

optionD.addEventListener('click',()=>{

})
// questionCard.addEventListener('click',()=>{
//     questionCard.innerHTML=sports[0].questionCard
   
// })

// test question 

const sports = [
    // 0 
    {
        questionCard:"Who won the world cup 2018?",
        optionA: "France",
        optionB: "Germany",
        optionC: "Mexico",
        optionD: "Brazil",
        answer: optionA,
    },
    
    {
        questionCard:"What country is Lionel Messi from?",
        optionA: "Brazil",
        optionB: "Russia",
        optionC: "United States",
        optionD: "Argentina",
        answer: optionD,
    },
    {
        questionCard:"What year did London hosted the Olympics",
        optionA: "2009",
        optionB: "2012",
        optionC: "2020",
        optionD: "2001",
        answer: optionB,
    },
    {
        questionCard:"hiohd",
        optionA: "eth",
        optionB: "tyj",
        optionC: "uyyjtt",
        optionD: "ilu",
        answer: optionC
    },
    {
        questionCard:"hiohd",
        optionA: "tyje",
        optionB: "ytje",
        optionC: "adgr",
        optionD: "adfga",
        answer: optionA
    },
    {
        questionCard:"hiohd",
        optionA: "4576",
        optionB: "6864",
        optionC: "764",
        optionD: "8856",
        answer: optionD,
    },
    {
        questionCard:"hiohd",
        optionA: "5647675",
        optionB: "66655",
        optionC: "34656",
        optionD: "2576",
        answer: optionA,
    },
]

// function to iterate beween questions
let score = 0
let i = 0 
function questions(){
        questionCard.innerHTML=sports[i].questionCard
        optionA.innerHTML=sports[i].optionA
        optionB.innerHTML=sports[i].optionB
        optionC.innerHTML=sports[i].optionC
        optionD.innerHTML=sports[i].optionD   
        if(sports[i].answer.addEventListener('click',()=>{
            console.log(sports[i].answer)
            score ++ 
            sports[i].answer.classList.add('bg-success')
            console.log(score)
            console.log('Correct!')
            i++ 
            console.log(sports[i])
        }))    
            
        
    // i++ 
    console.log(i)
}

questions()














// chapterOne: function() {
//     let storyArr = [
//         `Your name is ${this.adventurer.name}, and you have always wanted to go on an adventure. You've dreamed of glorious battles where 
//         you would strike down any foe in your path.`, 
//         "But unfortunately, you are just a table cleaner at the village tavern and aren't sure you would be a good fit as an adventurer anyway.",
//         "Then one night, a stranger walks into the tavern, dressed in a hooded cloak and equipped with a bow and dagger. He sits down at a table in the furthest corner of the tavern and gestures for you.",
//         "He asks if you know the way to the next town. You do, but you've only made the trip once when you were younger, so you are not sure if you'd be of help. The stranger tells you that he's asked people around town but they do not know the way.",
//         "From his cloak he grabs a silver sword and large bag of coin and places it on the table. Your eyes catch the glimmer of the well-crafted sword and the stranger notices. He knows that you're not in it for the money and he smiles, saying that he knew you have the look for adventure in your eyes.",
//         "The stranger confesses that his original guide did not survive the journey, but has a pet raven who keeps him company. Reluctantly, you agree to travel with him. You decide now is the time to take a leap of faith at being an adventurer, and the bag of coin would solve nearly all of your financial problems."
//     ]
//     //Navigate the storyArr
//     let i = 0
//     $($screen).prepend("<p class='story'>" + storyArr[i] + "</p>")
//     const $nextButtonOne = $('<button id="chapter-one-button">Next</button>')
//     $screen.append($nextButtonOne)
//     $( "#chapter-one-button" ).on('click', function() {
//         if(i < storyArr.length) {
//             $(".story").remove()
//             i++
//             if(i === storyArr.length) {
//                 $("#chapter-one-button").remove()
//                 game.chapterTwo()
//             } else {
//             $($screen).prepend("<p class='story'>" + storyArr[i] + "</p>")
//             }
//         }
//     }) //End
// }


































// function questions(){
//     for (let i = 0; i < sports.length; i++) {
//         console.log(`we are in ${sports[i].questionCard}`)

//         questionCard.innerHTML=sports[i].questionCard
//         optionA.innerHTML=sports[i].optionA
//         optionB.innerHTML=sports[i].optionB
//         optionC.innerHTML=sports[i].optionC
//         optionD.innerHTML=sports[i].optionD
//         if(sports[0].questionCard && sports[0].optionA){
//             optionA.addEventListener('click', ()=>{
//                 console.log("CORRECT")

//             })

//         }
//         // setInterval(() => {
//         //     questions()
//         // }, 5000);
//     }
    

// }

// questions()
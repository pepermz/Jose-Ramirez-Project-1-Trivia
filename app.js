let optionA = document.querySelector('#optionA')
let optionB = document.querySelector('#optionB')
let optionC = document.querySelector('#optionC')
let optionD = document.querySelector('#optionD')
let questionCard = document.querySelector('#question')
let nextBtn = document.querySelector('#nextBtn')
let score = 0
let i = 0
// let i = 0
// checking functionallity on buttons

optionA.addEventListener('click',(e)=>{

})
optionB.addEventListener('click',(e)=>{

})
optionC.addEventListener('click',(e)=>{

})
optionD.addEventListener('click',(e)=>{

})


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



function removeContent() {
    if(optionA === optionA.classList.add('bg-success')){
        optionA.classList.add('bg-primary')
    } else if (optionB === optionB.classList.add('bg-success')){
        optionB.classList.add('bg-primary')
    } else if (optionC === optionC.classList.add('bg-success')){
        optionC.classList.add('bg-pimary')
    } else if (optionD === optionD.classList.add('bg-success')){
        optionD.classList.add('bg-primary')
    }
//sports[i].answer.classList.remove('bg-success')
}

function addContent(){
    questionCard.innerHTML=sports[i].questionCard
    optionA.innerHTML=sports[i].optionA
    optionB.innerHTML=sports[i].optionB
    optionC.innerHTML=sports[i].optionC
    optionD.innerHTML=sports[i].optionD
}

nextBtn.addEventListener('click',()=>{
   if(i<sports.length){
    i++;
    questions()
   }
    
})


// function to iterate beween questions
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
                optionA.classList.remove('bg-success')
                optionA.classList.add('bg-danger')
                score -= 1
                // sports[i].answer.classList.add('bg-primary')
            }
            removeContent()
            // addContent()
            console.log(score)
        })
       
        optionB.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                console.log("correct")
                optionB.classList.add('bg-success')
                score += 1
                // sports[i].answer.classList.add('bg-success')
            } else  {
                console.log("incoreect")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionB.classList.add('bg-danger')
                score -= 1
                // sports[i].answer.classList.add('bg-primary')
            }
            removeContent()
            // addContent()
            console.log(score)
        })
       
        optionC.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log("correct")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionC.classList.add('bg-success')
                score += 1
                // sports[i].answer.classList.add('bg-success')
            } else {
                console.log('incorrect')
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionC.classList.add('bg-danger')
                score -= 1
                // sports[i].answer.classList.add('bg-primary')
            }
            removeContent()
            // addContent()
            console.log(score)
        })
       
        optionD.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                console.log("correct")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionD.classList.add('bg-success')
                score+= 1
                // sports[i].optionD.classList.add('bg-success')
            } else {
                console.log("incorrect")
                console.log(e.target.innerHTML)
                console.log(sports[i].answer)
                optionD.classList.add('bg-danger')
                score -= 1
                // sports[i].optionD.classList.add('bg-primary')
            }
            removeContent()
            // addContent()
            console.log(score)
        })
 }

 questions()













































// THIS FUNCTION MIGHT WORK


// function questions(){
//         addContent()
//         optionA.addEventListener('click', ()=>{

//             if(sports[i].A == sports[i].answer){
//                 sports[i].answer.classList.add('bg-success')
//                 console.log("Coorect A")
//                 score++
                
//             }
//         //     console.log(sports[i].answer)   
//         //     score ++ 
//         //     sports[i].answer.classList.add('bg-success')
//         //     console.log(score)
//         //     console.log('Correct!')
//         //    //sports[i].answer = null
//         //    removeContent()
//         //    addContent()
//         //     i++ 
           
//         //     console.log(sports[i])
//         })
            
//         removeContent()
//         addContent()
//         i++
//     console.log(i)
// }

// questions()



































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
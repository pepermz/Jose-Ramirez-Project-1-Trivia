let optionA = document.querySelector('#optionA')
let optionB = document.querySelector('#optionB')
let optionC = document.querySelector('#optionC')
let optionD = document.querySelector('#optionD')
let questionCard = document.querySelector('#question')
let nextBtn = document.querySelector('#nextBtn')
let total = document.querySelector('#totalBtn')
let score = 0
let i = 0
const testImg = document.getElementById('categoryImg')
let output = document.querySelector('.output')


// Array of Questions 

const sports = [
    
    {
        questionCard:"What was Freddy Mercury's real name?",
        optionA: "Farrokh Bulsara",
        optionB: "Fernand Mercurium",
        optionC: "Brian May",
        optionD: "Fred Michaels",
        answer: "Farrokh Bulsara",
        url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    {
        questionCard:"Who founded Motown Records?",
        optionA: "Phil Collins",
        optionB: "Michael Jackson",
        optionC: "Barry White",
        optionD: "Berry Gordy",
        answer: "Berry Gordy",
        url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        questionCard:"Paul McCartney and John Lennon wrote which Rolling Stones song?",
        optionA: "Satisfaction",
        optionB: "I Wanna Be Your Man",
        optionC: "Paint it Black",
        optionD: "Let it Be",
        answer: "I Wanna Be Your Man",
        url: "https://images.pexels.com/photos/1181769/pexels-photo-1181769.jpeg",
    },
    {
        questionCard:"Who was the first woman ever inducted into the Rock and Roll Hall of Fame?",
        optionA: "Billie Holiday",
        optionB: "Beyonce",
        optionC: "Aretha Franklin",
        optionD: "Britney Spears",
        answer: "Aretha Franklin",
        url:"https://images.pexels.com/photos/417451/pexels-photo-417451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        questionCard:"What was Elvis Presley's first No.1 hit in the United States?",
        optionA: "Are you lonesome tonight?",
        optionB: "Heartbreak Hotel",
        optionC: "I Cant Help Falling in Love",
        optionD: "Hound Dog",
        answer: "Heartbreak Hotel",
        url:"https://images.pexels.com/photos/2253569/pexels-photo-2253569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        questionCard:"Which classical composer was deaf?",
        optionA: "Ludwig van Beethoven",
        optionB: "Wolfgang Amadeus Mozart",
        optionC: "Frederic Chopin",
        optionD: "Claude Debussy",
        answer: "Ludwig van Beethoven",
        url:"https://images.pexels.com/photos/2528455/pexels-photo-2528455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        questionCard:"What year was Woodstock held in?",
        optionA: "2011",
        optionB: "1574",
        optionC: "Today",
        optionD: "1969",
        answer: "1969",
        url:"https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

// This function adds the image to the question

function addImg(){
    testImg.src=sports[i].url
}

// Adding event listener to next button 

nextBtn.addEventListener('click',()=>{
   if(i<sports.length){
    i++;
    questions()
    removeContent()
    addImg()
   } else {
       if(i>=sports.length && score>=10){
       output.innerHTML=`Congratulations! You have completed this category`

       } else {
        output.innerHTML=`So bad! give it another shot!`
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
                score += 1
                optionA.classList.add('bg-success')
            } else {
                optionA.classList.add('bg-danger')
                score -= 1
            }
        })
        optionB.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                optionB.classList.add('bg-success')
                score += 1
            } else  {
                optionB.classList.add('bg-danger')
                score -= 1
            }
        })
       
        optionC.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                optionC.classList.add('bg-success')
                score += 1
            } else {
                optionC.classList.add('bg-danger')
                score -= 1
            }
        })
       
        optionD.addEventListener('click',(e)=> {
            if (e.target.innerText === sports[i].answer) {
                optionD.classList.add('bg-success')
                score += 1
            } else {
                optionD.classList.add('bg-danger')
                score -= 1
            }
            
        })
    displayTotal()

 }



 questions()
















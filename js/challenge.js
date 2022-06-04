
// See the timer increment every second once the page has loaded
// Select the counter, start the interval, and set the pause to false
// Using .innerHTML because .innerText would not increment the time

let counter = document.querySelector('h1#counter')
let interval = setInterval(() => counter.innerHTML++, 1000)
let counterPause = false


// Manually increment and decrement the counter using the plus and minus buttons

let plusButton = document.querySelector('button#plus')
let minusButton = document.querySelector('button#minus')

plusButton.addEventListener('click', () => counter.innerHTML++)
minusButton.addEventListener('click', () => counter.innerHTML--)


// "Like" an individual number of the counter
// I should see the count of the number of "likes" associated with that number displayed

let likeButton = document.querySelector('button#heart')
let likeList = document.querySelector('ul.likes')
likeButton.addEventListener('click', actOnClick)

function actOnClick(){
    
// I used innerText here instead of innerHTML because the default value (' 0 ') from index.html would not work correctly

    if (!document.getElementById(`${counter.innerText}`)){
        let li = document.createElement('li')
        li.id = counter.innerText
        li.innerText = `${counter.innerText} has been liked 1 time`
        likeList.appendChild(li)
    } else {
        let currentLi = document.getElementById(`${counter.innerText}`)
        let textArray = currentLi.textContent.split(' ')
        let numOfLikes = parseInt(textArray[4])
        textArray[4] = numOfLikes + 1
        currentLi.innerText = `${counter.innerText} has been liked ${textArray[4]} times`
    }
}


// Pause the counter, which should:
//    - pause the counter
//    - disable all buttons except the pause button
//    - switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons

let pauseButton = document.querySelector('button#pause')
let submitButton = document.querySelector('button#submit')
pauseButton.addEventListener('click', pauseActions)

function pauseActions(){

    if (counterPause === false) {
        clearInterval(interval)
        pauseButton.innerHTML = ' resume '
        minusButton.disabled = true
        plusButton.disabled = true
        likeButton.disabled = true
        submitButton.disabled = true
        counterPause = true
    } else if (counterPause === true) {
        interval = setInterval(() => counter.innerHTML++, 1000)
        pauseButton.innerHTML = ' pause '
        minusButton.disabled = false
        plusButton.disabled = false
        likeButton.disabled = false
        submitButton.disabled = false
        counterPause = false
    }
}

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

let commentForm = document.querySelector('form')
commentForm.addEventListener('submit', addComment)

function addComment(event){
    event.preventDefault()
    let commentText = event.target['comment-input'].value
    let commentArea = document.querySelector('div#list')
    let p = document.createElement('p')
    if (commentText === ''){
        //console.log('Nothing was submitted')
    } else {
        commentArea.appendChild(p)
        p.innerText = `${commentText}`
        commentForm.reset()
    }
}
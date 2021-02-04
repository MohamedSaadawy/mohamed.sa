var textAnimated = document.querySelector(".textAnimated")

var text = ""

var textArr = [
    "Hello here in my website",
    "I'm Mohamed Ahmed",
    "I'm a developer.",
    "I am  a front end developer",
]

var currentTextIndex = -1

var letterIndex = -1

function addLetter() {
    // increment letterIndex to get to the next letter
    letterIndex++
    //
    if (letterIndex < text.length) {
        //ADD A DELAY
        setTimeout(function() {
            // add letter
            textAnimated.textContent += text[letterIndex]
                // call itself 
            addLetter()
        }, 100)
    } else {
        // call removeLetter after a delay 
        setTimeout(function() {
            removeLetter()
        }, 2000)
    }
}

function removeLetter() {
    // decrement letterIndex to get to the next letter
    letterIndex--
    //
    if (letterIndex >= 0) {
        //ADD A DELAY
        setTimeout(function() {
            // remove letter
            textAnimated.textContent = text.slice(0, letterIndex)
                // call itself 
            removeLetter()
        }, 100)
    } else {
        // no more letters to remove
        // doesn't call addLetter anymore
        // call updateText instead
        updateText()
    }
}

function updateText() {
    //increment currentTextIndex to switch to the next sentence
    currentTextIndex++

    //go to the first string index when currentTextIndex has reached the last one
    if (currentTextIndex === textArr.length) {
        currentTextIndex = 0
    }
    //update text 
    text = textArr[currentTextIndex]
        //call addLetter and get the animation going
    addLetter()
}

//the initial call to start everything
updateText()

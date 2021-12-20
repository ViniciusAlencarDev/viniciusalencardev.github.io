let descriptionAnimate;
let counter = 0;
let duration = 5;
let dutrationLetter = 80

window.onload = () => {

    descriptionAnimate = document.querySelector('#description-animate')  
    let words = ['Full Stack', 'ReactJS', 'NodeJS', 'PHP', 'NextJS']

    animateDescription(descriptionAnimate, words, duration)
}

async function animateDescription(element, words, duration) {
    sleep(duration * 1000).then(() => {
        animateWord(element, words[counter], 0)
        counter = counter >= words.length - 1 ? 0 : counter + 1
        animateDescription(element, words, duration)
    })
}

async function animateWord(element, word, letter = 0, growing = true) {
    if(growing) {
        sleep(dutrationLetter).then(() => {
            element.innerHTML = 'Desenvolvedor ' + word.slice(0, letter)
            if(letter <= word.length)
                animateWord(element, word, letter + 1)
            else {
                // console.log((duration * 1000) - (30 + (30 * word.length)))
                sleep((duration - 2) * 1000).then(() => {
                    animateWord(element, word, letter + 1, false)
                })
            }  
        })
    } else {
        sleep(dutrationLetter).then(() => {
            word = word.slice(0, word.length - 1)
            if(word.length > 0 || word != '') {
                element.innerHTML = 'Desenvolvedor ' + word
                animateWord(element, word, letter, false)
            } else
                element.innerHTML = 'Desenvolvedor '
        })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

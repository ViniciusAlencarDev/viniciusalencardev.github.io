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
    animateWord(element, words[counter], 0)
    await sleep(duration * 1000)
    counter = counter >= words.length - 1 ? 0 : counter + 1
    animateDescription(element, words, duration)
}

async function animateWord(element, word, letter = 0, growing = true) {
    if(growing) {
        element.innerHTML = 'Desenvolvedor ' + word.slice(0, letter)
        await sleep(dutrationLetter)
        if(letter <= word.length)
            animateWord(element, word, letter + 1)
        else {
            // let wait = (duration * 1000) - ((dutrationLetter * word.length) * 3)
            // console.log(wait)
            await sleep((duration - 2) * 1000)
            animateWord(element, word, letter + 1, false)
        }  
    } else {
        word = word.slice(0, word.length - 1)
        await sleep(dutrationLetter)
        if(word.length > 0 || word != '') {
            element.innerHTML = 'Desenvolvedor ' + word
            animateWord(element, word, letter, false)
        } else
            element.innerHTML = 'Desenvolvedor '
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function chagnePreView(url) {
    document.querySelector('#box-screen-examples').setAttribute('src', url)
}
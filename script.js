let descriptionAnimate;
let counter = 0;
let duration = 3;
let dutrationLetter = 80

window.onload = () => {

    descriptionAnimate = document.querySelector('#description-animate')  
    let words = ['Full Stack', 'ReactJS', 'NodeJS', 'PHP', 'NextJS']

    animateDescription(descriptionAnimate, words, duration, 'Desenvolvedor ')
}

async function animateDescription(element, words, duration, prefix = '') {
    while(true) {
        let newWord = "";
        for(i = 0; i < words[counter].length; i++) {
            newWord += words[counter][i];
            element.innerHTML = prefix + newWord
            await sleep(100)
        }
        await sleep(duration * 1000)
        for(i = newWord.length; i >= 0; i--) {
            newWord = words[counter].slice(0, i);
            element.innerHTML = prefix + newWord
            await sleep(100)
        }
        counter = counter >= words.length - 1 ? 0 : counter + 1
    }
}

// async function animateDescription(element, words, duration) {
//     animateWord(element, words[counter], 0)
//     await sleep(duration * 1000)
//     counter = counter >= words.length - 1 ? 0 : counter + 1
//     animateDescription(element, words, duration)
// }

// async function animateWord(element, word, letter = 0, growing = true) {
//     if(growing) {
//         element.innerHTML = 'Desenvolvedor ' + word.slice(0, letter)
//         await sleep(dutrationLetter)
//         if(letter <= word.length)
//             animateWord(element, word, letter + 1)
//         else {
//             // let wait = (duration * 1000) - ((dutrationLetter * word.length) * 3)
//             // console.log(wait)
//             await sleep((duration - 2) * 1000)
//             animateWord(element, word, letter + 1, false)
//         }  
//     } else {
//         word = word.slice(0, word.length - 1)
//         await sleep(dutrationLetter)
//         if(word.length > 0 || word != '') {
//             element.innerHTML = 'Desenvolvedor ' + word
//             animateWord(element, word, letter, false)
//         } else
//             element.innerHTML = 'Desenvolvedor '
//     }
// }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function chagnePreView(url) {
    document.querySelector('#box-screen-examples').setAttribute('src', url)
}
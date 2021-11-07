const candyWrappers = document.querySelectorAll('.candy-wrapper')
console.log(candyWrappers)
window.addEventListener('scroll', findCandyPosition)
const perc = 0.7


function findCandyPosition() {
    const candySlide = window.innerHeight * perc

    candyWrappers.forEach(candyWrapper => {
        const candyTop = candyWrapper.getBoundingClientRect().top

        if(candyTop < candySlide) {
            candyWrapper.classList.add('slide')
        }else {
            candyWrapper.classList.remove('slide')
        }

    })
}


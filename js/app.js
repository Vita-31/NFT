//tabs
const tabBlocks = document.getElementById('tabs');

if(tabBlocks) {
    const tabSection = tabBlocks.querySelectorAll('.art__cards');

    tabBlocks.addEventListener('click', e => {
        e.preventDefault();
        const tabItem = e.target.closest('.tab__item');
        const tabItemData = tabItem.dataset.id
        const tabItemActive = document.querySelectorAll('.tab__item_active');
        tabItemActive.forEach(itemActive => {
            itemActive.classList.remove('tab__item_active')
        })
        tabItem.classList.add('tab__item_active')

        tabSection.forEach(section => {
            const sectionData = section.dataset.section;
            if(tabItemData === sectionData) {
                section.classList.add('art__cards_visible');
            } else {
                section.classList.remove('art__cards_visible')
            }
        })
    })
}


//timer
const timer = document.getElementById('timer');
const daysItem = timer.querySelector('.timer__days');
const houresItem = timer.querySelector('.timer__hours');
const minutesItem = timer.querySelector('.timer__minutes');
const secondsItem = timer.querySelector('.timer__seconds');
let timerCount = null;

function countTimer() {
    const endTime = new Date(2022, 03, 01);
    const currentTime = endTime - new Date();
    if(currentTime < 0) {
        clearInterval(timerCount);
    }

    const days = currentTime > 0 ? Math.floor(currentTime / 1000 / 60 / 60 / 24) : 0;
    const hourse = currentTime > 0 ? Math.floor((currentTime / 1000 / 60 / 60) % 24) : 0;
    const minutes = currentTime > 0 ? Math.floor((currentTime / 1000 / 60) % 60) : 0;
    const seconds = currentTime > 0 ? Math.floor((currentTime / 1000) % 60) : 0;

    daysItem.textContent = days < 10 ? '0' + days : days;
    houresItem.textContent = hourse < 10 ? '0' + hourse : hourse;
    minutesItem.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsItem.textContent = seconds < 10 ? '0' + seconds : seconds; 

    let timerCount = setInterval(countTimer, 1000);
}
countTimer()

const tabBlocks = document.getElementById('tabs');
if(tabBlocks) {
    const tabSection = tabBlocks.querySelectorAll('.art__cards');

    tabBlocks.addEventListener('click', e => {
        e.preventDefault();
        const tabItem = e.target.closest('.tab__item');
        const tabItemData = tabItem.dataset.id
        const tabItemActive = document.querySelectorAll('.tab__item_active');
        console.log(tabItemActive)
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
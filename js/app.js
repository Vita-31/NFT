const tabBlocks = document.getElementById('tabs');
if(tabBlocks) {
    tabBlocks.addEventListener('click', e => {
        const tabItem = e.target.closest('.tab__item');
        const tabItemData = tabItem.dataset.id
    })
}
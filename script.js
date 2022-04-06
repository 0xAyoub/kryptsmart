
(function(){
    const a = document.querySelector('.a-tabs')
    const section = document.querySelector('.tabs')
    const titleTabs = document.querySelectorAll('.a-tabs')

    titleTabs.forEach(titleTab => {
        titleTab.addEventListener('click', function(){
            const li = this.parentNode
            section.querySelector('.title-tabs .active').classList.remove('active')
            li.classList.add('active')


            section.querySelector('.content-tab.active').classList.remove('active')
            section.querySelector(this.id).classList.add('active')
        })
    })
})()

const element = document.querySelector('.header')
const onScroll = function(){
    const hasFixed = element.classList.contains('fixed')
    if(element.getBoundingClientRect().top < 0 && !hasFixed){
        element.classList.add('fixed')
    }
}
window.addEventListener('scroll', onScroll)
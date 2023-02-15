const nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    const winPosition = window.scrollY
    nav.classList.toggle('scroll-active', winPosition)
})
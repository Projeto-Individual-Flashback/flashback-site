window.addEventListener("scroll", function() {
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0);
})
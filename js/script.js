langSwitch = document.querySelector('.lang')
langSwitchActive = document.querySelector('.lang__active');
langSwitchActive.addEventListener("click", function() {
    langSwitch.classList.toggle('active');
})
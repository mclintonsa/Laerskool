let bars = document.querySelector('#bars');
let navigation = document.querySelector('.navigation');

bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    bars.classList.remove('fa-times');
    navigation.classList.remove('active')
}
const input = document.querySelector('.search-input');
const search = document.querySelector('.search-btn');

const show = () =>{
    input.classList.toggle('active')
}

search.addEventListener('click', show);

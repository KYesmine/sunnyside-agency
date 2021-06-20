const btnToggler = document.querySelector('.btn--toggler')

const toggleMenu = (e) => {
    console.log(btnToggler.dataset.target)
    const target = document.querySelector(`#${btnToggler.dataset.target}`)
    target.classList.toggle('active')
}

btnToggler.addEventListener('click', toggleMenu)
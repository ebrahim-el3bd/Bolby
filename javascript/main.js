const btn = document.querySelector(".btnn");
const link = document.querySelector(".link");
btn.addEventListener("click",(eo) => {
    link.classList.toggle("active")
    eo.preventDefault()
})

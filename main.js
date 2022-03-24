let btnBraetspil = document.querySelector(".pin-button-braetspil")

btnBraetspil.addEventListener("click", function() {
    window.localStorage.setItem("braetspil", "true")
})

// after clicking on the button, add element to the storage
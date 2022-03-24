let braetspilSection = document.querySelector(".flex-braetspil")
let braetspilValue = window.localStorage.getItem("braetspil")
if (braetspilValue = "true") {
    braetspilSection.classList.remove("display-none")
}

// take value of braetspil from the storage 
// if the value of braetspil is true, delete one class
//      from the section
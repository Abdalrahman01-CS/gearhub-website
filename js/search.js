let searchInput = document.getElementById("searchInput")
let searchButton = document.getElementById("searchButton")
let model1name = document.getElementById("model1name")
let model2name = document.getElementById("model2name")
let model3name = document.getElementById("model3name")
let model4name = document.getElementById("model4name")
let model1 = document.getElementById("model1")
let model2 = document.getElementById("model2")
let model3 = document.getElementById("model3")
let model4 = document.getElementById("model4")

let x

searchButton.onclick = function () {

    x = searchInput.value

    if (model1name.textContent === x) {
        model2.style.display = "none"
        model3.style.display = "none"
        model4.style.display = "none"
    } else if (model2name.textContent === x) {
        model1.style.display = "none"
        model3.style.display = "none"
        model4.style.display = "none"
    } else if (model3name.textContent === x) {
        model1.style.display = "none"
        model2.style.display = "none"
        model4.style.display = "none"
    } else if (model4name.textContent === x) {
        model1.style.display = "none"
        model2.style.display = "none"
        model3.style.display = "none"
    }
}

/* 
to make this function work you should enter full name of model like if car model's name is 
"aabb cc-1" you should enter "aabb cc-1"
*/
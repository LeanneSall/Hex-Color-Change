let button = document.querySelector("button")
let input = document.querySelector("input")

button.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = input.value;
})
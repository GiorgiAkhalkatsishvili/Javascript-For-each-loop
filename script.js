
let myButtons = document.querySelectorAll(".btn");

myButtons.forEach(function (elements) {
  elements.addEventListener("click", function () {
    myButtons.forEach(function (eachItem) {
      eachItem.style.backgroundColor = "#2f8ac9"
      eachItem.innerHTML = "Click here."
    })
    elements.style.backgroundColor = "green"
    elements.innerHTML = "Click again!"

  })
})

let anotherButton = document.querySelector(".btn2");

anotherButton.addEventListener("click", () => {
  if (anotherButton.innerHTML === "Click to Change the text") {
    anotherButton.innerHTML = "The text has changed!"
    anotherButton.style.backgroundColor = "pink"
} else {
  anotherButton.innerHTML === "Click to Change the text"
}
})

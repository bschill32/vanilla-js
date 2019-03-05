console.log(`HEllo form index.js`)
const heading = document.getElementById('heading')
console.log(heading)

// heading.innerText = "I don't know"
// heading.style.background = "blue"
// heading.style.color = "#ff0099"
// heading.style.height = "500px"

const headingTags = document.getElementsByTagName('h1')
console.log(headingTags)
const box =  document.getElementById('box')
box.classList.add('square')
box.innerText = "DevMountain"
box.innerHTML = "<h1>Hello, friend</h1>"
console.log(box)

// box.classList.add('square')
// box.classList.remove('square')
// console.log(box.classList)

// function runAlert(){
//     alert('Hello from the index.js file')
// }

// runAlert()
const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`
bgImage.id = "bgImage"
document.body.style.backgroundImage = `linear-gradient( rgba(0,0,0,0.7 ),rgba(0,0,0,0.1) ), url(${bgImage.src})`
console.log(`url(${bgImage.src})`)
// document.body.appendChild(bgImage)
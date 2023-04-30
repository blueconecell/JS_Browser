const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";
document.body.style.backgroundImage = `url(${bgImage.src})`;

// document.body.appendChild(bgImage);
console.log(`url(${bgImage.src})`);
// document.body.appendChild(bgImage)

const images = ["0.jpg","1.png","2.png"];
let BGnub = Math.floor(Math.random()*images.length);
console.log(BGnub);
const todaysBG = images[BGnub];
const image = document.createElement("img");

image.src = `imges/${todaysBG}`;

document.body.appendChild(image); 
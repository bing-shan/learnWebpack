import helloWorld from "./hello-world";
import imgSrc from "./assets/12.png";
import svgSrc from "./assets/drag.svg";
import txtObj from "./assets/01.txt";
import jpegMap from "./assets/01.jpeg";

helloWorld();
const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.src = svgSrc;
document.body.appendChild(img2);

const div = document.createElement("div");
div.innerText = txtObj;
document.body.appendChild(div);

const img3 = document.createElement("img");
img3.src = jpegMap;
document.body.appendChild(img3);

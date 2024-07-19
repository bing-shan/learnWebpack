import helloWorld from "./hello-world";
import imgSrc from "./assets/12.png";
import svgSrc from "./assets/drag.svg";
import txtObj from "./assets/01.txt";
import jpegMap from "./assets/01.jpeg";
import "./style.css";
import "./style.less";
// import _ from "lodash";
// import "./async-module.js";

helloWorld();
const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.src = svgSrc;
document.body.appendChild(img2);

const div = document.createElement("div");
div.style.cssText = "width:800px;height:300px;background-color:#23f930;overflow-y:auto;";
div.classList.add("block-bg");
div.textContent = txtObj;
document.body.appendChild(div);

const img3 = document.createElement("img");
img3.src = jpegMap;
document.body.appendChild(img3);

document.body.classList.add("hello");

const span = document.createElement("span");
span.classList.add("icon");
span.innerHTML = "&#xe8d6;";
document.body.appendChild(span);

// console.log(_.join(["index", "module", "loaded!!!"], " "));
// const button = document.createElement("button");
// button.textContent = "点击执行加法运算";
// button.addEventListener("click", () => {
//   import(/* webpackChunkName：'mathhhh' */ "./math.js").then(({ add }) => {
//     console.log(add(4, 5));
//   });
// });
// document.body.appendChild(button);

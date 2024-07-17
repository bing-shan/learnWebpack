import helloWorld from "./hello-world";
import imgSrc from "./assets/12.png";
import svgSrc from "./assets/drag.svg";
import txtObj from "./assets/01.txt";
import jpegMap from "./assets/01.jpeg";
import "./style.css";
// import "./style.less";

helloWorld();
const img = document.createElement("img");
img.src = imgSrc;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.src = svgSrc;
document.body.appendChild(img2);

const div = document.createElement("div");
div.style.cssText = "width:200px;height:300px;background-color:#23f930";
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

// 京东物流只能寄到白龙，可以自提，也可以送货。
// 德邦物流能寄到霍州市经十路博翔学校，霍州市辛置镇云夏西区，霍州市南环路街道江湾御景这三个地方，

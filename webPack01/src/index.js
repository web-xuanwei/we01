// webpack 模块打包工具
// js 模块打包工具 =>  css ---- all
// import Header from './header.js';
// import Content from './content.js';
// import Footer from './footer.js';
import Me from './me.jpg';
import "./index.scss";

var dom = document.getElementById("root");
var img = new Image();
img.src = Me;
img.classList.add("swiper");
dom.append(img);

// new Header();
// new Content();
// new Footer();
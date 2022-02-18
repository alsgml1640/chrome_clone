const backgroundImg = ["0.jpg", "1.jpg", "2.jpg"];
// const backgroundImg = ["1.jpg"];
const randomImg =
  backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

document.body.style.background = `url(img/${randomImg})`;
document.body.style.backgroundSize = "100%";
document.body.style.opacity = "0.7";

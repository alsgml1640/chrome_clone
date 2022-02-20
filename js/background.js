const backgroundImg = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
// const backgroundImg = ["1.jpg"];
const randomImg =
  backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

document.body.style.background = `url(img/${randomImg})  0% 0% / 100%`;
document.body.style.opacity = ".7";

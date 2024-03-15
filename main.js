const imgUrlArr = [
  "img/1.jpeg",
  "img/2.jpeg",
  "img/3.jpeg",
  "img/4.jpeg",
  "img/5.jpeg",
  "img/6.jpeg",
  "img/7.jpeg",
  "img/8.jpeg",
  "img/9.jpeg",
  "img/10.jpeg",
];

const promiseArr = [];

for (const url of imgUrlArr) {
  const img = document.createElement("img");
  img.classList.add("picture");
  img.src = url;
  document.body.append(img);
}

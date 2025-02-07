let img; // 이미지를 저장할 변수

function preload() {
  img = loadImage('assets/sunflower.png'); // 이미지 파일 로드
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(img, mouseX, mouseY); // 마우스 위치에 이미지를 표시
}

let img;

function preload() {
  img = loadImage('assets/sunflower.png');
}

function setup() {
  createCanvas(600, 600);
  background(220);

  image(img, 0, 0);
  
  // 그레이스케일 효과
  filter(GRAY);

  // 이미지에 흐림 효과 추가
  filter(BLUR, 3);
}

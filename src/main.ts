import { DemoCanvas } from "./canvas";

const canvas = document.querySelector('canvas')!;

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const demoCanvas = new DemoCanvas(canvas);
// demoCanvas.addRectangle(300, 300, 150, 150);
demoCanvas.addRectangle(150, 150, 100, 100, [{ direction: 'right', position: 0.5 }]);
demoCanvas.addRectangle(700, 400, 100, 200, [{ direction: 'left', position: 0.5 }]);
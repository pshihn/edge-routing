import { DemoCanvas } from "./canvas";

const canvas = document.querySelector('canvas')!;

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const demoCanvas = new DemoCanvas(canvas);
demoCanvas.addRectangle(50, 50, 100, 60);
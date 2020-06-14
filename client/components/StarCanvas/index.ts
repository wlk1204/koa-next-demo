class Star {
  dom: HTMLDocument;
  ctx: any;
  canvasWidth: number;
  canvasHeight: number;
  currentWidth: number;
  currentHeight: number;
  degree: number;
  animate: any;
  looping: boolean;
  constructor(dom) {
    this.dom = dom;
    this.canvasWidth = 300;
    this.canvasHeight = 300;
    this.currentWidth = 300;
    this.currentHeight = 300;
    this.degree = 1.5;
    const canvas: HTMLCanvasElement | any = this.dom;
    this.ctx = canvas.getContext("2d");
    this.redraw(30, 10, this.canvasWidth / 2, this.canvasHeight / 2, "#000");
    this.autoPlay();
  }

  clear() {
    const { ctx, canvasWidth, canvasHeight } = this;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  redraw(R, r, x, y, fillStyle) {
    const { ctx } = this;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      // 外顶点(x1,y1)  内顶点(x2,y2)
      const x1 = Math.cos(((0 + 72 * i) / 180) * Math.PI) * R;
      const y1 = Math.sin(((0 + 72 * i) / 180) * Math.PI) * R;
      const x2 = Math.cos(((36 + 72 * i) / 180) * Math.PI) * r;
      const y2 = Math.sin(((36 + 72 * i) / 180) * Math.PI) * r;

      ctx.lineTo(x1 + x, y1 + y);
      ctx.lineTo(x2 + x, y2 + y);
    }

    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }

  start() {
    if (!this.looping) {
      this.autoPlay();
    }
  }

  stop() {
    window.cancelAnimationFrame(this.animate);
    this.looping = false;
  }

  autoPlay() {
    const { ctx, canvasWidth, canvasHeight } = this;
    this.clear();
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate((this.degree * Math.PI) / 180);
    ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
    this.redraw(30, 10, canvasWidth / 2, canvasHeight / 2, "#000");
    this.animate = window.requestAnimationFrame(this.autoPlay.bind(this));
    this.looping = true;
  }
}

export default Star;

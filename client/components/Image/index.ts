class DragImg {
  dom: HTMLDocument;
  ctx: any;
  canvasWidth: number;
  canvasHeight: number;
  base_image: any;
  currentWidth: number;
  currentHeight: number;
  degree: number;
  constructor(dom) {
    this.dom = dom;
    this.canvasWidth = 300;
    this.canvasHeight = 300;
    this.currentWidth = 300;
    this.currentHeight = 300;
    this.degree = 30;
    this.drawImage();
  }

  drawImage() {
    const { canvasWidth, canvasHeight } = this;
    const canvas: any = this.dom;
    const ctx = canvas.getContext("2d");
    const base_image = new Image();
    base_image.src = "../../static/images/avatar.png";
    base_image.onload = function () {
      ctx.drawImage(base_image, 0, 0, canvasWidth, canvasHeight);
    };
    this.ctx = ctx;
    this.base_image = base_image;
  }

  clear() {
    const { ctx, canvasWidth, canvasHeight } = this;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  redraw(width, height) {
    const { ctx, base_image } = this;
    ctx.drawImage(base_image, 0, 0, width, height);
  }

  zoomBig() {
    this.clear();
    this.currentWidth += 5;
    this.currentHeight += 5;
    this.redraw(this.currentWidth, this.currentHeight);
  }

  zoomSmall() {
    this.clear();
    this.currentWidth -= 5;
    this.currentHeight -= 5;
    this.redraw(this.currentWidth, this.currentHeight);
  }

  rotate() {
    const { ctx, canvasWidth, canvasHeight } = this;
    this.clear();
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate((this.degree * Math.PI) / 180);
    ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
    this.redraw(canvasWidth, canvasHeight);
  }
}

export default DragImg;

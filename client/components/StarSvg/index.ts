import * as d3Selection from "d3-selection";
import * as d3Shape from "d3-shape";

const d3 = Object.assign(d3Selection, d3Shape);

class Star {
  dom: HTMLDocument;
  svg: HTMLOrSVGElement | HTMLSelectElement | any;
  svgWidth: number;
  svgHeight: number;
  constructor(dom) {
    this.dom = dom;
    this.svgWidth = 300;
    this.svgHeight = 300;
    this.svg = d3
      .select(dom)
      .append("svg")
      .style("width", 300)
      .style("height", 300);
    const path = this.draw(30, 10, this.svgWidth / 2, this.svgHeight / 2);
    this.autoPlay(path);
  }

  draw(R, r, x, y) {
    const data = new Int8Array(5).reduce((a, b, i) => {
      const x1 = Math.cos(((0 + 72 * i) / 180) * Math.PI) * R;
      const y1 = Math.sin(((0 + 72 * i) / 180) * Math.PI) * R;
      const x2 = Math.cos(((36 + 72 * i) / 180) * Math.PI) * r;
      const y2 = Math.sin(((36 + 72 * i) / 180) * Math.PI) * r;
      return [...a, [x1 + x, y1 + y], [x2 + x, y2 + y]];
    }, []);
    var line = d3.line();
    return this.svg
      .append("g")
      .append("path")
      .attr("d", line(data))
      .attr("stroke", "#000");
  }

  start() {
    this.svg.node().unpauseAnimations();
  }

  stop() {
    this.svg.node().pauseAnimations();
  }

  autoPlay(dom) {
    dom
      .append("animateTransform")
      .attr("attributeName", "transform")
      .attr("type", "rotate")
      .attr("from", `0 ${this.svgWidth / 2} ${this.svgHeight / 2}`)
      .attr("to", `360 ${this.svgWidth / 2} ${this.svgHeight / 2}`)
      .attr("dur", "5s")
      .attr("repeatCount", "indefinite");
  }
}

export default Star;

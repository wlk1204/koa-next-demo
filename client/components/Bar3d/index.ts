import * as THREE from "three";

class Bar3d {
  currentWidth: number = 600;
  currentHeight: number = 600;
  camera: any;
  scene: any; // 场景
  renderer: any; // 渲染器
  container: HTMLDivElement;
  color: string;
  group: any;

  constructor({ container, rotate, color }) {
    this.color = color;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.camera = new THREE.PerspectiveCamera(
      60,
      this.currentWidth / this.currentHeight,
      1,
      1000
    );
    this.camera.position.set(20, 100, 300);
    this.group = new THREE.Group();
    this.group.shadowMapEnabled = true;
    this.scene.add(this.group);
    const light = new THREE.DirectionalLight(0x000000, 1);
    light.position.set(300, 200, 0);
    light.castShadow = true;
    this.scene.add(light);
    const axesHelper = new THREE.AxesHelper(150);
    this.scene.add(axesHelper);
    this.scene.rotation.set(rotate.y / 100, rotate.y / 100, rotate.x / 100);
    this.render({ container, color });
  }

  setData(data) {
    data.forEach((x, i) => {
      this.renderCube(x, { x: 18 * i, y: x * 5 });
    });
  }

  // 渲染柱体
  renderCube(height, position) {
    let geometry = new THREE.BoxGeometry(0, 0, 0);
    if (typeof height === "number" && !isNaN(height)) {
      geometry = new THREE.BoxGeometry(10, height * 10, 10);
    }
    const material = new THREE.MeshBasicMaterial({ color: this.color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(position.x, position.y, 0);
    this.group.add(cube);
    this.renderer.render(this.scene, this.camera);
  }

  render(propsValues: any) {
    const {
      currentWidth,
      currentHeight,
      container,
      scene,
      renderer,
      camera,
    } = Object.assign(this, propsValues);

    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(
      typeof window === "object" ? window.devicePixelRatio : 1
    );
    renderer.setSize(currentWidth, currentHeight);
    container.appendChild(renderer.domElement);

    renderer.render(scene, camera);
  }

  setSize(setWidth: number | string, setHeight: number | string) {
    const { renderer, currentWidth, currentHeight } = this;
    renderer.setSize(+setWidth || currentWidth, +setHeight || currentHeight);
  }
}

export default Bar3d;

import * as THREE from 'three';
// 引入相机轨道控件
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 引入 stats 性能监视器
import Stats from 'three/addons/libs/stats.module.js';

// 创建性能监视器
const stats = new Stats();
stats.setMode(1);
document.body.appendChild(stats.domElement);

// 创建场景
// 第一步：创建一个三维场景
const scene = new THREE.Scene();

// 长方体
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// 球体
// const geometry = new THREE.SphereGeometry(50);
// 圆柱
// const geometry = new THREE.CylinderGeometry(50, 50, 100);
// 矩形平面
// const geometry = new THREE.PlaneGeometry(100, 50);
// 圆形平面
const geometry = new THREE.CircleGeometry(50);

// 定义网格材质
const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff, // 设置材质颜色
  side: THREE.DoubleSide, // 两面可见
});

// 使用几何体和材质创建网格模型
const mesh = new THREE.Mesh(geometry, material);

// 第三步：定义物体的位置
mesh.position.set(0, 0, 0);

// 第四步：将物体添加到三维场景中
scene.add(mesh);

// 创建一个三维坐标轴
const axesHelper = new THREE.AxesHelper(100);

// 将三维坐标轴添加到三维场景中
scene.add(axesHelper);

// 添加一个环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1);

// 将光源添加到场景中
scene.add(ambientLight);

// 创建一个光源对象 点光源
const pointLight = new THREE.PointLight(0xffffff, 2.0);

// 默认情况下光源随着距离的改变会逐渐衰减，decay可以配置衰减值，默认是2.0，不希望衰减可以设置0.0
pointLight.decay = 0.0;

// 设置光源的位置
pointLight.position.set(400, 200, 300); // 点光源的位置设置在X轴上

// 将光源添加到场景中
scene.add(pointLight);

// 创建虚拟相机
// 第一步：创建一个虚拟相机对象
// 定义相机输出的画布尺寸(单位：像素px)
const width = window.innerWidth; // 文档区域宽度
const height = window.innerHeight; // 文档区域高度

// 创建一个透视投影相机对象
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

// 第二步：定义相机的位置
camera.position.set(200, 200, 200);

// 第三步：定义相机的视线(目标点的坐标)
camera.lookAt(0, 0, 0); // 坐标原点

// 创建渲染器
// 第一步：创建一个WebGL渲染器对象
const renderer = new THREE.WebGLRenderer();

// 第二步：设置渲染区域的尺寸
renderer.setSize(width, height); // 设置Canvas画布的大小

// 第三步：将Canvas画布添加到页面中
document.body.appendChild(renderer.domElement);

// 渲染循环
function render() {
  stats.update(); // 刷新时间
  renderer.render(scene, camera); // 渲染

  // 绕Y轴旋转的弧度值(非度数)
  mesh.rotateY(0.01);

  // 向浏览器请求再次执行渲染函数 render，在下一帧时渲染
  requestAnimationFrame(render);
}

render();

// 创建一个相机控件对象
new OrbitControls(camera, renderer.domElement);

// 窗口大小发生改变时触发
window.onresize = function () {
  // 更新canvas画布的尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 更新相机的观察范围长宽比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新相机投影矩阵
  camera.updateProjectionMatrix();
};

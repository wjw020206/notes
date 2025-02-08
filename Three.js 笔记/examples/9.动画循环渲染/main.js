import * as THREE from 'three';
// 引入相机轨道控件
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 创建场景
// 第一步：创建一个三维场景
const scene = new THREE.Scene();

// 第二步：创建一个物体
// 定义一个长方体，长宽高都是 100
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 定义网格材质
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, // 设置材质颜色
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

// 创建一个光源对象 点光源
const pointLight = new THREE.PointLight(0xffffff, 1.0);

// 默认情况下光源随着距离的改变会逐渐衰减，decay可以配置衰减值，默认是2.0，不希望衰减可以设置0.0
pointLight.decay = 0.0;

// 设置光源的位置
pointLight.position.set(400, 200, 300); // 点光源的位置设置在X轴上

// 将光源添加到场景中
scene.add(pointLight);

// 创建虚拟相机
// 第一步：创建一个虚拟相机对象
// 定义相机输出的画布尺寸(单位：像素px)
const width = 800;
const height = 500;

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

const clock = new THREE.Clock();

// 渲染循环
function render() {
  const spt = clock.getDelta() * 1000; // 毫秒
  console.log('两帧渲染时间间隔(毫秒)', spt);
  console.log('帧率FPS', 1000 / spt);

  // 渲染
  renderer.render(scene, camera);

  // 绕Y轴旋转的弧度值(非度数)
  mesh.rotateY(0.01);

  // 向浏览器请求再次执行渲染函数 render，在下一帧时渲染
  requestAnimationFrame(render);
}

render();

// 创建一个相机控件对象
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
  // renderer.render(scene, camera); // 使用渲染循环时，change 事件中的这行代码可以省略，因为相机控件的变化也顺带被渲染循环了
});

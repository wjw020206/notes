import * as THREE from 'three';
// 引入相机轨道控件
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 创建场景
// 第一步：创建一个三维场景
const scene = new THREE.Scene();

// 第二步：创建一个物体
// 定义一个长方体，长宽高都是 100
const geometry = new THREE.BoxGeometry(50, 50, 50);

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
// 改变光源对象的intensity也可以改变光照强度
// pointLight.intensity = 10.0;

// 默认情况下光源随着距离的改变会逐渐衰减，decay可以配置衰减值，默认是2.0，不希望衰减可以设置0.0
pointLight.decay = 0.0;

// 设置光源的位置
pointLight.position.set(100, 100, 100); // 点光源的位置设置在X轴上

// 将光源添加到场景中
scene.add(pointLight);

// 可视化点光源
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);

// 将光源添加到场景中
scene.add(pointLightHelper);

// 添加一个环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

// 将光源添加到场景中
scene.add(ambientLight);

// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(100, 100, 100);
// directionalLight.target = mesh; // 不设置目标默认为坐标原点
scene.add(directionalLight);

// 可视化平行光
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  5,
  0xff0000
);

scene.add(directionalLightHelper);

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

// 第三步：执行渲染操作，生成Canvas画布
renderer.render(scene, camera); // 指定相机和场景进行渲染

// 第四步：将Canvas画布添加到页面中
document.body.appendChild(renderer.domElement);

// 创建一个相机控件对象
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
  renderer.render(scene, camera);
});

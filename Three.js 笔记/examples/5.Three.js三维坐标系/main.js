import * as THREE from 'three';

// 创建场景
// 第一步：创建一个三维场景
const scene = new THREE.Scene();

// 第二步：创建一个物体
// 定义一个长方体，长宽高都是 100
const geometry = new THREE.BoxGeometry(50, 50, 50);

// 定义网格材质
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff, // 设置材质颜色
  transparent: true, // 开启透明
  opacity: 0.5, // 设置透明度
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

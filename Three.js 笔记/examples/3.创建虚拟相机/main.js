import * as THREE from 'three';

// 创建场景
// 第一步：创建一个三维场景
const scene = new THREE.Scene();

// 第二步：创建一个物体
// 定义一个长方体，长宽高都是 100
const geometry = new THREE.BoxGeometry(100, 100, 100);

// 定义网格材质
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000, // 红色材质
});

// 使用几何体和材质创建网格模型
const mesh = new THREE.Mesh(geometry, material);

// 第三步：定义物体的位置
mesh.position.set(0, 10, 0);

// 第四步：将物体添加到三维场景中
scene.add(mesh);

// 创建虚拟相机
// 第一步：创建一个虚拟相机对象
const camera = new THREE.PerspectiveCamera(); // 创建一个透视投影相机对象

// 第二步：定义相机的位置
camera.position.set(200, 200, 200);

// 第三步：定义相机的视线(目标点的坐标)
camera.lookAt(0, 0, 0); // 坐标原点
camera.lookAt(0, 10, 0); // Y轴上的坐标原点

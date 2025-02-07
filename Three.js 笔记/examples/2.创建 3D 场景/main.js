import * as THREE from 'three';

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

console.log('Mesh', mesh);

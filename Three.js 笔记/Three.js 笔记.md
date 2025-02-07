#  Three.js 笔记

视频地址：https://www.bilibili.com/video/BV14r4y1G7h4



## 下载

Three.js 所有版本：https://github.com/mrdoob/three.js/releases

下载后大致的目录如下:

```
three.js
├─ build
├─ docs
│  └─ index.html
├─ editor
│  └─ index.html
├─ examples
│  └─ jsm
└─ src
```

- build 中包含 Three.js 相关的库
- docs 中包含 Three.js API 文档文件
  - index.html 打开文件可以本地预览 Three.js 文档
- editor 中包含 Three.js 可视化编辑器，可以编辑 3D 场景
  - index.html 打开可视化编辑器
- examples 中包含大量 3D 案例
  - jsm 中包含了各种 Three.js 扩展库
- src 中包含 Three.js 引擎的源码



## 安装

具体可以参考[安装 – three.js docs](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        body {
          margin: 0;
        }
      </style>
      <!-- 配置import映射 -->
      <script type="importmap">
        {
          "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/"
          }
        }
      </script>
    </head>
    <body>
      <script type="module" src="./main.js"></script>
    </body>
  </html>
  ```

- main.js

  ```js
  import * as THREE from 'three';
  
  console.log(THREE.Scene);
  ```

若无报错正常打印，则表示引入成功



## Three.js 三要素

- 场景(scene)
- 相机(camera)
- 渲染器(renderer)

三者结合起来就是最终的渲染结果

![image-20250207115019224](images/image-20250207115019224.png)



## 创建 3D 场景

用于模拟生活中真实的三维场景

1. 使用 `Scene` 创建三维场景

   ```js
   const scene = new THREE.Scene();
   ```

2. 创建物体

   1. 定义几何体

      ```js
      // 定义一个长方体，长宽高都是 100
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      ```

   2. 定义材质

      ```js
      // 定义网格材质
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000, // 红色材质
      });
      ```

   3. 使用几何体和材质创建网格模型，Three.js 中的物体可以使用 `Mesh` 网格模型来表示

      ```js
      const mesh = new THREE.Mesh(geometry, material);
      ```

3. 定义物体的位置

   ```js
   mesh.position.set(0, 10, 0);
   ```

4. 将物体添加到三维场景中

   ```js
   scene.add(mesh);
   ```



## 创建虚拟相机

用于模拟观察场景的视角




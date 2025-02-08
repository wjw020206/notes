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



## 创建虚拟场景

用于模拟生活中真实的三维场景

1. 使用 `Scene` 创建虚拟场景

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

![image-20250207131326478](images/image-20250207131326478.png)

1. 定义相机

   Three.js 中提供两种相机：

   - 正投影相机 [OrthographicCamera](https://threejs.org/docs/index.html?q=Camera#api/zh/cameras/OrthographicCamera) 

   - 透视投影相机 [PerspectiveCamera](https://threejs.org/docs/index.html?q=PerspectiveCamera#api/zh/cameras/PerspectiveCamera)

     ```js
     const width = 800;
     const height = 500;
     
     const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000); // 创建一个透视投影相机对象
     ```

     `PerspectiveCamera` 构造函数参数如下：

     | 参数   | 含义                                                         | 默认值 |
     | :----- | :----------------------------------------------------------- | :----- |
     | fov    | 相机视锥体竖直方向视野角度                                   | 50     |
     | aspect | 相机视锥体水平方向和竖直方向长度比，一般设置为 Canvas 画布宽高比 width / height | 1      |
     | near   | 相机视锥体近裁截面相对相机距离                               | 0.1    |
     | far    | 相机视锥体远裁截面相对相机距离，far-near 构成了视锥体高度方向 | 2000   |

     ![image-20250207131921651](images/image-20250207131921651.png)

     **⚠️ 注意：** 视锥体外的模型是不可见的

2. 定义相机的位置

   ```js
   camera.position.set(200, 200, 200);
   ```

3. 定义相机的视线

   ```js
   camera.lookAt(0, 0, 0); // 指向坐标原点
   camera.lookAt(0, 10, 0);   // 指向y轴上的坐标一点
   camera.lookAt(mesh.position); // 指向网格模型的位置
   ```



## 创建渲染器

用于指定虚拟相机和虚拟场景进行渲染

1. 创建一个渲染器

   ```js
   // 创建一个WebGL渲染器对象
   const renderer = new THREE.WebGLRenderer();
   ```

2. 设置渲染器输出的 Canvas 画布的大小

   ```js
   renderer.setSize(width, height);
   ```

3. 执行渲染操作，生成 Canvas 画布

   ```js
   renderer.render(scene, camera); // 指定相机和场景进行渲染
   ```

4. 将 Canvas 画布添加到页面中

   ```js
   document.body.appendChild(renderer.domElement);
   ```



## 三维坐标系

用于显示辅助观察坐标系的参考线，便于观察和调试，如下图：

![image-20250207140853460](images/image-20250207140853460.png)

- 红色代表 X 轴
- 绿色代表 Y 轴
- 蓝色代表 Z 轴

顺序与 R G B 一致，其中三个轴相交的点为坐标原点 `(0, 0, 0)`

**⚠️ 注意：** Three.js 的三维坐标系中默认 Y 轴朝上

1. 通过 `AxesHelper` 创建辅助观察坐标系

   ```js
   const axesHelper = new THREE.AxesHelper(150);
   ```

   `AxesHelper` 构造函数的参数为线段的长度，默认值为 `1`，通常数值定义大于物体的大小即可

2. 将辅助观察坐标系添加到场景中

   ```js
   scene.add(axesHelper);
   ```

3. 通过将物体的材质设置为半透明，这样才能看到坐标原点

   ```js
   const material = new THREE.MeshBasicMaterial({
       color: 0x0000ff,  // 设置材质颜色
       transparent:true, // 开启透明
       opacity:0.5,      // 设置透明度
   });
   ```



## Three.js 光源

生活中的物体表面的**明暗效果**受到光照的影响，Three.js 中的通过模拟光照 `Light` 对网格模型 `Mesh` 表面影响

Three.js 中不是所有的材质都是受光照的

![image-20250207145556026](images/image-20250207145556026.png)

基础网格材质(不受光照影响)

```js
const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff, // 设置材质颜色
});
```

![image-20250207145706492](images/image-20250207145706492.png)



漫反射材质(受光照影响)

```js
// 定义网格材质
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, // 设置材质颜色
});
```

![image-20250207145822232](images/image-20250207145822232.png)

**⚠️ 注意：** 如果使用受光照影响材质，未设置光源则物体全黑不可见



Three.js 中提供以下四种光源：

![image-20250207150029160](images/image-20250207150029160.png)

各种光源光线的方向如下：

![image-20250207150052781](images/image-20250207150052781.png)

### 环境光

没有特定的方向，用于改变整体场景的光照亮暗

1. 创建光源对象

   ```js
   const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
   ```

2. 将光源添加到场景中

   ```js
   scene.add(ambientLight);
   ```
   
   ![image-20250208083327369](images/image-20250208083327369.png)

**特点：**

- **无方向性：** 环境光没有特定的方向，照亮所有物体的所有面
- **无阴影：** 环境光不产生阴影，它是均匀的、全局的光
- **全局光照：** 在场景中均匀的影响所有物体，确保没有区域是黑暗的
- **无法模拟光源的特定效果：** 无法模拟关照的衰减、反射或投射阴影，因此通常需要与其他类型的光源结合使用



### 点光源

确定一个点的坐标，由这个点出发向四周散发光线

1. 创建光源对象

   ```js
   const pointLight = new THREE.PointLight(0xffffff, 1.0); // 创建一个点光源
   ```

   `PointLight` 构造函数第一个参数为光源的颜色，默认值 `0xffffff` 白色，第二个参数为光照强度，默认值为 `1.0`，也可以通过修改光源对象的 `intensity` 属性值来配置光照强度

   ```js
   pointLight.intensity = 10.0; // 设置光照强度为10.0
   ```

2. 配置光源的衰减度

   ```js
   pointLight.decay = 0.0;
   ```

   默认情况下点光源随着距离的改变会逐渐衰减，`decay` 可以配置衰减值，默认是 2.0，**不希望衰减可以设置 0.0**

3. 配置光源的位置

   ```js
   pointLight.position.set(400, 200, 300);
   ```

4. 将光源添加到场景中

   ```js
   scene.add(pointLight);
   ```

可以使用 `PointLightHelper` 点光源辅助观察，用于参考点光源的位置

```js
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);
```

`PointLightHelper` 构造函数第一个参数为点光源对象，第二个参数为点光源辅助观察大小，下图中白色区域就是点光源辅助观察

![image-20250207172846180](images/image-20250207172846180.png)

**特点：**

- **光源位置：** 点光源从一个特定的位置向四周均匀的发射光线
- **光照衰减：** 点光源的光照强度会随着距离光源的距离的增加而衰减
- **产生阴影：** 点光源可以产生阴影，通过配置 `castShadow` 属性控制是否启用阴影
- **全向光照：** 点光源向四周发射光线，适用于局部小范围的光源



### 平行光

确定光源的起始坐标以及目标指向对象的坐标，两点确定一个方向，光线沿着方向发射

1. 创建光源对象

   ```js
   const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // 创建一个平行光
   ```

2. 配置光源的位置

   ```js
   directionalLight.position.set(100, 100, 100);
   ```

3. 配置目标的位置

   ```js
   directionalLight.target = mesh; // 指定网格模型为目标的位置
   ```

   **⚠️ 注意：** 如果省略这行代码，目标位置默认为坐标原点

4. 将光源添加到场景中

   ```js
   scene.add(directionalLight);
   ```

可以使用 `DirectionalLightHelper` 平行光辅助观察，用于参考点光源的位置

```js
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xff0000);
scene.add(directionalLightHelper);
```

`DirectionalLightHelper` 构造函数第一个参数为平行光对象，第二个参数为平行光辅助观察大小，第三个参数为平行光辅助观察的颜色，下图中的红色区域就是平行光辅助观察

![image-20250207174602378](images/image-20250207174602378.png)

**特点：**

- **方向性：** 平行光具有固定的方向，所有物体接收到的光线都是平行的，用于模拟太阳光等远离物体的光源
- **没有衰减：** 平行光光照强度始终是均匀的，没有衰减
- **产生阴影：** 平行光可以产生阴影，可以控制阴影的质量、透明度和偏移量等参数
- **用于模拟自然光：**  平行光常常用于模拟太阳光、月光或任何远处的恒定光源



## 相机轨道控件

开发调试或者展示模型时，需要通过使用相机轨道控件 OrbitControls 实现旋转缩放的预览效果

 OrbitControls 的使用

- 旋转：拖动鼠标左键
- 缩放：滚动鼠标中键
- 平移：拖动鼠标右键



1. 引入扩展库 OrbitControls.js

   ```js
   import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
   ```

2. 创建相机控件轨道控制器对象

   ```js
   const controls = new OrbitControls(camera, renderer.domElement);
   ```

   `OrbitControls` 构造函数接收两个参数，第一个参数为要控制的相机对象，第二个参数为用于绑定监听事件的元素

3. 通过 `change` 事件监听相机位置的改变，当相机位置发送改变时重新渲染

   ```js
   controls.addEventListener('change', function () {
       renderer.render(scene, camera); // 执行渲染操作
   });
   ```

   




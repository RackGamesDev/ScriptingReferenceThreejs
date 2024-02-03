import * as THREE from './js/three.js';//importando el script de threejs (de threejs.org, se puede editar con entorno grafico en https://threejs.org/editor/)

const scene = new THREE.Scene();//crear una escena donde estaran los elementos 3d
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//crear una camara para renderizar cosas

const renderer = new THREE.WebGLRenderer({antialias: true});//crear el renderer (elemento html que muestra todo)
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("contenedor").appendChild(renderer.domElement);//agregar como html el canvas
renderer.setClearColor(0x330000);//color de fondo
scene.fog = new THREE.FogExp2(0xffffff, 0.005);//niebla con color y intensidad
//renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMappingExposure = 8.3;

import cube from './shapes/cube.js';//importar el cubo especificado en el script
cube.name = "cubo";//nombre para diferenciarlo
//scene.add(cube);//agregarlo a la escena
cube.position.z = -5;//todos los objetos 3d tienen como atributos position, rotatio y scale, que vienen con x y z
cube.scale.x = 1.3
cube.rotation.set(0.5,0,1.2);//con las propiedades de vectores tambien se puede usar set (se usan los radianes, 1 radian = 180 grados)
camera.lookAt(cube.position);//lookat para apuntar

const lighta = new THREE.AmbientLight(0x404040, 12); scene.add(lighta);//pone una luz que afecta a todo (sol)
const light = new THREE.DirectionalLight(0x404040, 10); scene.add(light);//pone una luz focal con sombras
cube.add(light);//se pueden meter objetos dentro de otros, haciendo que herede su transform (global y local)
light.position.set(4, 5, 2);
//light.target.set(0, 1, 0);//indica a que lugar apunta la luz(directional)

import { MTLLoader } from './js/addons/MTTLoader.js';//importar material
import { OBJLoader } from './js/addons/OBJLoader.js';//importar maya
const mtlloader = new MTLLoader();//crear el objeto con el material y la maya
mtlloader.load("src/modelos/modelo1.mtl", (oo)=>{
    const objloader = new OBJLoader();
    objloader.setMaterials(oo);
    objloader.load("src/modelos/modelo1.obj", (objeto)=>{
        //scene.add(objeto);
        objeto.position.set(0,0,-10);
        objeto.rotation.set(10,4,2);
        light.lookAt(objeto.position);
        light.position.set(camera.position);
        camera.lookAt(objeto.position);
    });
});

import model from './shapes/modelo.js';//cargando el fbx
model.then((obj) => {
    scene.add(obj);//el objeto con la malla cargada
    camera.lookAt(obj);
});

setInterval(() => {//bucle de tiempo, como la funcion update
    cube.rotateX(0.05);
    renderer.render(scene, camera);//finalmente se crea la imagen con el renderer, la escena y la camara
}, 100/6);//60 veces por segundo



import Resize from './js/Resize.js';//codigo necesario para hacer la resolucion dinamica (se necesita ese script)
const resize = new Resize(camera);
resize.start(renderer);
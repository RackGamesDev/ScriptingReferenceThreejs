import * as THREE from '../js/three.js';
const geometry = new THREE.BoxGeometry(1,1,1);//Crear una maya (en este caso un cubo simple) (hay muchas mas formas primitivas)
//const material = new THREE.MeshBasicMaterial({color: 0x00ff00});//Crear un material (en este caso un material simple de un color)
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});//Crear un material (en este caso un material simple de un color)
const cube = new THREE.Mesh(geometry, material);//Crear el objeto apartir de la maya y el material
export default cube;

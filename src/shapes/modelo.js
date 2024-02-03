//importar la geometria de un fbx
import * as THREE from '../js/three.js';
import {FBXLoader} from '../js/addons/FBXLoader.js';//addon oficial de threejs
const loader = new FBXLoader();
const model = new Promise((res, rej) => {
    loader.load('src/shapes/modelo.fbx', (obj) => {//ruta del fbx
        obj.traverse(function (child) {
            if(child.isMesh){
                child.castShadow = true;
                child.recieveShadow = true;
            }
        });
        //const material = new THREE.MeshStandardMaterial({color: 0x00ff00});//agregarle el material
        //const objeto = new THREE.Mesh(obj, material);
        res(obj);
    });
});

export default model;

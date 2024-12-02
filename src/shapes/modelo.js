//Importar la geometria de un fbx
import * as THREE from '../js/three.js';
import {FBXLoader} from '../js/addons/FBXLoader.js';//Addon oficial de threejs
const loader = new FBXLoader();
const model = new Promise((res, rej) => {
    loader.load('src/shapes/modelo.fbx', (obj) => {//Ruta del fbx
        obj.traverse(function (child) {
            if(child.isMesh){
                child.castShadow = true;
                child.recieveShadow = true;
            }
        });
        //const material = new THREE.MeshStandardMaterial({color: 0x00ff00});//Agregarle el material
        //const objeto = new THREE.Mesh(obj, material);
        res(obj);
    });
});

export default model;

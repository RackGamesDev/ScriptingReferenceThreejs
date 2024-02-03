//script externo para hacer la resolucion dinamica
import * as THREE from './three.js';
class Resize{
    constructor(camera){
        this.camera = camera;
        this.renderer = null;
    }
    start(renderer){
        this.renderer = renderer;
        window.addEventListener('resize', this.resize.bind(this));
    }
    stop(){
        window.removeEventListener('resize', this.resize.bind(this));
    }
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
export default Resize;
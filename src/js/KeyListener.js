//Script externo para facilitar el manejo de teclas
class KeyListener{
    constructor(caster){
        this.keys = {}
        this.caster = caster || console.log;
    }
    setCaster(caster){
        this.caster = caster;
    }
    down = (e) => {
        if(this.keys[e.keyCode]) return;
        this.keys[e.keyCode] = true;
        this.caster([e.keycode, true, this.keys]);
        //e.preventDefault();
        //e.stopPropagation();
    }
    up = (e) => {
        this.keys[e.keyCode] = false;
        this.caster([e.keycode, false, this.keys]);
        //e.preventDefault();
        //e.stopPropagation();
    }
    isPressed(keyCode){
        return (this.keys[keycode]) ? this.keys[keyCode] : false;
    }
    start(){
        this.stop();
        window.addEventListener('keydown', this.down);
        window.addEventListener('keyup', this.up);
    }
    stop(){
        window.removeEventListener('keydown', this.down);
        window.removeEventListener('keyup', this.up);
    }
}
export default KeyListener;

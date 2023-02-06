export class Model {
    constructor(model, animationMixer = null) {
        this.model = model;
        this.object3D = this.model.scene.children[0];
        this.mesh = this.model.scene.children[1];
        this.animationMixer = animationMixer;
        this.animateMap = new Map();
    }

    setShadow() {
        this.object3D.traverse(child => {
            if (child.isMesh) {
                child.castShadow = child.receiveShadow = true;
            }
        });
    }

    setScale(scale) {
        this.model.scene.scale.set(scale, scale, scale);
    }

    setPosition(x, y, z) {
        this.model.scene.position.set(x, y, z);
    }

    rotate(rotateSpeedRate, rotateAxis) {
        this.model.scene.rotation[rotateAxis] += rotateSpeedRate;
    }

    animate(animationNumber) {
        if(this.animationMixer)this.animationMixer.stopAllAction();
        const animation = this.model.animations[animationNumber];
        if (!animation) return;
        const animationName = animation.name;
        let animationAction = this.animateMap.get(animationName);
        if (animationAction) {
            animationAction.play();
            return;
        }
        if (!this.animationMixer) this.animationMixer = new THREE.AnimationMixer(this.model.scene);
        animationAction = this.animationMixer.clipAction(
            animation,
        );
        animationAction.play();
    }

    destroy() {
        this.animateMap.clear();
        this.animateMap = null;
    }

    get display() {
        return this.model.scene;
    }

    get mixer() {
        return this.animationMixer;
    }

}
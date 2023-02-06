import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import { AnaglyphEffect } from 'three/addons/effects/AnaglyphEffect.js';
import { Model } from "./animation/model";
export default class Phaser3D extends Phaser.Events.EventEmitter {
    constructor(phaserScene, { ortho = false, fov = 75, aspect = null, near = 0.1, far = 1000, left = -1, right = 1, top = 1, bottom = -1, x = 0, y = 0, z = 0, anisotropy = 1 } = {}) {
        super();

        this.root = phaserScene;

        this.view = phaserScene.add.extern();

        this.width = phaserScene.game.config.width;

        this.height = phaserScene.game.config.height;

        this.view.setSize(this.width, this.height);

        this.view.setInteractive();

        this.scene = new THREE.Scene();

        this.clock = new THREE.Clock();

        this.textureAnisotropy = anisotropy;

        if (!aspect) {
            aspect = phaserScene.scale.gameSize.aspectRatio;
        }

        if (ortho) {
            this.addOrthoCamera({ left, right, top, bottom, near, far, x, y, z });
        }
        else {
            this.addPerspectiveCamera({ fov, aspect, near, far, x, y, z });
        }

        //  This is handy if you want to capture camera position for your code while using the orbit controls:

        // window._cam = this.camera;

        // window.cam = function ()
        // {
        //     console.log('x: ' + _cam.position.x.toFixed(2) + ', y: ' + _cam.position.y.toFixed(2) + ', z: ' + _cam.position.z.toFixed(2));
        //     console.log('phaser3d.camera.rotation.set(' + _cam.rotation.x.toFixed(2) + ', ' + _cam.rotation.y.toFixed(2) + ', ' + _cam.rotation.z.toFixed(2) + ');');
        // };

        this.renderer = new THREE.WebGLRenderer({
            canvas: phaserScene.sys.game.canvas,
            context: phaserScene.sys.game.context,
            antialias: true
        });

        this.composer = null;

        this.anaglyphEffect = null;

        //  We don't want three.js to wipe our gl context!
        this.renderer.autoClear = false;

        //  Create our Extern render callback
        this.view.render = () => {
            const delta = this.clock.getDelta();
            const time = this.clock.getElapsedTime() * 10;
            //  This is important to retain GL state between renders
            this.renderer.state.reset();

            this.renderer.render(this.scene, this.camera);

        };

        //  Some basic factory helpers
        this.add = {

            //  Lights
            ambientLight: (config) => this.addAmbientLight(config),
            directionalLight: (config) => this.addDirectionalLight(config),
            hemisphereLight: (config) => this.addHemisphereLight(config),
            pointLight: (config) => this.addPointLight(config),
            spotLight: (config) => this.addSpotLight(config),

            effectComposer: () => this.addEffectComposer(),
            anaglyphEffect: () => this.addAnglyphEffect(),
            mesh: (mesh) => this.addMesh(mesh),
            group: (...children) => this.addGroup(children),

            //  Geometry
            ground: (config) => this.addGround(config),
            box: (config) => this.addBox(config),
            cube: (config) => this.addCube(config),
            cone: (config) => this.addCone(config),
            circle: (config) => this.addCircle(config),
            cylinder: (config) => this.addCylinder(config),
            dodecahedron: (config) => this.addDodecahedron(config),
            extrude: (config) => this.addExtrude(config),
            lathe: (config) => this.addLathe(config),
            icosahedron: (config) => this.addIcosahedron(config),
            plane: (config) => this.addPlane(config),
            parametric: (config) => this.addParametric(config),
            ring: (config) => this.addRing(config),
            sphere: (config) => this.addSphere(config),
            text: (config) => this.addText(config),
            tube: (config) => this.addTube(config),
            octahedron: (config) => this.addOctahedron(config),
            polyhedron: (config) => this.addPolyhedron(config),
            shape: (config) => this.addShape(config),
            tetrahedron: (config) => this.addTetrahedron(config),
            torus: (config) => this.addTorus(config),
            torusKnot: (config) => this.addTorusKnot(config),
        };

        //  Some basic factory helpers
        this.make = {
            box: (config) => this.makeBox(config),
            cone: (config) => this.makeCone(config),
            circle: (config) => this.makeCircle(config),
            cylinder: (config) => this.makeCylinder(config),
            dodecahedron: (config) => this.makeDodecahedron(config),
            extrude: (config) => this.makeExtrude(config),
            icosahedron: (config) => this.makeIcosahedron(config),
            lathe: (config) => this.makeLathe(config),
            plane: (config) => this.makePlane(config),
            parametric: (config) => this.makeParametric(config),
            ring: (config) => this.makeRing(config),
            sphere: (config) => this.makeSphere(config),
            shape: (config) => this.makeShape(config),
            text: (config) => this.makeText(config),
            tube: (config) => this.makeTube(config),
            octahedron: (config) => this.makeOctahedron(config),
            polyhedron: (config) => this.makePolyhedron(config),
            tetrahedron: (config) => this.makeTetrahedron(config),
            torus: (config) => this.makeTorus(config),
            torusKnot: (config) => this.makeTorusKnot(config),
        };
    }

    // addTest() {
    //     let offset = 0;
    //     const points = GeometryUtils.gosper(8);
    //     const color = new THREE.Color();
    //     const geometry = new THREE.BufferGeometry();
    //     const positionAttribute = new THREE.Float32BufferAttribute(points, 3);
    //     geometry.setAttribute('position', positionAttribute);
    //     geometry.center();
    //     geometry.scale(5, 5, 5);

    //     const colorAttribute = new THREE.BufferAttribute(new Float32Array(positionAttribute.array.length), 3);
    //     colorAttribute.setUsage(THREE.DynamicDrawUsage);
    //     geometry.setAttribute('color', colorAttribute);

    //     const material = new THREE.LineBasicMaterial({ vertexColors: true });

    //     const line = new THREE.Line(geometry, material);
    //     line.scale.setScalar(0.05);
    //     this.scene.add(line);


    //     this.view.render = () => {
    //         const delta = this.clock.getDelta();
    //         const time = this.clock.getElapsedTime() * 10;
    //         //  This is important to retain GL state between renders
    //         this.renderer.state.reset();

    //         const colorAttribute = line.geometry.getAttribute('color');
    //         const l = colorAttribute.count;

    //         for (let i = 0; i < l; i++) {

    //             const h = ((offset + i) % l) / l;

    //             color.setHSL(h, 1, 0.5);
    //             colorAttribute.setX(i, color.r);
    //             colorAttribute.setY(i, color.g);
    //             colorAttribute.setZ(i, color.b);

    //         }

    //         colorAttribute.needsUpdate = true;

    //         offset -= 25;

    //         this.renderer.render(this.scene, this.camera);
    //     };
    // }
    // todo add usdz res
    // todo add raycaster code
    // todo add shader

    addEffectComposer() {
        this.composer = new EffectComposer(this.renderer);

        this.view.render = () => {
            const delta = this.clock.getDelta();
            const time = this.clock.getElapsedTime() * 10;
            //  This is important to retain GL state between renders
            this.renderer.state.reset();

            this.composer.render();

        };

        return this.composer;
    }

    addAnglyphEffect() {
        this.anaglyphEffect = new AnaglyphEffect(this.renderer);
        this.anaglyphEffect.setSize(this.width, this.height);
        this.view.render = () => {
            const delta = this.clock.getDelta();
            const time = this.clock.getElapsedTime() * 10;
            //  This is important to retain GL state between renders
            this.renderer.state.reset();

            this.anaglyphEffect.render(this.scene, this.camera);

        };
    }

    enableFog(color = 0x000000, near = 1, far = 1000) {
        this.scene.fog = new THREE.Fog(color, near, far);

        return this;
    }

    enableFogExp2(color = 0x000000, density = 0.00025) {
        this.scene.fog = new THREE.FogExp2(color, density);

        return this;
    }

    enableGamma(input = true, output = true) {
        this.renderer.gammaInput = input;
        this.renderer.gammaOutput = output;

        return this;
    }

    enableShadows(type = THREE.PCFSoftShadowMap) {
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = type;
        return this;
    }

    setCubeBackground(...files) {
        this.scene.background = this.createCubeTexture(...files)

        return this;
    }


    createCube(x, y, z, width = 2, height = 2, depth = 2, color = "purple") {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshStandardMaterial({ color });
        const cube = new THREE.Mesh(geometry, material);

        cube.rotation.set(x, y, z);//(-0.5, -0.1, 0.8);

        // const radiansPerSecond = THREE.MathUtils.degToRad(30);

        // // this method will be called once per frame
        // cube.tick = (delta) => {
        //     // increase the cube's rotation each frame
        //     cube.rotation.z += radiansPerSecond * delta;
        //     cube.rotation.x += radiansPerSecond * delta;
        //     cube.rotation.y += radiansPerSecond * delta;
        // };

        return cube;
    }

    //  three.js uses a right-handed coordinate system!
    //  So cubemaps found on the web likely need their nx/px swapped and ny = rotate 90 deg clockwise and py = rotate 90 deg counter clockwise
    createCubeTexture(path, right = 'px.png', left = 'nx.png', up = 'py.png', down = 'ny.png', back = 'pz.png', front = 'nz.png') {
        if (path.substr(-1) !== '/') {
            path = path.concat('/');
        }

        return new THREE.CubeTextureLoader().setPath(path).load([right, left, up, down, back, front]);
    }

    castShadow(...meshes) {
        for (const mesh of meshes.values()) {
            mesh.castShadow = true;
        }

        return this;
    }

    receiveShadow(...meshes) {
        for (const mesh of meshes.values()) {
            mesh.receiveShadow = true;
        }

        return this;
    }

    setShadow(light, width = 512, height = 512, near = 1, far = 1000) {
        light.castShadow = true;

        light.shadow.mapSize.width = width;
        light.shadow.mapSize.height = height;

        light.shadow.camera.near = near;
        light.shadow.camera.far = far;

        return light;
    }

    addGLTFModelByPath(resourcePath, onLoad) {
        const loader = new GLTFLoader();
        loader.load(resourcePath, (gltf) => {
            const model = new Model(gltf);

            model.setShadow();
            this.scene.add(model.display);

            this.emit('loadgltf', model);

            if (onLoad) {

                onLoad(model);
            }
        });
    }

    addGLTFModelByArrayBuf(key, resourcePath, onLoad) {
        const data = this.root.cache.binary.get(key);
        const loader = new GLTFLoader();
        loader.parse(data, resourcePath, (gltf) => {
            const model = new Model(gltf);

            model.setShadow();
            this.scene.add(model.display);

            this.emit('loadgltf', model);

            if (onLoad) {

                onLoad(model);
            }

        });
    }

    parseGLTFModel(key, resourcePath, onLoad) {
        const data = this.root.cache.binary.get(key);

        const loader = new GLTFLoader();

        loader.parse(data, resourcePath, (gltf) => {

            this.emit('loadgltf', gltf);

            if (onLoad) {
                onLoad(gltf);
            }

        });
    }

    getTexture(key) {
        let texture = new THREE.Texture();

        texture.image = this.root.textures.get(key).getSourceImage();

        texture.format = THREE.RGBAFormat;
        texture.needsUpdate = true;
        texture.anisotropy = this.textureAnisotropy;

        return texture;
    }

    addHemisphereLight({ skyColor = 0xffffff, groundColor = 0x000000, intensity = 1 } = {}) {
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);

        this.scene.add(light);

        return light;
    }

    addAmbientLight({ color = 0xffffff, intensity = 1 } = {}) {
        const light = new THREE.AmbientLight(color, intensity);

        this.scene.add(light);

        return light;
    }

    addDirectionalLight({ color = 0xffffff, intensity = 1, x = 0, y = 0, z = 0 } = {}) {
        const light = new THREE.DirectionalLight(color, intensity);

        light.position.set(x, y, z);

        this.scene.add(light);

        return light;
    }

    /**
     * 点光源不产生阴影
     * @param {*} param0 
     * @returns 
     */
    addPointLight({ color = 0xffffff, intensity = 1, distance = 0, decay = 1, x = 0, y = 0, z = 0 } = {}) {
        const light = new THREE.PointLight(color, intensity, distance, decay);

        light.castShadow = castShadow;

        light.position.set(x, y, z);

        this.scene.add(light);

        return light;
    }

    /**
     * 聚光灯产生阴影
     * @param {*} param0 
     * @returns 
     */
    addSpotLight({ color = 0xffffff, intensity = 1, distance = 0, angle = Math.PI / 4, penumbra = 1, decay = 1, x = 0, y = 0, z = 0, castShadow = true } = {}) {
        const light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);

        light.castShadow = castShadow;

        light.position.set(x, y, z);

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        // light.shadow.camera.near = 10;
        // light.shadow.camera.far = 200;
        light.shadow.focus = 1;
        this.scene.add(light);



        return light;
    }

    addOrthoCamera({ left = -1, right = 1, top = 1, bottom = -1, near = 0, far = 1, x = 0, y = 0, z = 0 }) {
        this.camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);

        this.camera.position.set(x, y, z);

        return this;
    }

    addPerspectiveCamera({ fov = 75, aspect = null, near = 0.1, far = 1000, x = 0, y = 0, z = 0 }) {
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        this.camera.position.set(x, y, z);

        return this;
    }

    addGroup(children) {
        const group = new THREE.Group();

        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                group.add(children[i]);
            }
        }

        this.scene.add(group);

        return group
    }

    addMesh(mesh) {
        if (Array.isArray(mesh)) {
            for (let i = 0; i < mesh.length; i++) {
                this.scene.add(mesh[i]);
            }
        }
        else {
            this.scene.add(mesh);
        }


        return this;
    }

    createTexture({ key, wrap, wrapS = THREE.ClampToEdgeWrapping, wrapT = THREE.ClampToEdgeWrapping, alpha = true, repeatX = 1, repeatY = 1 } = {}) {
        const texture = this.getTexture(key);

        if (wrap) {
            wrapS = wrap;
            wrapT = wrap;
        }

        texture.wrapS = wrapS;
        texture.wrapT = wrapT;
        texture.repeat.set(repeatX, repeatY);
        texture.premultiplyAlpha = alpha;

        return texture;
    }

    createShaderMaterial(uniforms, key, params) {
        let config = { ...params };

        let shader = this.root.cache.shader.get(key);

        config.uniforms = uniforms;
        config.vertexShader = shader.vertexSrc;
        config.fragmentShader = shader.fragmentSrc;

        return new THREE.ShaderMaterial(config);
    }

    createMaterial(texture, color, material) {
        if (material && !Phaser.Utils.Objects.IsPlainObject(material)) {
            return material;
        }
        else {
            if (material === null) {
                material = {};
            }

            let config = { ...material };

            if (texture) {
                config.map = (typeof (texture) === 'string') ? this.getTexture(texture) : texture;
            }

            if (color) {
                config.color = color;
            }

            const isBasic = config.basic;
            const isPhong = config.phong;
            const isLine = config.line;
            const isPoints = config.points;

            delete config.basic;
            delete config.phong;
            delete config.line;
            delete config.points;

            if (isBasic) {
                return new THREE.MeshBasicMaterial(config);
            }
            else if (isPhong) {
                return new THREE.MeshPhongMaterial(config);
            }
            else if (isLine) {
                return new THREE.LineBasicMaterial(config);
            }
            else if (isPoints) {
                return new THREE.PointsMaterial(config);
            }
            else {
                return new THREE.MeshStandardMaterial(config);
            }
        }
    }

    createMesh(geometry, material, x = 0, y = 0, z = 0) {
        let obj = new THREE.Mesh(geometry, material);

        obj.position.set(x, y, z);

        return obj;
    }


    addCube(config) {
        const cube = this.createCube(config.x, config.y, config.z, config.width, config.height, config.depth, config.color);
        this.scene.add(cube);
        return cube;
    }

    makeText({ text = '', font = '', size = 100, height = 50, curveSegments = 12, bevelEnabled = false, bevelThickness = 10, bevelSize = 8, bevelSegments = 3, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        font = new THREE.Font(this.root.sys.cache.json.get(font));

        const geometry = new THREE.TextGeometry(text, { font, size, height, curveSegments, bevelEnabled, bevelThickness, bevelSize, bevelSegments });

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addText(config) {
        const obj = this.makeText(config);

        this.scene.add(obj);

        return obj;
    }

    makeCircle({ radius = 1, segments = 8, thetaStart = 0, thetaLength = Math.PI * 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addCircle(config) {
        const obj = this.makeCircle(config);

        this.scene.add(obj);

        return obj;
    }

    makeRing({ innerRadius = 0.5, outerRadius = 1, thetaSegments = 8, phiSegments = 1, thetaStart = 0, thetaLength = Math.PI * 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addRing(config) {
        const obj = this.makeRing(config);

        this.scene.add(obj);

        return obj;
    }

    makeExtrude({ shapes, options, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.ExtrudeGeometry(shapes, options);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addExtrude(config) {
        const obj = this.makeExtrude(config);

        this.scene.add(obj);

        return obj;
    }

    makeShape({ shapes, curveSegments = 12, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.ShapeGeometry(shapes, curveSegments);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addShape(config) {
        const obj = this.makeShape(config);

        this.scene.add(obj);

        return obj;
    }

    makeLathe({ points, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.LatheGeometry(points);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addLathe(config) {
        const obj = this.makeLathe(config);

        this.scene.add(obj);

        return obj;
    }

    makeTube({ path, tubularSegments = 64, radius = 1, radialSegments = 8, closed = false, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addTube(config) {
        const obj = this.makeTube(config);

        this.scene.add(obj);

        return obj;
    }

    makeParametric({ func, slices, stacks, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.ParametricGeometry(func, slices, stacks);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addParametric(config) {
        const obj = this.makeParametric(config);

        this.scene.add(obj);

        return obj;
    }

    makeTorus({ radius = 1, tube = 0.4, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addTorus(config) {
        const obj = this.makeTorus(config);

        this.scene.add(obj);

        return obj;
    }

    makePolyhedron({ vertices = [], indices = [], radius = 6, detail = 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.PolyhedronGeometry(vertices, indices, radius, detail);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addPolyhedron(config) {
        const obj = this.makePolyhedron(config);

        this.scene.add(obj);

        return obj;
    }

    makeOctahedron({ radius = 1, detail = 0, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.OctahedronGeometry(radius, detail);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addOctahedron(config) {
        const obj = this.makeOctahedron(config);

        this.scene.add(obj);

        return obj;
    }

    makeIcosahedron({ radius = 1, detail = 0, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.IcosahedronGeometry(radius, detail);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addIcosahedron(config) {
        const obj = this.makeIcosahedron(config);

        this.scene.add(obj);

        return obj;
    }

    makeTetrahedron({ radius = 1, detail = 0, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.TetrahedronGeometry(radius, detail);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addTetrahedron(config) {
        const obj = this.makeTetrahedron(config);

        this.scene.add(obj);

        return obj;
    }

    makeTorusKnot({ radius = 1, tube = 0.4, tubularSegments = 64, radialSegments = 8, p = 2, q = 3, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addTorusKnot(config) {
        const obj = this.makeTorusKnot(config);

        this.scene.add(obj);

        return obj;
    }

    makePlane({ width = 1, height = 1, widthSegments = 1, heightSegments = 1, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addPlane(config) {
        const obj = this.makePlane(config);

        this.scene.add(obj);

        return obj;
    }

    makePoints({ geometry = null, texture = null, color = 0xffffff, material = null } = {}) {
        return new THREE.Points(geometry, this.createMaterial(texture, color, material));
    }

    addPoints(config) {
        const obj = this.makePoints(config);

        this.scene.add(obj);

        return obj;
    }



    addGround({ width = 1, height = 1, receiveShadow = false, castShadow = false, texture = null, color = 0xffffff, material = null } = {}) {
        const plane = this.makePlane({ width, height, texture, color, material });

        plane.rotation.x = -Math.PI * 0.5;

        plane.receiveShadow = receiveShadow;

        plane.castShadow = castShadow;

        this.scene.add(plane);

        return plane;
    }

    makeSphere({ radius = 1, widthSegments = 8, heightSegments = 6, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addSphere(config) {
        const obj = this.makeSphere(config);

        this.scene.add(obj);

        return obj;
    }

    makeCone({ radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addCone(config) {
        const obj = this.makeCone(config);

        this.scene.add(obj);

        return obj;
    }

    makeCylinder({ radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addCylinder(config) {
        const obj = this.makeCylinder(config);

        this.scene.add(obj);

        return obj;
    }

    makeDodecahedron({ radius = 1, detail = 0, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        const geometry = new THREE.DodecahedronGeometry(radius, detail);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addDodecahedron(config) {
        const obj = this.makeDodecahedron(config);

        this.scene.add(obj);

        return obj;
    }

    makeBox({ size = null, width = 1, height = 1, depth = 1, texture = null, color = 0xffffff, material = null, x = 0, y = 0, z = 0 } = {}) {
        if (size) {
            width = size;
            height = size;
            depth = size;
        }

        const geometry = new THREE.BoxGeometry(width, height, depth);

        return this.createMesh(geometry, this.createMaterial(texture, color, material), x, y, z);
    }

    addBox(config) {
        const obj = this.makeBox(config);

        this.scene.add(obj);

        return obj;
    }
}

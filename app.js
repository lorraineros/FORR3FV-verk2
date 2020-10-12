let camera, scene, renderer, world;
let ghost;
let width, height;

function init() {
    width = window.innerWidth,
    height = window.innerHeight;
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.lookAt(scene.position);
    camera.position.set(0, 0.7, 8);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    drawGhost();
    
    world = document.querySelector('.world');
    world.appendChild(renderer.domElement);
}

function addLights() {
    const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.9);
    scene.add(light);

    const directLight1 = new THREE.DirectionalLight(0xffd798, 0.8);
    directLight1.castShadow = true;
    directLight1.position.set(9.5, 8.2, 8.3);
    scene.add(directLight1);

    const directLight2 = new THREE.DirectionalLight(0xc9ceff, 0.5);
    directLight2.castShadow = true;
    directLight2.position.set(-15.8, 5.2, 8);
    scene.add(directLight2);
    }

function animate() {
    requestAnimationFrame(animate);
        render();

}

function drawGhost() {
    ghost = new Ghost();
    scene.add(ghost.group);
}
// cant do no more me give up

init();
animate();
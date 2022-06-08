import vertexShader from './shaders/vertex.glsl'

function preload() {
  // load the shader
}

function setup() {}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: ,
    fragmentShader:
  })
);

scene.add(sphere);

camera.position.z = 12;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

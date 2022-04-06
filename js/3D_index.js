var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;

/**Add to Doc & Measure**/

let container;
container = document.querySelector('#bld_nxs');

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/***Loader***/

let loader = new THREE.GLTFLoader();
loader.load("../resourses/3D/scene_min.gltf", function(gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
})

/***Camera Perspective***/

const fov = 50;
const aspect = container.clientWidth / container.clientHeight;
const near = 10;
const far = 5000;
var cam_angle_init = -0.35;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 1500, 2000);
camera.rotation.set(cam_angle_init, 0, 0);


/***lights***/

var light = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
light.position.set(0, 1, -1);

scene.add(light);

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.75);
scene.add(ambient);

/***Height, Angle, Zoom (Perspective)***/

// Camera Height
let cam_height = 500;


//Speed down camera
/*const down_speed1 = 1200;*/
const down_speed1 = 12;
/*const down_speed2 = 7000;*/
const down_speed2 = 70;


// Capture height breakpoint
function height_position() {
    var d1 = camera.position.y = cam_height - (0.75) * down_speed1;
    var d2 = camera.position.y = cam_height - (0.75) * down_speed2;
    const res = d1 - d2;
    return res;
}

const res_height = height_position();

// Render
function render() {
    requestAnimationFrame(render);
    // Height
    if (window.pageYOffset > (_docHeight / 2)) {
        if (window.pageYOffset > _docHeight * 0.75) {
            camera.position.y = camera.position.y = cam_height - (window.pageYOffset / _docHeight) * down_speed2 + res_height;
        } else {
            camera.position.y = cam_height - (window.pageYOffset / _docHeight) * down_speed1;
        }
    }

    // Angle
    var speed_cam_change = 0.75;
    var cam_angle = -0.35;
    let speed_angle_change = 4;

    if (window.pageYOffset > _docHeight * speed_cam_change) {
        cam_angle += (window.pageYOffset / _docHeight) * speed_angle_change - ((_docHeight * speed_cam_change) / _docHeight) * speed_angle_change;
        camera.rotation.set(cam_angle, 0, 0);
    } else {
        camera.rotation.set(cam_angle_init, 0, 0);
    }

    // Zoom

    if (window.scrollY > _docHeight * speed_cam_change) {
        var scrolled = (window.pageYOffset / _docHeight) * 10 - ((_docHeight * speed_cam_change) / _docHeight) * 10 + 1;
        transformValue = 'scale(' + scrolled + ')';
        document.body.style.transform = transformValue;
        container.style.transform = transformValue;
    } else {
        document.body.style.transform = "scale(1)";
        container.style.transform = "scale(1)";
    }

    renderer.render(scene, camera);
}

render();

/***Resize***/

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize(canvasWidth, canvasHeight);

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();
}
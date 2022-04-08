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

// Camera Height
const cam_height_init = 1200;
camera.position.set(0, cam_height_init, 2000);
camera.rotation.set(cam_angle_init, 0, 0);


/***lights***/

var light = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
light.position.set(0, 1, -1);

scene.add(light);

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.75);
scene.add(ambient);

/***Height, Angle, Zoom (Perspective)***/

// Render
function render() {
    requestAnimationFrame(render);

    // Angle & Height

    var speed_cam_change = 0.75;
    const speed_angle_change = 0.01;

    var cam_angle = -0.35;
    /*Breakpoint*/
    const b = 0;

    if (window.pageYOffset > 0) {
        if (cam_angle < b) {
            camera.position.y = cam_height_init - (window.pageYOffset * 25);
            cam_angle += (window.pageYOffset * speed_angle_change);
            camera.rotation.set(cam_angle, 0, 0);
            console.log(cam_angle);
        } else {
            console.log("esto funciona");
            camera.rotation.set(b, 0, 0);
            camera.position.y = cam_height_init;
        }
    } else {
        camera.rotation.set(cam_angle_init, 0, 0);
        camera.position.y = cam_height_init;
    }

    /*console.log(cam_angle);
    console.log(camera.position.y);*/

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
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

    const speed_cam_change = 750;
    const speed_angle_change = 0.004;
    const speed_height_change = 7;

    var cam_angle = -0.35;
    /*Breakpoint*/
    const b = 0;

    if (window.pageYOffset > 0) {
        camera.position.y = cam_height_init - (window.pageYOffset * speed_height_change);
        cam_angle += (window.pageYOffset * speed_angle_change);
        camera.rotation.set(cam_angle, 0, 0);
        var scrolled = (window.pageYOffset / speed_cam_change) + 1;
        transformValue = 'scale(' + scrolled + ')';
        container.style.transform = transformValue;
        $("html, body").animate({ scrollTop: $('#trigger').offset().top }, 6000);
        $("#parallax__layer__1").animate({ top: "500vh" }, 1500);
        $("#parallax__layer__2").animate({ top: "475vh" }, 1500);
        $("#parallax__layer__3").animate({ top: "475vh" }, 1500);
        $("#parallax__layer__4").animate({ top: "460vh" }, 1500);
        $("#parallax__layer__5").animate({ top: "475vh" }, 1500);
        $("#parallax__layer__6").animate({ top: "425vh" }, 1500);
        $("#parallax__layer__7").animate({ top: "425vh" }, 1500);
        $("#parallax__layer__ground").animate({ top: "445vh" }, 1500);
        $("#floor").animate({ height: "15vh" }, 1500);
        /*console.log(cam_angle);*/
        /*console.log(camera.position.y);*/
        /*console.log(scrolled);*/
        if (cam_angle > b) {
            camera.rotation.set(-0.02, 0, 0);
            camera.position.y = 600;
            document.getElementById("parallax").style.overflowY = "hidden";
            var body = document.getElementsByTagName("body"); //*
            for (var i = 0; i < body.length; i++) {
                body[i].style.overflowY = "hidden";
            };
        }
    } else {
        camera.rotation.set(cam_angle_init, 0, 0);
        camera.position.y = cam_height_init;
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
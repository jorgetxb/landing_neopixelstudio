/**Add to Doc & Measure**/

let container;
container = document.querySelector("#office_nxs");

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

///////Optimization Devices//////////

//Shadow Resolution
var shadow_resolution;

if ( window.innerWidth <= 720 ) {
  shadow_resolution = 0
} else {
  shadow_resolution = 720;
    //Main Spot Light

  var spotLight = new THREE.SpotLight( 0xaaaaff, 15 );
  spotLight.position.set( 0, 650, 250 );//Lf-Rg, H, Fw-Bc
  //spotLight.angle = 0.1;
  spotLight.penumbra = 0.25;
  spotLight.decay = 1.25;
  spotLight.distance = 1000;

  spotLight.castShadow = true;
  spotLight.shadow.radius = 3; //shadow border
  spotLight.shadow.mapSize.width = shadow_resolution; //Shadow resolution X
  spotLight.shadow.mapSize.height = shadow_resolution; //Shadow resolution Y
  scene.add( spotLight );
};


var rend_res = 1;
if ( window.innerWidth <= 1280 ) {
  if ( window.innerWidth <= 640 ) {
    rend_res = 3;
  } else {
    rend_res = 2;
  }
} else {
  rend_res = 1.5;
};
renderer.setPixelRatio(window.devicePixelRatio/rend_res); //Resolution
container.appendChild(renderer.domElement);

/////////////////////////////////////


/***Camera Perspective***/

let fov = 50; //50
let aspect = container.clientWidth / container.clientHeight;
let near = 10; //10
let far = 15000; //15000

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

let x = 0; //0
let y = 289; //289 Related Polar Angle
let z = 500; //500
camera.position.set(x, y, z);


/**Controls**/

let controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.target.set(0, 200, 192); //0, 200, 192
controls.update();

  //Range Control Limits

controls.maxDistance = 300; //500
controls.minDistance = 100; //100

controls.maxPolarAngle = 1.3; //1.3
controls.minPolarAngle = 1.3; //1.3

controls.maxZoom = 1;

  //Available Options
controls.enableZoom = true;
controls.enablePan = false; //true
controls.screenSpacePanning = false;
//controls.enableDamping = true;

  //Select Control Keys

    //PC
controls.listenToKeyEvents(document.body);
controls.keys = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  BOTTOM: "ArrowDown",
};

    //Phones
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
};

    //Config Controls
controls.keyPanSpeed = 35;  //35
controls.rotateSpeed = -1;  //-1

/***Loader Stage***/

const manager = new THREE.LoadingManager();

/*
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

};
*/

manager.onLoad = function ( ) {
  document.getElementById('loader3d').style.display = "none";
	console.log( 'Loading complete!');
};


/*
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

};
*/

/*
manager.onError = function ( url ) {
  console.log( 'There was an error loading ' + url );
};
*/

/***Loader***/

let loader = new THREE.GLTFLoader(manager);
loader.load("../resourses/3D/scene.gltf", function (gltf) {
  //Shadows Activate
  gltf.scene.traverse( function ( child ) {
    if ( child.isMesh ) {
        child.castShadow = true;
        child.receiveShadow = true;
    }
  } );
  //
  scene.add(gltf.scene);
  renderer.render(scene, camera);
});


  //Portfolio Icon

let loader4 = new THREE.GLTFLoader();
loader4.load("../resourses/3D/portfolio.gltf", function (gltf4) {
  //
  gltf4.scene.scale.set(35,35,35);
  gltf4.scene.position.z = -142; //Frente-Atras
  gltf4.scene.position.y = 275; //altura
  gltf4.scene.position.x = 429; //Derecha-Izquierda
  gltf4.scene.rotation.z = 1.6;
  gltf4.scene.rotation.y = 0.75;
    
  var animate4 = function () {
    gltf4.scene.rotation.y += 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate4);
  };
      
  animate4();
    
  scene.add(gltf4.scene);
  renderer.render(scene, camera);
});


  //Design Icon

let loader5 = new THREE.GLTFLoader();
loader5.load("../resourses/3D/dev.gltf", function (gltf5) {
  //
  gltf5.scene.scale.set(35,35,35);
  gltf5.scene.position.z = 118; //Frente-Atras
  gltf5.scene.position.y = 275; //altura
  gltf5.scene.position.x = 440; //Derecha-Izquierda
  gltf5.scene.rotation.z = 1.6;
  
  var animate5 = function () {
    gltf5.scene.rotation.y -= 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate5);
  };
    
  animate5();
  
  scene.add(gltf5.scene);
  renderer.render(scene, camera);
});


  //Grow Icon

let loader6 = new THREE.GLTFLoader();
loader6.load("../resourses/3D/grow.gltf", function (gltf6) {
  //
  gltf6.scene.scale.set(35,35,35);
  gltf6.scene.position.z = 356; //Frente-Atras
  gltf6.scene.position.y = 275; //altura
  gltf6.scene.position.x = 440; //Derecha-Izquierda
  gltf6.scene.rotation.z = 1.6;
  
  var animate6 = function () {
    gltf6.scene.rotation.y += 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate6);
  };
    
  animate6();
  
  scene.add(gltf6.scene);
  renderer.render(scene, camera);
});

  //Whatsapp Icon

let loader2 = new THREE.GLTFLoader();
loader2.load("../resourses/3D/comunication.gltf", function (gltf2) {
  //
  gltf2.scene.scale.set(35,35,35);
  gltf2.scene.position.z = 12; //Frente-Atras
  gltf2.scene.position.y = 275; //altura
  gltf2.scene.position.x = -419; //Derecha-Izquierda
  gltf2.scene.rotation.z = 1.6;
  gltf2.scene.rotation.y = -0.75;

  var animate2 = function () {
    gltf2.scene.rotation.y -= 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate2);
  };
  
  animate2();

  scene.add(gltf2.scene);
  renderer.render(scene, camera);
});

  //Us Icon

let loader3 = new THREE.GLTFLoader();
loader3.load("../resourses/3D/about_us.gltf", function (gltf3) {

  gltf3.scene.scale.set(35,35,35);
  gltf3.scene.position.z = 352; //Frente-Atras
  gltf3.scene.position.y = 275; //altura
  gltf3.scene.position.x = -438; //Derecha-Izquierda
  gltf3.scene.rotation.z = 1.6;
  
  var animate3 = function () {
    gltf3.scene.rotation.y += 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate3);
  };
    
  animate3();
  
  scene.add(gltf3.scene);
  renderer.render(scene, camera);
});

/***lights***/

  //Ambient


var light = new THREE.AmbientLight(
  new THREE.Color("hsl(0, 0%, 100%)"),
  1.25 //0.25
);

light.position.set(0, 0, 0);

scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambient);


  //Lights//

  //Spot Light 1

/*
var spotLight1 = new THREE.SpotLight( 0xaaaaff, 15 );
spotLight1.position.set( 300, 650, -450 );//Lf-Rg, H, Fw-Bc
//spotLight1.angle = 0.1;
spotLight1.penumbra = 0.5;
spotLight1.decay = 1.5;
spotLight1.distance = 1000;

spotLight1.castShadow = true;
spotLight1.shadow.radius = 3; //shadow border
spotLight1.shadow.mapSize.width = shadow_resolution; //Shadow resolution X
spotLight1.shadow.mapSize.height = shadow_resolution; //Shadow resolution Y
scene.add( spotLight1 );

spotLight1.lookAt( 300, 0, -450 );
scene.add( spotLight1 );

  //Spot Light 2

var spotLight2 = new THREE.SpotLight( 0xaaaaff, 15 );
spotLight2.position.set( -300, 650, -450 );//Lf-Rg, H, Fw-Bc
//spotLight2.angle = 0.1;
spotLight2.penumbra = 0.5;
spotLight2.decay = 1.5;
spotLight2.distance = 1000;

spotLight2.castShadow = true;
spotLight2.shadow.radius = 3; //shadow border
spotLight2.shadow.mapSize.width = shadow_resolution; //Shadow resolution X
spotLight2.shadow.mapSize.height = shadow_resolution; //Shadow resolution Y
scene.add( spotLight2 );

spotLight2.lookAt( -300, 0, -450 );
scene.add( spotLight2 );

  //Spot Light 3

var spotLight3 = new THREE.SpotLight( 0xaaaaff, 15 );
spotLight3.position.set( 300, 650, 450 );//Lf-Rg, H, Fw-Bc
//spotLight3.angle = 0.1;
spotLight3.penumbra = 0.5;
spotLight3.decay = 1.5;
spotLight3.distance = 1000;

spotLight3.castShadow = true;
spotLight3.shadow.radius = 3; //shadow border
spotLight3.shadow.mapSize.width = shadow_resolution; //Shadow resolution X
spotLight3.shadow.mapSize.height = shadow_resolution; //Shadow resolution Y
scene.add( spotLight3 );

spotLight3.lookAt( 300, 0, 450 );
scene.add( spotLight3 );

  //Spot Light 4

var spotLight4 = new THREE.SpotLight( 0xaaaaff, 15 );
spotLight4.position.set( -300, 650, 450 );//Lf-Rg, H, Fw-Bc
//spotLight4.angle = 0.1;
spotLight4.penumbra = 0.5;
spotLight4.decay = 1.5;
spotLight4.distance = 1000;

spotLight4.castShadow = true;
spotLight4.shadow.radius = 3; //shadow border
spotLight4.shadow.mapSize.width = shadow_resolution; //Shadow resolution X
spotLight4.shadow.mapSize.height = shadow_resolution; //Shadow resolution Y
scene.add( spotLight4 );

spotLight4.lookAt( -300, 0, 450 );
scene.add( spotLight4 );


//Lights outdoors

  //Spot Light Outdoors 1

var spotLighto1 = new THREE.RectAreaLight( 0xaaaaff, 20, 1000, 1000 );
spotLighto1.position.set( 1000, 1000, -2000 );//Lf-Rg, H, Fw-Bc
spotLighto1.lookAt( 1000, 0, -2000 );
scene.add( spotLighto1 );

  //Spot Light Outdoors 2

var spotLighto2 = new THREE.RectAreaLight( 0xaaaaff, 20, 1000, 1000 );
spotLighto2.position.set( -1000, 1000, -2000 );//Lf-Rg, H, Fw-Bc
spotLighto2.lookAt( -1000, 0, -2000 );
scene.add( spotLighto2 );

  //Spot Light Outdoors 3

var spotLighto3 = new THREE.RectAreaLight( 0xaaaaff, 20, 1000, 1000 );
spotLighto3.position.set( -1000, 1000, 2000 );//Lf-Rg, H, Fw-Bc
spotLighto3.lookAt( -1000, 0, 2000 );
scene.add( spotLighto3 );

  //Spot Light Outdoors 4

var spotLighto4 = new THREE.RectAreaLight( 0xaaaaff, 20, 1000, 1000 );
spotLighto4.position.set( 1000, 1000, 2000 );//Lf-Rg, H, Fw-Bc
spotLighto4.lookAt( 1000, 0, 2000 );
scene.add( spotLighto4 );
*/
// Render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
    //Enable Render Shadows
    renderer.shadowMap.enabled = true;
    //
}

render();


//Screens//

///*
  ////tv Screen

var tvScreen = new THREE.BoxGeometry(520, 230, 0);
var material1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen = new THREE.Mesh(tvScreen, material1);
scene.add(screen);

    //video on tv//

let video1 = document.getElementById('tv');
let texture1 = new THREE.VideoTexture(video1);

video1.play();
texture1.minFilter = THREE.LinearFilter;
texture1.magFilter = THREE.LinearFilter;
texture1.format = THREE.RGBFormat;

material1.map = texture1;
////

screen.position.z = -385;
screen.position.y = 220;
screen.position.x = 0;

renderer.render(scene, camera);

    //Object Name//
screen.userData.object = true;
screen.userData.name = "tvScreen";

  ////monitor screen1

var monitorSc1 = new THREE.BoxGeometry(70, 35, 0);
var material2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen1 = new THREE.Mesh(monitorSc1, material2);
scene.add(screen1);

    //video on monitor1//

let video2 = document.getElementById('ux');
let texture2 = new THREE.VideoTexture(video2);

video2.play();
texture2.minFilter = THREE.LinearFilter;
texture2.magFilter = THREE.LinearFilter;
texture2.format = THREE.RGBFormat;

material2.map = texture2;
////

screen1.position.z = -142; //Frente-Atras
screen1.position.y = 175; //altura
screen1.position.x = 429; //Derecha-Izquierda
screen1.rotation.y = 2.05;

renderer.render(scene, camera);

    //Object Name//
screen1.userData.object = true;
screen1.userData.name = "monitorSc1";

////monitor screen2

var monitorSc2 = new THREE.BoxGeometry(70, 35, 0);
var material3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen2 = new THREE.Mesh(monitorSc2, material3);
scene.add(screen2);

  //video on monitor2//

let video3 = document.getElementById('dev');
let texture3 = new THREE.VideoTexture(video3);

video3.play();
texture3.minFilter = THREE.LinearFilter;
texture3.magFilter = THREE.LinearFilter;
texture3.format = THREE.RGBFormat;

material3.map = texture3;
////

screen2.position.z = 118; //Frente-Atras
screen2.position.y = 175; //altura
screen2.position.x = 440; //Derecha-Izquierda
screen2.rotation.y = 1.55;

renderer.render(scene, camera);

    //Object Name//
screen2.userData.object = true;
screen2.userData.name = "monitorSc2";

////monitor screen3

var monitorSc3 = new THREE.BoxGeometry(70, 35, 0);
var material4 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen3 = new THREE.Mesh(monitorSc3, material4);
scene.add(screen3);

    //video on monitor3//

let video4 = document.getElementById('grow');
let texture4 = new THREE.VideoTexture(video4);

video4.play();
texture4.minFilter = THREE.LinearFilter;
texture4.magFilter = THREE.LinearFilter;
texture4.format = THREE.RGBFormat;

material4.map = texture4;
////

screen3.position.z = 356; //Frente-Atras
screen3.position.y = 175; //altura
screen3.position.x = 440; //Derecha-Izquierda
screen3.rotation.y = 1.55;

renderer.render(scene, camera);

    //Object Name//
screen3.userData.object = true;
screen3.userData.name = "monitorSc3";

////monitor screen4

var monitorSc4 = new THREE.BoxGeometry(70, 35, 0);
var material5 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen4 = new THREE.Mesh(monitorSc4, material5);
scene.add(screen4);

    //video on monitor4//

let video5 = document.getElementById('us');
let texture5 = new THREE.VideoTexture(video5);

video5.play();
texture5.minFilter = THREE.LinearFilter;
texture5.magFilter = THREE.LinearFilter;
texture5.format = THREE.RGBFormat;

material5.map = texture5;
////

screen4.position.z = 352; //Frente-Atras
screen4.position.y = 175; //altura
screen4.position.x = -438; //Derecha-Izquierda
screen4.rotation.y = 1.55;

renderer.render(scene, camera);

    //Object Name//
screen4.userData.object = true;
screen4.userData.name = "monitorSc4";

////monitor screen5

var monitorSc5 = new THREE.BoxGeometry(70, 35, 0);
var material6 = new THREE.MeshBasicMaterial({ color: 0xffffff });
var screen5 = new THREE.Mesh(monitorSc5, material6);
scene.add(screen5);

    //video on monitor5//

let video6 = document.getElementById('comunication');
let texture6 = new THREE.VideoTexture(video6);

video6.play();
texture6.minFilter = THREE.LinearFilter;
texture6.magFilter = THREE.LinearFilter;
texture6.format = THREE.RGBFormat;

material6.map = texture6;
////

screen5.position.z = 12 //Frente-Atras
screen5.position.y = 175; //altura
screen5.position.x = -419; //Derecha-Izquierda
screen5.rotation.y = 0.93;

renderer.render(scene, camera);

    //Object Name//
screen5.userData.object = true;
screen5.userData.name = "monitorSc5";

//*/

//Select Elements//

var raycaster, clickMouse;

raycaster = new THREE.Raycaster();
clickMouse = new THREE.Vector2();
const moveMouse = new THREE.Vector2();
var object = THREE.Object3D;

window.addEventListener("click", (event) => {
  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(clickMouse, camera);
  const found = raycaster.intersectObjects(scene.children, true);

  if (found.length > 0 && found[0].object.userData.object) {
    object = found[0].object;

    let select_section = object.userData.name;

    let main = document.querySelector('#main');
    let design = document.querySelector('#design');
    let whyus = document.querySelector('#whyus');
    let portfolio = document.querySelector('#portfolio');
    let examples = document.querySelector('#examples');
    let whatsapp = document.querySelector('#whatsapp');
    let about_us = document.querySelector('#about_us');

    switch (select_section) {
      case "tvScreen":
        main.style.display = "flex";
        design.style.display = "none";
        whyus.style.display = "none";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = 'none';
        about_us.style.display = 'none';
        break;
      case "monitorSc1":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "none";
        portfolio.style.display = "flex";
        examples.style.display = "block";
        whatsapp.style.display = 'none';
        about_us.style.display = 'none';
        break;
      case "monitorSc2":
        main.style.display = "none";
        design.style.display = "flex";
        whyus.style.display = "none";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = 'none';
        about_us.style.display = 'none';
        break;
      case "monitorSc3":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "flex";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = 'none';
        about_us.style.display = 'none';
        break;
      case "monitorSc4":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "none";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = 'none';
        about_us.style.display = 'flex';
        break;
      case "monitorSc5":
        whatsapp.style.display = 'flex';
        break;
      //default:
      //  main.style.display = "flex";
    }
  }

  if (found.length > 0) {
    object = found[0].object;

//console.log(object); //Verificar datos del objeto selecionado

    let select_section2 = object.name;

    switch (select_section2) {
      case "portfolio_1":
      case "portfolio_2":
      case "portfolio_3":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "none";
        portfolio.style.display = "flex";
        examples.style.display = "block";
        whatsapp.style.display = "none";
        about_us.style.display = "none";
        break;
      case "dev_1":
      case "dev_2":
      case "dev_3":
        main.style.display = "none";
        design.style.display = "flex";
        whyus.style.display = "none";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = "none";
        about_us.style.display = "none";
        break;
      case "grow_1":
      case "grow_2":
      case "grow_3":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "flex";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = "none";
        about_us.style.display = "none";
        break;
      case "about_us_1":
      case "about_us_2":
      case "about_us_3":
        main.style.display = "none";
        design.style.display = "none";
        whyus.style.display = "none";
        portfolio.style.display = "none";
        examples.style.display = "none";
        whatsapp.style.display = "none";
        about_us.style.display = 'flex';
        break;
      case "comunication_1":
      case "comunication_2":
      case "comunication_3":
        whatsapp.style.display = 'flex';
        break;
    }
  }
});

/***Resize***/

window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize( canvasWidth, canvasHeight );

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();
}

/////////////////**GUI**/////////////////////

/*
const gui = new dat.GUI();

//Position
gui.add(scene.position, "x", -1000, 1000);
gui.add(scene.position, "y", -1000, 1000);
gui.add(scene.position, "z", -1000, 1000);

//Angle
gui.add(scene.rotation, "x", -Math.PI, Math.PI);
gui.add(scene.rotation, "y", -Math.PI, Math.PI);
gui.add(scene.rotation, "z", -Math.PI, Math.PI);

*/
//////////////////****//////////////////////
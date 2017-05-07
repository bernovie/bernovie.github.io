function Sketch(){
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var slowDown = 2;
  var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 100, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var scene = new THREE.Scene();
  var controls;

  //create a blue LineBasicMaterial
  var material2 = new THREE.LineBasicMaterial({ color: 0x00ffff });
  var geometries = [];
  var lines = [];
  var materials = [];

  geometries[0] = new THREE.Geometry();
  controls = new THREE.TrackballControls( camera );
  for(var i = 0; i < 4; i++){
    geometries[0].vertices.push(new THREE.Vector3(-10, 0, 10));
    geometries[0].vertices.push(new THREE.Vector3(0, 10, 0));
    geometries[0].vertices.push(new THREE.Vector3(-10, 0, -10));
    geometries[0].vertices.push(new THREE.Vector3(-10,0,10));
    geometries[0].rotateY(3.1416/2);
  }

  geometries[0].rotateX(3.1416);
  for(var i = 0; i < 4; i++){
    geometries[0].vertices.push(new THREE.Vector3(-10, 0, 10));
    geometries[0].vertices.push(new THREE.Vector3(0, 10, 0));
    geometries[0].vertices.push(new THREE.Vector3(-10, 0, -10));
    geometries[0].vertices.push(new THREE.Vector3(-10,0,10));
    geometries[0].rotateY(3.1416/2);
  }
  
  var colorVal = 0x00ffff;
  materials[0] = new THREE.LineBasicMaterial({ color: colorVal });
  lines[0] = new THREE.Line(geometries[0], materials[0]);
  scene.add(lines[0]);


  for(var j = 1; j < 32; j++){
    materials[j] = new THREE.LineBasicMaterial({ color: colorVal });
    geometries[j] = geometries[j-1].clone();
    geometries[j].rotateY(3.1416/2.7182818285);
    lines[j] = new THREE.Line(geometries[j], materials[j]);
    scene.add(lines[j]);
  }

  var render = function() {
    requestAnimationFrame( render );
    for(var i = 0; i < geometries.length; i++){
      geometries[i].rotateY(3.1416/(92*slowDown));
    }
    controls.update();
    renderer.render( scene, camera );
  }
  render();
}

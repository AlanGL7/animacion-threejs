
alert("Usa las teclas W A S D para rotar el cubo");


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xfedcba } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

document.onkeydown = function (e) {
    console.log(e);
    if (e.keyCode == 87) {
    cube.rotation.x -= 0.10;
    }
    if (e.keyCode == 65) {
    cube.rotation.y -= 0.10;
    }
    if (e.keyCode == 83) {
    cube.rotation.x += 0.10;
    }
    if (e.keyCode == 68) {
    cube.rotation.y += 0.10;
    }

}

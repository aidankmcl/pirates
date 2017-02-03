/*******************************
 ****    Player Related    *****
 *******************************/
AFRAME.registerComponent('player', {
	schema: {
		target: { default: new THREE.Vector3() }
	},
	init: function() {
		this.camera = this.el.children[0];
		this.rotationY = 0;
		console.dir();
	},
	tick: function() {
		this.rotationY = this.camera.object3D.rotation.y;
		var boatY = this.el.children[1].object3D.rotation.y - (Math.PI/2);
		if (Math.abs(boatY - this.rotationY) > 0) {
			this.el.children[1].object3D.rotation.y -= Math.sign(boatY - this.rotationY) * 0.005;
		}
	},
});

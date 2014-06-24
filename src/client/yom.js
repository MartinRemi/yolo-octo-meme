/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

var yom = yom || {
	// ----- Server info
	server : {
		/**
		 * 	@property {String} ADDRESS - The address of the server
		 */
		ADDRESS: 	'localhost',
		/**
		 * 	@property {number} PORT - The port number of the server
		 */
		PORT: 		8888
	},

	/**
	 * 	@property {yom.World} world - The world object (kind of singleton)
	 */
	world : {},

	// ----- Scales used with the coordinates for display purposes
	scales : {
		/**
		 * 	@property {number} X - The scale factor for the x-coordinate
		 */
		X:  		1,
		/**
		 * 	@property {String} Y - The scale factor for the y-coordinate
		 */
		Y: 			1 
	},

	images : {
		/**
		 * 	@property {String} DEFAULT_IMAGE - Default image address
		 */
		DEFAULT_IMAGE: 'YOM_NONE_IMAGE_TO_DISPLAY'
	},

	shapes : {
		/**
		 * 	@property {String} DEFAULT_ZINDEX - Default zIndex
		 */
		DEFAULT_ZINDEX: 1
	}, 

	colors : {
		/**
		 * 	@property {String} DEFAULT_INSIDE_COLOR - Default inside color for shapes
		 */
		DEFAULT_INSIDE_COLOR: 'YOM_NONE_INSIDE_COLOR_TO_DISPLAY'
	},
	
	inputs : {
		
	},

	renderManager : {

	},

	display: {
		STEP_INTERVAL: 100
	},

	start: function() {
		setInterval(function() {
			yom.world.step();
			yom.world.applyForces();
			yom.renderManager.clear();
			yom.renderManager.display();
			yom.input.start();
		}, yom.display.STEP_INTERVAL);
	},

	physics : {
		DEFAULT_MASS: 1
	}
};
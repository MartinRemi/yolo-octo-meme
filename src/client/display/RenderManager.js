
/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new RenderManager. This class is used to render the World.
 *	Rendering shouldn't be used outside of this function.
 * 	@class RenderManager
 * 	@classdesc yom - RenderManager
 * 	@constructor
 *	@param {yom.World} world - The world we want to display.
 *	@param {yom.DrawManager} drawManager - The drawManager used to display
 * 	@return {yom.RenderManager} The renderManager object
 */
yom.RenderManager = function (world, drawManager) {

	/**
     * 	@property {yom.World}  world - The world to render
     */
	this.world = world;

	/**
     * 	@property {yom.DrawManager}  drawManager - The draw manager used to render the world
     */
	this.drawManager = drawManager;

	yom.renderManager = this;
};

// ----- Method(s) ----- \\
/**
 * 	Render the world how it is when the function is called
 * 	@method yom.RenderManager#contains
 */
yom.RenderManager.prototype.display = function() {
	var i;
	var j;
	var index = 0;

	var shapes = [];

	// ----- Get all shapes
	for(i = 0; i < yom.world.bodies.length; ++i) {
		for(j = 0; j < yom.world.bodies[i].shapes.length; ++j) {
			shapes[index] = yom.world.bodies[i].shapes[j];
			++index;
		}
	}

	for(i = 0; i < yom.world.shapes.length; ++i) {
		shapes[index] = yom.world.shapes[i];
		++index;
	}

	// ----- Sort shapes
	shapes.sort(function(a, b) {
		if(a.zIndex > b.zIndex) {
			return 1
		} else if(a.zIndex < b.zIndex) {
			return -1;
		} else {
			return 0;
		}
	});

	for(i = 0; i < shapes.length; ++i) {
		shapes[i].render(this.drawManager);
	}
};

/**
 * 	Clear the content of the canvas
 * 	@method yom.DrawManager#clear
 */
yom.RenderManager.prototype.clear = function() {
	document.getElementById(this.world.idOfCanvas).getContext("2d").clearRect(0, 0, yom.world.width, yom.world.height);
};

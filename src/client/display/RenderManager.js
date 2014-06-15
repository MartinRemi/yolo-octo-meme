
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
 * 	@return {yom.RenderManager} The renderManager object
 */
yom.RenderManager = function () {
	/* NOTHING */
};

// ----- Method(s) ----- \\
/**
 * 	Render the world how it is when the function is called
 * 	@method yom.RenderManager#contains
 *	@param {yom.World} world - The world we want to display.
 *	@param {yom.DrawManager} drawManager - The drawManager used to display
 */
yom.RenderManager.prototype.display = function(world, drawManager) {
	var i;
	var j;
	var index = 0;

	var renderManager = new yom.RenderManager(this);

	var shapes = [];

	// ----- Get all shapes
	for(i = 0; i < world.bodies.length; ++i) {
		for(j = 0; j < world.bodies[i].shapes; ++j) {
			shapes[index] = world.bodies[i].shapes[j];
			++index;
		}
	}

	for(i = 0; i < world.shapes.length; ++i) {
		shapes[index] = world.shapes[i];
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
		shapes[i].render(drawManager);
	}
};
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
}

// ----- Method(s) ----- \\
/**
 * 	Render the world how it is when the function is called
 * 	@method yom.Body#contains
 *	@param {yom.World} world - The world we want to display.
 * 	@return {boolean} True if the body contains the point, else false
 */
yom.RenderManager.prototype.display = function(world) {
	var i;
	for(i = 0; i < saveWorld.length; ++i) {
		// RENDER
		// TODO : define getPoints()
		//saveWorld[i].getPoints();
	}
};
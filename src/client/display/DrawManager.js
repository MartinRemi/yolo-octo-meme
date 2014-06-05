/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new DrawManager. This class is used to draw geometric shapes
 *	Rendering shouldn't be used outside of a RenderManager
 * 	@class DrawManager
 * 	@classdesc yom - DrawManager
 * 	@constructor
 *	@param {yom.RenderManager} renderManager - The renderManager used to context the drawing.
 *	@param {yom.World} world - The world we want to draw in.
 * 	@return {yom.DrawManager} The DrawManager object
 */
yom.DrawManager = function (renderManager, world) {

	/**
     * 	@property {yom.RenderManager} renderManager - The renderManager used to context the drawing.
     */
	this.renderManager = renderManager || [];

	/**
     * 	@property {yom.World} world - The world we want to draw in.
     */
	this.world = world || [];

	var idOfCanvas = world.idOfCanvas;

	/**
     * 	TODO : Check type
     */
	this.context = $("#"+idOfCanvas).get(0).getContext("2d");
}

// ----- Method(s) ----- \\
/**
 * 	Draw a circle.
 * 	@method yom.DrawManager#drawCircle
 *	@param {yom.GraphicCircle} circle - The circle we want to display.
 */
yom.DrawManager.prototype.drawCircle = function(graphicCircle) {
	this.context.beginPath();
	this.context.arc(graphicCircle.circle.center.x, 
		graphicCircle.circle.center.y,
		graphicCircle.circle.radius,
		0,
		2 * Math.PI);
	this.context.stroke();
};
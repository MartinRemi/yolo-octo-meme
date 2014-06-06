/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicPolyline object.
 * 	The GraphicPolyline is defined with a polyline and some colors.
 * 	@class GraphicPolyline
 * 	@classdesc yom - GraphicPolyline
 * 	@constructor
 * 	@param {yom.Polyline} [polyline] - The polyline to copy
 * 	@return {yom.GraphicCicle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicPolyline = function (polyline, borderColor, insideColor) {

	/**
     * 	@property {yom.Polyline} polyline - The polyline we want to display
     */
	this.polyline = polyline || [];

	/**
     * 	TODO : Add type and desc
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	TODO : Add type and desc
     */
	this.insideColor = insideColor || '#000';
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicPolyline'
 * 	@method yom.GraphicPolyline#copy
 * 	@return {yom.GraphicPolyline} The new GraphicPolyline object
 */
yom.GraphicPolyline.prototype.copy = function () {
	return new yom.GraphicPolyline(this.polyline);
};

/**
 * 	Moves the graphic polyline by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicPolyline#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicPolyline.prototype.move = function (x, y) {
	this.polyline.move(x, y);
};

/**
 * 	Render the graphic polyline.
 * 	@method yom.GraphicPolyline#render
 * 	@param {yom.RenderManager} [renderManager] - The renderManager object
 */
yom.GraphicPolyline.prototype.render = function(renderManager) {
	// TODO : Add code
};

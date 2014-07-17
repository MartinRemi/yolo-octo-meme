/**
 * 	@author       Sergueï Lallement <serguei.l@orange.fr>
 * 	@copyright    2014 Sergueï Lallement
 */

/**
 * 	Creates a new GraphicBSpline object.
 * 	The GraphicBSpline is defined with a bspline and some colors.
 * 	@class GraphicBSpline
 * 	@classdesc yom - GraphicBSpline
 * 	@constructor
 * 	@param {yom.bspline} [bspline] - The bspline to copy
 * 	@param {number} [zIndex] - The zIndex of the polyline
 * 	@param {String} [borderColor] - The border color for the bspline
 * 	@param {String} [insideColor] - The inside color for the bspline
 * 	@return {yom.GraphicBSpline} The GraphicBSpline object
 *
 */
yom.GraphicBSpline = function (bspline, zIndex, borderColor, insideColor) {

	/**
     * 	@property {yom.Polyline} polyline - The polyline we want to display
     */
	this.bspline = bspline || {};

	/**
     * 	@property {String} borderColor - The border color for the polyline
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the polyline
     */
	this.insideColor = insideColor || yom.colors.DEFAULT_INSIDE_COLOR;

	/**
     * 	@property {number} zIndex - The z index of the polyline
     */
	this.zIndex = zIndex || 0;

	this.centroid = bspline.centroid;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicBSpline'
 * 	@method yom.GraphicBSpline#copy
 * 	@return {yom.GraphicBSpline} The new GraphicBSpline object
 */
yom.GraphicBSpline.prototype.copy = function () {
	return new yom.GraphicBspline(this.bspline);
};

/**
 * 	Moves the graphic polyline by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicBSpline#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicBSpline.prototype.move = function (x, y) {
	this.bspline.move(x, y);
};

/**
 * 	Draw the graphic polyline.
 * 	@method yom.GraphicBSpline#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicBSpline.prototype.draw = function(drawManager) {
	drawManager.drawBSpline(this);
};

/**
 * 	Fill the graphic polyline with color.
 * 	@method yom.GraphicBSpline#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicBSpline.prototype.fillWithColor = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawBSpline(this);
};

/**
 * 	Fill the graphic polyline with image.
 * 	@method yom.GraphicBSpline#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicBSpline.prototype.fillWithImage = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawBSpline(this);
};

/**
 * 	Render the polyline
 * 	@method yom.GraphicBSpline#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicBSpline.prototype.render = function(drawManager) {
	this.draw(drawManager);
};

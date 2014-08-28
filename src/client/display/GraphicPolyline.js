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
 * 	@param {Object} [style] - The style (attributes : borderWidth, borderColor, fillColor, z)
 * 	@return {yom.GrapphicPolyline} The GraphicPolyline object
 *
 *	TODO : Add color
 */
yom.GraphicPolyline = function (polyline, style) {

	/**
     * 	@property {yom.Polyline} polyline - The polyline we want to display
     */
	this.polyline = polyline || {};
	
	/**
     * 	@property {Object} style - The style of the shape
     */
	this.style = style || {borderWidth: 1, borderColor: '#000000', z: 0};

};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicPolyline'
 * 	@method yom.GraphicPolyline#copy
 * 	@return {yom.GraphicPolyline} The new GraphicPolyline object
 */
yom.GraphicPolyline.prototype.copy = function () {
	return new yom.GraphicPolyline(this.polyline, this.zIndex, this.borderColor, this.lineWidth, this.insideColor);
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
 * 	Draw the graphic polyline.
 * 	@method yom.GraphicPolyline#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolyline.prototype.draw = function(drawManager) {
	drawManager.drawPolyline(this);
};

/**
 * 	Fill the graphic polyline with color.
 * 	@method yom.GraphicPolyline#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolyline.prototype.fillWithColor = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawPolyline(this);
};

/**
 * 	Fill the graphic polyline with image.
 * 	@method yom.GraphicPolyline#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolyline.prototype.fillWithImage = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawPolyline(this);
};

/**
 * 	Render the polyline
 * 	@method yom.GraphicPolyline#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolyline.prototype.render = function(drawManager) {
	this.draw(drawManager);
};

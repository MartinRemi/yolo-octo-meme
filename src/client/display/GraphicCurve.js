/**
 * 	@author       Sergueï LALLEMENT <serguei.l@orange.fr>
 * 	@copyright    2014 Sergueï LALLEMENT
 */

/**
 * 	Creates a new GraphicCurve object.
 * 	The GraphicCurve is defined with a curve and some colors.
 * 	@class GraphicCurve
 * 	@classdesc yom - GraphicCurve
 * 	@constructor
 * 	@param {yom.Curve} [curve] - The curve to copy
 * 	@param {Object} [style] - The style (attributes : borderWidth, borderColor, fillColor, z)
 * 	@return {yom.GrapphicCurve} The GraphicCurve object
 *
 */
yom.GraphicCurve = function (curve, style) {

	/**
     * 	@property {yom.curve} curve - The curve we want to display
     */
	this.curve = curve || {};
	
	/**
     * 	@property {Object} style - The style of the shape
     */
	this.style = style || {borderWidth: 1, borderColor: '#000000'};

	this.centroid = curve.centroid;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicCurve'
 * 	@method yom.GraphicCurve#copy
 * 	@return {yom.GraphicCurve} The new GraphicCurve object
 */
yom.GraphicCurve.prototype.copy = function () {
	return new yom.GraphicCurve(this.curve, this.style);
};

/**
 * 	Moves the graphic curve by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicCurve#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicCurve.prototype.move = function (x, y) {
	this.curve.move(x, y);
};

/**
 * 	Draw the graphic curve.
 * 	@method yom.GraphicCurve#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCurve.prototype.draw = function(drawManager) {
	drawManager.drawCurve(this);
};

/**
 * 	Fill the graphic curve with color.
 * 	@method yom.GraphicCurve#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCurve.prototype.fillWithColor = function(drawManager) {
	drawManager.fillCurveWithColor(this);
};

/**
 * 	Fill the graphic curve with image.
 * 	@method yom.GraphicCurve#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
// TODO
yom.GraphicCurve.prototype.fillWithImage = function(drawManager) {
	drawManager.drawCurve(this);
};

/**
 * 	Render the curve
 * 	@method yom.GraphicCurve#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCurve.prototype.render = function(drawManager) {
	this.draw(drawManager);
};

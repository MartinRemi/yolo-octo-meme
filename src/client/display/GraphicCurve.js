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
 * 	@param {number} [zIndex] - The zIndex of the curve
 * 	@param {String} [borderColor] - The border color for the curve
 * 	@param {number} [lineWidth] - The border width (optionnal 1 is by default)
 * 	@param {String} [insideColor] - The inside color for the curve 
 * 									(optionnal if unspecified it won't be filled)
 * 	@return {yom.GrapphicCurve} The GraphicCurve object
 *
 */
yom.GraphicCurve = function (curve, zIndex, borderColor, lineWidth, insideColor) {

	/**
     * 	@property {yom.curve} curve - The curve we want to display
     */
	this.curve = curve || {};

	/**
     * 	@property {String} borderColor - The border color for the curve
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the curve
     */
	this.insideColor = insideColor;

	/**
     * 	@property {number} zIndex - The z index of the curve
     */
	this.zIndex = zIndex || 0;

	/**
     * 	@property {number} lineWidth - The line width of the border of the curve
     */
	this.lineWidth = lineWidth || 1;

	this.centroid = curve.centroid;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicCurve'
 * 	@method yom.GraphicCurve#copy
 * 	@return {yom.GraphicCurve} The new GraphicCurve object
 */
yom.GraphicCurve.prototype.copy = function () {
	return new yom.GraphicCurve(this.curve, this.zIndex, this.borderColor, this.lineWidth, this.insideColor);
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

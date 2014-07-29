/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicLine object.
 * 	The GraphicLine is defined with a line and some colors.
 * 	@class GraphicLine
 * 	@classdesc yom - GraphicLine
 * 	@constructor
 * 	@param {yom.Line} [line] - The line to copy
 * 	@param {number} [zIndex] - The zIndex of the line
 * 	@param {String} [borderColor] - The border color for the line
 *	@param {number} [lineWidth=1] - The border width (optionnal 1 is by default)
 * 	@param {String} [insideColor] - The inside color for the line
 * 	@return {yom.GraphicLine} The GraphicLine object
 *
 *	TODO : Add color
 */
yom.GraphicLine = function (line, zIndex, borderColor, lineWidth, insideColor) {

	/**
     * 	@property {yom.Line} line - The line we want to display
     */
	this.line = line || {};

	/**
     * 	@property {String} borderColor - The border color for the line
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the line
     */
	this.insideColor = insideColor || yom.colors.DEFAULT_INSIDE_COLOR;

	/**
     * 	@property {number} zIndex - The z index of the line
     */
	this.zIndex = zIndex || 0;

	this.centroid = line.centroid;

	/**
	 *	@property {number} lineWidth - The border width (optionnal 1 is by default)
	 */
	this.lineWidth = lineWidth || 1;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicLine'
 * 	@method yom.GraphicLine#copy
 * 	@return {yom.GraphicLine} The new GraphicLine object
 */
yom.GraphicLine.prototype.copy = function () {
	return new yom.GraphicLine(this.line, this.zIndex, this.borderColor, this.lineWidth, this.insideColor);
};

/**
 * 	Moves the graphic line by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicLine#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicLine.prototype.move = function (x, y) {
	this.line.move(x, y);
};

/**
 * 	Draw the graphic line.
 * 	@method yom.GraphicLine#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicLine.prototype.draw = function(drawManager) {
	drawManager.drawLine(this);
};

/**
 * 	Fill the graphic line with color.
 * 	@method yom.GraphicLine#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicLine.prototype.fillWithColor = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawLine(this);
};

/**
 * 	Fill the graphic line with image.
 * 	@method yom.GraphicLine#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicLine.prototype.fillWithImage = function(drawManager) {
	// No filling possible, so drawing
	drawManager.drawLine(this);
};

/**
 * 	Render the line
 * 	@method yom.GraphicLine#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicLine.prototype.render = function(drawManager) {
	this.draw(drawManager);
};

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
 * 	@return {yom.GraphicCicle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicLine = function (line, borderColor, insideColor) {

	/**
     * 	@property {yom.Line} line - The line we want to display
     */
	this.line = line || [];

	/**
     * 	TODO : Add type and desc
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	TODO : Add type and desc
     */
	this.insideColor = insideColor || '#000';
}

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicLine'
 * 	@method yom.GraphicLine#copy
 * 	@return {yom.GraphicLine} The new GraphicLine object
 */
yom.GraphicLine.prototype.copy = function () {
	return new yom.GraphicLine(this.line);
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
 * 	Render the graphic line.
 * 	@method yom.GraphicLine#render
 * 	@param {yom.RenderManager} [renderManager] - The renderManager object
 */
yom.GraphicLine.prototype.render = function(renderManager) {
	// TODO : Add code
};

/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicCircle object.
 * 	The GraphicCircle is defined with a circle and some colors.
 * 	@class GraphicCircle
 * 	@classdesc yom - GraphicCircle
 * 	@constructor
 * 	@param {yom.Circle} [circle] - The circle to copy
 * 	@return {yom.GraphicCicle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicCircle = function (circle, borderColor, insideColor) {

	/**
     * 	@property {yom.Circle} circle - The circle we want to display
     */
	this.circle = circle || [];

	/**
     * 	TODO : Add type and desc
     */
	this.borderColor = borderColor || [];

	/**
     * 	TODO : Add type and desc
     */
	this.insideColor = insideColor || [];
}

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicCircle'
 * 	@method yom.GraphicCircle#copy
 * 	@return {yom.GraphicCircle} The new GraphicCircle object
 */
yom.GraphicCircle.prototype.copy = function () {
	return new yom.GraphicCircle(this.circle);
};

/**
 * 	Moves the graphic circle by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicCircle#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicCircle.prototype.move = function (x, y) {
	this.circle.move(x, y);
};

yom.GraphicCircle.prototype.render = function() {
	// TODO : Add code
};

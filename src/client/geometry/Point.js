/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new Point object.
 * 	The point is defined with its coordinates.
 * 	@class Point
 * 	@classdesc yom - Point
 * 	@constructor
 * 	@param {number} [x=0] - The x coordinate of the point.
 * 	@param {number} [y=0] - The y coordinate of the point.
 * 	@return {yom.Point} The point object
 */
yom.Point = function (x, y) {

	/**
     * 	@property {number} x - The x position of the point.
     */
	this.x = x || 0;

	/**
     * 	@property {number} y - The y position of the point.
     */
	this.y = y || 0;
}

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'x' property
 * 	@method yom.Point#getX
 * 	@return {number} The value of the property called 'x'
 */
yom.Point.prototype.getX = function () {
	return this.x;
};

/**
 * 	Getter of the 'y' property
 * 	@method yom.Point#getY
 * 	@return {number} The value of the property called 'y'
 */
yom.Point.prototype.getY = function () {
	return this.y;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Point'
 * 	@method yom.Point#copy
 * 	@return {yom.Point} The new point object
 */
yom.Point.prototype.copy = function () {
	return new yom.Point(this.x, this.y);
};

/**
 * 	Moves the point by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Point#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Point.prototype.move = function (x, y) {
	this.x += x || 0;

	this.y += y || 0;
};

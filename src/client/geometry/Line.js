/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 *	TODO : change for equation
 */

/**
 * 	@property {number} maxPointId - The maximum id of the point element
 * 	TODO : initiate with database
 */
yom.maxPointId = 1; 

/**
 * 	Creates a new Line object.
 * 	The circle is defined with two points : firstPoint(xf, yf) and secondPoint(xs, ys).
 * 	A unique id is generated depending on the max found in the database.
 * 	@class Point
 * 	@classdesc yom - Point
 * 	@constructor
 * 	@param {number} [xf=0] - The xf coordinate of the firstPoint.
 * 	@param {number} [yf=0] - The yf coordinate of the firstPoint.
 * 	@param {number} [xs=0] - The xs coordinate of the secondPoint.
 * 	@param {number} [ys=0] - The ys coordinate of the secondPoint.
 * 	@return {yom.Point} The circle object
 */
yom.Line = function (xf, yf, xs, ys) {

	/**
     * 	@property {number} id - The id of the cercle.
     */
	this.id = yom.maxPointId++;

	/**
     * 	@property {yom.Point} firstPoint - The first point of the line.
     */
	this.firstPoint = new yom.Point (xf || 0, yf || 0);

	/**
     * 	@property {yom.Point} secondPoint - The second point of the line.
     */
	this.secondPoint = new yom.Point (xs || 0, ys|| 0);
};

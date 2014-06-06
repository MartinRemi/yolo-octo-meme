/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	@property {number} maxCircleId - The maximum id of the circle element class
 * 	TODO : initiate with database
 */
yom.maxCircleId = 1; 

/**
 * 	Creates a new Circle object.
 * 	The circle is defined with the coordinates of its center and a radius.
 * 	A unique id is generated depending on the max found in the database.
 * 	@class Circle
 * 	@classdesc yom - Circle
 * 	@constructor
 * 	@param {number} [x=0] - The x coordinate of the center.
 * 	@param {number} [y=0] - The y coordinate of the center.
 * 	@param {number} [radius=0] - The radius of the circle.
 * 	@return {yom.Circle} The circle object
 */
yom.Circle = function (x, y, radius) {

	/**
     * 	@property {number} id - The id of the circle.
     */
	this.id = yom.maxCircleId++;

	/**
     * 	@property {yom.Point} centre - The center of the cicle.
     */
	this.center = new yom.Point (x || 0, y || 0);

	/**
     * 	@property {number} radius - The radius of the circle. (i.e. distance between center and each other point of the circle)
     */
	this.radius = radius || 0;
	this.radius = ( this.radius >= 0 ) ? this.radius : 0;
};

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'x' property
 * 	@method yom.Circle#getX
 * 	@return {number} The value of the property called 'x'
 */
yom.Circle.prototype.getX = function () {
	return this.center.getX();
};

/**
 * 	Getter of the 'y' property
 * 	@method yom.Circle#getY
 * 	@return {number} The value of the property called 'y'
 */
yom.Circle.prototype.getY = function () {
	return this.center.getY();
};

/**
 * 	Getter of the 'radius' property
 * 	@method yom.Circle#getRadius
 * 	@return {number} The value of the property called 'radius'
 */
yom.Circle.prototype.getRadius = function () {
	return this.radius;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Circle'
 * 	@method yom.Circle#copy
 * 	@return {yom.Circle} The new circle object
 */
yom.Circle.prototype.copy = function () {
	return new yom.Circle(this.center.getX(), this.getY(), this.radius);
};

/**
 * 	Moves the center of the circle by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Circle#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Circle.prototype.move = function (x, y) {
	this.center.move(x, y);
};

/**
 * 	Checkes if the circle (this) contains a point of coordinates (x,y)
 * 	@method yom.Circle#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 * 	@param {boolean} [inside] - If true, we check within the circle
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.Circle.prototype.contains = function (x, y, inside) {
	if(radius >= 0) {
		var dist = Math.pow(x - this.center.getX(), 2) + Math.pow(y - this.center.getY(), 2);
	 	return (inside && (dist < Math.pow(this.getRadius(), 2)) || (dist == Math.pow(this.getRadius(), 2)));
	} else {
		return inside && this.center.equals(x, y);
	}
};

/**
 * 	Checkes if the circle (this) contains a point (point)
 * 	@method yom.Circle#containsPoint
 * 	@param {yom.Point} [point] - The point concerned
 * 	@param {boolean} [inside] - If true, we check within the circle
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.Circle.prototype.containsPoint = function (point, inside) {
	if(radius >= 0) {
		var dist = Math.pow(point.x - this.center.getX(), 2) + Math.pow(point.y - this.center.getY(), 2);
	 	return (inside && (dist < Math.pow(this.getRadius(), 2)) || (dist == Math.pow(this.getRadius(), 2)));
	} else {
		return inside && this.center.equals(point);
	}
};

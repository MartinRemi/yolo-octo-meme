/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new Body.
 * 	@class Body
 * 	@classdesc yom - Body
 * 	@constructor
 *	@param {Array} shapes - The shapes which belong to the body.
 *	@param {number} mass - The mass of the body
 * 	@return {yom.Body} The body object
 *
 *	TODO : Set types for 'shapes'
 */
yom.Body = function (shapes, mass) {
	/**
     * 	@property {number} id - The id of the body element.
     *	TODO : Generate random id
     */
	this.id = 0;

	/**
     * 	@property {Array} shapes - The shapes that belong to the body.
     */
	this.shapes = shapes || [];

	/**
     * 	@property {Array.<yom.Force>} forces - The forces applied to the body.
     */
	this.forces = [];

	/**
     * 	@property {number} mass - The mass of the body
     */
	this.mass = mass || 1;

	this.velocity = new yom.Vector2();

	/**
     * 	@property {Array.<yom.Point>} centroid - The centroid of the body.
     */
	this.centroid = new yom.Vector2();
	// If nothing --> (0, 0)

	var i;
	for(i = 0; i < shapes.length; ++i) {
		this.centroid.addVector(shapes[i].centroid);
	}
	this.centroid.div(shapes.length);
	this.centroid = new yom.Point(this.centroid.x, this.centroid.y);
};

// ----- Method(s) ----- \\
/**
 * 	Tests if the shapes of the body contain a point (x, y)
 * 	@method yom.Body#contains
 *	@param {number} [x=0] - The x-coordinate of the point
 *	@param {Array} [y=0] - The y coordinate of the point
 * 	@return {boolean} True if the body contains the point, else false
 */
yom.Body.prototype.contains = function(x, y) {
	var i;
	for(i = 0; i < this.shapes.length; ++i) {
		if(this.shapes[i].contains(x, y)) { 
			return true;
		}
	}
	return false;
};

/**
 * 	Tests if the shapes of the body contain a point (point) of coordinates (x, y)
 * 	@method yom.Body#containsPoint
 *	@param {yom.Point} point - The point we want to check
 * 	@return {boolean} True if the body contains the point, else false
 */
yom.Body.prototype.containsPoint = function(point) {
	var i;
	for(i = 0; i < this.shapes.length; ++i) {
		if(this.shapes[i].contains(point)) { 
			return true;
		}
	} 
	return false;
};

/**
 * 	Moves the body by (x, y)
 * 	@method yom.Body#move
 *	@param {number} x - The offset for the x-coordinate
 *	@param {number} y - The offset for the y-coordinate
 */
yom.Body.prototype.move = function(x, y) {
	var i;
	for(i = 0; i < this.shapes.length; ++i) {
		this.shapes[i].move(x, y);
	}
	this.centroid.move(x, y);
	// console.log(this.centroid);
};
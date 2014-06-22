/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new bidimensionnal verctor.
 *
 *	BY DEFAULT : LINE VECTOR
 *
 * 	@class Vector2
 * 	@classdesc yom - Vector2
 * 	@constructor
 *	@param {number} [x=0] - The x-coordinate of the vector
  *	@param {number} [y=0] - The y-coordinate of the vector
 * 	@return {yom.Vector2} The body object
 */
yom.Vector2 = function (x, y) {
	/**
     * 	@property {number} x - The x-coordinate of the vector
     */
	this.x = x || 0;

	/**
     * 	@property {number} y - The y-coordinate of the vector
     */
	this.y = y || 0;
};

// ----- Method(s) ----- \\
/**
 * 	Add a constant to the vector (this)
 * 	@method yom.Vector2#add
 *	@param {number} number - The constant to add
 */
yom.Vector2.prototype.add = function(point) {
	this.x += point;

	this.y += point;
};

/**
 * 	Add a vector to the vector (this)
 * 	@method yom.Vector2#addVector
 *	@param {yom.Vector2} vector - The vector to add
 */
yom.Vector2.prototype.addVector = function(vector) {
	this.x += vector.x;

	this.y += vector.y;
};

/**
 * 	Substract a constant to the vector (this)
 * 	@method yom.Vector2#sub
 *	@param {number} number - The constant to substract
 */
yom.Vector2.prototype.sub = function(point) {
	this.x -= point;

	this.y -= point;
};

/**
 * 	Substract a vector to the vector (this)
 * 	@method yom.Vector2#subVector
 *	@param {yom.Vector2} vector - The vector to substrct
 */
yom.Vector2.prototype.subVector = function(vector) {
	this.x -= vector.x;

	this.y -= vector.y;
};

/**
 * 	Multiply a constant to the vector (this)
 * 	@method yom.Vector2#scl
 *	@param {number} constant - The constant to multiply
 */
yom.Vector2.prototype.scl = function(constant) {
	this.x *= constant;

	this.y *= constant;
};

/**
 * 	Multiply a vector to the vector (this)
 * 	@method yom.Vector2#mulVector
 *	@param {number} vector - The vector to multiply
 */
yom.Vector2.prototype.mulVector = function(vector) {
	this.x *= vector.x;

	this.y *= vector.y;
};

/**
 * 	Normalize the vector
 * 	@method yom.Vector2#norm
 */
yom.Vector2.prototype.norm = function() {
	this.x *= constant;

	this.y *= constant;
};

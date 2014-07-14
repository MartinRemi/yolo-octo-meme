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
yom.Vector2.prototype.add = function(number) {
	this.x += number;

	this.y += number;
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
yom.Vector2.prototype.sub = function(number) {
	this.x -= number;

	this.y -= number;
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
 *	@param {yom.Vector2} vector - The vector to multiply
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
	var length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	this.x /= length;

	this.y /= length;
};

/**
 * 	Divide the vector by a number
 * 	@method yom.Vector2#div
 *	@param {number} number - the number
 */
yom.Vector2.prototype.div = function(number) {
	this.x /= number;

	this.y /= number;
};

/**
 * 	Copy the vector
 * 	@method yom.Vector2#copy
 */
yom.Vector2.prototype.copy = function() {
	return new yom.Vector2(this.x, this.y);
};

/**
 * 	Computes the divider
 * 	@method yom.Vector2#divider
 */
yom.Vector2.prototype.divider = function() {
	return Math.max(this.x, this.y) == 0 ? Math.min(this.x, this.y) * -1 : (Math.max(this.x, this.y) < 0) ? Math.max(this.x, this.y) * -1 : Math.max(this.x, this.y);
};

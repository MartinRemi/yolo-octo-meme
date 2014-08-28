/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new bidimensionnal vector.
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
 * 	Add a constant (number, number) to the vector (this)
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
 * 	Substract a constant (number, number) to the vector (this)
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
 * 	@method yom.Vector2#mul
 *	@param {number} constant - The constant to multiply
 */
yom.Vector2.prototype.mul = function(constant) {
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
 * 	Return the length of the vector squared
 * 	@method yom.Vector2#getNormSq
 *	@return {number} The length of the vector squared
 */
yom.Vector2.prototype.getNormSq = function() {
	return this.x*this.x+this.y*this.y;
};

/**
 * 	Divide the vector (this) by a number
 * 	@method yom.Vector2#div
 *	@param {number} number - the number
 */
yom.Vector2.prototype.div = function(number) {
	this.x /= number;

	this.y /= number;
};

/**
 * 	Rotate the vector (this) by an angle (in rad)
 *  (Note: 1 rad is approximatively 57.295 degrees for conversion)
 * 	@method yom.Vector2#rotate
 *	@param {number} angle - The angle of rotation (in radian)
 */
yom.Vector2.prototype.rotate = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	var temp_x = this.x;
	this.x = c*this.x-s*this.y;
	this.y = s*temp_x+c*this.y;
};

/**
 * 	Copy the vector
 * 	@method yom.Vector2#copy
 */
yom.Vector2.prototype.copy = function() {
	return new yom.Vector2(this.x, this.y);
};

/**
 *	Computes the normal of a line
 * 	@method yom.Vector2#lineNormal
 *	@param {yom.Line} line - The line to get the vector
 */
yom.Vector2.prototype.lineNormal = function(line) {
	var normal = line.normal();
	this.x = normal.x;
	this.y = normal.y;
};

/**
 *	Computes the dot product of two yom.Vector2
 * 	@method yom.Vector2#dotProduct
 *	@param {yom.Vector2} vector - The second vector of the product
 *	@return {number} The result of the dot product
 */
yom.Vector2.prototype.dotProduct = function(vector) {
	return this.x * vector.x + this.y * vector.y;
};

/**
 *	Computes the projection of a vector on a line
 * 	@method yom.Vector2#project
 *	@param {yom.Vector2} vector - The vector to project
 *	@param {yom.Line}  The line to project on
  *	@return {yom.Vector2} The projected vector
 */
yom.Vector2.prototype.project = function(vector, line) {
	var result = new yom.Vector2(line.xf-line.xs, line.yf-line.ys);
	var length = result.dotProduct(vector)/result.getNormSq();
	result.mul(length);
	return result;
};

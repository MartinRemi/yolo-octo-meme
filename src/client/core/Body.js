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
 * 	@return {yom.Body} The body object
 *
 *	TODO : Set types for 'shapes'
 */
yom.Body = function (shapes) {
	/**
     * 	@property {number} id - The id of the body element.
     *	TODO : Generate random id
     */
	this.id = 0;

	/**
     * 	@property {Array} shapes - The shapes that belong to the body.
     */
	this.shapes = shapes || [];
};

// ----- Method(s) ----- \\
/**
 * 	Tests if the shapes of the body contain a point (x, y)
 * 	@method yom.Body#contains
 * 	@return {boolean} True if the body contains the point, else false
 */
yom.Body.prototype.contains = function(x, y) {
	var i;
	for(i = 0; i < this.shapes.length; ++i) {
		(this.shapes[i].contains(x, y)) ? return true : /* NOTHING */;
	}
};

/**
 * 	Tests if the shapes of the body contain a point (point) of coordinates (x, y)
 * 	@method yom.Body#contains
 * 	@return {boolean} True if the body contains the point, else false
 */
yom.Body.prototype.contains = function(point) {
	var i;
	for(i = 0; i < this.shapes.length; ++i) {
		(this.shapes[i].contains(point)) ? return true : /* NOTHING */;
	}
};
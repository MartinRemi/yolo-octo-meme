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
	this.firstPoint = new yom.Point ();

	/**
     * 	@property {yom.Point} secondPoint - The second point of the line.
     */
	this.secondPoint = new yom.Point ();

	/**
     * 	@property {number} gradient - The gradient of the line.
     */
    this.gradient = 0;
    if(xf > xs) {
    	this.firstPoint = new yom.Point (xs, ys);

     	this.secondPoint = new yom.Point (xf, yf);

     	this.gradient = (yf - ys) / (xf - xs);
    } else {
     	this.firstPoint = new yom.Point (xf, yf);

     	this.secondPoint = new yom.Point (xs, ys);

     	this.gradient = (ys - yf) / (xs - xf);
    }

    /**
     * 	@property {number} intercept - The y-intercept of the line.
     */
    this.intercept = yf - this.gradient * xf;

    /**
     *  @property {yom.Point} centroid - The center of gravity of the line
     */
    this.centroid = new yom.Point();
    this.centroid.y = this.firstPoint.y + (this.secondPoint.y + this.firstPoint.y) / 2;
    this.centroid.x = this.firstPoint.x + (this.secondPoint.x + this.firstPoint.x) / 2;
};

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'firstPoint' property
 * 	@method yom.Line#getFirstPoint
 * 	@return {yom.Point} The value of the property called 'firstPoint'
 */
yom.Line.prototype.getFirstPoint = function () {
	return this.firstPoint;
};

/**
 * 	Getter of the 'secondPoint' property
 * 	@method yom.Line#getSecondPoint
 * 	@return {yom.Point} The value of the property called 'secondPoint'
 */
yom.Line.prototype.getSecondPoint = function () {
	return this.secondPoint;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Line'
 * 	@method yom.Line#copy
 * 	@return {yom.Line} The new line object
 */
yom.Line.prototype.copy = function () {
	return new yom.Line(this.firstPoint.getX(), this.firstPoint.getY(),
	 					this.secondPoint.getX(), this.secondPoint.getY());
};

/**
 * 	Moves the line by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Line#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Line.prototype.move = function (x, y) {
	this.firstPoint.move(x, y);
	this.secondPoint.move(x, y);

	// The gradient is the same
	// but we have to compute the intercept again
	this.intercept = this.firstPoint.getY() - this.gradient * this.firstPoint.getX();
    this.centroid.move(x, y);
};

/**
 * 	Checkes if a point of coordinates (x, y) is on the line
 * 	@method yom.Line#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 *	@return {boolean} True if the point is contained by the line, else false
 */
yom.Line.prototype.contains = function (x, y) {
    if(this.firstPoint.x == this.secondPoint.x) {
        return (this.firstPoint.x == x) && ((y <= this.secondPoint.y && y >= this.firstPoint.y) || (y <= this.firstPoint.y && y >= this.secondPoint.y));
    } else {
	   return (Math.round((this.gradient * x) + this.intercept) == y) && (x >= this.firstPoint.x && x <= this.secondPoint.x);
    }
};

/**
 * 	Checkes if a point point(x, y) is on the line
 * 	@method yom.Line#containsPoint
 * 	@param {yom.Point} [point] - The point concerned
 *	@return {boolean} True if the point is contained by the line, else false
 */
yom.Line.prototype.containsPoint = function (point) {
	return this.contains(point.x, point.y);
};

/**
 *  Computes the normal vector of the line
 *  @method yom.Line#normal
 *  @return {yom.Vector2} True if the point is contained by the line, else false
 */
yom.Line.prototype.normal = function (point) {
    // n(-y,x)
    return new yom.Vector2(- this.gradient, 1);
};

/**
 * 	@author       Sergueï LALLEMENT <serguei.l@orange.fr>
 * 	@copyright    2014 Sergueï LALLEMENT
 */

 /**
 *  @property {number} maxCurveId - The maximum id of the bezrier curve element class
 *  TODO : initiate with database
 */
yom.maxCurveId = 1; 

/**
 * 	Creates a new Bezier curve object.
 * 	The curve is defined by the points where the curve must follow and its control points
 * 	A unique id is generated depending on the max found in the database.
 * 	@class Curve
 * 	@classdesc yom - Curve
 * 	@constructor
 * 	@param {Array<yom.Vector2>} - The list of points.
 * 	@param {Array<yom.Vector2>} - The list of control points.
 * 			(the length of the array must be : 2 * (lenght of the list of points - 1) ).
 * 	@return {yom.Curve} The curve object
 */
yom.Curve = function (points, controlPoints) {

	/**
     * 	@property {number} id - The id of the curve.
     */
	this.id = ++yom.maxCurveId;

	/**
     * 	@property {Array<yom.Vector2>} points - The points of the curve.
     */
	this.points = points;

	/**
     * 	@property {Array<yom.Vector2>} controlPoints - The controlPoints of the curve.
     */
	this.controlPoints = controlPoints;// || new Array((this.points.length-1)*2);

    this.centroid = new yom.Point(); // TODO 
};

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'points' property
 * 	@method yom.Curve#getPoints
 * 	@return {Array<yom.Point>} The value of the property called 'points'
 */
yom.Curve.prototype.getPoints = function () {
	return this.points;
};

/**
 * 	Getter of the 'controlPoints' property
 * 	@method yom.Curve#getControlPoints
 * 	@return {Array<yom.Point>} The value of the property called 'controlPoints'
 */
yom.Curve.prototype.getControlPoints = function () {
	return this.controlPoints;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Curve'
 * 	@method yom.Curve#copy
 * 	@return {yom.Curve} The new curve object
 */
yom.Curve.prototype.copy = function () {
	return new yom.Curve(this.points,this.controlPoints);
};

/**
 * 	Moves the curve by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Curve#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Curve.prototype.move = function (x, y) {
	graphic.curve.points[0].add(x,y);
	for(var i=1; i<graphic.curve.points.length; ++i){
		graphic.curve.points[i].add(x,y);
		graphic.curve.controlPoints[2*(i-1)].add(x,y);
		graphic.curve.controlPoints[2*(i-1)].add(x,y);
	}
    this.centroid.move(x, y);
};

/**
 * 	Checkes if a point of coordinates (x, y) is on the curve
 * 	@method yom.Curve#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 *	@return {boolean} True if the point is contained by the curve, else false
 */
/*
yom.Curve.prototype.contains = function (x, y) {
    if(this.firstPoint.x == this.secondPoint.x) {
        return (this.firstPoint.x == x) && ((y <= this.secondPoint.y && y >= this.firstPoint.y) || (y <= this.firstPoint.y && y >= this.secondPoint.y));
    } else {
	   return (Math.round((this.gradient * x) + this.intercept) == y) && (x >= this.firstPoint.x && x <= this.secondPoint.x);
    }
};*/

/**
 * 	Checkes if a point point(x, y) is on the curve
 * 	@method yom.Curve#containsPoint
 * 	@param {yom.Point} [point] - The point concerned
 *	@return {boolean} True if the point is contained by the curve, else false
 */
 /*
yom.Curve.prototype.containsPoint = function (point) {
	return this.contains(point.x, point.y);
};*/

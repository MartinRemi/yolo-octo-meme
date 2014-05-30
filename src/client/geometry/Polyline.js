/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	@property {number} maxPolylineId - The maximum id of the polyline element class
 * 	TODO : initiate with database
 */

yom.maxPolylineId = 1; 

/**
 * 	Creates a new Polyline object.
 * 	The circle is defined with the coordinates of its points.
 * 	A unique id is generated depending on the max found in the database.
 * 	@class Polyline
 * 	@classdesc yom - Polyline
 * 	@constructor
 * 	@param {Array.<number>} [coordinates] - The x coordinate of the center.
 * 	@return {yom.Polyline} The polyline object
 */
yom.Polyline = function (coordinates) {
	/**
     * 	@property {number} id - The id of the polyline.
     */
	this.id = yom.maxPolylineId++;

	/**
     * 	@property {Array.<number>} coordinates - The coordinates of the points composing the polyline.
     */
	this.coordinates = coordinates;

	/**
     * 	@property {Array} lines - The lines composing the polyline.
     */
	this.lines = [];

	var i;
	for(i = 0; i < coordinates.length; i += 2) {
		if(i + 3 < coordinates.length) {
			this.lines = new Line(
				coordinates[i],
				coordinates[i + 1],
				coordinates[i + 2],
				coordinates[i + 3]
			);
		} else {
			break;
		}
	}
}

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'lines' property
 * 	@method yom.Polyline#getLines
 * 	@return {Array} The value of the property called 'lines'
 */
yom.Polyline.prototype.getLines = function () {
	return this.lines;
};

/**
 * 	Getter of the 'coordinates' property
 * 	@method yom.Polyline#getCoordinates
 * 	@return {number} The value of the property called 'coordinates'
 */
yom.Polyline.prototype.getCoordinates = function () {
	return this.coordinates;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Polyline'
 * 	@method yom.Polyline#copy
 * 	@return {yom.Polyline} The new polyline object
 */
yom.Polyline.prototype.copy = function () {
	return new yom.Polyline(this.coordinates);
};

/**
 * 	Moves the polyline by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Polyline#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Polyline.prototype.move = function (x, y) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		this.lines[i].move(x, y);
	}
};

/**
 * 	Checkes if the polyline (this) contains a point of coordinates (x,y)
 * 	@method yom.Polyline#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.Polyline.prototype.contains = function (x, y) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].contains(x, y)) {
			return true;
		}
	}
	returnf false;
}

/**
 * 	Checkes if the polyline (this) contains a point (point)
 * 	@method yom.Polyline#contains
 * 	@param {yom.Point} [point] - The point concerned
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.Polyline.prototype.contains = function (point) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].contains(point)) {
			return true;
		}
	}
	returnf false;
}

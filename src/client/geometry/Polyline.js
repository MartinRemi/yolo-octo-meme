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
	var index = 0;
	for(i = 0; i < coordinates.length; i += 2) {
		if(i + 3 < coordinates.length) {
			this.lines[index] = new yom.Line(
				coordinates[i],
				coordinates[i + 1],
				coordinates[i + 2],
				coordinates[i + 3]
			);
			++index;
		} else {
			break;
		}
	}

	/**
     *  @property {yom.Point} centroid - The center of gravity of the polygon
     */
	this.centroid = new yom.Point(0, 0);
    if(coordinates.length == 2) {
		this.centroid.x = coordinates[0];
		this.centroid.y = coordinates[1];
	} else if(coordinates.length >= 4) {
		var x0, y0, x1, y1, a, signedArea;
		signedArea = 0;
		for(i = 0; i < coordinates.length - 3; i+=2) {
			x0 = coordinates[i];
			y0 = coordinates[i+1];
			x1 = coordinates[i+2];
			y1 = coordinates[i+3];

			a = x0 * y1 - x1 * y0;
			signedArea += a;
			this.centroid.x += (x0 + x1) * a;
			this.centroid.y += (y0 + y1) * a;
		}

		signedArea *= 0.5;
		this.centroid.x /= (6.0*signedArea);
		this.centroid.y /= (6.0*signedArea);
	}
};

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
 * 	@return {Array.<number>} The value of the property called 'coordinates'
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

	for(i = 0; i < this.coordinates.length; ++i) {
		if(i % 2 == 0) {
			this.coordinates[i] += x;
		} else {
			this.coordinates[i] += y;
		}
	}
	this.centroid.move(x, y);
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
	return false;
};

/**
 * 	Checkes if the polyline (this) contains a point (point)
 * 	@method yom.Polyline#containsPoint
 * 	@param {yom.Point} [point] - The point concerned
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.Polyline.prototype.containsPoint = function (point) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].containsPoint(point)) {
			return true;
		}
	}
	return false;
};

/**
 * 	Checkes if the polyline (this) contains a point of coordinates (x,y) and return how many times
 * 	@method yom.Polyline#numberOfContains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 *	@return {number} the number of time the point is contained
 */
yom.Polyline.prototype.numberOfContains = function (x, y) {
	var i;
	var cpt = 0;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].contains(x, y)) {
			++cpt;
		}
	}
	return cpt;
};

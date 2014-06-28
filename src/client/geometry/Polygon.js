/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	@property {number} maxPolygonId - The maximum id of the Polygon element class
 * 	TODO : initiate with database
 */
yom.maxPolygonId = 1; 

/**
 * 	Creates a new Polygon object.
 * 	The Polygon is defined with the coordinates of its points.
 * 	A unique id is generated depending on the max found in the database.
 * 	@class Polygon
 * 	@classdesc yom - Polygon
 * 	@constructor
 * 	@param {Array.<number>} [coordinates] - The coordinates of the points composing the polygon.
 * 	@return {yom.Polygon} The Polygon object
 */
yom.Polygon = function (coordinates) {

    /**
     * 	@property {number} id - The id of the polyline.
     */
	this.id = yom.maxPolylineId++;

	/**
     * 	@property {Array.<number>} coordinates - The coordinates of the points composing the polygon.
     */
    this.coordinates = coordinates;

    // We repeat the first point
    coordinates[coordinates.length] = coordinates[0];
    coordinates[coordinates.length] = coordinates[1];

    /**
     *	@property {yom.Polyline} perimeter - The coordinates of the points composing the polygon.
     */
    this.perimeter = new yom.Polyline(coordinates);

    /**
     *  @property {yom.Point} centroid - The center of gravity of the polygon
     */
    this.centroid = new yom.Point(coordinates[0], coordinates[1]);
};

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'perimeter' property
 * 	@method yom.Polygon#getPerimeter
 * 	@return {yom.Polyline} The value of the property called 'perimeter'
 */
yom.Polygon.prototype.getPerimeter = function () {
	return this.perimeter;
};

/**
 * 	Getter of the 'coordinates' property
 * 	@method yom.Polygon#getCoordinates
 * 	@return {number} The value of the property called 'coordinates'
 */
yom.Polygon.prototype.getCoordinates = function () {
	return this.getCoordinates();
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.Polygon'
 * 	@method yom.Polygon#copy
 * 	@return {yom.Polygon} The new Polygon object
 */
yom.Polygon.prototype.copy = function () {
	return new yom.Polygon(this.coordinates);
};

/**
 * 	Moves the Polygon by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.Polygon#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.Polygon.prototype.move = function (x, y) {
	this.perimeter.move(x, y);

	//this.coordinates = this.getPerimeter()

	/*var i;
	for(i = 0; i < this.coordinates.length; ++i) {
		if(i % 2 == 0) {
			this.coordinates[i] += x;
		} else {
			this.coordinates[i] += y;
		}
	}*/

	//this.perimiter = new yom.Polyline(this.coordinates);
};

/**
 * 	Checkes if the Polygon (this) contains a point of coordinates (x,y)
 * 	@method yom.Polygon#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 * 	@param {boolean} [inside] - If true, we check within the Polygon
 *	@return {boolean} true if the Polygon contains the point, else false
 */
yom.Polygon.prototype.contains = function (x, y, inside) {
	if(inside) {
		// TODO : pixel unit? cm ? mm?
		// TODO : Enhance by trying better directions?

		var i;
		var maxX = this.coordinates[0];
		for(i = 2; i < this.coordinates.length; i+=2) {
			maxX = (this.coordinates[i] > maxX) ? this.coordinates[i] : maxX;
		}
		
		if(x < maxX) {
			maxX += 10;
			// We count the number of intersections with the borders of the figure
			var cpt = 0;
			for(i = x; i <= maxX; i++) {
				if(this.perimeter.contains(x, y)) {
					++cpt;
				}
			}

			// If an even number of intersections with the figure, the points doesn't belong to the figure
			return (cpt % 2 != 0) || this.contains(x, y, false);
		} else {
			return false;
		}
	} else {
		return this.perimeter.contains(x, y);
	}
};

/**
 * 	Checkes if the Polygon (this) contains a point (point)
 * 	@method yom.Polygon#containsPoint
 * 	@param {yom.Point} [point] - The point concerned
 * 	@param {boolean} [inside] - If true, we check within the Polygon
 *	@return {boolean} true if the Polygon contains the point, else false
 */
yom.Polygon.prototype.containsPoint = function (point, inside) {
	if(inside) {
		// TODO : pixel unit? cm ? mm?
		// TODO : Enhance by trying better directions?
		var i;
		var maxX = this.coordinates[0];
		for(i = 2; i < this.coordinates.length; i+=2) {
			maxX = (this.coordinates[i] > maxX) ? this.coordinates[i] : maxX;
		}
		if(point.x < maxX) {
			// We count the number of intersections with the borders of the figure
			var cpt = 0;
			for(i = point.x; i <= maxX; i++) {
				cpt = (this.perimeter.contains(i, point.y)) ? cpt+1 : cpt;
			}

			// If an even number of intersections with the figure, the points doesn't belong to the figure
			return (cpt % 2 != 0) || this.containsPoint(point, false);
		} else {
			return false;
		}
	} else {
		return this.perimeter.containsPoint(point);
	}
};

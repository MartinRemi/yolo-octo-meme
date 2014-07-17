/**
 * 	@author       Sergueï LALLEMENT <serguei.l@orange.fr>
 * 	@author       Jean MARCHAL <jmarchal8869@gmail.com>
 * 	@copyright    2014 Jean MARCHAL - Sergueï Lallement
 */

/**
 * 	@property {number} maxBSplineId - The maximum id of the BSpline element class
 * 	TODO : initiate with database
 */

yom.maxBSplineId = 1; 

/**
 * 	Creates a new BSpline object.
 * 	The BSpline is defined by a list of nodes and two parameters : parameter of the function and the degree of the curve.
 * 	A unique id is generated depending on the max found in the database.
 * 	@class BSpline
 * 	@classdesc yom - BSpline
 * 	@constructor
 * 	@param {Array.<number>} [nodes] - List of the m+1 nodes which composed the BSpline.
 *  @param {Array.<Point>} [points] - List of the m-n-1 points used to create the BSpline.
 *  @param {number} [n] - Degree of the curve.
 *  @param {Point} [origin] - Origin of the curve.
 *  @param {number} [length] - Length of the curve.
 *  @param {number} [precision] - Quality of the precision (optional, = 500 if undefined)
 * 	@return {yom.BSpline} The BSpline object
 */
yom.BSpline = function (nodes, points, n, origin, length, precision) {
	/**
     * 	@property {number} id - The id of the BSpline.
     */
	this.id = yom.maxBSplineId++;

	/**
     * 	@property {Array.<number>} nodes - List of the m+1 nodes which composed the BSpline.
     */
	this.nodes = nodes;
	
	/**
     * 	@property {Array.<Point>} [points] - List of the m-n-1 points used to create the BSpline.
     */
	this.points = points;
	 
	 /**
     * 	@property {number} [n] - Degree of the curve.
     */
	 this.n = n;

	 /**
     * 	@property {number} [n] - Length of the curve in x.
     */
	 this.length = length || 100;
	 
	
	 /**
     * 	@property {number} [n] - Origin of the curve.
     */
	 this.origin = origin || new yom.Vector2(0,0);

	 /**
     * 	@property {number} [n] - Precision of the curve.
     */
	 this.precision = precision || 500;


	/**
     * 	@property {Array} subdiv - array that define all the points of the BSpline
	 * between 0 and precision
     */
	this.subdiv = new Array(this.precision+1);
	
	this.compute();
}

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'equation' property
 * 	@method yom.BSpline#getPoint
 * 	@param {number} t parameter of the curve between 0 and 1
 * 	@return {Array} The height of the point
 */
 
yom.BSpline.prototype.getPoint = function (t) {
	return this.subdiv[Math.round(t*this.precision+1)];
};

// ----- Method(s) ----- \\
/**
 * 	Generate all the points of the curve with a quantum of '1/this.precision'
 * 	@method yom.BSpline#compute
 * 	@return {}
 */
yom.BSpline.prototype.compute = function () {
	var tt = 0.0, val;
	var k,i,j;
	polynomials = new Array(this.n+1);
	for(j = 0; j < polynomials.length; ++j) {
		polynomials[j] = new Array(this.nodes.length - this.n +2) ;
	}
	var size = polynomials[0].length;
	for(k = 0; k <= this.precision; ++k){
		for(j = 0; j < polynomials.length; j++) {
			if (j==0){
				for (i = 0; i <= size; i++){
					if (i <= this.nodes.length - this.n){
						if (this.nodes[i]<=tt && tt<=this.nodes[i+1])
							polynomials[j][i] = 1;
						else
							polynomials[j][i] = 0;
					} else {
						break;
					}
				}
			} else {
				for (i = 0; i <= size; i++){
					var temp = ((tt - this.nodes[i])/(this.nodes[i+j] - this.nodes[i]) * (polynomials[j-1][i] || 0) );
					polynomials[j][i] = temp
							+ ((this.nodes[i+j+1] - tt)/(this.nodes[i+j+1] - this.nodes[i+1]) * (polynomials[j-1][i+1]) || 0);
					if(isNaN(polynomials[j][i])){
						polynomials[j][i] = 0;
					}
				}
			}
		}
		val = 0;
		for (i = 0; i <= this.nodes.length - this.n; i++){
			val += polynomials[this.n][i]*(this.points[i] || 0);
			
		}
		this.subdiv[k] = val;
		tt += 1.0/this.precision;
	}
};

/**
 * 	Copies this into a new object of type 'yom.BSpline'
 * 	@method yom.BSpline#copy
 * 	@return {yom.BSpline} The new BSpline object
 */
yom.BSpline.prototype.copy = function () {
	return new yom.BSpline(this.coordinates, this.t, this.n);
};

/**
 * 	Moves the BSpline by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.BSpline#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.BSpline.prototype.move = function (x, y) {
	var i;
	for(i = 0; i < this.points.length; ++i) {
		this.points[i].move(x, y);
	}
};


// /!\ A faire !

/**
 * 	Checkes if the BSpline (this) contains a point of coordinates (x,y)
 * 	@method yom.BSpline#contains
 * 	@param {number} [x=0] - The x-coordinate of the point
 * 	@param {number} [y=0] - The y-coordinate of the point
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.BSpline.prototype.contains = function (x, y) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].contains(x, y)) {
			return true;
		}
	}
	return false;
}

/**
 * 	Checkes if the BSpline (this) contains a point (point)
 * 	@method yom.BSpline#contains
 * 	@param {yom.Point} [point] - The point concerned
 *	@return {boolean} true if the circle contains the point, else false
 */
yom.BSpline.prototype.contains = function (point) {
	var i;
	for(i = 0; i < this.lines.length; ++i) {
		if(this.lines[i].contains(point)) {
			return true;
		}
	}
	return false;
}

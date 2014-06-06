/**
 * 	@author       Jean MARCHAL <jmarchal8869@gmail.com>
 * 	@copyright    2014 Jean MARCHAL
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
 *  @param {number} [t] - Parameter which take the function that define the BSpline.
 *  @param {number} [n] - Degree of the curve.
 * 	@return {yom.BSpline} The BSpline object
 */
yom.BSpline = function (nodes, points, t, n) {
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
     * 	@property {number} [t] - Parameter which take the function that define the BSpline.
     */
	 this.t = t;
	 
	 /**
     * 	@property {number} [n] - Degree of the curve.
     */
	 this.n = n;

	/**
     * 	@property {Array} Polynomials - polynomials depending on the nodes that define the BSpline
     */
	this.polynomials = new Array(nodes.length);
	
	// Each polynomials are calculated here and placed in the array polynomials
	for(var j = 0; j < this.n; j++) {
		this.polynomials[j] = new Array(this.nodes.length - this.n - 1);
		// First of all, we calculate initial polynomials
		if (j==0){
			for (var i = 0; i < this.nodes.length - this.n - 1; i++){
				
				if (i+1 < this.nodes.length - this.n - 1){
					if (this.t>=this.nodes[i] && this.t<=this.nodes[i+1])
						this.polynomials[j][i] = 1;
					else
						this.polynomials[j][i] = 0;
				}
				else
					break;
			}
		}
		// And then, we calculate the rest of them using those previous ones.
		else{
			for (var i = 0; i < this.nodes.length - this.n - 1; i++){
				this.polynomials[j][i] = ((this.t - this.nodes[i])/(this.nodes[i+1] - this.nodes[i]) * this.polynomials[i][j-1]) + ((this.nodes[i+j+1] - this.t)/(this.nodes[i+j+1] - this.nodes[i+1]) * this.polynomials[i+1][j-1]);
			}
		}
	}
	
	/**
     * 	@property {number} equation - function defining the BSpline
     */
	
	this.equation;
	for (var i = 0; i < this.nodes.length - this.n - 1; i++){
		this.equation += this.polynomials[this.n][i]*this.points[i];
	}
}

// ----- Getter(s) ----- \\
/**
 * 	Getter of the 'polynomials' property
 * 	@method yom.BSpline#getPolynomials
 * 	@return {Array} The value of the property called 'polynomials'
 */
yom.BSpline.prototype.getPolynomials = function () {
	return this.polynomials;
};

/**
 * 	Getter of the 'equation' property
 * 	@method yom.BSpline#getEquation
 * 	@return {Array} The value of the property called 'equation'
 */
 
 yom.BSpline.prototype.getEquation = function () {
	return this.equation;
};

// ----- Method(s) ----- \\
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

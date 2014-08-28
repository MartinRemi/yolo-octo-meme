/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicCircle object.
 * 	The GraphicCircle is defined with a circle and some colors.
 * 	@class GraphicCircle
 * 	@classdesc yom - GraphicCircle
 * 	@constructor
 * 	@param {yom.Circle} [circle] - The circle to copy
 * 	@param {Object} [style] - The style (attributes : borderWidth, borderColor, fillColor, z, image)
 * 	@return {yom.GraphicCircle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicCircle = function (circle, style) {

	/**
     * 	@property {yom.Circle} circle - The circle we want to display
     */
	this.circle = circle || {};

	/**
     * 	@property {Object} style - The style of the shape
     */
	this.style = style || {borderWidth: 1, borderColor: '#000000'};
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicCircle'
 * 	@method yom.GraphicCircle#copy
 * 	@return {yom.GraphicCircle} The new GraphicCircle object
 */
yom.GraphicCircle.prototype.copy = function () {
	return new yom.GraphicCircle(this.circle, this.style);
};

/**
 * 	Moves the graphic circle by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicCircle#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicCircle.prototype.move = function (x, y) {
	this.circle.move(x, y);
};

/**
 * 	Draw the graphic circle.
 * 	@method yom.GraphicCircle#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCircle.prototype.draw = function(drawManager) {
	drawManager.drawCircle(this, true);
};

/**
 * 	Fill the graphic circle with color.
 * 	@method yom.GraphicCircle#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCircle.prototype.fillWithColor = function(drawManager) {
	drawManager.fillCircleWithColor(this);
};

/**
 * 	Fill the graphic circle with image.
 * 	@method yom.GraphicCircle#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCircle.prototype.fillWithImage = function(drawManager) {
	drawManager.fillCircleWithImage(this);
};

/**
 * 	Render the circle
 * 	@method yom.GraphicCircle#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicCircle.prototype.render = function(drawManager) {
	if(typeof this.style.image !== 'undefined' && this.style.image != yom.images.DEFAULT_IMAGE) {
		this.fillWithImage(drawManager);
	} else {
		this.draw(drawManager);
	}
};

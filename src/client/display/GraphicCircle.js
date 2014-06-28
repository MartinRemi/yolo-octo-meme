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
 * 	@param {number} [zIndex] - The zIndex of the circle
 * 	@param {String} [borderColor] - The border color for the circle
 * 	@param {String} [insideColor] - The inside color for the circle
 * 	@param {String} [image] - The path of the image to display inside of the circle
 * 	@return {yom.GraphicCircle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicCircle = function (circle, zIndex, borderColor, insideColor, image) {

	/**
     * 	@property {yom.Circle} circle - The circle we want to display
     */
	this.circle = circle || {};

	/**
     * 	@property {String} borderColor - The border color for the circle
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the circle
     */
	this.insideColor = insideColor || yom.colors.DEFAULT_INSIDE_COLOR;

	/**
     * 	@property {String} image - The path of the image to display inside of the circle
     */
	this.image = image || yom.images.DEFAULT_IMAGE;

	/**
     * 	@property {number} zIndex - The z index of the circle
     */
	this.zIndex = zIndex || 0;

	this.centroid = circle.centroid;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicCircle'
 * 	@method yom.GraphicCircle#copy
 * 	@return {yom.GraphicCircle} The new GraphicCircle object
 */
yom.GraphicCircle.prototype.copy = function () {
	return new yom.GraphicCircle(this.circle);
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
	drawManager.drawCircle(this);
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
	if(this.image != yom.images.DEFAULT_IMAGE) {
		this.fillWithImage(drawManager);
	} else if(this.insideColor != yom.colors.DEFAULT_INSIDE_COLOR) {
		this.fillWithColor(drawManager);
	} else {
		this.draw(drawManager);
	}
};

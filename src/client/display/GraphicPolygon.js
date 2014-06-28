/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicPolygon object.
 * 	The GraphicPolygon is defined with a polygon and some colors.
 * 	@class GraphicPolygon
 * 	@classdesc yom - GraphicPolygon
 * 	@constructor
 * 	@param {yom.Polygon} [polygon] - The polygon to copy
 * 	@param {number} [zIndex] - The zIndex of the polygon
 * 	@param {String} [borderColor] - The border color for the polygon
 * 	@param {String} [insideColor] - The inside color for the polygon
 * 	@param {String} [image] - The path of the image to display in polygon
 * 	@return {yom.GraphicPolygon} The GraphicPolygon object
 *
 *	TODO : Add color
 */
yom.GraphicPolygon = function (polygon, zIndex, borderColor, insideColor, image) {

	/**
     * 	@property {yom.Polygon} polygon - The polygon we want to display
     */
	this.polygon = polygon || {};

	/**
     * 	@property {String} borderColor - The border color for the polygon
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the polygon
     */
	this.insideColor = insideColor || yom.colors.DEFAULT_INSIDE_COLOR;

	/**
     * 	@property {String} image - The path of the image to display
     */
	this.image = image || yom.images.DEFAULT_IMAGE;

	/**
     * 	@property {number} zIndex - The z index of the polygon
     */
	this.zIndex = zIndex || 0;

	this.centroid = polygon.centroid;
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicPolygon'
 * 	@method yom.GraphicPolygon#copy
 * 	@return {yom.GraphicPolygon} The new GraphicPolygon object
 */
yom.GraphicPolygon.prototype.copy = function () {
	return new yom.GraphicPolygon(this.polygon);
};

/**
 * 	Moves the graphic polygon by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicPolygon#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 */
yom.GraphicPolygon.prototype.move = function (x, y) {
	this.polygon.move(x, y);
};

/**
 * 	Draw the graphic polygon.
 * 	@method yom.GraphicPolygon#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolygon.prototype.draw = function(drawManager) {
	drawManager.drawPolygon(this);
};

/**
 * 	Fill the graphic polygon with color.
 * 	@method yom.GraphicPolygon#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolygon.prototype.fillWithColor = function(drawManager) {
	drawManager.fillPolygonWithColor(this);
};

/**
 * 	Fill the graphic polygon with image.
 * 	@method yom.GraphicPolygon#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolygon.prototype.fillWithImage = function(drawManager) {
	drawManager.fillPolygonWithImage(this);
};

/**
 * 	Render the polygon
 * 	@method yom.GraphicPolygon#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicPolygon.prototype.render = function(drawManager) {
	if(this.image != yom.images.DEFAULT_IMAGE) {
		this.fillWithImage(drawManager);
	} else if(this.insideColor != yom.colors.DEFAULT_INSIDE_COLOR) {
		this.fillWithColor(drawManager);
	} else {
		this.draw(drawManager);
	}
};

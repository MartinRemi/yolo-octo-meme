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
 * 	@return {yom.GraphicCicle} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicPolygon = function (polygon, borderColor, insideColor, image) {

	/**
     * 	@property {yom.Polygon} polygon - The polygon we want to display
     */
	this.polygon = polygon || [];

	/**
     * 	TODO : Add type and desc
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	TODO : Add type and desc
     */
	this.insideColor = insideColor || '#000';

	/**
     * 	TODO : Add type and desc
     */
	this.image = image || yom.images.DEFAULT_IMAGE;

	/**
     * 	@property {number} zIndex - The z index of the polygon
     */
	this.zIndex = 0;
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

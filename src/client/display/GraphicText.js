/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 * 	Creates a new GraphicText object.
 * 	The GraphicText is defined with a circle and some colors.
 * 	@class GraphicText
 * 	@classdesc yom - GraphicText
 * 	@constructor
 * 	@param {String} [text] - The text to display
 * 	@param {String} [font] - Various style information such as font, italics, bold, size etc
 * 	@param {number} [x] - The x-coordinate of the text
 *	@param {number} [y] - The y-coordinate of the text
 * 	@param {Object} [style] - The style (attributes : borderWidth, borderColor, fillColor, z)
 * 	@return {yom.GraphicText} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicText = function (text, font, x, y, style, textAlign) {

	/**
     * 	@property {String} text - The text we want to display
     */
	this.text = text || '';
	
	/**
     * 	@property {Object} style - The style of the shape
     */
	this.style = style || {fillColor: '#000'};

	this.centroid = new yom.Vector2();

	this.font = font || '';

	/**
	 *	@property {number} x - The x-coordinate of the text
	 */
	this.x = x;

	 /**
	 *	@property {number} y - The y-coordinate of the text
	 */
	this.y = y;
	
	/**
	 *	@property {String} textAlign - The textAlign
	 */
	 this.textAlign = textAlign || 'center'; //start, end, left, center, or right
};

// ----- Method(s) ----- \\
/**
 * 	Copies this into a new object of type 'yom.GraphicText'
 * 	@method yom.GraphicText#copy
 * 	@return {yom.GraphicText} The new GraphicText object
 */
yom.GraphicText.prototype.copy = function () {
	return new yom.GraphicText(this.text, this.zIndex, this.font, this.borderColor, this.lineWidth, this.insideColor);
};

/**
 * 	Moves the graphic text by x for the x coordinate, and by y for the y coordinate
 * 	@method yom.GraphicText#move
 * 	@param {number} [x=0] - The x-coordinate offset
 * 	@param {number} [y=0] - The y-coordinate offset
 * TODO: Make it work
 */
yom.GraphicText.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
};

/**
 * 	Draw the graphic text.
 * 	@method yom.GraphicText#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.draw = function(drawManager) {
	drawManager.drawText(this);
};

/**
 * 	Fill the graphic text with color.
 * 	@method yom.GraphicText#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.fillWithColor = function(drawManager) {
	drawManager.fillTextWithColor(this);
};

/**
 * 	Fill the graphic text with image.
 * 	@method yom.GraphicText#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.fillWithImage = function(drawManager) {
	// NOTHING
};

/**
 * 	Render the circle
 * 	@method yom.GraphicText#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.render = function(drawManager) {
	
	if(typeof(this.style.fillColor) !== 'undefined'){ //(this.insideColor != yom.colors.DEFAULT_INSIDE_COLOR) {
		this.fillWithColor(drawManager);
	} else {
		this.draw(drawManager);
	}
};

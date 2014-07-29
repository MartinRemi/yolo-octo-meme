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
 * 	@param {number} [zIndex] - The zIndex of the text
 * 	@param {String} [font] - Various style information such as font, italics, bold, size etc
 * 	@param {String} [borderColor] - The border color for the text
 *	@param {number} [lineWidth=1] - The border width (optionnal 1 is by default)
 * 	@param {String} [insideColor] - The inside color for the text
 * 	@return {yom.GraphicText} The GraphicCicle object
 *
 *	TODO : Add color
 */
yom.GraphicText = function (text, zIndex, font, borderColor, lineWidth, insideColor) {

	/**
     * 	@property {String} text - The text we want to display
     */
	this.text = text || '';

	/**
     * 	@property {String} borderColor - The border color for the text
     */
	this.borderColor = borderColor || '#000';

	/**
     * 	@property {String} insideColor - The inside color for the text
     */
	this.insideColor = insideColor || yom.colors.DEFAULT_INSIDE_COLOR;

	/**
     * 	@property {number} zIndex - The z index of the text
     */
	this.zIndex = zIndex || 0;

	this.centroid = new yom.Vector2();

	/**
	 *	@property {number} lineWidth - The border width (optionnal 1 is by default)
	 */
	this.lineWidth = lineWidth || 1;

	this.font = font || '';
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
	
};

/**
 * 	Draw the graphic text.
 * 	@method yom.GraphicText#draw
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.draw = function(drawManager) {
	
};

/**
 * 	Fill the graphic text with color.
 * 	@method yom.GraphicText#fillWithColor
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.fillWithColor = function(drawManager) {
	
};

/**
 * 	Fill the graphic circle with image.
 * 	@method yom.GraphicText#fillWithImage
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.fillWithImage = function(drawManager) {
	
};

/**
 * 	Render the circle
 * 	@method yom.GraphicText#render
 * 	@param {yom.DrawManager} [drawManager] - The drawManager object
 */
yom.GraphicText.prototype.render = function(drawManager) {
	if(this.image != yom.images.DEFAULT_IMAGE) {
		this.fillWithImage(drawManager);
	} else if(this.insideColor != yom.colors.DEFAULT_INSIDE_COLOR) {
		this.fillWithColor(drawManager);
	} else {
		this.draw(drawManager);
	}
};

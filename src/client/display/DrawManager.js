/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new DrawManager. This class is used to draw geometric shapes
 *	Rendering shouldn't be used outside of a RenderManager
 * 	@class DrawManager
 * 	@classdesc yom - DrawManager
 * 	@constructor
 *	@param {yom.RenderManager} renderManager - The renderManager used to context the drawing.
 *	@param {yom.World} world - The world we want to draw in.
 * 	@return {yom.DrawManager} The DrawManager object
 */
yom.DrawManager = function (renderManager, world) {

	/**
     * 	@property {yom.RenderManager} renderManager - The renderManager used to context the drawing.
     */
	this.renderManager = renderManager || [];

	/**
     * 	@property {yom.World} world - The world we want to draw in.
     */
	this.world = world || [];

	var idOfCanvas = world.idOfCanvas;

	/**
     * 	TODO : Check type
     */
	this.context = $("#"+idOfCanvas).get(0).getContext("2d");
}

// ----- Method(s) ----- \\
/**
 * 	Draw a circle.
 * 	@method yom.DrawManager#drawCircle
 *	@param {yom.GraphicCircle} graphicCircle - The circle we want to display.
 */
yom.DrawManager.prototype.drawCircle = function(graphicCircle) {
	this.context.beginPath();

	var borderColor = graphicCircle.borderColor || '#000';

	this.context.arc(graphicCircle.circle.center.x, 
		graphicCircle.circle.center.y,
		graphicCircle.circle.radius,
		0,
		2 * Math.PI);

	this.context.strokeStyle = borderColor;
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw a line.
 * 	@method yom.DrawManager#drawLine
 *	@param {yom.GraphicLine} graphicLine - The line we want to display.
 */
yom.DrawManager.prototype.drawLine = function(graphicLine) {
	this.context.beginPath();
	var borderColor = graphicLine.borderColor || '#000';

	this.context.moveTo(graphicLine.line.firstPoint.x,
						graphicLine.line.firstPoint.y);
	this.context.lineTo(graphicLine.line.secondPoint.x,
						graphicLine.line.secondPoint.y);

	this.context.strokeStyle = borderColor;
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw a polyline.
 * 	@method yom.DrawManager#drawPolyline
 *	@param {yom.GraphicPolyline} graphicPolyline - The polyline we want to display.
 */
yom.DrawManager.prototype.drawPolyline = function(graphicPolyline) {
	var i;
	var graphicLine;
	for(i = 0; i < graphicPolyline.polyline.lines.length; ++i) {
		graphicLine = new yom.GraphicLine(graphicPolyline.polyline.lines[i],
										graphicPolyline.borderColor);
		this.drawLine(graphicLine);
	}
};

/**
 * 	Draw a polygon.
 * 	@method yom.DrawManager#drawPolygon
 *	@param {yom.GraphicPolygon} graphicPolygon - The polygon we want to display.
 */
yom.DrawManager.prototype.drawPolygon = function(graphicPolygon) {
	var graphicPolyline = new yom.GraphicPolyline(graphicPolygon.polygon.perimeter,
						graphicPolygon.borderColor);
	this.drawPolyline(graphicPolyline);
};
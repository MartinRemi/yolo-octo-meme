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
};

// ----- Method(s) ----- \\
/**
 * 	Draw a circle.
 * 	@method yom.DrawManager#drawCircle
 *	@param {yom.GraphicCircle} yom_draw_graphicCircle - The circle we want to display.
 */
yom.DrawManager.prototype.drawCircle = function(yom_draw_graphicCircle) {
	this.context.beginPath();

	var borderColor = yom_draw_graphicCircle.borderColor || '#000';

	this.context.arc(yom_draw_graphicCircle.circle.center.x, 
		yom_draw_graphicCircle.circle.center.y,
		yom_draw_graphicCircle.circle.radius,
		0,
		2 * Math.PI);

	this.context.strokeStyle = borderColor;
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw a line.
 * 	@method yom.DrawManager#drawLine
 *	@param {yom.GraphicLine} yom_draw_graphicLine - The line we want to display.
 */
yom.DrawManager.prototype.drawLine = function(yom_draw_graphicLine) {
	this.context.beginPath();
	var borderColor = yom_draw_graphicLine.borderColor || '#000';

	this.context.moveTo(yom_draw_graphicLine.line.firstPoint.x,
						yom_draw_graphicLine.line.firstPoint.y);
	this.context.lineTo(yom_draw_graphicLine.line.secondPoint.x,
						yom_draw_graphicLine.line.secondPoint.y);

	this.context.strokeStyle = borderColor;
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw a polyline.
 * 	@method yom.DrawManager#drawPolyline
 *	@param {yom.GraphicPolyline} yom_draw_graphicPolyline - The polyline we want to display.
 */
yom.DrawManager.prototype.drawPolyline = function(yom_draw_graphicPolyline) {
	var i;
	var yom_draw_graphicLine;
	for(i = 0; i < yom_draw_graphicPolyline.polyline.lines.length; ++i) {
		yom_draw_graphicLine = new yom.GraphicLine(yom_draw_graphicPolyline.polyline.lines[i],
										yom_draw_graphicPolyline.borderColor);
		this.drawLine(yom_draw_graphicLine);
	}
};

/**
 * 	Draw a polygon.
 * 	@method yom.DrawManager#drawPolygon
 *	@param {yom.GraphicPolygon} yom_draw_graphicPolygon - The polygon we want to display.
 */
yom.DrawManager.prototype.drawPolygon = function(yom_draw_graphicPolygon) {
	var yom_draw_graphicPolyline = new yom.GraphicPolyline(yom_draw_graphicPolygon.polygon.perimeter,
						yom_draw_graphicPolygon.borderColor);
	this.drawPolyline(yom_draw_graphicPolyline);
};

/**
 * 	Fill a circle with color.
 * 	@method yom.DrawManager#fillCircleWithColor
 *	@param {yom.GraphicCircle} yom_draw_graphicCircle - The circle we want to display.
 */
yom.DrawManager.prototype.fillCircleWithColor = function(yom_draw_graphicCircle) {
	this.context.beginPath();

	var borderColor = yom_draw_graphicCircle.borderColor || '#000';
	var insideColor = yom_draw_graphicCircle.insideColor || '#000';

	this.context.arc(yom_draw_graphicCircle.circle.center.x, 
		yom_draw_graphicCircle.circle.center.y,
		yom_draw_graphicCircle.circle.radius,
		0,
		2 * Math.PI);

	// Fill color
	this.context.fillStyle = insideColor;
	this.context.fill();

	// Border coor
	this.context.strokeStyle = borderColor;

	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Fill a polygon with color.
 * 	@method yom.DrawManager#fillPolygonWithColor
 *	@param {yom.GraphicPolygon} yom_draw_graphicPolygon - The polygon we want to display.
 */
yom.DrawManager.prototype.fillPolygonWithColor = function(yom_draw_graphicPolygon) {
	//this.context.beginPath();

	var borderColor = yom_draw_graphicPolygon.borderColor || '#000';
	var insideColor = yom_draw_graphicPolygon.insideColor || '#000';

	// TODO: Try to find minX, minY, maxX, maxY
	// and fill with lines when contains
	var coordinates = yom_draw_graphicPolygon.polygon.coordinates;
	var minX = coordinates[0];
	var minY = coordinates[1];
	var maxX = coordinates[0];
	var maxY = coordinates[1];

	var i;
	var coordinate;
	for(i = 0; i < coordinates.length; ++i) {
		coordinate = coordinates[i];
		if(i % 2 == 0) {
			if(coordinate < minX) {
				minX = coordinate;
			}
			if(coordinate > maxX) {
				maxX = coordinate;

			}
		} else {
			if(coordinate < minY) {
				minY = coordinate;
			}
			if(coordinate > maxY) {
				maxY = coordinate;

			}
		}
	}

	var x;
	var y;
	var minYLocal = minY;
	var maxYLocal = minY;
	var yom_draw_graphicLine;
	for(x = minX; x <= maxX; ++x) {
		for(y = minY; y <= maxY; ++y) {
			if(yom_draw_graphicPolygon.polygon.contains(x, y, true)) {
				minYLocal = y;
				break;
			}
		}
		for(y = maxY; y >= minY; --y) {
			if(yom_draw_graphicPolygon.polygon.contains(x, y, true)) {
				maxYLocal = y;
				break;
			}
		}
		yom_draw_graphicLine = new yom.GraphicLine(new yom.Line(x, minYLocal, x, maxYLocal), insideColor);
		this.drawLine(yom_draw_graphicLine);
	}
	
	this.drawPolyline(new yom.GraphicPolyline(yom_draw_graphicPolygon.polygon.perimeter), borderColor);
};

/**
 * 	Fill a circle with an image.
 * 	@method yom.DrawManager#fillCircleWithImage
 *	@param {yom.GraphicCircle} yom_draw_graphicCircle - The circle we want to display.
 */
yom.DrawManager.prototype.fillCircleWithImage = function(yom_draw_graphicCircle) {
	//this.context.beginPath();

	var image = yom_draw_graphicCircle.image || yom.images.DEFAULT_IMAGE;

	var img = $('<img />').get(0);
	img.src = image;
	var context = this.context;
	
	this.context.beginPath(); 

	img.onload = function() {
		var x = yom_draw_graphicCircle.circle.center.x;
		var y = yom_draw_graphicCircle.circle.center.y;
		var radius = yom_draw_graphicCircle.circle.radius;
		context.arc(x, 
			y,
			radius,
			0,
			2 * Math.PI);
		context.clip();//call the clip method so the next render is clipped in last path 
		context.beginPath();
		context.drawImage(img, x-radius, y - radius);
		context.closePath();
	};
    

    this.context.stroke();
};

/**
 * 	Fill a polygon with an image.
 * 	@method yom.DrawManager#fillPolygonWithImage
 *	@param {yom.GraphicCircle} yom_draw_graphicPolygon - The polygon we want to display.
 */
yom.DrawManager.prototype.fillPolygonWithImage = function(yom_draw_graphicPolygon) {
	//this.context.beginPath();

	var image = yom_draw_graphicPolygon.image || yom.images.DEFAULT_IMAGE;

	var imgPolygon = $('<img />').get(0);
	imgPolygon.src = image;
	var context = this.context;
	
	this.context.beginPath();
	var drawManager = this;

	var coordinates = yom_draw_graphicPolygon.polygon.coordinates;
	var minX = coordinates[0];
	var minY = coordinates[1];

	var i;
	var coordinate;
	for(i = 0; i < coordinates.length; ++i) {
		coordinate = coordinates[i];
		if(i % 2 == 0) {
			if(coordinate < minX) {
				minX = coordinate;
			}
		} else {
			if(coordinate < minY) {
				minY = coordinate;
			}
		}
	}

	imgPolygon.onload = function() {
		drawManager.drawPolygon(yom_draw_graphicPolygon);
		context.clip();//call the clip method so the next render is clipped in last path 
		context.beginPath();
		context.drawImage(imgPolygon, minX,  minY);
		context.closePath();
	};
    

    this.context.stroke();
};
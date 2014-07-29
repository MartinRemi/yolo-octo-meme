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
 *	@param {yom.World} world - The world we want to draw in.
 * 	@return {yom.DrawManager} The DrawManager object
 */
yom.DrawManager = function (world) {

	/**
     * 	@property {yom.World} world - The world we want to draw in.
     */
	this.world = world || [];

	var idOfCanvas = world.idOfCanvas;

	/**
     * 	TODO : Check type
     */
	this.context = document.getElementById(idOfCanvas).getContext("2d");
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

	this.context.lineWidth = yom_draw_graphicCircle.lineWidth;
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

	this.context.lineWidth = yom_draw_graphicLine.lineWidth;
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
	this.context.beginPath();
	var borderColor = yom_draw_graphicPolyline.borderColor || '#000';
	var coordinates = yom_draw_graphicPolyline.polyline.coordinates;

	if(coordinates.length >= 2) {
		this.context.moveTo(coordinates[0], coordinates[1]);
		for(i = 2; i < coordinates.length - 1; i += 2) {
			this.context.lineTo(coordinates[i], coordinates[i+1]);
		}
	}
	this.context.lineWidth = yom_draw_graphicPolyline.lineWidth;
	this.context.strokeStyle = borderColor;
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw a Bspline.
 * 	@method yom.DrawManager#drawBSpline
 *	@param {yom.GraphicBSpline} graphic - The B-spline we want to display.
 */
yom.DrawManager.prototype.drawBSpline = function(graphic) {
	var precision = 8; // TODO : make this constant defined somewhere else

	var diff = 1./(precision*graphic.bspline.nodes.length);
	// begin path
	this.context.beginPath();
	this.context.strokeStyle =  graphic.borderColor;
	var borderColor = graphic.borderColor || '#000';
	// constant
	var p1 = new yom.Vector2(0,0);
	var p2 = new yom.Vector2(graphic.bspline.origin.x, graphic.bspline.origin.y); // origin
	var length = graphic.bspline.length; // length of the curve in x
	
	var i,j,dy;
	var t = 0;
	// draw a subline between each points
	for(i = 0; i < precision*graphic.bspline.nodes.length; ++i) {
		dy = graphic.bspline.getPoint(t);
		p1.x = p2.x; // swap points
		p1.y = p2.y;
		p2.x += diff*length;
		p2.y = graphic.bspline.origin.y+dy;
		this.context.moveTo(p1.x, p1.y);
		this.context.lineTo(p2.x, p2.y);
		this.context.stroke();
		t += diff;
	}
	// end the path
	this.context.closePath();
};

/**
 * 	Draw a Bezier Curve.
 * 	@method yom.DrawManager#drawCurve
 *	@param {yom.GraphicCurve} graphic - The Curve we want to display.
 */
yom.DrawManager.prototype.drawCurve = function(graphic) {
	this.context.beginPath();
	this.context.moveTo(graphic.curve.points[0].x,graphic.curve.points[0].y);
	for(var i=1; i<graphic.curve.points.length; ++i){
		this.context.bezierCurveTo(
			graphic.curve.controlPoints[2*(i-1)].x,graphic.curve.controlPoints[2*(i-1)].y,
			graphic.curve.controlPoints[2*(i-1)+1].x,graphic.curve.controlPoints[2*(i-1)+1].y,
			graphic.curve.points[i].x,graphic.curve.points[i].y);
	}
	if(typeof graphic.insideColor !== "undefined"){
		this.context.fillStyle = graphic.insideColor || '#222';
		this.context.fill();
	}
	this.context.lineWidth = graphic.lineWidth;
	this.context.strokeStyle = graphic.borderColor || '#000';
	this.context.stroke();
};

/**
 * 	Draw a polygon.
 * 	@method yom.DrawManager#drawPolygon
 *	@param {yom.GraphicPolygon} yom_draw_graphicPolygon - The polygon we want to display.
 */
yom.DrawManager.prototype.drawPolygon = function(yom_draw_graphicPolygon) {
	var borderColor = yom_draw_graphicPolygon.borderColor || '#000';
	
	this.context.beginPath();
	var i;
	var coordinates = yom_draw_graphicPolygon.polygon.coordinates;
	if(coordinates.length > 2) {
		this.context.moveTo(coordinates[0], coordinates[1]);
		for(i = 2; i < coordinates.length - 1; i += 2) {
			this.context.lineTo(coordinates[i], coordinates[i+1]);
		}
	}
	this.context.closePath();

	this.context.lineWidth = yom_draw_graphicPolygon.lineWidth;
	this.context.strokeStyle = borderColor;
	this.context.stroke();
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

	this.context.lineWidth = yom_draw_graphicCircle.lineWidth;

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

	var borderColor = yom_draw_graphicPolygon.borderColor || '#000';
	var insideColor = yom_draw_graphicPolygon.insideColor || '#000';
	
	this.context.beginPath();
	var i;
	var coordinates = yom_draw_graphicPolygon.polygon.coordinates;
	if(coordinates.length > 2) {
		this.context.moveTo(coordinates[0], coordinates[1]);
		for(i = 2; i < coordinates.length - 1; i += 2) {
			this.context.lineTo(coordinates[i], coordinates[i+1]);
		}
	}
	this.context.closePath();

	this.context.lineWidth = yom_draw_graphicPolygon.lineWidth;
	this.context.fillStyle = insideColor;
	this.context.fill();
	this.context.strokeStyle = borderColor;
	this.context.stroke();
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

/**
 * 	Fill a Bezier Curve.
 * 	@method yom.DrawManager#drawCurve
 *	@param {yom.GraphicCurve} graphic - The Curve we want to fill.
 */
yom.DrawManager.prototype.fillCurveWithColor = function(graphic) {
	this.context.beginPath();
	this.context.moveTo(graphic.curve.points[0].x,graphic.curve.points[0].y);
	for(var i=1; i<graphic.curve.points.length; ++i){
		this.context.bezierCurveTo(
			graphic.curve.controlPoints[2*(i-1)].x,graphic.curve.controlPoints[2*(i-1)].y,
			graphic.curve.controlPoints[2*(i-1)+1].x,graphic.curve.controlPoints[2*(i-1)+1].y,
			graphic.curve.points[i].x,graphic.curve.points[i].y);
	}
	this.context.fillStyle = graphic.insideColor || '#222';
	this.context.fill();
	this.context.strokeStyle = graphic.borderColor || '#000';
	this.context.stroke();
	this.context.closePath();
};

/**
 * 	Draw text
 * 	@method yom.DrawManager#drawText
 *	@param {yom.GraphicText} yom_draw_graphicText - The text we want to draw.
 */
yom.DrawManager.prototype.drawText = function(yom_draw_graphicText) {
	this.context.beginPath();

	this.context.strokeStyle = yom_draw_graphicText.borderColor;
	this.context.font = yom_draw_graphicText.font;
	this.context.textBaseline = 'bottom';
	this.context.lineWidth = yom_draw_graphicText.lineWidth;

	this.context.strokeText(yom_draw_graphicText.text, yom_draw_graphicText.x, yom_draw_graphicText.y);

	this.context.closePath();
};

/**
 * 	Fill text with color
 * 	@method yom.DrawManager#fillTextWithColor
 *	@param {yom.GraphicText} yom_fill_color_graphicText - The text we want to fill.
 */
yom.DrawManager.prototype.fillTextWithColor = function(yom_fill_color_graphicText) {
	this.context.beginPath();

	this.context.strokeStyle = yom_fill_color_graphicText.borderColor;
	this.context.fillStyle = yom_fill_color_graphicText.insideColor;
	this.context.font = yom_fill_color_graphicText.font;
	this.context.textBaseline = 'bottom';
	this.context.lineWidth = yom_fill_color_graphicText.lineWidth;

	this.context.fillText(yom_fill_color_graphicText.text, yom_fill_color_graphicText.x, yom_fill_color_graphicText.y);
	this.context.strokeText(yom_fill_color_graphicText.text, yom_fill_color_graphicText.x, yom_fill_color_graphicText.y);

	this.context.closePath();
};

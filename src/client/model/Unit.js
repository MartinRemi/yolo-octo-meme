function Unit (id, x, y) {
	// From parameters
	this.id = id;
	this.x = x;
	this.y = y;

	//var app = $(controller.getIdApp());
	var app = controller.getApp();
	$('<div/>', {
	    id: this.id,
	    className: "Unit"
	}).css("width", "100px").css("height", "100px").appendTo(app);
	
	app.css("background", "red");
	app.css("width", "100%");
	app.css("height", "120px");
}
 
Unit.prototype.getId = function() {
    return this.id;
};

Unit.prototype.getX = function() {
    return this.x;
};

Unit.prototype.getY = function() {
    return this.y;
};

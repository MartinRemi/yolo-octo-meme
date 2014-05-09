function Unit (id, x, y) {
	// From parameters
	this.id = id;
	this.x = x;
	this.y = y;
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

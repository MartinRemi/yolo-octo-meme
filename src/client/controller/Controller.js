/**
 * @param idApp id of the element containing the game
 */
function Controller (idApp) {
    this.idApp = idApp;
    this.app = $(idApp);
    this.width = this.app.css("width");
    this.height = this.app.css("height");
}

Controller.prototype.getIdApp = function() {
	return this.idApp;
};

Controller.prototype.getApp = function() {
	return this.app;
};

Controller.prototype.getWidth = function() {
	return this.width;
};

Controller.prototype.getHeight = function() {
	return this.height;
};
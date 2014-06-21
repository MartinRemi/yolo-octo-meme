/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

/**
 *  Called when a click is performed on the canvas
 *  @method yom_click_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_click_event_action = function(e) {
	var posX = $(this).position().left,
		posY = $(this).position().top;
	var params = {
		x: e.pageX - posX,
		y: e.pageY - posY
	};
	yom.input.handleInput(yom.input.EventType.CLICK, params);
};

/**
 *  Called when the mouse is pressed down
 *  @method yom_mouse_down_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_mouse_down_event_action = function(e) {
	var posX = $(this).position().left,
		posY = $(this).position().top;
	var params = {
		x: e.pageX - posX,
		y: e.pageY - posY
	};
	yom.input.handleInput(yom.input.EventType.MOUSE_DOWN, params);
};

/**
 *  Called when the mouse is released
 *  @method yom_mouse_up_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_mouse_up_event_action = function(e) {
	var posX = $(this).position().left,
		posY = $(this).position().top;
	var params = {
		x: e.pageX - posX,
		y: e.pageY - posY
	};
	yom.input.handleInput(yom.input.EventType.MOUSE_UP, params);
};

// Bind events using jquery
$("#app").on("click", yom_click_event_action);

$("#app").mousedown(yom_click_event_action);

$("#app").mouseup(yom_click_event_action);

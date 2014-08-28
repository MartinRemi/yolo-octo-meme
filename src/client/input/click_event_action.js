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
	var parentPosition = getPosition(e.currentTarget);
	var x = e.clientX - parentPosition.x;
    var y = e.clientY - parentPosition.y;
	var params = {
		x: x,
		y: y
	};
	yom.input.handleInput(yom.input.EventType.CLICK, params);
};

/**
 *  Called when the mouse is pressed down
 *  @method yom_mouse_down_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_mouse_down_event_action = function(e) {
	var parentPosition = getPosition(e.currentTarget);
	var x = e.clientX - parentPosition.x;
    var y = e.clientY - parentPosition.y;
	var params = {
		x: x,
		y: y
	};
	yom.input.handleInput(yom.input.EventType.MOUSE_DOWN, params);
};

/**
 *  Called when the mouse is released
 *  @method yom_mouse_up_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_mouse_up_event_action = function(e) {
	var parentPosition = getPosition(e.currentTarget);
	var x = e.clientX - parentPosition.x;
    var y = e.clientY - parentPosition.y;
	var params = {
		x: x,
		y: y
	};
	yom.input.handleInput(yom.input.EventType.MOUSE_UP, params);
};

/**
 *  Called when the mouse is moved
 *  @method yom_mouse_move_event_action
 * 	@param {Object} [e] - The event performed
 */
var yom_mouse_move_event_action = function(e) {
	var parentPosition = getPosition(e.currentTarget);
	var x = e.clientX - parentPosition.x;
    var y = e.clientY - parentPosition.y;
	var params = {
		x: x,
		y: y
	};
	yom.input.handleInput(yom.input.EventType.MOUSE_MOVE, params);
};

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
      
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

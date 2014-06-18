var yom_click_event_action = function(e) {
	var posX = $(this).position().left,
		posY = $(this).position().top;
	var params = {
		x: e.pageX - posX,
		y: e.pageY - posY
	};
	yom.input.handleInput(yom.input.EventType.CLICK, params);
};

$("#app").on("click", yom_click_event_action);

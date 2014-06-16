var yom_click_event_action = function(e) {
	var posX = $(this).position().left,
		posY = $(this).position().top;
	yom.input.handleInput((e.pageX - posX), (e.pageY - posY));
};

$("#app").on("click", yom_click_event_action);

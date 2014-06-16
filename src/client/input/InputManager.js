yom.input = {

	// ----- Method(s) ----- \\
	/**
	 *   Called when an input event is performed
	 *   @method yom.input#handleInput
	 * 	@param {number} [x=0] - The x coordinate where the event has been performed
	 * 	@param {number} [y=0] - The y coordinate where the event has been performed
	 *	@return {Array.<yom.Body>} The bodies concerned by the event
	 */
	handleInput: function(x, y) {
		var i;
		var j;
		var index = 0;

		var elements = [];

		for(i = 0; i < yom.world.bodies; ++i) {
			for(j = 0; j < yom.world.bodies[i].shapes; ++j) {
				if(yom.world.bodies[i].shapes[j].contains(x, y)) {
					elements[index] = yom.world.bodies[i];
					++index;
					break;
				}
			}
		}

		alert(x + ' ' + y);

		return elements;
	}
}
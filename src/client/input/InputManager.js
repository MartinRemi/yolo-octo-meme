
/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Input manager singleton
 * 	@class input
 * 	@classdesc yom - input
 */

yom.input = {

	/**
     * 	@property {Object.<yom.Body, Array.<function()>>}  map - The map, mapping bodies with functions
     */
	map: {},

	/**
	 *	Enum for event type
	 *	@enum {number}
	 */
	EventType: {
		CLICK: 0
	},

	EVENT_TYPE_NUMBER: 1,

	// ----- Method(s) ----- \\
	/**
	 *  Called when an input event is performed
	 *  @method yom.input#handleInput
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

		return elements;
	},

	// ----- Method(s) ----- \\
	/**
	 *  Maps a function with a particular event on the body 'body'
	 *  @method yom.input#mapEvent
	 * 	@param {yom.Body} [body] - The body concerned by the event
	 * 	@param {number} [eventType] - The type of the event performed
	 * 	@param {function()} [fct] - The fct to execute when the even is performed on the body
	 */
	mapEvent: function(body, eventType, fct) {
		if(! (body in this.map)) {
			this.map[body] = new Array(this.EVENT_TYPE_NUMBER);
		}
		this.map[body][eventType] = fct;
	}
}
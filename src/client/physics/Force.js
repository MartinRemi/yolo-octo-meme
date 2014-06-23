/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new Force.
 *
 * 	@class Force
 * 	@classdesc yom - Force
 * 	@constructor
 *	@param {yom.Vector2} [applicationPoint] - The application poit of the force
  *	@param {yom.Vector2} [head] - The head of the force
 * 	@return {yom.Force} The resulting force
 */
yom.Force = function (applicationPoint, head) {
	/**
     * 	@property {yom.Vector2} applicationPoint - The application poit of the force
     */
	this.applicationPoint = applicationPoint || {};

	/**
     * 	@property {yom.Vector2} head - The head of the force
     */
	this.head = head || {};
};

// ----- Method(s) ----- \\
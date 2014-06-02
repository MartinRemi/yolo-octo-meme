/**
 * 	@author       Rémi MARTIN <martinremi60@gmail.com>
 * 	@copyright    2014 Rémi MARTIN
 */

 /**
 * 	Creates a new world.
 * 	@class World
 * 	@classdesc yom - World
 * 	@constructor
 *	@param {string} idOfCanvas - The id of the canvas element (without the '#' symbol).
 * 	@param {number} [width=0] - The width of the canvas element.
 * 	@param {number} [y=0] - The height of the canvas element.
 * 	@return {yom.World} The point object
 */
yom.World = function (idOfCanvas, width, height) {

	/**
     * 	@property {string} idOfCanevas - The id of the canvas element (without the '#' symbol).
     */
	this.idOfCanvas = idOfCanvas || 0;

	/**
     * 	@property {number} width - The width of the canvas element.
     */
	this.width = width || 0;

	/**
     * 	@property {number} height - The height of the canvas element.
     */
	this.height = height || 0;

	/**
     * 	@property {Array.<yom.Body>} bodies - The bodies engaged in the world
     */
	this.bodies = [];
}
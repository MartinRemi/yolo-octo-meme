/**
 * 	@author       Sergueï LALLEMENT <serguei.l@orange.fr>
 * 	@copyright    2014 Sergueï LALLEMENT
 */

/**
 * 	To test collisions
 * 	@class Collision
 * 	@classdesc yom - Collision
 * 	@constructor
 * 	@return {yom.Collisions} The collision object
 */
yom.Collisions = function() {
}

/**
 *   Called to detect collisions (static method)
 *   @param {yom.Circle} body1
 *   @param {yom.Circle} body2
 *   @method yom.testCollision
 */
yom.Collisions.CircleCircle = function(c1, c2) {
	return (  (c1.center.x-c2.center.x)*(c1.center.x-c2.center.x) 
			+ (c1.center.y-c2.center.y)*(c1.center.y-c2.center.y) 
			<= (c1.radius+c2.radius)*(c1.radius+c2.radius) );
}
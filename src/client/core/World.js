
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
 * 	@param {number} [height=0] - The height of the canvas element.
 *	@param {Array.<yom.Body>} [bodies] - The bodies engaged in the world
 *	@param {Array} [shapes] - Independant shapes, i.e. not tengible and that don't belong to a body
 * 	@return {yom.World} The point object
 */
yom.World = function (idOfCanvas, width, height, bodies, shapes) {
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
	this.bodies = bodies || [];

	/**
     * 	@property {Array} shapes - Independant shapes, i.e. not tengible and don't belong to a body.
     */
	this.shapes = shapes || [];

     /**
     *    @property {function()} stepBehavior - Defines the step behavior
     */
     this.stepBehavior = function() {
          var force = this.bodies[0].forces[0];
          force = force.head.copy();
          force.subVector(this.bodies[0].forces[0].applicationPoint);
          force.div(this.bodies[0].mass); // Acceleration

          // Velocity
          force.scl(0.1);

          // Offset
          force.scl(0.1);

          this.bodies[0].forces[0].applicationPoint.addVector(force);
          this.bodies[0].forces[0].head.addVector(force);

          var i;
          for(i = 0; i < this.bodies[0].shapes.length; ++i) {
               this.bodies[0].shapes[i].move(force.x, force.y);
          }
     };

     yom.world = this;
};

// ----- Setter(s) ----- \\
/**
 *   Used to define the behavior of the 'step' function
 *   @method yom.World#setStepBehavior
 *   @param {function()} [stepFunction] - The function to be executed within the step function
 */
yom.World.prototype.setStepBehavior = function(stepFunction) {
     this.stepBehavior = stepFunction;
};

// ----- Method(s) ----- \\
/**
 *   Called before the render manager in order to proceed a new step of the world evolution
 *   BEHAVIOR DEFINED BY THE USER
 *   @method yom.World#step
 */
yom.World.prototype.step = function() {
     this.stepBehavior();
};

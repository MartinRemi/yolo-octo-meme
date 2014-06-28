
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
          
     };

     yom.world = this;

     /**
     *    @property {Array.<yom.Vector2>} forces - Forces applied in the world
     *         Only OD are used as others are nonsense
     */
     this.forces = [];
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
 *   Called before the render manager in order to apply forces and compute new positions just before rendering
 *   @method yom.World#step
 */
yom.World.prototype.applyForces = function() {
     var i, j, k, l;
     var force;
     var ODvector;
     for(i = 0; i < this.bodies.length; ++i) {
          force = new yom.Vector2();
          for(j = 0; j < this.bodies[i].forces.length; ++j) {
               if(this.bodies[i].forces[j].type == yom.physics.force_type.SE) {
                    force.addVector(this.bodies[i].forces[j].head);
                    force.subVector(this.bodies[i].forces[j].applicationPoint);
               }
          }

          // We apply to the current body, other's "OD" forces
          for(k = 0; k < this.bodies.length; ++k) {
               if(k != i) {
                    for(l = 0; l < this.bodies[k].forces.length; ++l) {
                         if(this.bodies[k].forces[l].type == yom.physics.force_type.OD) {
                              ODvector = new yom.Vector2();
                              // Use centroid instead
                              ODvector.addVector(new yom.Vector2(this.bodies[k].shapes[0].centroid.x, this.bodies[k].shapes[0].centroid.y));
                              ODvector.subVector(new yom.Vector2(this.bodies[i].shapes[0].centroid.x, this.bodies[i].shapes[0].centroid.y));
                              
                              // Scale vector
                              ODvector.div(ODvector.divider());

                              // Multiply by intensity
                              ODvector.mulVector(this.bodies[k].forces[l].applicationPoint);
                              console.log(ODvector);
                              force.addVector(ODvector);
                         }
                    }
               }
          }

          // World forces
          for(k = 0; k < this.forces.length; ++k) {
               if(this.forces[k].type === yom.physics.force_type.OD) {
                    force.addVector(this.forces[k].head);
                    force.subVector(this.forces[k].applicationPoint);
               }
          }

          force.div(this.bodies[i].mass); // Acceleration

          // Velocity
          force.scl(yom.display.STEP_INTERVAL);
          force.addVector(this.bodies[i].velocity);
          this.bodies[i].velocity = force.copy();

          // Offset
          force.scl(yom.display.STEP_INTERVAL);

          for(j = 0; j < this.bodies[i].forces.length; ++j) {
               this.bodies[i].forces[j].applicationPoint.addVector(force);
               this.bodies[i].forces[j].head.addVector(force);
          }

          for(j = 0; j < this.bodies[i].shapes.length; ++j) {
               this.bodies[i].shapes[j].move(force.x, force.y);
          }
     }
};

/**
 *   Called before the render manager in order to proceed a new step of the world evolution
 *   BEHAVIOR DEFINED BY THE USER
 *   @method yom.World#step
 */
yom.World.prototype.step = function() {
     this.stepBehavior();
};

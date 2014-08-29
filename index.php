<html>
	<head>
	</head>

	<body>
		<canvas id="app" width="500" height="500">
		</canvas>
		
	</body>
	<script src="src/client/yom.js"></script>
<!--
	<script src="src/client/controller/Controller.js"></script>
	<script>
		// MANDATORY
		var controller = new Controller("#app");
	</script>
	<script src="src/client/model/Unit.js"></script>
-->
	<script src="src/client/core/World.js"></script>
	<script src="src/client/geometry/Point.js"></script>
	<script src="src/client/geometry/Circle.js"></script>
	<script src="src/client/geometry/Line.js"></script>
	<script src="src/client/geometry/Polyline.js"></script>
	<script src="src/client/geometry/Polygon.js"></script>
	<script src="src/client/display/GraphicCircle.js"></script>
	<script src="src/client/display/GraphicLine.js"></script>
	<script src="src/client/display/GraphicPolyline.js"></script>
	<script src="src/client/display/GraphicPolygon.js"></script>
	<script src="src/client/display/GraphicText.js"></script>
	<script src="src/client/display/RenderManager.js"></script>
	<script src="src/client/display/DrawManager.js"></script>
	<script src="src/client/input/click_event_action.js"></script>
	<script src="src/client/input/InputManager.js"></script>
	<script src="src/client/core/Body.js"></script>
	<script src="src/client/math/Vector2.js"></script>
	<script src="src/client/physics/Force.js"></script>
	<script>
		/*var unit = new Unit(1, 2, 3);
		$("#1").css("background", "yellow");

		var test = {};
		test.start = function() {
			$("#app").css("background", "red").css("width", 600).css("height", 600);

			$("#1").css("background", "blue");
		};

		test.start();*/
		/*$('<div/>', {
		    id: this.id,
		    className: "Unit"
		}).css("width", "100px").css("height", "100px").appendTo(app);*/


		var circle = new yom.Circle(250, 250, 15);
		var graphicCircle = new yom.GraphicCircle(circle, yom.shapes.DEFAULT_ZINDEX, '#00FFFF', 1);

		var line = new yom.Line(0, 0, 500, 500);
		var graphicLine1 = new yom.GraphicLine(line, yom.shapes.DEFAULT_ZINDEX, '#ff0000', 1);

		var array = [100, 0, 160, 400, 500, 0];
		var polyline = new yom.Polyline(array);
		var graphicPolyline1 = new yom.GraphicPolyline(polyline, yom.shapes.DEFAULT_ZINDEX, '#C3C3C3', 1);

		var arrayPolygon = [100, 150, 150, 150, 150, 100, 120, 80, 100, 100];
		var polygon = new yom.Polygon(arrayPolygon);
		var graphicPolygon = new yom.GraphicPolygon(polygon, yom.shapes.DEFAULT_ZINDEX, '#ffb345', 1, '#a6e409');

		var world = new yom.World("app", 500, 500);
		var drawManager = new yom.DrawManager(world);
		var renderManager = new yom.RenderManager(world, drawManager);
		//drawManager.drawCircle(graphicCircle);
		//drawManager.drawLine(graphicLine1);
		//drawManager.drawPolyline(graphicPolyline1);
		//drawManager.drawPolygon(graphicPolygon);

		//world.shapes[0] = graphicCircle;
		world.shapes[0] = graphicLine1;
		world.shapes[1] = graphicPolyline1;
		world.shapes[2] = new yom.GraphicText('Remi', 50, '40px arial', 340, 234, '#F05340', 1, '000000');

		world.bodies[0] = new yom.Body([graphicPolygon], 10);
		world.bodies[0].forces[0] = new yom.Force(new yom.Vector2(0,0), new yom.Vector2(1, 0));
		// world.bodies[0].forces[0] = new yom.Force(new yom.Vector2(polygon.coordinates[0], polygon.coordinates[1]), 
		// new yom.Vector2(polygon.coordinates[0], polygon.coordinates[1] + 10));

		world.bodies[1] = new yom.Body([graphicCircle], 10);
		world.bodies[1].forces[0] = new yom.Force(new yom.Vector2(10, 10), new yom.Vector2(), yom.physics.force_type.OD);

		//world.forces[0] = new yom.Force(new yom.Vector2(5, 0), new yom.Vector2(), yom.physics.force_type.OD)

		renderManager.display();
		yom.start();

		yom.input.mapEvent(world, world , function() {alert('test') });
	</script>
</html>

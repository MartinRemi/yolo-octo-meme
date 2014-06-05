<html>
	<head>
	</head>

	<body>
		<!--
		<?php
		// DATABASE connection
		include "src/server/functions/databaseConnection.php";
		if($conn==null) { echo 'lol'; }
		
		include 'src/server/model/Unit.php';
		include 'src/server/action/ServerAction.php';
		include 'src/server/action/TestAction.php';
		include 'src/server/server/ServerActionHandler.php';
		include 'src/server/server/EventHandler.php';
		include 'src/server/server/EventHandlerFactory.php';
		/*$unit = new Unit(1, 1, 1);
		$unit->persist();
		$gb = new GameBoard(1, 3, 3);
		echo $unit->getId()."<br />";
		echo $unit->getCoordinates()->getX();
		echo " | ";
		echo $unit->getCoordinates()->getY()."<br />";
		
		echo $gb->getId()." ".$gb->getWidth()." ".$gb->getHeight()."<br />";
		*/
		$action = ServerActionHandler::getInstance(new TestAction());
		$unit = Unit::getUnitById(3);
		echo $unit->getId().' | '.$unit->getCoordinates()->getX().' | '.$unit->getCoordinates()->getY();
		
		$units = Unit::listUnits();
		foreach($units as $unit) {
			echo $unit->getId().'<br />';
		}
		?>
		-->
		<canvas id="app" width="500" height="500">
		</canvas>
		
	</body>
	<script src="src/client/yom.js"></script>
	<script src="jquery-2.1.1.min.js"></script>
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
	<script src="src/client/display/RenderManager.js"></script>
	<script src="src/client/display/DrawManager.js"></script>
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


		var circle = new yom.Circle(30, 30, 15);
		var graphicCircle = new yom.GraphicCircle(circle);

		var line = new yom.Line(0, 0, 500, 500);
		var graphicLine = new yom.GraphicLine(line);

		var world = new yom.World("app", 500, 500);
		var renderManager = new yom.RenderManager();
		var drawManager = new yom.DrawManager(renderManager, world);
		drawManager.drawCircle(graphicCircle);
		drawManager.drawLine(graphicLine);
	</script>
</html>

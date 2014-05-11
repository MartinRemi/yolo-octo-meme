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
		<div id="app">
		</div>
		
	</body>
	<script src="src/client/yom.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!--
	<script src="src/client/controller/Controller.js"></script>
	<script>
		// MANDATORY
		var controller = new Controller("#app");
	</script>
	<script src="src/client/model/Unit.js"></script>
-->
	<script src="src/client/geometry/Point.js"></script>
	<script src="src/client/geometry/Circle.js"></script>
	<script src="src/client/geometry/Line.js"></script>
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


		var circle = new yom.Circle();
		alert(circle.getX());
		var c = circle.copy();
		c.move(1.4, 1);
		circle.move();
		alert(c.getX()+ " " + c.getY());
		alert(circle.getX()+ " " + circle.getY());
	</script>
</html>

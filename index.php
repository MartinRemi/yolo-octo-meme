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

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="src/client/controller/Controller.js"></script>
	<script>
		// MANDATORY
		var controller = new Controller("#app");
	</script>
	<script src="src/client/model/Unit.js"></script>
	<script>
		var unit = new Unit(1, 2, 3);
		$("#1").css("background", "yellow");
	</script>
</html>

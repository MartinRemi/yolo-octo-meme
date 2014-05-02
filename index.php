<html>
	<head>
	</head>

	<body>
		<?php
		// DATABASE connection
		include "src/php/functions/databaseConnection.php";
		if($conn==null) { echo 'lol'; }
		
		include 'src/php/model/Unit.php';
		include 'src/php/action/ServerAction.php';
		include 'src/php/action/TestAction.php';
		include 'src/php/server/ServerActionHandler.php';
		include 'src/php/server/EventHandler.php';
		include 'src/php/server/EventHandlerFactory.php';
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

		
	</body>

	<script>
		
	</script>
</html>

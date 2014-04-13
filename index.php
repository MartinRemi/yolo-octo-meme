<html>
	<head>
	</head>

	<body>
		<?php
		include 'src/php/model/Unit.php';
		include 'src/php/model/GameBoard.php';
		$unit = new Unit(1, 1, 1);
		$gb = new GameBoard(1, 3, 3);
		echo $unit->getId()."<br />";
		echo $unit->getCoordinates()->getX();
		echo " | ";
		echo $unit->getCoordinates()->getY()."<br />";
		
		echo $gb->getId()." ".$gb->getWidth()." ".$gb->getHeight();
		?>

		
	</body>

	<script>
		
	</script>
</html>

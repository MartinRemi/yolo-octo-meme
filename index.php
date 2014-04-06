<html>
	<head>
	</head>

	<body>
		<?php
		include 'src/php/model/unit.php';
		$unit = new Unit;
		echo $unit->getId();
		echo $unit->getCoordinates()->getX();
		echo " | ";
		echo $unit->getCoordinates()->getY();
		?>

		<canevas>
		</canevas>
	</body>
</html>

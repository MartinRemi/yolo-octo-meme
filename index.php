<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
<html ng-app>
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

		<p>lolilol {{1+2}}</p>
	</body>

	<script>
		
	</script>
</html>

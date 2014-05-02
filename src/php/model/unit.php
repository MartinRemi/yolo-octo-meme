<?php
include_once "Coordinates.php";
include_once "DatabaseObject.php";

class Unit extends DatabaseObject {
	// private member(s)
	private $coordinates;

	// Constructor(s)
	function Unit($id, $x, $y) {
		$x=(integer) $x;
		$y=(integer) $y;
		
		$this->id=$id;
		$this->coordinates=new Coordinates($x, $y);
	}

	// Getter(s)
	public function getId()
	{
		return $this->id;
	}

	public function getCoordinates()
	{
		return $this->coordinates;
	}

	// Setter(s)
	public function setId($id)
	{
		$id=(integer) $id;
		
		$this->id=$id;
	}
	
	// Database function(s)
	public function persist()
	{
		global $conn;
		if($conn!=null) {
			$stmt = $conn->prepare("INSERT INTO `Unit` (`id_unit`, `x`, `y`) VALUES (NULL, ?, ?);");
			$stmt->bindParam(1, $this->coordinates->getX(), PDO::PARAM_INT);
			$stmt->bindParam(2, $this->coordinates->getY(), PDO::PARAM_INT);
    		$stmt->execute();
		}
	}
	
	public static function getUnitById($id)
	{
		global $conn;
		$id=(integer) $id;
		
		$stmt = $conn->prepare("SELECT * FROM `Unit` WHERE `id_unit`=?;");
		$stmt->bindParam(1, $id, PDO::PARAM_INT);
		//$stmt->setFetchMode(PDO::FETCH_INTO );
    	$stmt->execute();
    	
    	$unit = null;
    	// Cast it to an object of 'Unit' class
    	if($stmt->rowCount() == 1) {
    		$result = $stmt->fetch(PDO::FETCH_OBJ);
    		$unit = new Unit(	$result->id_unit,
    							$result->x,
    							$result->y);
    	}
    	return $unit;
	}
	
	public static function listUnits() 
	{
		global $conn;
		
		$sqlQuery = "SELECT * FROM `Unit`;";
		
		$units = array();
		$i=0;
		foreach($conn->query($sqlQuery) as $row) {
			$units[$i]=new Unit($row['id_unit'], $row['x'], $row['y']);
			++$i;
		}
    	return $units;
	}
}
?>

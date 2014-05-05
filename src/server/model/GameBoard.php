<?php
include_once "Unit.php";
include_once "../functions/databaseConnection.php";
include_once "DatabaseObject.php";

class GameBoard extends DatabaseObject {
	// private member(s)
	private $width;
	private $height;
	private $board;

	// Constructor(s)
	function GameBoard($id, $width, $height) {
		$id=(integer) $id;
		$width=(integer) $width;
		$height=(integer) $height;
		
		$this->id=$id;
		$this->width=$width;
		$this->height=$height;
		$board=array($width, $height);
	}

	// Getter(s)
	public function getId()
	{
		return $this->id;
	}

	public function getWidth()
	{
		return $this->width;
	}
	
	public function getHeight()
	{
		return $this->height;
	}
	
	public function getBoard()
	{
		return $this->board;
	}

	// Setter(s)
	
	// Database function(s)
	public function persist()
	{
		// TODO : change the method
		global $conn;
		if($conn!=null) {
			$stmt = $conn->prepare("INSERT INTO `Unit` (`id_unit`, `x`, `y`) VALUES (NULL, ?, ?);");
			$stmt->bindParam(1, $this->coordinates->getX(), PDO::PARAM_INT);
			$stmt->bindParam(2, $this->coordinates->getY(), PDO::PARAM_INT);
    		$stmt->execute();
		}
	}
}
?>

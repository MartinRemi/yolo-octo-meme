<?php
include_once "Coordinates.php";

class Unit {
	// private member(s)
	private $id;
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
		// TODO : DB query
	}
	
	public function getUnitById($id)
	{
		$id=(integer) $id;
		
		// TODO : DB query
	}
}
?>

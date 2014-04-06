<?php
include_once "coordinates.php";

class Unit {
	// private member(s)
	var $id;
	var $coordinates;

	// Constructor(s)
	function Unit() {
		$this->id=12;
		$this->coordinates=new Coordinates(0,0);
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
		$this->id=$id;
	}
}
?>

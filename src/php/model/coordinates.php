<?php
class Coordinates 
{
	// private member(s)
	private $x;
	private $y;

	// Constructeur(s)
	function Coordinates($x, $y)
	{
		$this->x=$x;
		$this->y=$y;
	}

	// Getter(s)
	function getX()
	{
		return $this->x;
	}

	function getY()
	{
		return $this->y;
	}

	// Setter(s)
	function setX($x)
	{
		$this->x=$x;
	}

	function setY($y)
	{
		$this->y=$y;
	}
}
?>

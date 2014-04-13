<?php
include_once "Unit.php";

class GameBoard {
	// private member(s)
	private $id;
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
		// TODO : DB query
	}
}
?>

<?php
	abstract class DatabaseObject {
		private $id;
		
		abstract public function persist();
	}
?>
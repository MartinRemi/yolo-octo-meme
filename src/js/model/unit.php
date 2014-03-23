<?php
class Unit {
    
	public function __construct($id, $ ) {
    	}
    
    	public function __get( /*string*/ $name = null ) {
        	return $this->self[$name];
    	}
    
   	public function add( /*string*/ $name = null, /*int*/ $enum = null ) {
        	if( isset($enum) )
            		$this->self[$name] = $enum;
        	else
            		$this->self[$name] = end($this->self) + 1;
    	}
}
?>

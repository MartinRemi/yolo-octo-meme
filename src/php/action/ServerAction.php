<?php
	/**
	 *	ServerAction interface
	 *	Users must implement this interface in order to create actions
	 *	that will define a specific behavior
	 *	@author Rémi_MARTIN
	 *	@version 1.0.1
	 */
	interface ServerAction {

		/**
		 *	Method which is to be defined by the user in order to set the behavior of the action
		 */
		public function execute();
	}
?>

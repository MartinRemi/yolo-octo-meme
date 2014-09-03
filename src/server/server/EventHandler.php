<?php
	/**
	 * 	Class which will be called by the Server to execute user's actions
	 *	@author Rémi_MARTIN
	 *	@version 1.0.1
	 */
	abstract class EventHandler {
		private $action;

		/**
		 *	Method that has to be set by the user
		 *	It has to set the $action field !
		 */
		public abstract function handleEvent();

		/**
		 * Execute an action by calling the ServerActionHandler
		 * Cannot be defined by the user
		 */
		final public function executeActions() {
			if(isset($this->action) && $this->action != NULL) {
				$actionHandler = ServerActionHandler::getInstance();

				$actionHandler.handleAction();
			}
		}
	}
?>
<?php
	/**
	 * 	Class which will be called by the Server to execute user's actions
	 *	@author Rémi_MARTIN
	 */
	abstract class EventHandler {
		private $action;

		/**
		 *
		 */
		public function handleEvent();

		/**
		 * Execute an action by calling the ServerActionHandler
		 * Cannot be defined by the user
		 */
		public function executeActions() {
			$actionHandler = ServerActionHandler::getInstance();

			$actionHandler.
		}
	}
?>
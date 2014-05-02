<?php
	/**
	 * 	Class to be modified by the user in order to instanciate correctly an EventHandler object
	 *	@author Rémi_MARTIN
	 *	@version 1.0.2
	 */
	class EventHandlerFactory {

		/**
		 * Method that will return an object of type EventHandler
		 * Cannot be overriden
		 */
		public final function getEventHandler(ConnectionInterface $from, $msg) {
			return createEventHandler($from, $msg);
		}

		/**
		 *	Method to be overriden by the user in order to create the proper instance of type EventHandler
		 */
		private function createEventHandler(ConnectionInterface $from, $msg) {
			return NULL;
		}
	}
?>
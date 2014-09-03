<?php
	/**
	 * Class ServerActionHandler
	 * Handles action execution
	 * @author Rémi_MARTIN
	 * @version 1.0.1
	 */
	final class ServerActionHandler {
		// *** Static member(s) ***
		private static $instance;

		// *** Member(s) ***
		private $action;

		// *** Constructor(s) and Class method(s) ***
		/**
		 * Private constructor of ServerActionHandler class
		 * @param $action of type ServerAction
		 */
		private function __construct(ServerAction $action) {
			$this->action=$action;
		}

		/**
		 * Return singleton instance of the class ServerActionHandler
		 * and create it if it does not exist yet
		 * @param $action of type ServerAction
		 * @return the singleton instance
		 */
		public static function getInstance(ServerAction $action) {
			if(!isset(self::$instance)) {
				self::$instance = new ServerActionHandler($action);
			} else {
				self::$instance.setAction($action);
			}

			return self::$instance;
		}

		/**
		 * Method that handles instance cloning
		 * @deprecated
		 */
		public function __clone() {
			throw new Exception("Cannot clone Singletons...");
		}

		// *** Setter(s) ***
		/**
		 *	Setter of the field $action
		 * 	Enables the user to set a new action to execute
		 *	@param $action of type ServerAction
		 */
		public function setAction(ServerAction $action) {
			$this->action=$action;
		}

		// *** Method(s) ***
		/**
		 *	Method used to execute the action set by the user
		 */
		public function handleAction() {
			// Here, we are sure that $action field is of type ServerAction
			// so we can execute() it without checking
			$this->action.execute();
		}
	}
?>

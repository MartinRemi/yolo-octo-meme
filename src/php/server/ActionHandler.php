<?php
	include_once "../action/Action.php";

	class ActionHandler {
		private static $instance;

		private function __construct(Action ) {

		}

		public static function getInstance() {
			if(!isset(self::$instance)) {
				self::$instance = new ActionHandler();
			}

			return self::$instance;
		}

		public function __clone() {
			throw new Exception("Cannot clone Singletons...");
		}
	}
?>
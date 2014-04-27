<?php

	class ServerActionHandler {
		private static $instance;

		private $action;

		private function __construct(ServerAction $action) {
			$this->action=$action;
		}

		public static function getInstance(ServerAction $action) {
			if(!isset(self::$instance)) {
				self::$instance = new ActionHandler($action);
			}

			return self::$instance;
		}

		public function __clone() {
			throw new Exception("Cannot clone Singletons...");
		}
	}
?>
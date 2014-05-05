<?php
	namespace YOMServer;
	use Ratchet\MessageComponentInterface;
	use Ratchet\ConnectionInterface;
	include_once "EventHandlerFactory.php";
	
	/**
	 * 	Class which define le behavior of the server when a socket is received/sent
	 *	Cannot be defined by the user
	 *	@author Rémi_MARTIN
	 *	@version 1.0.2
	 */
	final class Server implements MessageComponentInterface {
		protected $clients;
		
		/**
		 *	Constructor of the Server class
		 */
		public function __construct() {
			$this->clients = new \SplObjectStorage;
		}
		
		/**
		 *	Called when a new connection is opened
		 *	@param $conn of class ConnectionInterface which is the new client connected
		 */
		public function onOpen(ConnectionInterface $conn) {
			// Store the new connection to send messages to later
			$this->clients->attach($conn);
			
			echo "New connection! ({$conn->resourceId})\n";
		}
		
		/**
		 *	Called when the server receive a new socket
		 *	@param $conn of class ConnectionInterface which is the client who send the socket
		 */
		public function onMessage(ConnectionInterface $from, $msg) {
			$factory = new \EventHandlerFactory();
			$evenHandler=$factory->getEventHandler($from, $msg);

			$numRecv = count($this->clients) - 1;
			echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n", 
						$from->resourceId, 
						$msg, 
						$numRecv, 
						$numRecv == 1 ?'' : 's');
			
			foreach ($this->clients as $client) {
				//if ($from !== $client) {
					// The sender is not the receiver, send to each client connected
					$client->send($msg);
				//}
			} 
		}
		
		/**
		 *	Called when a connection is closed
		 *	@param $conn of class ConnectionInterface which is the client who is now deconnected
		 */
		public function onClose(ConnectionInterface $conn) {
			// The connection is closed, remove it, as we can no longer send it messages
			$this->clients->detach($conn);
			echo "Connection {$conn->resourceId} has disconnected\n";
		}
		
		/**
		 *	Called when an error is detected
		 *	@param $conn of class ConnectionInterface which is the client who triggered the error
		 */
		public function onError(ConnectionInterface $conn, \Exception $e) {
			echo "An error has occurred: {$e->getMessage()}\n";
			$conn->close();
		}
	}
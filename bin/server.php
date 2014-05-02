<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use YOMServer\Server;
	require dirname(__DIR__) . '/vendor/autoload.php';
	require 'src/php/server/Server.php';
	
	$server = IoServer::factory(
		new HttpServer(
			new WsServer(
				new Server()
			) 
		), 8080
	);
	$server->run();
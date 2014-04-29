<?php
	$hostname='localhost';
	$base='yom';
	$login='root';
	$passwd='root';

	try {
    	$conn = new PDO('mysql:host='.$hostname.';dbname='.$base, $login, $passwd);
    	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	echo 'Log(databaseConnection.php) : OK';
	} catch(PDOException $e) {
    	echo 'ERROR: ' . $e->getMessage();
	}
?>

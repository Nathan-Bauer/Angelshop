<?php
// Skript das eine TEST-Connection zur Datenbank herstellt
// Autor: Christoph Ederer
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "toor";
 $db = "angelshop";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

 return $conn;
 }

function CloseCon($conn)
 {
 $conn -> close();
 }

?>

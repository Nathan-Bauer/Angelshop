<?php
//Datenbankzugang
$servername = "localhost";
$username = "root";
$password = "toor";
$dbname = "test#1";

// Erstellt die Connection zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);
// Stellt die Verbindung sicher
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//
$sql = "SELECT * FROM `waren`";
$res = $conn->query($sql);
while($row = mysqli_fetch_assoc($res)){
   print_r($row);
}

$conn->close();
?>

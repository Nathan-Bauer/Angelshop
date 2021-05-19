<?php
// Skript das anhand von Übergabeparametern Datensätze aus der "waren"-Datenbank abfrägt
// RETURN = JSON decoded Array
// Autor: Christoph Ederer
//Datenbankzugang
$servername = "localhost";
$username = "root";
$password = "toor";
$dbname = "angelshop";
//Übergabeparameter aus ajax (http_post_data)
//Übergabe erfolt in Array-Form. Auf werte kann mittels $_POST["key"] zugegriffen werden.

$Picture_ID = $_POST["Picture_ID"];

  $sql = "SELECT `image` FROM `pictures` WHERE ID = $Picture_ID;";
// Erstellt die Connection zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);
// Stellt die Verbindung sicher
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Je nach übergebenem Suchparameter Suchanfrage anpassen

$res = $conn->query($sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
    $rows[] = $r;
}
print json_encode($rows);
// Connection beenden
$conn->close();
?>

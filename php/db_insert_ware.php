<?php
// Skript das anhand von Übergabeparametern Datensätze aus der "waren"-Datenbank einfügt
// Autor: Christoph Ederer
//Datenbankzugang
$servername = "localhost";
$username = "root";
$password = "toor";
$dbname = "angelshop";
//Übergabeparameter aus ajax (http_post_data)
//Übergabe erfolt in Array-Form. Auf werte kann mittels $_POST["key"] zugegriffen werden.
$ID = $_POST["ID"];
$Name = $_POST["Name"];
$Preis = $_POST["Preis"];
$Beschreibung = $_POST["Beschreibung"];

// Erstellt die Connection zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);
// Stellt die Verbindung sicher
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//
$sql = "INSERT INTO waren (ID, NAME,	BESCHREIBUNG, PREIS)
VALUES ('NULL', '$Name', '$Beschreibung', '$Preis')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

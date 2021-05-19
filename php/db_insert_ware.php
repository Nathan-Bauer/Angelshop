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
$Kategorie = $_POST["Kategorie"];
$Picture_ID = $_POST["Picture_ID"];

echo "Die Kategorie". $Kategorie ." ";
// Erstellt die Connection zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);
// Stellt die Verbindung sicher
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//Nächste Freie BILD ID reservieren
if ($Picture_ID){
$result = $conn->query("
    SHOW TABLE STATUS LIKE 'pictures'
");
$data = mysqli_fetch_assoc($result);
$next_increment = $data['Auto_increment']-1;

$sql = "INSERT INTO waren (ID, NAME,	BESCHREIBUNG, PREIS, Picture_ID)
VALUES ('NULL', '$Name', '$Beschreibung', '$Preis', '$next_increment' )";
}else {
$sql = "INSERT INTO waren (ID, NAME,	BESCHREIBUNG, PREIS, Picture_ID)
VALUES ('NULL', '$Name', '$Beschreibung', '$Preis', 'NULL')";
}


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

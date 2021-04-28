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
// Je nach übergebenem Suchparameter Suchanfrage anpassen
if ($ID != 0){
  $sql = "SELECT * FROM waren WHERE ID = $ID;";
} elseif ($Name != 0 ) {
  $sql = "SELECT * FROM waren WHERE Name = $Name";
} elseif ($Preis != 0){
  $sql = "SELECT * FROM waren WHERE Preis = $Preis";
} elseif ($Beschreibung != 0) {
  $sql = "SELECT * FROM waren WHERE Beschreibung LIKE $Beschreibung";
}
else {
  // Keine / ungenügende Übergabeparameter an das Skript übergeben
  die("SQL Statement incomplete");
}
$res = $conn->query($sql);
$rows = array();
while($r = mysqli_fetch_assoc($res)) {
    $rows[] = $r;
}
echo json_encode($rows);
// Connection beenden
$conn->close();
?>

<?php
// Skript das anhand von Übergabeparametern Datensätze aus der "waren"-Datenbank löscht
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
//Je nach übergebenem Suchparameter Suchanfrage anpassen
if ($ID != 0 && $Name != 0 && $Preis != 0 $Beschreibung != 0 ){
  $sql = "DELETE FROM waren WHERE ID = $ID && Name = $Name && Preis = $Preis && Beschreibung LIKE $Beschreibung;";
}
else {
  die("SQL Statement incomplete, Not all Parameters matched");
}

$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["ID"]. " - Name: " . $row["NAME"]. " " . $row["PREIS"]. $row["BESCHREIBUNG"]. "<br>";
  }
} else {
  echo "NO results";
}

$conn->close();
?>

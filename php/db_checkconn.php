<?php
// Skript das die Datenbank-Connection testet
// Autor: Christoph Ederer
include 'db_connection.php';
$conn = OpenCon();

echo "Connected Successfully";
CloseCon($conn);
?>

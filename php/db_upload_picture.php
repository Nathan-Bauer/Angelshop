<?php
// Skript das anhand von Übergabeparametern Datensätze aus der "waren"-Datenbank einfügt
// Autor: Christoph Ederer
//Datenbankzugang
$servername = "localhost";
$username = "root";
$password = "toor";
$dbname = "angelshop";

// Erstellt die Connection zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);
// Stellt die Verbindung sicher
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$output_dir = "../uploaded_pictures/";/* Path for file upload */
    $RandomNum   = time();
    $ImageName      = str_replace(' ','-',strtolower($_FILES['image']['name'][0]));
    $ImageType      = $_FILES['image']['type'][0];

    $ImageExt = substr($ImageName, strrpos($ImageName, '.'));
    $ImageExt       = str_replace('.','',$ImageExt);
    $ImageName      = preg_replace("/.[^.\s]{3,4}$/", "", $ImageName);
    $NewImageName = $ImageName.'-'.$RandomNum.'.'.$ImageExt;
    $ret[$NewImageName]= $output_dir.$NewImageName;

    /* Try to create the directory if it does not exist */
    if (!file_exists($output_dir))
    {
        @mkdir($output_dir, 0777);
    }
    move_uploaded_file($_FILES["image"]["tmp_name"][0],$output_dir."/".$NewImageName );
         $sql = "INSERT INTO pictures (ID, image) VALUES ('1', '$NewImageName')";
        if (mysqli_query($conn, $sql)) {
            echo "successfully !";
        }
        else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
     }


?>

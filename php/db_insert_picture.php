<?php

if(isset($_FILES['file']['name'])){
   // file name
   $filename = $_FILES['file']['name'];

   // Location
   $location = '../uploaded_pictures/'.$filename;

   // file extension
   $file_extension = pathinfo($location, PATHINFO_EXTENSION);
   $file_extension = strtolower($file_extension);

   // Valid extensions
   $valid_ext = array("jpg","png","jpeg");

   if(in_array($file_extension,$valid_ext)){
      // Upload file
      if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
        // Skript das anhand von Übergabeparametern Datensätze aus der "Picture"-Datenbank einfügt
        // Autor: Christoph Ederer
        //Datenbankzugang
        $servername = "localhost";
        $username = "root";
        $password = "toor";
        $dbname = "angelshop";
        //Übergabeparameter aus ajax (http_post_data)
        //Übergabe erfolt in Array-Form. Auf werte kann mittels $_POST["key"] zugegriffen werden.

        echo "Die Kategorie". $Kategorie ." ";
        // Erstellt die Connection zur Datenbank
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Stellt die Verbindung sicher
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }
        //
        $sql = "INSERT INTO pictures (ID, image)
        VALUES ('NULL', '$location')";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

      }
   }
 }
?>

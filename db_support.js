//Support Funktionen/Schnittstelle zu PHP-Skripten des Backends
// Autor: Christoph Ederer
/*
 Autor: Christoph Ederer
 Funktion um Produkt aus Formular in Datenbank einzufügen

 Parameter:
 ID:Integer           -> Wird in Datenbank ins ID Feld übertragen (wenn möglich)  Kann default auch Null bleiben/sein.
 Name:String          -> Produktname
 Preis:Float          -> Produktpreis
 Beschreibung:String  -> Beschreibung des Produkts
 Kategorie:String     -> Kategorie des Produkts. Wird default auf "default" gesetzt.
                         Mögliche Werte: (default | Rute | Rolle | Schnur | Haken | Köder | Futter | Sonstiges )
*/
function insertProduct(ID = 0, Name, Preis, Beschreibung, Kategorie, Picture_ID) {
    //Sicherstellen das Übergabeparameter "Korrekt"
    if (arguments.length > 6 || arguments.length < 3) {
        // Falsche Parameter Übergeben

        console.log("Error: "+arguments.length+"-Argumente an insertProdukt() übergeben. 3-6 Argumente erwartet ");
    } else {
        // Parameter Passen
        jQuery(document).ready(function ($) {
            $.ajax({
                //Erstellt den "Post" an das PHP Skript
                type: "POST",
                url: "php/db_insert_ware.php",
                //Daten für die Dortige SQL Abfrage
                data: {ID, Name, Preis, Beschreibung, Kategorie, Picture_ID},
                //Vor der Anfrage kann ein "Warte-Text angezeigt werden
                beforeSend: function (xhr) {
                    console.log("Bitte Warten...");
                },

                //Bei Fehler im PHP
                error: function (qXHR, textStatus, errorThrow) {
                    console.log("Beim Einfügen der Daten ist ein Fehler entstanden. Bitte den Administrator verständigen");
                },
                //Bei Fehlerfreien Ausführung
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                }
            });
        });
    }

}//ENDE function insertProduct
/*
 Autor: Christoph Ederer
 Funktion um Bilder in Datenbank einzufügen, und am Server abzuspeichern

 Parameter:
###
*/
function insertPicture(picture, ID){
    // Upload file

        var files = picture;
        var filename = files[0].name;
        console.log(filename);
        if(files.length > 0 ){

            var formData = new FormData();
            formData.append("file", files[0]);

            var xhttp = new XMLHttpRequest();

            // Set POST method and ajax file path
            xhttp.open("POST", "php/db_insert_picture.php", true);

            // call on request changes state
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    var response = this.responseText;
                    if(response == 1){
                        alert("Upload successfully.");
                    }else{
                        alert("File not uploaded.");
                    }
                }
            };

            // Send request with data
            xhttp.send(formData);

        }else{
            alert("Please select a file");
        }

}//ENDE function insertPicture
/*
 Autor: Christoph Ederer
 Funktion um Produkt abhängig von Übergabeparametern aus der Datenbank abzufragen

 Parameter:
 ID:Integer           -> Produkt ID
 Name:String          -> Produktname
 Preis:Float          -> Produktpreis
 Beschreibung:String  -> Beschreibung des Produkts
*/
function getProduct(ID = 0, Name = 0, Preis = 0, Beschreibung = 0) {
    jQuery(document).ready(function ($) {
        $.ajax({
            //Erstellt den "Post" an das PHP Skript
            type: "POST",
            url: "php/db_select_ware.php",
            dataType: 'JSON',
            //Daten für die Dortige SQL Abfrage
            data: {ID, Name, Preis, Beschreibung},
            //Vor der Anfrage
            beforeSend: function (xhr) {
                console.log("Bitte Warten...");
            },
            //Bei Fehler im PHP
            error: function (qXHR, textStatus, errorThrow) {
                console.log("Beim Abrufen der Datenbank ist ein Fehler aufgetreten. Bitte den Administrator verständigen");
            },
            //Bei Fehlerfreien Ausführung
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                callback(data);
            }
        });
    });
}//ENDE function getProduct
/*
 Autor: Christoph Ederer
 Funktion die alle Produkte in der SQL Datenbank  "waren" zurückgibt
    EDIT: Nathan Bauer, Hinzu: Callback anstatt return
  Rückgabe in JSON Arrayform.
*/
function getAllProducts(callback) {
    jQuery(document).ready(function ($) {
        //Speichert die Serverresponse auf den Ajax Aufruf zwischen
        var returnjsn;
        $.ajax({
            //Erstellt den "Post" an das PHP Skript
            type: "POST",
            url: "php/db_select_all_ware.php",
            //Daten für die Dortige SQL Abfrage
            data: {},
            dataType: 'JSON',
            //Vor der Anfrage kann ein "Warte-Text angezeigt werden
            beforeSend: function (xhr) {
                console.log("Bitte Warten...");
            },

            //Bei Fehler im PHP
            error: function (qXHR, textStatus, errorThrow) {
                console.log("Es ist ein Fehler beim Aufruf der Produkte aus der Datenbank aufgetreten. Bitte den Administrator verständigen");
            },
            //Bei Fehlerfreien Ausführung
            success: function (data, textStatus, jqXHR) {
                //console.log(data);
                callback(data);
            }
        });
    });
}//ENDE function getAllProducts
/*
 Autor: Christoph Ederer
 Funktion um Produkt abhängig von Übergabeparametern aus der Datenbank zu YEETEN
 Parameter:
 ID:Integer           -> Produkt ID
 Name:String          -> Produktname
 Preis:Float          -> Produktpreis
 Beschreibung:String  -> Beschreibung des Produkts
*/
function yeetProduct(ID = 0, Name = 0, Preis = 0, Beschreibung = 0) {
    jQuery(document).ready(function ($) {
        $.ajax({
            //Erstellt den "Post" an das PHP Skript
            type: "POST",
            url: "php/db_select_ware.php",
            dataType: 'JSON',
            //Daten für die Dortige SQL Abfrage
            data: {ID, Name, Preis, Beschreibung},
            //Vor der Anfrage kann ein "Warte-Text angezeigt werden
            beforeSend: function (xhr) {
                console.log("Bitte Warten...");
            },
            //Bei Fehler im PHP
            error: function (qXHR, textStatus, errorThrow) {
                console.log("Beim Löschen des Produkts ist ein Fehler Aufgetreten");
            },
            //Bei Fehlerfreien Ausführung
            success: function (data, textStatus, jqXHR) {
                console.log("Löschen des Datensatzes war erfolgreich.");
            }
        });
    });
}//ENDE function yeetProduct

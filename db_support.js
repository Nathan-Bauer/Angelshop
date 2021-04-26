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
*/
function insertProduct(ID=0, Name, Preis, Beschreibung){
    //Sicherstellen das Übergabeparameter "Korrekt"
    if (arguments.length > 4 || arguments.length < 3){
        // Falsche Parameter Übergeben
        console.log("Error###TODO DO SOME ErrorStuff")
    }
    else{
        // Parameter Passen
        jQuery(document).ready(function($){

            var resp = $("#response");
            $.ajax({
                //Erstellt den "Post" an das PHP Skript
                type: "POST",
                url: "php/db_insert_ware.php",
                //Daten für die Dortige SQL Abfrage
                data: {ID, Name, Preis, Beschreibung},
                //Vor der Anfrage kann ein "Warte-Text angezeigt werden
                beforeSend: function(xhr){
                    resp.html("Bitte Warten");
                },

                //Bei Fehler im PHP
                error: function(qXHR, textStatus, errorThrow){
                    resp.html("Da ist wohl was schiefgelaufen. Bitte den Administrator verständigen");
                },
                //Bei Fehlerfreien Ausführung
                success: function(data, textStatus, jqXHR){
                    resp.html(data);
                }
            });
        });


    }

}//ENDE function inserProduct
/*
 Autor: Christoph Ederer
 Funktion um Produkt abhängig von Übergabeparametern aus der Datenbank abzufragen

 Parameter:
 ID:Integer           -> Produkt ID
 Name:String          -> Produktname
 Preis:Float          -> Produktpreis
 Beschreibung:String  -> Beschreibung des Produkts
*/
function getProduct(ID = 0, Name = 0, Preis =0, Beschreibung=0){
    jQuery(document).ready(function($){
        $.ajax({
            //Erstellt den "Post" an das PHP Skript
            type: "POST",
            url: "php/db_select_ware.php",
            dataType: 'JSON',
            //Daten für die Dortige SQL Abfrage
            data: {ID, Name, Preis, Beschreibung},
            //Vor der Anfrage kann ein "Warte-Text angezeigt werden
            beforeSend: function(xhr){
            },
            //Bei Fehler im PHP
            error: function(qXHR, textStatus, errorThrow){
            },
            //Bei Fehlerfreien Ausführung
            success: function(data, textStatus, jqXHR){
              returnWare(data) ;
            }
        });
    });
    function returnWare(returnjsn) {
        if (returnjsn != undefined) {
            //Ergebnis der Abfrage HIER zurückgeben. ###TODO HTML Print out the Product
            console.log(returnjsn);
            return returnjsn;
        } else {
            console.log("Da ist nix zurückgekommen")
        }
    }
}//ENDE function getProduct
/*
 Autor: Christoph Ederer
 Funktion die alle Produkte in der SQL Datenbank  "waren" zurückgibt

  Rückgabe in JSON Arrayform.
*/
function getAllProducts(){
                 jQuery(document).ready(function($){
                        //Speichert die Serverresponse auf den Ajax Aufruf zwischen
                          var returnjsn;
                        var resp = $("#response");
                        $.ajax({
                            //Erstellt den "Post" an das PHP Skript
                            type: "POST",
                            url: "php/db_select_all_ware.php",
                            //Daten für die Dortige SQL Abfrage
                            data: {},
                            dataType: 'JSON',
                            //Vor der Anfrage kann ein "Warte-Text angezeigt werden
                            beforeSend: function(xhr){
                                resp.html("Bitte Warten");
                                console.log("Sende...")
                            },

                            //Bei Fehler im PHP
                            error: function(qXHR, textStatus, errorThrow){
                                resp.html("Da ist wohl was schiefgelaufen. Bitte den Administrator verständigen");
                            },
                            //Bei Fehlerfreien Ausführung
                            success: function(data, textStatus, jqXHR){
                                returnWaren(data);
                                resp.html(data);
                              }
                        });

                    });
                    function returnWaren(returnjsn){
                      if (returnjsn != undefined){
                        console.log(returnjsn);
                        return returnjsn;
                      }
                      else {
                          console.log("Da ist nix zurückgekommen")
                      }
                    }

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
function yeetProduct(ID = 0, Name = 0, Preis =0, Beschreibung=0){
    jQuery(document).ready(function($){
        $.ajax({
            //Erstellt den "Post" an das PHP Skript
            type: "POST",
            url: "php/db_select_ware.php",
            dataType: 'JSON',
            //Daten für die Dortige SQL Abfrage
            data: {ID, Name, Preis, Beschreibung},
            //Vor der Anfrage kann ein "Warte-Text angezeigt werden
            beforeSend: function(xhr){
            },
            //Bei Fehler im PHP
            error: function(qXHR, textStatus, errorThrow){
            },
            //Bei Fehlerfreien Ausführung
            success: function(data, textStatus, jqXHR){
            }
        });
    });
}//ENDE function yeetProduct

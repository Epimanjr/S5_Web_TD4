// Fonction appelée lorsque l'utilisateur appui sur le bouton "Afficher" de l'exercice 2
function loadXMLDoc() {
    // Récupération de ce que l'utilisateur a entré (+.xml pour le nom du fichier)
    var choix = document.getElementById('textfield').value + ".xml";

    // Create XMLHttpRequest object (Check browser)     
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari       
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE5 and IE6       
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // Things to do when a response arrives     
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Change div content to the text content of the response         
            var xmlDoc = xmlhttp.responseXML;
            
            // Récupération des variables nécessaires à l'affichage
            var nomArtiste = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var imageArtiste = xmlDoc.getElementsByTagName("image")[2].childNodes[0].nodeValue;
            var bioArtiste = xmlDoc.getElementsByTagName("summary")[0].childNodes[1].nodeValue;
            
            // Appel de la fonction qui gère l'affichage du résultat
            affichage(nomArtiste, imageArtiste, bioArtiste);
        } 
    };

    // Initialize Request     
    xmlhttp.open("GET", choix, true);

    // Send     
    xmlhttp.send();
}


// Fonction appelée lorsque l'utilisateur appui sur le bouton "Afficher" de l'exercice 3
function loadJSONDoc() {
    // Récupération de ce que l'utilisateur a entré (+.xml pour le nom du fichier)
    var choix = document.getElementById('textfield2').value + ".json";
    // Create XMLHttpRequest object (Check browser)     
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari       
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE5 and IE6       
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Things to do when a response arrives     
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Change div content to the text content of the response   
            var obj = JSON.parse(xmlhttp.responseText);

            console.log(obj);
            // Récupération des variables nécessaires à l'affichage
            var nomArtiste = obj.artist.name;
            var imageArtiste = obj.artist.image[2]['#text'];
            var bioArtiste = obj.artist.bio.summary;
            
            // Appel de la fonction qui gère l'affichage du résultat
            affichage(nomArtiste, imageArtiste, bioArtiste);
        } 
    };
    // Initialize Request     
    xmlhttp.open("GET", choix, true);
    // Send     
    xmlhttp.send();
}

// Fonction qui gère l'affichage d'un artiste.
function affichage(nomArtiste, imageArtiste, bioArtiste) {
    document.getElementById("affichage").innerHTML = "<table><tr><td id=\"colonne\">Nom complet de l'artiste : </td><td>" + nomArtiste + "</td></tr><tr><td>Image de l'artiste : </td><td><img src=\"" + imageArtiste + "\" alt=\"Image de l'artiste\" /></td></tr><tr><td>Biographie de l'artiste : </td><td>" + bioArtiste + "</td></tr></table>";
}
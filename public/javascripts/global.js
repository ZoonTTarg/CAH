// DOM Ready =============================================================
$(document).ready(function() {
    populateCards();
});

// Functions =============================================================

// Fill table with data
function populateCards() {

    // jQuery AJAX call for JSON
    $.getJSON( '/cartes/getcartes', function( data ) {
        // Stick our user data array into a userlist variable in the global object
        var tableContent = "";
        // For each item in our JSON, add a table row and cells to the content string
        var compteur=0;;
        var couleur="";
        $.each(data, function(){
            compteur++;
            //Démarrage d'une nouvelle page si on est sur la nouvelle couleur
            if(couleur!=this.couleur)
            {
                if(couleur!="")tableContent += "</div>";
                couleur=this.couleur;
                tableContent += "<div class=\"page page"+couleur+"\">";
                compteur=0;
            }
            //Démarrage d'une nouvelle page si on est en bout de compteur
            if(compteur==20)
            {
                compteur=0;
                tableContent += "</div><div class=\"page page"+couleur+"\">";
            }
           
           tableContent += "<div class=\"case case"+couleur+"\">"+this.libelle+"</div>";
        });

        // Inject the whole content string into our existing HTML table
        $('#wrapper').html(tableContent);
    });
};
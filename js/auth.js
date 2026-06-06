document.querySelector("form")
.addEventListener("submit", function(e){

    let nom =document.getElementById("Nom").value;
    let prenom =document.getElementById("Prenom").value;
    let tel =document.getElementById("Numtel").value;
    let mdp =document.getElementById("mdp").value;  
    let vmdp =document.getElementById("vmdp").value;
    
    if(nom === "" ||prenom === "" ||tel === "" ||mdp === "" ||vmdp === "")                                  
    {
        e.preventDefault();
        alert("Veuillez remplir tous les champs.");
        return;
    }    

    if(mdp !== vmdp)
    {
        e.preventDefault();
        alert("Les mots de passe ne correspondent pas.");
    }

    if(mdp.length < 6)
    {
        e.preventDefault();
        alert("Le mot de passe doit contenir au moins 8 caractères.");    
    }
});
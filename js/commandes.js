let panier =JSON.parse(localStorage.getItem("panier")) || [];    
let recap =document.getElementById("recap-panier");
let total = 0;

panier.forEach(function(produit){
    total += produit.prix;
    recap.innerHTML += `<p>${produit.nom}-${produit.prix} DA</p>`;        
});
            
recap.innerHTML += `<h3>Total : ${total} DA </h3>`;

document
.getElementById("commandeForm")
.addEventListener("submit",
function(e){
    e.preventDefault();
    let nom =document.getElementById("nom").value;
    alert("Merci " + nom + "\nVotre commande a été enregistrée.");
        
    localStorage.removeItem("panier");

    window.location.href ="../index.html";

});
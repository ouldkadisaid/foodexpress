let panier =JSON.parse(localStorage.getItem("panier")) || [];
let zonePanier =document.getElementById("panier");
let total = 0;
function afficherPanier()
{
    zonePanier.innerHTML = "";
    total = 0;
    if(panier.length === 0)
    {
        zonePanier.innerHTML ="<p>Votre panier est vide.</p>";
        document.getElementById("total").textContent = "0";
        return;
    }

    panier.forEach(function(produit,index)
    {
        total += produit.prix;
        zonePanier.innerHTML +=`
        
        <div class="ligne">
            <span>${produit.nom}</span>
            <span>${produit.prix} DA</span>
            <button  onclick="supprimer(${index})">  X </button>              
        </div>
        `; }) 
    document.getElementById("total").textContent = total;
}

function supprimer(index)
{
    panier.splice(index,1);
    localStorage.setItem("panier",JSON.stringify(panier));
    afficherPanier();
}

let boutonVider =document.getElementById("vider");

if(boutonVider)
{
    boutonVider.addEventListener("click",
        function()
        {
            localStorage.removeItem("panier");               
            panier = [];
            afficherPanier();
        }
    );
}
afficherPanier();

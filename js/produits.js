function choisirRestaurant(nomRestaurant)
{
    localStorage.setItem("restaurant",nomRestaurant);    
    alert("Vous avez choisi : " +nomRestaurant);             
   
}
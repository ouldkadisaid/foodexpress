document.querySelector("form")
.addEventListener("submit", function(e){

    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;

    if(email === "" || password === "")
    {
        e.preventDefault();
        alert("Veuillez remplir tous les champs.");   
    }
});
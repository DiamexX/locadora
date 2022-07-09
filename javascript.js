function loginUsuario() {

    let a1 = document.getElementById('1').value;
    let a2 = document.getElementById('2').value;

    if ((a1 == "") && (a2 === "")) {

        alert(" Por favor informe o usuário ou senha !")
    }



    else{

        sessionStorage.setItem("lastname", document.getElementById("1").value);  

        alert(" Bem vindo: " + " ! " + sessionStorage.getItem("lastname"));                

        window.location.replace("home.html")

    }
}

function logado(){
    
    document.getElementById("user").innerHTML = sessionStorage.getItem("lastname");

}
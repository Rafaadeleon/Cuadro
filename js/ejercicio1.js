var user = prompt("Usuario:")

if(user == "jefuentes"){
    
    var password = prompt("Contraseña")
    
    if(password == "gatitos123"){
        alert("hola " + user)
    }else{
        alert("Contraseña incorrecta")
    }
}else{
    alert("Usuario no encontrado")
}


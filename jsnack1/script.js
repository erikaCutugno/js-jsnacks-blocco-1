const userfirst = Number(prompt("Inserisci un numero"))
const usersecond = Number(prompt("Inserisci un numero"))
if(isNaN(userfirst) || isNaN(usersecond)){
    alert("Inserisci solo numeri")
}else if(userfirst > usersecond) {
    alert(`Il maggiore è ${userfirst}`)
} else if (userfirst < usersecond){
    alert(`Il maggiore è ${usersecond}`)
} else {
    alert("I numeri sono uguali")
}
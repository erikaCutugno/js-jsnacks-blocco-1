const party = ["Marco", "Maria", "Jessica","Leonardo"]

const userName = prompt("Inserisci il tuo nome") 
let isNameFind = false;

for (let i = 0; i < party.length; i++){
    if(party[i].toLowerCase === userName.toLowerCase){
        isNameFind= true
    }
}
if(isNameFind){
    alert("Puoi partecipare")
} else {
    alert("Non puoi partecipare")
}
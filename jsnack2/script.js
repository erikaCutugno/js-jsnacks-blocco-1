const party = ["Marco", "Maria", "Jessica","Leonardo"]

const userName = prompt("Inserisci il tuo nome") 

for (let i = 0; i < party.length; i++){
    if(party[i] === userName){
        alert("Puoi partecipare")
    } else {
        alert("Non puoi partecipare")
    }
}
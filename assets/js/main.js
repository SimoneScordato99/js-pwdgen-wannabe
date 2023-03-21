/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/* variabili */
let nome = prompt("qual è il tuo nome?");
let cognome = prompt("qual è il tuo cognome?");
let colore = prompt("qual è il tuo colore preferito?");
let citta = prompt("in che città vivi?");
let regione = prompt("in che regione è la tua città?");
let born = prompt("quando sei nato?")
let sex = prompt("sei maschio o femmina?")


document.getElementById("CardAction").innerHTML = `
<h1>la tua password è ${nome}${cognome}${colore}21</h1>
`;

if (sex="maschio") {
    document.getElementById("sesso").innerText =`o`
} else {
    document.getElementById("sesso").innerText =`a`
}
console.log (sex)



document.getElementById("nome").innerText =`${nome}`
document.getElementById("cognome").innerText =`${cognome}`
document.getElementById("citta").innerText =`${citta}`
document.getElementById("regione").innerText =`${regione}`

if (regione="abruzzo","basilicata","calabria","campania","emilia","friuli","lazio","liguria","lombardia","marche","molise","piemonte","puglia","sardegna","sicilia","toscana","trentino","umbria","aosta","veneto") {
    document.getElementById("stato").innerText =`italia`
} else {
    document.getElementById("stato").innerText =`estero`
}

document.getElementById("born").innerText =`${born}`
document.getElementById("colore").innerText =`${colore}`
function ModificareCantitate(tip) {
    var denumire = document.getElementById("denumire").value;
    var cantitate = parseInt(document.getElementById("cantitate").value);

    if (isNaN(cantitate)) {
        alert("Cantitatea trebuie să fie un număr valid.");
        return;
    }

    if (tip === 'adauga') {
        console.log("S-a adăugat " + cantitate + " la produsul " + denumire);
    } else if (tip === 'scade') {
        console.log("S-a scăzut " + cantitate + " de la produsul " + denumire);
    } else {
        console.log("Acțiune necunoscută.");
    }
}
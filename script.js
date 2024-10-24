const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
const LETTERS_REGEX = /^[a-zA-Z]+$/;
const PHONE_REGEX = /^\d{10}$/;
const VIA_REGEX = /^[a-zA-Z0-9\s]+$/;

function validateField(id, regex) {
    const value = document.getElementById(id).value;
    const isValid = regex.test(value);
    styleField(id, isValid);
}

function styleField(id, isValid) {
    const field = document.getElementById(id);
    field.style.border = isValid ? "3px solid #4B6043" : "3px solid #A52A2A";
    field.style.backgroundColor = isValid ? "#95BB72" : "#FFC0C0";
}

function checkAge() {
    const age = parseInt(document.getElementById("age").value);
    document.getElementById("genitori").style.display = (age < 18) ? 'block' : 'none';
}

function checkForm() {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const cell = document.getElementById("cell").value;
    const cf = document.getElementById("cFisc").value;
    const via = document.getElementById("via").value;
    const age = parseInt(document.getElementById("age").value);

    if (nome && cognome && cell && cf && via && age >= 0 && age <= 99) {
        document.getElementById("form").style.display = "none";

        const ogg1 = parseInt(document.getElementById("quantita1").value) || 0;
        const ogg2 = parseInt(document.getElementById("quantita2").value) || 0;
        const ogg3 = parseInt(document.getElementById("quantita3").value) || 0;

        const total = (ogg1 * 7.12) + (ogg2 * 6.49) + (ogg3 * 3.89);

        document.getElementById("recap").innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Cognome:</strong> ${cognome}</p>
            <p><strong>Numero di telefono:</strong> ${cell}</p>
            <p><strong>Codice Fiscale:</strong> ${cf.toUpperCase()}</p>
            <p><strong>Indirizzo:</strong> ${via}</p>
            <p><strong>Età:</strong> ${age}</p>
            <hr>
            <p><strong>Totale: €${total.toFixed(2)}</strong></p>
        `;

        document.getElementById("order").style.display = "block";
    }
}

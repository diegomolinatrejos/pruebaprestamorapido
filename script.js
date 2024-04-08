// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const questionsDiv = document.getElementById("questions");

    startButton.addEventListener("click", showFirstQuestion);

    function showFirstQuestion() {
        questionsDiv.innerHTML = `
            <h5>¿Tu deuda es mayor o igual a $15,000 USD?</h5>
            <button id="debtYes" type="button" class="btn btn-success">Sí</button>
            <button id="debtNo" type="button" class="btn btn-danger">No</button>
        `;

        const debtYesButton = document.getElementById("debtYes");
        const debtNoButton = document.getElementById("debtNo");

        debtYesButton.addEventListener("click", showSecondQuestion);
        debtNoButton.addEventListener("click", showNotQualifiedMessage);
    }

    function showSecondQuestion() {
        questionsDiv.innerHTML = `
            <h5>¿Estás empleado en este momento?</h5>
            <button id="employedYes" type="button" class="btn btn-success">Sí</button>
            <button id="employedNo" type="button" class="btn btn-danger">No</button>
        `;

        const employedYesButton = document.getElementById("employedYes");
        const employedNoButton = document.getElementById("employedNo");

        employedYesButton.addEventListener("click", showCongratulations);
        employedNoButton.addEventListener("click", showNotQualifiedMessage);
    }

    function showNotQualifiedMessage() {
        questionsDiv.innerHTML = `
            <p>¡Lo siento, no calificas para el programa!</p>
            <button id="restartButton" type="button" class="btn btn-outline-warning">Salir</button>
        `;

        const restartButton = document.getElementById("restartButton");
        restartButton.addEventListener("click", () => location.reload());
    }

    function showCongratulations() {
        questionsDiv.innerHTML = `
            <h5 class="text-warning">¡Felicidades, sí calificas!</h5>
            <button id="callButton" type="button" class="btn btn-outline-warning">¡Llame ahora!</button>
        `;

        const callButton = document.getElementById("callButton");
        callButton.addEventListener("click", () => {
            // Iniciar una llamada (para fines de demostración, mostraremos una alerta)
            window.open('tel:+50687048176');
        });
    }
});

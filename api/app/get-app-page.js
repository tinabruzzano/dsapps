/*
api/app/get-app-page.js

Per favore non cambiare il file, è API JS DomePrograms

---

Versione modulo: 26.1

---

Scopo: crea il link della pagina app e lo renderizza

Discaimer: Funziona soltato con le app del link https://demenigeco.github.io/dsapps/app/nomeapp/, non per siti diversi.
*/

function getAppPage(app) {

    // Crea il link
    let appPage = `https://demenigeco.github.io/dsapps/app/${app}`;

    // Lo renderizza
    window.location.href = appPage;
}

// Cerca se l'app esiste prima di renderizzarla.
function checkAppExists(app) {
  const appPage = `https://demenigeco.github.io/dsapps/app/${app}`;

  // Effettua una richiesta HEAD per verificare se la pagina esiste
  fetch(appPage, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        // La pagina esiste, effettua il redirect
        window.location.href = appPage;
      } else {
        // La pagina non esiste, mostra un messaggio di errore
        alert("L'applicazione richiesta non esiste.");
      }
    })
    .catch(error => {
      // Errore di rete o altro
      alert("Impossibile verificare l'esistenza dell'app. Riprova più tardi.");
      console.error(error);
    });
}

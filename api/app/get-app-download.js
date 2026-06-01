/*
api/app/get-app-download.js


Per favore non cambiare il file, è API JS DomePrograms.

---

Versione modulo: 26.0

---

Scopo: cerca il link download di un'app e lo si renderizza.

*/



function getAndRenderize(app, version, downloadHash) {

    // Usa i parametri funzione per creare un link download.
    let downloadUrl = `https://demenigeco.github.io/dsapps/service/${app}/download-${version}-${downloadHash}.html`;

    // Renderizza all'url
    window.location.href = downloadUrl;

    // ESEMPIO USO:
    // getAndRenderize("ferdor", "2.0", "9udey9d8wry-d9d9ufeh8f9-d8d97dsg8d8s-8dud8s9de-d98dhdhusiw-d8dh8e77yfd8oi8s-42fdyue")
}
# API Categoria `app`

---

# Di `get-app-download.js`

---

## `getAndRenderize(app, version, downloadHash)`

Cerca il link download di un'app e lo si renderizza.

Ad esempio:

```javascript
getAndRenderize("ferdor", "2.0", "9udey9d8wry-d9d9ufeh8f9-d8d97dsg8d8s-8dud8s9de-d98dhdhusiw-d8dh8e77yfd8oi8s-42fdyue")
```

>**TIP**
>
>Vedi qui i Download Hash:
>[https://demenigeco.github.io/dsapps/service/dh/](https://demenigeco.github.io/dsapps/service/dh/)

---

# Di `get-app-page.js`

>**DISCLAIMER**
>
>Funziona soltato con le app del link https://demenigeco.github.io/dsapps/app/nomeapp/, non per siti diversi.

---

## `getAppPage(app)`

Crea il link della pagina app e lo renderizza.

Ad esempio:

```javascript
getAppPage("febeta")
```

---

## `checkAppExists(app)`

Cerca se l'app esiste prima di renderizzarla.

Ad esempio:

```javascript
checkAppExists("febeta")
```

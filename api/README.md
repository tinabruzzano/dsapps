# La API JS di DomePrograms

![Tests OK](https://img.shields.io/badge/API_Tests-passing-green?logo=github)

---

## Cos'è?

La **DomePrograms JS API** è la "API" di DomePrograms.
Ogni modulo ha una sua versione e la API è scritta in JavaScript, che permette di usarla nel web.

---

## Come si usa

Per importarlo, in HTML dovreste usare:

```html
<script src="https://demenigeco.github.io/dsapps/api/categoria/modulo.js">
```

Ad esempio:

```html
<script src="https://demenigeco.github.io/dsapps/api/app/get-app-page.js">
```

Ma se lo volete importare via JS, dovrete fare:

```javascript
const script = document.createElement("script");
script.src = "https://demenigeco.github.io/dsapps/api/categoria/modulo.js";

script.onload = () => {
  console.log("Script caricato!");
};

document.head.appendChild(script);
```

Ad esempio:

```javascript
const script = document.createElement("script");
script.src = "https://demenigeco.github.io/dsapps/api/app/get-app-page.js";

script.onload = () => {
  console.log("Script caricato!");
};

document.head.appendChild(script);
```

---

## Funzioni usabili

Per la API JS di DomePrograms, i moduli sono tanti e non possiamo documentare tutto qui.

Potete trovare le funzioni nel file `README.md` per le funzioni dei file di una categoria.

- [Di `app`](https://demenigeco.github.io/dsapps/api/app/)
  [(Di `css`](https://demenigeco.github.io/dsapps/api/css/)
- [Di `auth`](https://demenigeco.github.io/dsapps/api/auth/)

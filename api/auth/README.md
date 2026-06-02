# API Categoria `auth`

---

# `api-management.js`

---

## `checkDomeProgramsAccount()`

Verifica se esiste un account DomePrograms nel `localStorage` (`DSAPPSAuth`) e controlla se è valido.

```javascript
checkDomeProgramsAccount()
```

Ritorna:

```json
{
  errorlevel: 0,
  message: "Account valido",
  user: "domenigeco",
  token: "..."
}
```
Gli errorlevels sono:

- 1 → Nessun account trovato  
- 2 → Account non valido o corrotto  
- 3 → Token scaduto  
- 4 → Errore interno  

---

## `getAuthUser()`

Restituisce il nome dell’utente loggato.

```javascript
getAuthUser()
```

Ritorna:

```text
"domenigeco"
```

Se non loggato:

```text
null
```
---

## `addOAuth(yoursite)`

Avvia il login OAuth di DomePrograms.

```javascript
addOAuth("https://tuosito.com")
```

Funziona così:

Reindirizza a:

```url
https://demenigeco.github.io/dsapps/auth/dsapps-oauth.html?next=https://tuosito.com
```

---

## `parseToken(token)`

Decodifica il token OAuth.

```javascript
parseToken(token)
```

L'output è tipo:

```json
{
  user: "domenigeco",
  time: 1717320000000,
  exp: 1717323600000
}
```

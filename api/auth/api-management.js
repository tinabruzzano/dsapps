/*
api/auth/auth-management.js

DomePrograms Auth Management API

---

Scopo:
Gestione login, verifica account e OAuth token
tramite localStorage (DSAPPSAuth)

Versione modulo: 1.0
*/

function checkDomeProgramsAccount() {
    try {
        const raw = localStorage.getItem("DSAPPSAuth");

        if (!raw) {
            return {
                errorlevel: 1,
                message: "Nessun account trovato"
            };
        }

        const data = JSON.parse(raw);

        if (!data.user || !data.token) {
            return {
                errorlevel: 2,
                message: "Account non valido o corrotto"
            };
        }

        const tokenData = parseToken(data.token);

        if (tokenData.exp && Date.now() > tokenData.exp) {
            return {
                errorlevel: 3,
                message: "Token scaduto"
            };
        }

        return {
            errorlevel: 0,
            message: "Account valido",
            user: data.user,
            token: data.token
        };

    } catch (err) {
        return {
            errorlevel: 4,
            message: "Errore interno",
            error: err
        };
    }
}

function getAuthUser() {
    const auth = checkDomeProgramsAccount();

    if (auth.errorlevel !== 0) return null;

    return auth.user;
}

function addOAuth(yoursite) {
    const url =
        "https://demenigeco.github.io/dsapps/auth/dsapps-oauth.html?next=" +
        encodeURIComponent(yoursite);

    window.location.href = url;
}

function parseToken(token) {
    try {
        return JSON.parse(atob(token));
    } catch (e) {
        return null;
    }
}

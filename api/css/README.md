# API Categoria `css`

---

# Di `loadcss.js`

---

## `AddHomeCSS()`

Aggiunge il CSS della HomePage di DomePrograms.

Ad esempio:

```javascript
AddHomeCSS()
```

Il CSS restituito è:

```css
body{
    margin:0;
    font-family:Arial;
    background:#111827;
    color:white;
}

header{
    text-align:center;
    padding:40px;
    font-size:32px;
    font-weight:bold;
}

.section-header {
    text-align: center;
    font-size: 24px;
    margin: 40px 0 20px 0;
}

.container{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
    padding:0 20px 40px 20px;
}

.card{
    background:#1f2937;
    width:220px;
    padding:20px;
    border-radius:12px;
    text-align:center;
    text-decoration:none;
    color:white;
    transition:0.2s;
}

.card:hover{
    transform:scale(1.05);
    background:#374151;
}

.card h3{
    margin-top:0;
}

.card p{
    font-size:14px;
    color:#cbd5e1;
}

.button-main {
    display:block;
    background: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    margin: 0 auto 40px auto;
    text-align:center;
    width: fit-content;
    transition: 0.2s;
    cursor: pointer;
    border: none;
}

.button-main:hover {
    background: #1e40af;
}

footer{
    text-align:center;
    padding:30px;
    font-size:14px;
    color:#9ca3af;
}
```

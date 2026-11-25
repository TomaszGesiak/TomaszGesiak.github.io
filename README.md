# Tomasz Gęsiak – strona WWW (EN / PL)

Statyczna strona (HTML + CSS + JS) gotowa do GitHub Pages.
Wersja polska jest stroną główną, angielska jest pod `/en/`.

## Struktura
```
index.html        – wersja polska (strona główna)
en/index.html     – wersja angielska
css/style.css     – wygląd (kolory i czcionka na początku pliku)
js/data.js        – TREŚCI: projekty, artykuły AI/BIM, wpisy zapasowe (EN + PL)
js/main.js        – logika: rysowanie kart, filtr, blog z Bloggera, menu
images/           – hero.jpg, ai-generated.png
.nojekyll         – wyłącza przetwarzanie Jekyll
```

## Edycja treści
- Projekty i artykuły zmieniasz w `js/data.js`; każdy tekst ma postać `{en:'…', pl:'…'}`.
- W sekcjach AI i BIM pokazują się 3 pierwsze pozycje z listy.
- Blog aktualizuje się sam: wersja PL pobiera wpisy z tomaszgesiak.blogspot.com, wersja EN z tomaszgesiak.substack.com (przez darmowy serwis rss2json.com; gdy jest niedostępny, widać wpisy zapisane w `js/data.js`).

## Publikacja na GitHub Pages
1. Utwórz repozytorium, np. `tomaszgesiak.github.io`, i wrzuć zawartość tego folderu do głównego katalogu.
2. Settings → Pages → Source: *Deploy from a branch*, gałąź `main`, folder `/ (root)`.
3. Strona: `https://<login>.github.io/` (PL) oraz `https://<login>.github.io/en/` (EN).

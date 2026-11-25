# Tomasz Gęsiak – strona WWW (EN / PL)

Statyczna strona (HTML + CSS + JS) gotowa do GitHub Pages.
Wersja angielska jest stroną główną, polska jest pod `/pl/`.

## Struktura
```
index.html        – wersja angielska (strona główna)
pl/index.html     – wersja polska
css/style.css     – wygląd (kolory i czcionka na początku pliku)
js/data.js        – TREŚCI: projekty, artykuły AI/BIM, wpisy zapasowe (EN + PL)
js/main.js        – logika: rysowanie kart, filtr, blog z Bloggera, menu
images/           – hero.jpg, ai-generated.png, projekty/ (zdjęcia projektów)
.nojekyll         – wyłącza przetwarzanie Jekyll
llms.txt          – opis strony dla AI i wyszukiwarek (EN + PL)
```

## Edycja treści
- Projekty i artykuły zmieniasz w `js/data.js`; każdy tekst ma postać `{en:'…', pl:'…'}`.
- W sekcjach AI i BIM pokazują się 3 pierwsze pozycje z listy.
- Blog aktualizuje się sam: wersja PL pobiera wpisy z tomaszgesiak.blogspot.com, wersja EN z tomaszgesiak.substack.com (przez darmowy serwis rss2json.com; gdy jest niedostępny, widać wpisy zapisane w `js/data.js`).

## Publikacja na GitHub Pages
1. Utwórz repozytorium, np. `tomaszgesiak.github.io`, i wrzuć zawartość tego folderu do głównego katalogu.
2. Settings → Pages → Source: *Deploy from a branch*, gałąź `main`, folder `/ (root)`.
3. Strona: `https://<login>.github.io/` (EN) oraz `https://<login>.github.io/pl/` (PL).

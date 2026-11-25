/* Tomasz Gęsiak – strona statyczna (GitHub Pages). Treści: js/data.js */
{
const S = window.SITE;
const L = document.documentElement.lang === 'pl' ? 'pl' : 'en';
const ROOT = new URL('../', document.currentScript.src).href; /* katalog główny strony */
const tr = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[L] ?? v.en ?? '') : (v ?? '');

/* bezpieczne tworzenie elementów (tekst zawsze przez textContent) */
const el = (tag, props = {}, kids = []) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'text') n.textContent = v; else if (v != null) n.setAttribute(k, v);
  }
  kids.forEach(k => k && n.append(k));
  return n;
};
/* kolejność: plik lokalny z repozytorium → link zewnętrzny → szare pole z podpisem */
const thumb = (src, label, local) => {
  const box = el('div', {class:'ph'}, [el('em', {text:label})]);
  const queue = [local && ROOT + local, src].filter(Boolean);
  if (queue.length) {
    const img = el('img', {src:queue.shift(), alt:label, loading:'lazy', referrerpolicy:'no-referrer'});
    img.addEventListener('error', () => { if (queue.length) img.src = queue.shift(); else img.remove(); });
    box.append(img);
  }
  return box;
};
const fmt = s => {
  const [y, m, d] = s.split('-');
  const mon = S.ui.months[L][+m - 1];
  return (d ? +d.slice(0, 2) + ' ' : '') + mon + ' ' + y;
};

/* AI / BIM */
const drawTopic = (id, arts) => {
  document.getElementById(id).replaceChildren(...arts.slice(0, 3).map(a =>
    el('a', {class:'art', href:(L === 'en' && a.urlEn) || a.url, target:'_blank', rel:'noopener'}, [
      thumb(a.img, tr(a.tag)),
      el('div', {}, [
        el('span', {class:'tag', text:tr(a.tag) + ' · ' + fmt(a.date)}),
        el('h3', {text:tr(a.t)}),
        el('p', {text:tr(a.d)})
      ])
    ])));
};
drawTopic('ai-arts', S.aiArts);
drawTopic('bim-arts', S.bimArts);

/* projekty + filtr */
const grid = document.getElementById('projects');
const filters = document.querySelector('.filters');
const cats = ['all', ...new Set(S.projects.map(p => p.cat))];
const catName = c => c === 'all' ? tr(S.ui.all) : tr(S.ui.cats[c]);
const drawProjects = cat => {
  grid.replaceChildren(...S.projects.filter(p => cat === 'all' || p.cat === cat).map(p =>
    el('a', {class:'card', href:p.url, target:'_blank', rel:'noopener'}, [
      thumb(p.img, tr(p.t), p.local),
      el('h3', {text:tr(p.t)}),
      el('p', {class:'meta', text:[p.y, tr(p.place), catName(p.cat)].filter(Boolean).join(' · ')}),
      el('p', {class:'d', text:tr(p.d)})
    ])));
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset.cat === cat));
};
cats.forEach(c => {
  const b = el('button', {type:'button', role:'tab', 'data-cat':c, text:catName(c)});
  b.addEventListener('click', () => drawProjects(c));
  filters.append(b);
});
drawProjects('all');

/* blog */
const posts = document.getElementById('posts');
const drawPosts = list => posts.replaceChildren(...list.map(p =>
  el('a', {class:'post', href:p.url, target:'_blank', rel:'noopener'}, [
    thumb(p.img, tr(S.ui.blog)),
    el('div', {}, [el('time', {text:fmt(p.date)}), el('h3', {text:tr(p.t)}), p.d ? el('p', {text:tr(p.d)}) : null])
  ])));
if (L === 'en') {
  /* EN: Substack. Na żywo przez rss2json (Substack nie pozwala czytać RSS bezpośrednio z przeglądarki) */
  drawPosts(S.substackPosts);
  if (window.fetch) fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(S.substackFeed))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(j => {
      const items = (j.items || []).filter(i => /^https:\/\/tomaszgesiak\.substack\.com\//.test(i.link || '')).slice(0, 6).map(i => {
        const doc = new DOMParser().parseFromString(i.description || '', 'text/html');
        let text = (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
        if (text.length > 220) text = text.slice(0, 217).replace(/\s\S*$/, '') + '…';
        const img = i.enclosure?.link || i.thumbnail || doc.querySelector('img')?.getAttribute('src') || '';
        return {t: i.title || '—', url: i.link, date: (i.pubDate || '').slice(0, 10), d: text, img: /^https:\/\//.test(img) ? img : ''};
      }).filter(p => /^\d{4}-\d{2}-\d{2}$/.test(p.date));
      if (items.length) drawPosts(items);
    })
    .catch(() => { /* zostają wpisy zapasowe */ });
} else {
  drawPosts(S.fallbackPosts);
}

/* wywoływane przez feed Bloggera (JSONP) – działa na GitHub Pages */
window.renderBlog = data => {
  try {
    const entries = (data.feed.entry || []).map(e => {
      const html = (e.summary || e.content || {}).$t || '';
      const doc = new DOMParser().parseFromString(html, 'text/html');
      let text = (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
      if (text.length > 220) text = text.slice(0, 217).replace(/\s\S*$/, '') + '…';
      const firstImg = doc.querySelector('img')?.getAttribute('src');
      let img = e.media$thumbnail?.url || firstImg || '';
      img = img.replace(/\/s72-(?:w\d+-h\d+-)?c\//, '/w640/').replace(/=s72-(?:w\d+-h\d+-)?c$/, '=w640');
      return {
        t: e.title.$t || '—',
        url: (e.link.find(l => l.rel === 'alternate') || {}).href,
        date: e.published.$t.slice(0, 10),
        d: text, img
      };
    }).filter(p => p.url && /^https:\/\//.test(p.url));
    if (entries.length) drawPosts(entries);
  } catch (err) { /* zostają wpisy zapasowe */ }
};

/* grafika na start */
const hero = document.getElementById('hero-img');
hero.addEventListener('error', () => hero.remove());

/* stopka, menu, do góry */
document.getElementById('social').append(...S.social.map(([n, u]) =>
  el('li', {}, [el('a', {href:u, target:'_blank', rel:'noopener'}, [el('span', {text:n}), el('span', {text:'↗'})])])));
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('a[href="#top"]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {}
}));
const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
}

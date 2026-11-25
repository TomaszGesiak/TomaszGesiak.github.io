/* Treści strony – wersja EN i PL / Site content – EN and PL
   Każdy tekst: {en:'…', pl:'…'}. Edytuj tutaj, logika jest w main.js. */
window.SITE = (() => {
const GS = 'https://sites.google.com/view/tomaszgesiak/projekty/';
const SV = 'https://sites.google.com/sitesv-images-rt/';
const BI = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/';
const B = 'https://tomaszgesiak.blogspot.com/';
const SB = 'https://tomaszgesiak.substack.com/p/';
const SC = 'https://substackcdn.com/image/fetch/w_800,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F';

const IMG = {
  podgorica: SV+'APXyLQe4VgDpL6uplPt7_I__UxPMXgZQA9KFDlaF8l46Hxknhtt3H7r5mLtXfwjOCFS8h2GQOPZf_2u3S9hRlvq0TlN__RGKeTNmh4q9mCLTkpXOb1aXX31ypfhR5KEVD0CgunbZl6GP4D_hltfwq5ktpSRhWBsOFgX1bF-SCS_JY-9A_fh17DDZAA5RAUSh=w1280',
  crystal: BI+'AVvXsEhdMNCBxx4K-ad56muvV-yLEGvydlDbLzN39xWPlMZMh09Mtr6KGz2oK707DF2J2AVUsczORh7F_MWHUgyRo_3zdIk28TKVbR1kFoi3sF6BRb_swL5FzU470A4i_yIDtIbfLXVAtj0pkYEKyFICRBiUY4bvmzYHPK6EJNURqc5djLozhdKVKLiCed56m-bY/s1600/6.png',
  tab: 'https://sites.google.com/sitesv-images-rt/AMxu72sduVg5ngfpgBfGcexi8PJPk-Kjmy1OObfry97z96MqB_gIsQYefeWXT5a_Klpzi-OTKZb909wSvAay3PqDWw_wN__nSdxaPl8QjVjuZQm8Y7P29YJ5-5wfEhaQhw_NM1f0MKsUD8s3FbxeoCJ_GVc5b6JWuTey5NfUa2LbKlhsPcae4otI066MDJU1E5A0HdBzt6VHepoe2sNsKoDBicD4TOb0sCepY0y6B1sHbis=w1280',
  flat: BI+'AVvXsEilE8HRS2qFhbuXiEDUI3qqMGXjEVIO4ob2j4AG_sNR05uFc53rdXsKCSCumINI3C8xtUr8nZzJsoo2_LOTYfDJaXsOxZVh8QWBWOkc0Jtqru1zBP2qdWwzrjGNtT_9mP6Jzwuc3TnbGYLG3S6XD86lGepjoNe2KxT6o32cMeWgz86p35kh3g3-xYnmDljN/w640-h640/unnamed%20(1).png',
  estate: 'https://sites.google.com/sitesv-images-rt/AMxu72tvaLVFqd2C_GaUvBG1frLyOQdJncVHFYO3--dUGw8LmYg2YFjpqux1nUb5D2Lkaw1PpHu6xoytbNSraXp7OiTY1bi-FU1NrHvHhkiEJ-I3hJKw-zRzWbuD3eqPiFXrby20el4kCiDz3z3Z9ukShPcbWMNUMJ8Ty1SJCCkasxwvy6C866HicXChb8TceGGE5nR9-1GidanKd69dr7mCeHQ2DKzxd3oCEkHHL1NUDPM=w1280',
  church: SV+'APXyLQdtPZJil1p7dJ9ZMhsCHvoHmNo2lPxGXYKw7vlncil04AkARLoCxtBtxSPF-6PC7WNxk4MVuZIkOGQz62Lg6ymyaYSnI5UZEpNBcgH9SUc7wHTeZoA3JIYw8x2KRq_seXe3ioa8DuFnQc5o1yxeHGgZjVljtqYtXo4PgPXuc-6CLhRWxfLymEiTqMQ6psmfxukQNrP5YqIlOQTJLAfZ56bXa99oJ-rLczjO62QrQvA=w1280',
  apartment: SV+'APXyLQdCT0dUk7wbX2jeaeyS0krSNIlkYtF-jiKk7sqEkKnmJpyz4Holov_BGnFpQCdW6CRjTQPIQs74AdNnwZFNQks_GE4dzBUwA51a_KkyEjLpgk5r79H3KFJ7AFTeK9lwHFuGtMDujHLIvL6kibWtXhP5obuFxwpdDPAhKc3ziRfEZO-4a_K4ebuvaIiUd37rH7VP6ftY58VU2QSX7c3wXM3k25c7iVFd2VnU0iBzhew=w1280',
  micro: SV+'APXyLQczY0L9mmFhGrCEulaN7jJUK9Zq8RRWk6WrVElNFSHyDOKJ7cICN_b_UddjBY55nl23Puk-id9_mrarH-RFhzKLZWOjLvZrW770PXNPInRDpE0ujnpJ5B3uJ-8xB3vQOqaBDt6ZgWWEpqpkMZWAGHWQCS8huzM_UFtyocagTjvgmXzEz-M3NvlZe9bWyEOMguwepnUglfmKoadl1upZkt6or2q5T50A_Gjj6Zke_sc=w1280',
  landmark: BI+'AVvXsEhSATkfjvyLnXD07tKd0R8H0sfa50NNTdqhRnPj5LADG04l8WDja2f6Ah4SN-y0nr4tHW3ivdJeqpmDbG7U56oycLKs0YEapQdet32o14o7MyERvXJUrGjtd_8KmKlNnAOPOOBW9e4dhnaO4seflS5rjjP6q2rl2QDNzABseB0PRjPbV2pTjrAfPvr-0N_g/w640-h480/612508795_122229506678147430_5997094742348509611_n.jpg',
  skyhive: SV+'APXyLQd-PyJrsMW1KtZmxVoZ_tcooyG2HNa35ggHnbv0S8v6UI7Xvbd86UkHTUg-lEns2hAxbzc67uQXU8lb5YU1ZrBp1uylRwy4LyFt_tmoMd6rtU6gxcinvAiRMSR4OKGH02HeRLM3w_aDNWGjsXAqdOCf_YKBPcDMnWmXugOOhfCBAsa67TjhJRBdcudoVfTRn_Dg24sNsgrvslQpj-p1oXLZijwJOFsPSSSjiPr1_K4=w1280',
  dubai: SV+'APXyLQdYCdjH2P4IvqiDwsgmcVOFsJOx68XcAWiv0h1yJUT6L1zDUO0mO_69tJzUP_-BfstiUa6i8z2TU0jfpDmmfO57x7boMbl0NciyxPlGwZJ7AHzb5d9RWiHNrrLILd-HTTzg4pNqtkmCoGwAcuHM1a0Rqsp4n2m_wvxTar9p4ziV3VtAiezK0WDk_nqmxyaLqx2QX8d9z786Ueed2Mmk0M_PvK6_kL-zxGcS-b6VJ1A=w1280',
  ai2030: BI+'AVvXsEgMBmZ-B_qfIVO6An08X2aMA5FWDqsJB-vYWqda1tij0regfH8DNqeljydWS-GcnYpDHDzwb-8UUCJNkdifH0CTvqXdzdcpjoYnC0D9-cpVKFu2BuFKqeP1T7bZj7w3raXCDBssicy6PndLK-3nkPz3x11r2dwJRpe2_NaUHrv-HZ-LpsH63hmd0RmnLm_f/w1200/PA_11432.jpg',
  cadmat: BI+'AVvXsEjDR0o2q5rmBSk4xYsrn909rKZRf6D_ELl8He_QWRqZxjZeb0vi6z1XseAFz_sG-wrbf3sm_Jre4Y2di1ZbQKMOwY8BgwPQZkeVBVS2YIuHCRV9SDxG5QlpK9QgsTTheQnEbzqrLmlpSXzL0lnCeiTAoyGvCKwQuJbQEDWLvNWAAsRO3MmgAN1KBFp06oYB/w1200/CadMat.jpg',
  maoia: BI+'AVvXsEgRjhZd-pZSbIkfBNedK71V8humi2ftz4XlBBAm79FduHP5CEoNIDcAh9lCQOF8RpTCV4Kdn3RCx1zHGZMjZpyn1XHu0nRAEgzutCK1G_5_KFDP5gQvYmGCNMk7eaeJLCbHeY4OnOk3-UAKKmLUZ5lJneYLoRUwD9bItpLFTVf93ANpAuQa06euw4tmMWtw/w640/AAA.jpg',
  forum: BI+'AVvXsEgM_Dd1wWtcZ8lJBFMUNjL0Vtey3fffJ99Tp4LWuTsBfMlG7JR4B2xtv4rRa_oM2fVMAN9qMi3Rb_kuxNdmv7HGssoy13sgJ0s9T7Qf8O4c7HdfVyeR8Q6ReSic9qrbhQMWA90xoDXJIYqRkuzqGAXM6GrI5-DfAJGjM_L7eEZD4QjbNgKpfpilFOqtAwdr/w640/asddasd.jpg',
  kielce: BI+'AVvXsEhUlB4WucOz0KH6Vne8dHfOkOcqQvp2-WLpjkBVbOgpLwLW7gMrdLeI2bEeiRyZWIb6hgs4rqfmqQTomOIWd4dXzkZbU-65pFGvGE3hvDdpZn5O3NWx_UtUO_GolB2C_aZz3mdW_RueeaCMOPOU9J14btt7yWtrXFPVlc_s-M5zLsdDOcmcpvcrJobfAsXq/w640/image.png',
  bimedu: BI+'AVvXsEidyW4eOeWZbuMF5PKsjc4_7zEQUV2BwH39QHUdQA0hK7ACeb51ThtKnMw_cfnPE19PohzlNEsc6F5s1YRo0NQ7xXvcGBSeWPogi4E-LrVTioKpCzBPZC7nMWWimrCWq1rbVSV0aK114x4qr3pUdj2MxyR6iOoRTugB-WepPaUIwzYwye1aAJrf9LE6LYM/w640-h380/asdasas.jpg'
};

const ui = {
  all:{en:'All', pl:'Wszystkie'},
  cats:{comp:{en:'Competitions', pl:'Konkursy'}, build:{en:'Buildings', pl:'Budynki'}, int:{en:'Interiors', pl:'Wnętrza'}},
  months:{en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], pl:['sty','lut','mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru']},
  blog:{en:'blog', pl:'blog'}
};

const projects = [
  {t:{en:'Zabjelo Local Centre', pl:'Centrum Zabjelo'}, y:2026, place:{en:'Podgorica, Montenegro', pl:'Podgorica, Czarnogóra'}, cat:'comp', img:IMG.podgorica, url:GS+'2026/2026-podgorica',
   d:{en:'Competition entry: a clinic, lecture halls and community space around one shared glazed hall, with a 155 kWp solar array and a green roof.', pl:'Praca konkursowa: przychodnia, sale wykładowe i przestrzeń sąsiedzka wokół wspólnego przeszklonego holu; fotowoltaika 155 kWp i zielony dach.'}},
  {t:{en:'Crystal AR Garden', pl:'Crystal AR Garden'}, y:2026, place:{en:'', pl:''}, cat:'comp', img:IMG.crystal, url:GS+'2026/2026-crystal-palac',
   d:{en:'The Crystal Palace reimagined as a botanical garden with AR exhibition space, timber structure and rainwater retention.', pl:'Crystal Palace na nowo: ogród botaniczny z wystawą AR, drewnianą konstrukcją i retencją deszczówki.'}},
  {t:{en:'TAB 2026', pl:'TAB 2026'}, y:2026, place:{en:'Tallinn', pl:'Tallinn'}, cat:'comp', img:IMG.tab, url:GS+'2026/2026-tab2026',
   d:{en:'Black & White pavilion for the Tallinn Architecture Biennale – a square plan on a tight budget.', pl:'Pawilon Black & White na Biennale Architektury w Tallinie – kwadratowy plan, skromny budżet.'}},
  {t:{en:'Apartment interior', pl:'Mieszkanie – wnętrza'}, y:2027, place:{en:'', pl:''}, cat:'int', img:IMG.flat, url:GS+'2027/2027-mieszkanie-wnetrza',
   d:{en:'White, warm wood and sage – a small flat in the spirit of Japanese minimalism.', pl:'Biel, ciepłe drewno i szałwia – małe mieszkanie w duchu japońskiego minimalizmu.'}},
  {t:{en:'Concept Estate', pl:'Koncepcja nieruchomości'}, y:2025, place:{en:'', pl:''}, cat:'build', img:IMG.estate, url:GS+'2025/2025-concept-estate',
   d:{en:'Residential complex with large glazed façades, neutral tones and warm wood accents.', pl:'Zespół mieszkaniowy z dużymi przeszkleniami, neutralną kolorystyką i akcentami drewna.'}},
  {t:{en:'Church interior – Mazovia', pl:'Kościół – Mazowsze'}, y:2025, place:{en:'Poland', pl:'Polska'}, cat:'int', img:IMG.church, url:GS+'2025/2025-bud-wnetrza',
   d:{en:'Design collaboration with lead architect Wojciech Gęsiak: radiating glulam roof beams and daylight from the gable glazing.', pl:'Współpraca projektowa z głównym architektem Wojciechem Gęsiakiem: promieniste belki z drewna klejonego i światło z przeszklenia szczytu.'}},
  {t:{en:'Apartment – proposals', pl:'Apartament – propozycje'}, y:2024, place:{en:'', pl:''}, cat:'int', img:IMG.apartment, url:GS+'2024/2024-wnętrza-apartamentu',
   d:{en:'Bright, minimalist living space with floor-to-ceiling windows, light wood floors and warm neutral tones.', pl:'Jasne, minimalistyczne wnętrze z oknami od podłogi do sufitu, jasną podłogą i ciepłymi, neutralnymi barwami.'}},
  {t:{en:'Micro House', pl:'Micro House'}, y:2024, place:{en:'', pl:''}, cat:'build', img:IMG.micro, url:GS+'2024/2024-microhouse',
   d:{en:'Eco concept house on a hillside: glass walls for daylight and views, a solar roof for energy self-sufficiency.', pl:'Ekologiczny dom-koncepcja na zboczu: szklane ściany dla światła i widoku, dach z panelami słonecznymi.'}},
  {t:{en:'LandMark', pl:'LandMark'}, y:2023, place:{en:'Dubai', pl:'Dubaj'}, cat:'comp', img:IMG.landmark, url:GS+'2023/2023-landmark',
   d:{en:'A 135 m steel lattice landmark shaped like a dhow by day and a crescent moon at night.', pl:'135-metrowy stalowy znak – w dzień żaglowiec dhow, nocą półksiężyc.'}},
  {t:{en:'2km SKYHIVE', pl:'2km SKYHIVE'}, y:2023, place:{en:'', pl:''}, cat:'comp', img:IMG.skyhive, url:GS+'2023/2023-2km',
   d:{en:'A 2 km vertical city: housing, offices, culture and greenery in one self-sufficient tower.', pl:'Pionowe miasto wysokości 2 km: mieszkania, biura, kultura i zieleń w jednej samowystarczalnej wieży.'}},
  {t:{en:'Family house', pl:'Dom jednorodzinny'}, y:2023, place:{en:'Dubai', pl:'Dubaj'}, cat:'build', img:IMG.dubai, url:GS+'2023/168-dom-16',
   d:{en:'A house for a small plot with separate day and night zones and private inner courtyards.', pl:'Dom na małej działce z rozdzieloną strefą dzienną i nocną oraz prywatnymi patiami.'}}
];

const aiArts = [
  {t:{en:'2030: the dark side of AI', pl:'2030: ciemna strona AI'}, date:'2026-11', tag:{en:'Talk · Kielce 2026', pl:'Wystąpienie · Kielce 2026'}, img:IMG.ai2030, url:B+'2026/11/rok-2030-jako-punkt-zwrotny-dla.html', urlEn:SB+'2030-dark-side-of-ai',
   d:{en:'2030 as a turning point: strict EU climate rules meet rapid AI growth. On model hallucinations, market polarisation and the role of BIM in green design.', pl:'Rok 2030 jako punkt zwrotny: przepisy klimatyczne UE spotykają się z gwałtownym rozwojem AI. O halucynacjach modeli, polaryzacji rynku i roli BIM.'}},
  {t:{en:'AI in MaOIA', pl:'AI w MaOIA'}, date:'2026-11', tag:{en:'Chamber of Architects', pl:'Izba architektów'}, img:IMG.maoia, url:B+'2026/11/ai-w-maoia.html', urlEn:SB+'ai-in-maoia-pl',
   d:{en:'The Mazovian Chamber of Architects sets up a team to guide architects through adopting AI in practice.', pl:'Mazowiecka Izba Architektów powołuje zespół, który ma prowadzić architektów przez wdrażanie AI w praktyce.'}},
  {t:{en:'AI and the public trust professions', pl:'AI a zawody zaufania publicznego'}, date:'2026-10', tag:{en:'Panel · video', pl:'Panel · wideo'}, img:IMG.forum, url:B+'2026/10/ai-zawody-zaufania-publicznego.html',
   d:{en:'Panel recording from the Forum of Public Trust Professions: risks, opportunities and safe work with AI.', pl:'Nagranie panelu z Forum Zawodów Zaufania Publicznego: ryzyka, szanse i bezpieczeństwo pracy z AI.'}}
];

const bimArts = [
  {t:{en:'CAD MAT 2027 – Kraków', pl:'CAD MAT 2027 – Kraków'}, date:'2026-11', tag:{en:'Report', pl:'Relacja'}, img:IMG.cadmat, url:B+'2026/11/rekordowa-frekwencja-na-tegorocznej.html', urlEn:SB+'cadmat-2027',
   d:{en:'Record turnout at CADMAT: AI, cybersecurity, large-scale BIM deployments, the Port of Gdynia case study and Revit 2027.', pl:'Rekordowa frekwencja na CADMAT: AI, cyberbezpieczeństwo, wdrożenia BIM na dużą skalę, studium Portu Gdynia i Revit 2027.'}},
  {t:{en:'BIM and the 2030 climate goals', pl:'BIM a cele klimatyczne 2030'}, date:'2026-11', tag:{en:'Analysis', pl:'Analiza'}, img:IMG.ai2030, url:B+'2026/11/rok-2030-jako-punkt-zwrotny-dla.html', urlEn:SB+'2030-dark-side-of-ai',
   d:{en:'With Fit for 55 and ETS 2, the building information model becomes the basis of low-carbon design.', pl:'Fit for 55 i ETS 2 sprawiają, że model informacyjny budynku staje się podstawą projektowania niskoemisyjnego.'}},
  {t:{en:'BIM education in Poland', pl:'Edukacja BIM w Polsce'}, date:'2024-01', tag:{en:'Report', pl:'Raport'}, img:IMG.bimedu, url:'https://blogtomaszgesiak.blogspot.com/2024/01/podsumowanie-raportu-aktualnego-stanu.html',
   d:{en:'Summary of the 2019 report on the state of BIM education in Poland – lessons for universities and practice.', pl:'Podsumowanie raportu o stanie edukacji BIM w Polsce z 2019 roku – wnioski dla uczelni i praktyki.'}}
];

/* wpisy zapasowe (gdy feed z Bloggera się nie wczyta) – tytuły bloga są po polsku */
const fallbackPosts = [
  {t:'2030: ciemna strona AI', date:'2026-11-19', url:B+'2026/11/rok-2030-jako-punkt-zwrotny-dla.html', img:IMG.ai2030, d:{en:'2030 as a turning point for architecture: EU climate rules, rapid AI growth and market polarisation.', pl:'Rok 2030 jako punkt zwrotny: regulacje UE, gwałtowny rozwój AI i polaryzacja rynku.'}},
  {t:'CAD MAT 2027', date:'2026-11-12', url:B+'2026/11/rekordowa-frekwencja-na-tegorocznej.html', img:IMG.cadmat, d:{en:'Report from the Kraków conference: AI, cybersecurity and BIM.', pl:'Relacja z konferencji w Krakowie: AI, cyberbezpieczeństwo i BIM.'}},
  {t:'AI w MaOIA', date:'2026-11-05', url:B+'2026/11/ai-w-maoia.html', img:IMG.maoia, d:{en:'The Mazovian Chamber of Architects forms an AI team.', pl:'Mazowiecka Izba Architektów tworzy zespół ds. AI.'}},
  {t:'Crystal Palace', date:'2026-10-22', url:B+'2026/10/crystal-palace.html', img:IMG.crystal, d:{en:'Competition entry: the Crystal Palace as a botanical garden with AR exhibitions.', pl:'Praca konkursowa: Crystal Palace jako ogród botaniczny z wystawami AR.'}},
  {t:'AI KONFERENCJA KIELCE 2026', date:'2026-10-08', url:B+'2026/10/ai-konferencja-kielce-2026.html', img:IMG.kielce, d:{en:'Recap of the second Kielce conference on AI in architecture.', pl:'Podsumowanie II konferencji o AI w architekturze w Kielcach.'}},
  {t:'Centrum lokalne w Podgoricy', date:'2026-09-03', url:B+'2026/09/centrum-lokalne-w-podgoricy.html', img:IMG.podgorica, d:{en:'The Zabjelo Local Centre competition entry in Montenegro.', pl:'Praca konkursowa Centrum Zabjelo w Czarnogórze.'}}
];

/* blog EN – Substack (wpisy zapasowe; na stronie próba pobrania na żywo) */
const substackFeed = 'https://tomaszgesiak.substack.com/feed';
const substackPosts = [
  {t:'2030 DARK SIDE of AI', date:'2026-11-19', url:SB+'2030-dark-side-of-ai', img:SC+'7c78bec0-faeb-4dc3-a76c-f0c1e1bd3781_5007x3338.jpeg', d:'Architecture is about responsibility for space, its social context and human experience – not just a fast AI render.'},
  {t:'CADMAT 2027', date:'2026-11-12', url:SB+'cadmat-2027', img:SC+'ec7c6d3b-5dfc-4bb9-b334-5ecf1b38c9fd_1004x1004.png', d:'The CADMAT conference in Kraków: AI, cybersecurity and BIM.'},
  {t:'AI in MaOIA PL', date:'2026-11-05', url:SB+'ai-in-maoia-pl', img:SC+'9eaddd12-de43-4da2-a71f-1b8558d7b055_1663x881.jpeg', d:'The Mazovian Chamber of Architects forms an AI team to guide digital transformation in architectural practice.'},
  {t:'AI CONFERENCE KIELCE 2026', date:'2026-10-10', url:SB+'ai-conference-kielce-2026', img:SC+'7aeabb98-8e9c-4074-a360-dd3887aa7289_1120x715.jpeg', d:'Report from the 2nd National Architectural Conference in Kielce: “Artificial Intelligence, but the Revolution is Real”.'},
  {t:'LITTLE MINIMALISM', date:'2026-08-06', url:SB+'little-minimalism', img:SC+'3200ec52-8dcd-4212-aa9a-14ec9b2b5946_1080x1080.png', d:'Can minimalism work in a small apartment? Yes – here is how.'}
];

const social = [
  ['Blog', B], ['Substack','https://tomaszgesiak.substack.com/'], ['LinkedIn','https://www.linkedin.com/in/tomaszgesiak/'], ['Instagram','https://www.instagram.com/tomaaszgesiak/'],
  ['Facebook','https://www.facebook.com/TomaszGesiak/61554422925950/'], ['YouTube','https://www.youtube.com/@TOMASZGESIAK'],
  ['Pinterest','https://pl.pinterest.com/TOMASZ_GESIAK/'], ['TikTok','https://www.tiktok.com/@tomaszgesiakarchitect'], ['X / Twitter','https://twitter.com/TomaszGesiak']
];

return {ui, projects, aiArts, bimArts, fallbackPosts, substackPosts, substackFeed, social};
})();

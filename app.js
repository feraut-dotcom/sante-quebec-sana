(function () {
  "use strict";

  var D = window.APP_DATA;
  var main = document.getElementById("main");
  var lexById = {};
  D.lexique.forEach(function (t) { lexById[t.id] = t; });

  // ---------- Progression (navigateur de Sana seulement) ----------
  var KEY = "sana-reseau-v1";
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { lus: {}, scores: {} }; }
    catch (e) { return { lus: {}, scores: {} }; }
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* stockage indisponible */ }
  }

  // ---------- Outils ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function setNav(name) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.dataset.nav === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function render(html, title) {
    main.innerHTML = html;
    document.title = (title ? title + " – " : "") + "L'application de Sana";
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  // ---------- Dialogue pour un terme ----------
  var dlg = document.getElementById("term-dialog");
  function showTerm(id) {
    var t = lexById[id];
    if (!t) return;
    document.getElementById("term-title").textContent = t.terme;
    document.getElementById("term-def").textContent = t.def;
    document.getElementById("term-en").textContent = t.en;
    if (dlg.showModal) dlg.showModal();
  }
  main.addEventListener("click", function (e) {
    var b = e.target.closest("[data-term]");
    if (b) showTerm(b.dataset.term);
  });

  // ---------- Accueil ----------
  (function barcode() {
    var w = [3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2];
    var el = document.querySelector(".band-code");
    if (el) el.innerHTML = w.map(function (x) { return '<span style="width:' + x + 'px"></span>'; }).join("");
  })();
  function viewHome() {
    setNav("accueil");
    var total = D.lecons.length;
    var lus = D.lecons.filter(function (l) { return state.lus[l.id]; }).length;
    function stepsFor(volet) {
      return D.lecons.map(function (l, i) {
        if ((l.volet || "reseau") !== volet) return "";
        var sc = state.scores[l.id];
        return '<li><a class="step' + (state.lus[l.id] ? " done" : "") + '" href="#lecon-' + l.id + '">' +
          '<span class="step-num">' + (state.lus[l.id] ? "✓" : (i + 1)) + '</span>' +
          '<span><span class="step-title">' + esc(l.titre) + '</span><span class="step-sum">' + esc(l.resume) + '</span></span>' +
          '<span class="step-meta">' + l.duree + ' min' +
          (sc ? '<br><span class="score-chip">Quiz ' + sc.best + '/' + sc.total + '</span>' : "") +
          '</span></a></li>';
      }).join("");
    }
    var steps =
      '<h2 class="part">Le réseau de la santé</h2><ol class="path">' + stepsFor("reseau") + '</ol>' +
      '<h2 class="part">Le volet pharmaceutique</h2><p class="part-sum">Accès au remboursement, pharmacies, parties prenantes : de quoi répondre à une offre comme celle d\'Amgen.</p>' +
      '<ol class="path">' + stepsFor("pharma") + '</ol>' +
      '<a class="reading-cta" href="#lectures"><strong>Lectures en français</strong>' +
      '<span>' + (D.lectures || []).length + ' documents officiels à lire sur le volet pharmaceutique</span></a>';

    render(
      '<section class="hero">' +
        '<h1>L\'application de SANA</h1>' +
        '<p class="subtitle">Pour devenir ministre de la santé au Québec</p>' +
        '<p class="lead">' + total + ' leçons courtes sur la santé et le médicament au Québec, un lexique de ' + D.lexique.length +
        ' mots-clés avec leur équivalent anglais, et des quiz pour vérifier que tout est acquis avant tes entretiens.</p>' +
        '<div class="progress-line"><span>' + lus + ' leçon' + (lus > 1 ? "s" : "") + ' sur ' + total + '</span>' +
        '<div class="meter" aria-hidden="true"><i style="width:' + Math.round(lus / total * 100) + '%"></i></div></div>' +
      '</section>' +
      steps +
      '<p class="note">Contenu à jour au ' + esc(D.miseAJour) + '. Ta progression reste dans ce navigateur.</p>',
      ""
    );
  }

  // ---------- Leçon ----------
  function viewLesson(id) {
    setNav("accueil");
    var idx = D.lecons.findIndex(function (l) { return l.id === id; });
    if (idx < 0) return viewHome();
    var l = D.lecons[idx];
    var next = D.lecons[idx + 1];

    var body = l.sections.map(function (s) {
      var h = '<section><h2>' + esc(s.titre) + '</h2>';
      if (s.texte) h += s.texte.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
      if (s.puces) h += '<ul>' + s.puces.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>';
      if (s.chronologie) h += '<ol class="timeline">' + s.chronologie.map(function (c) {
        return '<li><span class="when">' + esc(c[0]) + '</span> <span class="what">' + esc(c[1]) + '</span><span class="why">' + esc(c[2]) + '</span></li>';
      }).join("") + '</ol>';
      return h + '</section>';
    }).join("");

    var terms = l.termes.filter(function (t) { return lexById[t]; }).map(function (t) {
      return '<button type="button" class="term-btn" data-term="' + t + '">' + esc(lexById[t].terme) + '</button>';
    }).join("");

    render(
      '<a class="crumb" href="#accueil">← Toutes les leçons</a>' +
      '<article class="lesson">' +
        '<header class="lesson-head"><p class="step-sum">Leçon ' + (idx + 1) + ' sur ' + D.lecons.length + ' · ' + l.duree + ' min</p>' +
        '<h1>' + esc(l.titre) + '</h1><p class="lead">' + esc(l.resume) + '</p></header>' +
        body +
        '<div class="keep"><h2>À retenir</h2><ul>' + l.aRetenir.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join("") + '</ul></div>' +
        '<h2>Mots-clés de la leçon</h2><p class="step-sum">Touche un mot pour voir sa définition et sa traduction.</p>' +
        '<div class="terms">' + terms + '</div>' +
        (l.volet === "pharma" ? '<a class="reading-cta" style="margin:0 0 24px" href="#lectures"><strong>Aller plus loin</strong><span>Lis les documents officiels en français sur ce sujet</span></a>' : '') +
        '<div class="actions">' +
          '<a class="btn" href="#quiz-' + l.id + '" data-mark="' + l.id + '">Faire le quiz de la leçon</a>' +
          (next ? '<a class="btn ghost" href="#lecon-' + next.id + '" data-mark="' + l.id + '">Leçon suivante</a>' : '<a class="btn ghost" href="#quiz-examen" data-mark="' + l.id + '">Passer l\'examen final</a>') +
        '</div>' +
      '</article>',
      l.titre
    );
    main.querySelectorAll("[data-mark]").forEach(function (a) {
      a.addEventListener("click", function () { state.lus[a.dataset.mark] = true; save(); });
    });
  }

  // ---------- Lectures ----------
  function viewReadings() {
    setNav("accueil");
    state.lectures = state.lectures || {};
    var L = D.lectures || [];
    var groups = [];
    L.forEach(function (r, i) {
      var g = groups.find(function (x) { return x.nom === r.groupe; });
      if (!g) { g = { nom: r.groupe, items: [] }; groups.push(g); }
      g.items.push({ r: r, i: i });
    });
    var done = L.filter(function (r, i) { return state.lectures[i]; }).length;
    render(
      '<a class="crumb" href="#accueil">← Toutes les leçons</a>' +
      '<h1>Lectures en français</h1>' +
      '<p class="lead step-sum">' + L.length + ' documents officiels sur le volet pharmaceutique, dans un ordre de lecture conseillé. Coche ceux que tu as lus.</p>' +
      '<div class="progress-line"><span id="read-count">' + done + ' lu' + (done > 1 ? "s" : "") + ' sur ' + L.length + '</span>' +
      '<div class="meter" aria-hidden="true"><i id="read-meter" style="width:' + Math.round(done / L.length * 100) + '%"></i></div></div>' +
      groups.map(function (g) {
        return '<h2 class="part">' + esc(g.nom) + '</h2><ul class="readings">' + g.items.map(function (it) {
          var r = it.r, id = "lu-" + it.i;
          return '<li class="reading' + (state.lectures[it.i] ? " is-read" : "") + '">' +
            '<input type="checkbox" id="' + id + '" data-read="' + it.i + '"' + (state.lectures[it.i] ? " checked" : "") + ' aria-label="Marquer comme lu : ' + esc(r.titre) + '">' +
            '<div><a href="' + esc(r.url) + '" target="_blank" rel="noopener" class="reading-title">' + esc(r.titre) + '</a>' +
            '<span class="reading-meta">' + esc(r.source) + ' · ' + esc(r.type) + '</span>' +
            '<p>' + esc(r.pourquoi) + '</p></div></li>';
        }).join("") + '</ul>';
      }).join("") +
      '<p class="note">Liens vérifiés le 9 novembre 2026. Ils s\'ouvrent dans un nouvel onglet.</p>',
      "Lectures"
    );
    main.querySelectorAll("[data-read]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        state.lectures[cb.dataset.read] = cb.checked;
        cb.closest(".reading").classList.toggle("is-read", cb.checked);
        save();
        var n = L.filter(function (r, i) { return state.lectures[i]; }).length;
        document.getElementById("read-count").textContent = n + " lu" + (n > 1 ? "s" : "") + " sur " + L.length;
        document.getElementById("read-meter").style.width = Math.round(n / L.length * 100) + "%";
      });
    });
  }

  // ---------- Lexique ----------
  var lexFilter = { q: "", cat: "Tous" };
  function viewLexicon() {
    setNav("lexique");
    var cats = ["Tous"].concat(D.lexique.reduce(function (acc, t) { if (acc.indexOf(t.cat) < 0) acc.push(t.cat); return acc; }, []));
    render(
      '<h1>Lexique</h1><p class="lead step-sum">' + D.lexique.length + ' mots et sigles du réseau, avec leur équivalent anglais.</p>' +
      '<div class="toolbar">' +
        '<input class="search" type="search" id="lex-q" placeholder="Chercher un mot, un sigle ou un terme anglais" aria-label="Chercher dans le lexique" value="' + esc(lexFilter.q) + '">' +
        '<div class="chips" role="group" aria-label="Catégories">' + cats.map(function (c) {
          return '<button type="button" class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (c === lexFilter.cat) + '">' + esc(c) + '</button>';
        }).join("") + '</div>' +
      '</div>' +
      '<div id="lex-out" aria-live="polite"></div>',
      "Lexique"
    );
    var out = document.getElementById("lex-out");
    function draw() {
      var q = norm(lexFilter.q.trim());
      var items = D.lexique.filter(function (t) {
        if (lexFilter.cat !== "Tous" && t.cat !== lexFilter.cat) return false;
        if (!q) return true;
        return norm(t.terme + " " + t.def + " " + t.en).indexOf(q) >= 0;
      });
      if (!items.length) { out.innerHTML = '<p class="empty">Aucun mot ne correspond. Essaie un autre terme ou la catégorie « Tous ».</p>'; return; }
      var groups = {};
      items.forEach(function (t) { (groups[t.cat] = groups[t.cat] || []).push(t); });
      out.innerHTML = Object.keys(groups).map(function (g) {
        return '<div class="lex-group"><h2>' + esc(g) + '</h2><ul class="lex">' + groups[g].map(function (t) {
          return '<li><div><dfn>' + esc(t.terme) + '</dfn><span class="en" lang="en">' + esc(t.en) + '</span></div><div>' + esc(t.def) + '</div></li>';
        }).join("") + '</ul></div>';
      }).join("");
    }
    document.getElementById("lex-q").addEventListener("input", function (e) { lexFilter.q = e.target.value; draw(); });
    main.querySelectorAll("[data-cat]").forEach(function (b) {
      b.addEventListener("click", function () {
        lexFilter.cat = b.dataset.cat;
        main.querySelectorAll("[data-cat]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        draw();
      });
    });
    draw();
  }

  // ---------- Cartes mémoire ----------
  function viewCards() {
    setNav("cartes");
    var mode = "def"; // "def" : terme -> définition ; "en" : anglais -> français
    var deck = shuffle(D.lexique);
    var i = 0;
    render(
      '<h1>Cartes mémoire</h1><p class="lead step-sum">Lis le recto, essaie de répondre à voix haute, puis retourne la carte.</p>' +
      '<div class="chips" role="group" aria-label="Sens des cartes">' +
        '<button type="button" class="chip" data-mode="def" aria-pressed="true">Mot → définition</button>' +
        '<button type="button" class="chip" data-mode="en" aria-pressed="false">Anglais → français</button>' +
      '</div>' +
      '<div class="card-wrap"><button type="button" class="card" id="card" aria-live="polite"></button></div>' +
      '<div class="card-nav"><button type="button" class="btn ghost" id="prev">Précédente</button>' +
      '<span class="count" id="count"></span>' +
      '<button type="button" class="btn" id="next">Suivante</button></div>',
      "Cartes"
    );
    var card = document.getElementById("card");
    function draw() {
      var t = deck[i];
      var front, back;
      if (mode === "def") {
        front = '<span class="big">' + esc(t.terme) + '</span><span class="en-sub" lang="en">' + esc(t.en) + '</span>' +
          '<span class="hint">Que veut dire ce mot ?</span>';
        back = '<span class="card-term">' + esc(t.terme) + '</span><span class="en-sub" lang="en">' + esc(t.en) + '</span>' +
          '<span class="card-def">' + esc(t.def) + '</span>';
      } else {
        front = '<span class="big" lang="en">' + esc(t.en) + '</span><span class="hint">Comment le dit-on dans le réseau ?</span>';
        back = '<span class="big">' + esc(t.terme) + '</span><span class="en-sub" lang="en">' + esc(t.en) + '</span>' +
          '<span class="card-def">' + esc(t.def) + '</span>';
      }
      card.classList.remove("flipped");
      card.innerHTML = '<span class="face front">' + front + '<span class="hint">Touche pour retourner</span></span><span class="face back">' + back + '</span>';
      card.setAttribute("aria-label", "Carte " + (i + 1) + ". Touche pour retourner.");
      document.getElementById("count").textContent = (i + 1) + " / " + deck.length;
    }
    card.addEventListener("click", function () { card.classList.toggle("flipped"); });
    document.getElementById("next").addEventListener("click", function () { i = (i + 1) % deck.length; draw(); });
    document.getElementById("prev").addEventListener("click", function () { i = (i - 1 + deck.length) % deck.length; draw(); });
    main.querySelectorAll("[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        mode = b.dataset.mode;
        main.querySelectorAll("[data-mode]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        draw();
      });
    });
    draw();
  }

  // ---------- Quiz ----------
  // Mélange les réponses pour que la bonne ne soit jamais au même endroit
  function mix(q) {
    var order = shuffle(q.choix.map(function (c, k) { return k; }));
    return {
      q: q.q, explication: q.explication, difficile: q.difficile, cle: q.cle || q.q,
      choix: order.map(function (k) { return q.choix[k]; }),
      bonne: order.indexOf(q.bonne)
    };
  }
  function pickDistractors(t, n) {
    var same = shuffle(D.lexique.filter(function (x) { return x.id !== t.id && x.cat === t.cat; }));
    var other = shuffle(D.lexique.filter(function (x) { return x.id !== t.id && x.cat !== t.cat; }));
    return same.concat(other).slice(0, n);
  }
  function lexQuestion(t, sens) {
    var opts = [t].concat(pickDistractors(t, 3));
    if (sens === "en") {
      return { cle: "lex:" + t.id, q: "Comment dit-on « " + t.en + " » dans le réseau québécois ?",
        choix: opts.map(function (o) { return o.terme; }), bonne: 0,
        explication: t.terme + " : " + t.def };
    }
    return { cle: "lex:" + t.id, q: "Quel terme correspond à cette définition : « " + t.def + " »",
      choix: opts.map(function (o) { return o.terme; }), bonne: 0,
      explication: t.terme + " se dit « " + t.en + " » en anglais." };
  }
  function lexiconQuestions(n) {
    return shuffle(D.lexique).slice(0, n).map(function (t, i) {
      return lexQuestion(t, i % 2 ? "en" : "def");
    });
  }
  function allLessonQuestions(filter) {
    var all = [];
    D.lecons.forEach(function (l) { if (!filter || filter(l)) all = all.concat(l.quiz); });
    return all;
  }
  function errorKeys() {
    state.erreurs = state.erreurs || {};
    return Object.keys(state.erreurs).filter(function (k) { return state.erreurs[k]; });
  }
  function getQuiz(id) {
    var qs, titre, lecon = null;
    if (id === "lexique") { titre = "Quiz du lexique"; qs = lexiconQuestions(15); }
    else if (id === "examen") { titre = "Examen final"; qs = shuffle(allLessonQuestions()).slice(0, 25).concat(lexiconQuestions(5)); }
    else if (id === "pharma") { titre = "Examen pharmaceutique"; qs = shuffle(allLessonQuestions(function (l) { return l.volet === "pharma"; })).slice(0, 25); }
    else if (id === "difficile") { titre = "Défi : questions difficiles"; qs = shuffle(allLessonQuestions().filter(function (q) { return q.difficile; })).slice(0, 20); }
    else if (id === "erreurs") {
      titre = "Revoir mes erreurs";
      var keys = errorKeys();
      var byKey = {};
      allLessonQuestions().forEach(function (q) { byKey[q.q] = q; });
      qs = keys.map(function (k) {
        if (k.indexOf("lex:") === 0) {
          var t = lexById[k.slice(4)];
          return t ? lexQuestion(t, Math.random() < 0.5 ? "en" : "def") : null;
        }
        return byKey[k] || null;
      }).filter(Boolean);
      if (!qs.length) return { titre: titre, questions: [], vide: true };
      qs = shuffle(qs).slice(0, 25);
    } else {
      lecon = D.lecons.find(function (x) { return x.id === id; });
      if (!lecon) return null;
      titre = lecon.titre; qs = shuffle(lecon.quiz);
    }
    return { titre: titre, questions: qs.map(mix), lecon: lecon };
  }

  function viewQuizList() {
    setNav("quiz");
    var tiles = '</div><h2 class="part">Par leçon</h2><div class="quiz-list">' + D.lecons.map(function (l, i) {
      var sc = state.scores[l.id];
      return '<a class="quiz-tile" href="#quiz-' + l.id + '"><strong>' + esc(l.titre) + '</strong><span>' +
        l.quiz.length + ' questions' + (sc ? ' · meilleur score ' + sc.best + '/' + sc.total : '') + '</span></a>';
    }).join("");
    function best(k) { var sc = state.scores[k]; return sc ? ' · meilleur score ' + sc.best + '/' + sc.total : ''; }
    var nErr = errorKeys().length;
    var nHard = allLessonQuestions().filter(function (q) { return q.difficile; }).length;
    var nAll = allLessonQuestions().length;
    render(
      '<h1>Quiz</h1><p class="lead step-sum">' + nAll + ' questions au total. Les réponses sont mélangées à chaque essai et chaque réponse est expliquée.</p>' +
      '<div class="quiz-list top">' +
        '<a class="quiz-tile feature" href="#quiz-examen"><strong>Examen final</strong><span>30 questions tirées de toutes les leçons et du lexique' + best("examen") + '</span></a>' +
        '<a class="quiz-tile hard" href="#quiz-difficile"><strong>Défi : questions difficiles</strong><span>20 mises en situation et questions pièges, parmi ' + nHard + best("difficile") + '</span></a>' +
        (nErr
          ? '<a class="quiz-tile errors" href="#quiz-erreurs"><strong>Revoir mes erreurs</strong><span>' + nErr + ' question' + (nErr > 1 ? 's' : '') + ' ratée' + (nErr > 1 ? 's' : '') + ' à retravailler</span></a>'
          : '<div class="quiz-tile errors is-empty"><strong>Revoir mes erreurs</strong><span>Tes questions ratées apparaîtront ici. Une bonne réponse les retire.</span></div>') +
        '<a class="quiz-tile" href="#quiz-pharma"><strong>Examen pharmaceutique</strong><span>25 questions sur le médicament et la pharmacie' + best("pharma") + '</span></a>' +
        '<a class="quiz-tile" href="#quiz-lexique"><strong>Quiz du lexique</strong><span>15 mots : définitions et traductions anglaises' + best("lexique") + '</span></a>' +
        tiles +
      '</div>',
      "Quiz"
    );
  }

  function viewQuiz(id) {
    setNav("quiz");
    var quiz = getQuiz(id);
    if (!quiz) return viewQuizList();
    if (quiz.vide) {
      return render('<a class="crumb" href="#quiz">← Tous les quiz</a><h1>Aucune erreur à revoir</h1>' +
        '<p class="lead step-sum">Bravo. Fais un examen ou un défi : chaque question ratée sera gardée ici.</p>' +
        '<div class="actions"><a class="btn" href="#quiz-examen">Passer l\'examen final</a></div>', "Erreurs");
    }
    var qs = quiz.questions;
    var i = 0, score = 0, misses = [];

    function drawQuestion() {
      var q = qs[i];
      render(
        '<a class="crumb" href="#quiz">← Tous les quiz</a>' +
        '<div class="qhead"><strong>' + esc(quiz.titre) + '</strong><span>Question ' + (i + 1) + ' sur ' + qs.length + '</span></div>' +
        '<div class="qbar" aria-hidden="true"><i style="width:' + (i / qs.length * 100) + '%"></i></div>' +
        (q.difficile ? '<span class="badge-hard">Difficile</span>' : '') +
        '<p class="question" id="qtext">' + esc(q.q) + '</p>' +
        '<ul class="options" role="list" aria-labelledby="qtext">' + q.choix.map(function (c, k) {
          return '<li><button type="button" class="opt" data-k="' + k + '">' + esc(c) + '</button></li>';
        }).join("") + '</ul>' +
        '<div id="fb" aria-live="polite"></div>',
        quiz.titre
      );
      main.querySelectorAll(".opt").forEach(function (b) {
        b.addEventListener("click", function () { answer(+b.dataset.k); });
      });
    }

    function answer(k) {
      var q = qs[i];
      var ok = k === q.bonne;
      if (ok) score++; else misses.push(q);
      state.erreurs = state.erreurs || {};
      if (ok) delete state.erreurs[q.cle]; else state.erreurs[q.cle] = true;
      save();
      main.querySelectorAll(".opt").forEach(function (b) {
        var bk = +b.dataset.k;
        b.disabled = true;
        if (bk === q.bonne) b.classList.add("right");
        else if (bk === k) b.classList.add("wrong");
      });
      var last = i === qs.length - 1;
      document.getElementById("fb").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "ko") + '"><strong>' + (ok ? "Bonne réponse." : "Pas tout à fait.") + '</strong>' + esc(q.explication) + '</div>' +
        '<button type="button" class="btn" id="go">' + (last ? "Voir mon résultat" : "Question suivante") + '</button>';
      var go = document.getElementById("go");
      go.focus();
      go.addEventListener("click", function () {
        if (last) drawResult(); else { i++; drawQuestion(); }
      });
    }

    function drawResult() {
      var prev = state.scores[id];
      var isBest = !prev || score > prev.best;
      if (id !== "erreurs") state.scores[id] = { best: Math.max(score, prev ? prev.best : 0), total: qs.length };
      if (quiz.lecon) state.lus[quiz.lecon.id] = true;
      save();
      var pct = score / qs.length;
      var msg = pct === 1 ? "Parfait. Tu maîtrises ce sujet."
        : pct >= 0.75 ? "Très bien. Relis les explications ci-dessous pour consolider."
        : pct >= 0.5 ? "Bon début. Une relecture de la leçon t'aidera."
        : "Reprends la leçon tranquillement, puis réessaie.";
      render(
        '<a class="crumb" href="#quiz">← Tous les quiz</a>' +
        '<div class="result"><h1>' + esc(quiz.titre) + '</h1>' +
        '<div class="big-score">' + score + '/' + qs.length + '</div>' +
        '<p>' + msg + (isBest && prev && id !== "erreurs" ? " Nouveau meilleur score !" : "") + '</p>' +
        (misses.length && id !== "erreurs" ? '<p>Les ' + misses.length + ' question' + (misses.length > 1 ? 's' : '') + ' ratée' + (misses.length > 1 ? 's sont gardées' : ' est gardée') + ' dans « Revoir mes erreurs ».</p>' : '') +
        '<div class="actions" style="justify-content:center">' +
          '<a class="btn" href="#quiz-' + id + '" id="again">Recommencer</a>' +
          (quiz.lecon ? '<a class="btn ghost" href="#lecon-' + quiz.lecon.id + '">Relire la leçon</a>' : '<a class="btn ghost" href="#lexique">Ouvrir le lexique</a>') +
        '</div>' +
        (misses.length ? '<div class="review"><h2>À revoir</h2><ol>' + misses.map(function (q) {
          return '<li><strong>' + esc(q.q) + '</strong><br><span class="ans">' + esc(q.choix[q.bonne]) + '</span><br>' + esc(q.explication) + '</li>';
        }).join("") + '</ol></div>' : '') +
        '</div>',
        quiz.titre
      );
      // Même URL : forcer un nouveau tirage
      document.getElementById("again").addEventListener("click", function (e) { e.preventDefault(); viewQuiz(id); });
    }

    drawQuestion();
  }

  // ---------- Routeur ----------
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    if (h === "main") return;
    var m;
    if ((m = h.match(/^lecon-(.+)$/))) return viewLesson(m[1]);
    if (h === "lexique") return viewLexicon();
    if (h === "lectures") return viewReadings();
    if (h === "cartes") return viewCards();
    if ((m = h.match(/^quiz-(.+)$/))) return viewQuiz(m[1]);
    if (h === "quiz") return viewQuizList();
    return viewHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();

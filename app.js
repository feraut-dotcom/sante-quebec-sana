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
      '<ol class="path">' + stepsFor("pharma") + '</ol>';

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
        front = '<span class="big">' + esc(t.terme) + '</span><span class="hint">Que veut dire ce mot ?</span>';
        back = '<span class="big" style="font-size:1.35rem">' + esc(t.def) + '</span><span class="hint" lang="en">' + esc(t.en) + '</span>';
      } else {
        front = '<span class="big" lang="en">' + esc(t.en) + '</span><span class="hint">Comment le dit-on dans le réseau ?</span>';
        back = '<span class="big">' + esc(t.terme) + '</span><span class="hint">' + esc(t.def) + '</span>';
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
  function lexiconQuestions(n) {
    return shuffle(D.lexique).slice(0, n).map(function (t) {
      var wrong = shuffle(D.lexique.filter(function (x) { return x.id !== t.id; })).slice(0, 3);
      var opts = shuffle([t].concat(wrong));
      return {
        q: "Quel terme correspond à cette définition : « " + t.def + " »",
        choix: opts.map(function (o) { return o.terme; }),
        bonne: opts.indexOf(t),
        explication: t.terme + " se dit « " + t.en + " » en anglais."
      };
    });
  }
  function getQuiz(id) {
    if (id === "lexique") return { titre: "Quiz du lexique", questions: lexiconQuestions(10) };
    if (id === "examen") {
      var all = [];
      D.lecons.forEach(function (l) { all = all.concat(l.quiz); });
      return { titre: "Examen final", questions: shuffle(all).slice(0, 15).concat(lexiconQuestions(5)) };
    }
    if (id === "pharma") {
      var ph = [];
      D.lecons.forEach(function (l) { if (l.volet === "pharma") ph = ph.concat(l.quiz); });
      return { titre: "Examen pharmaceutique", questions: shuffle(ph) };
    }
    var l = D.lecons.find(function (x) { return x.id === id; });
    return l ? { titre: l.titre, questions: shuffle(l.quiz), lecon: l } : null;
  }

  function viewQuizList() {
    setNav("quiz");
    var tiles = D.lecons.map(function (l, i) {
      var sc = state.scores[l.id];
      return '<a class="quiz-tile" href="#quiz-' + l.id + '"><strong>' + esc(l.titre) + '</strong><span>' +
        l.quiz.length + ' questions' + (sc ? ' · meilleur score ' + sc.best + '/' + sc.total : '') + '</span></a>';
    }).join("");
    var ex = state.scores.examen, lx = state.scores.lexique, px = state.scores.pharma;
    var nPharma = D.lecons.reduce(function (n, l) { return n + (l.volet === "pharma" ? l.quiz.length : 0); }, 0);
    render(
      '<h1>Quiz</h1><p class="lead step-sum">Chaque réponse est expliquée. Tes meilleurs scores sont gardés dans ce navigateur.</p>' +
      '<div class="quiz-list">' +
        '<a class="quiz-tile feature" href="#quiz-examen"><strong>Examen final</strong><span>20 questions tirées de toutes les leçons et du lexique' + (ex ? ' · meilleur score ' + ex.best + '/' + ex.total : '') + '</span></a>' +
        '<a class="quiz-tile" href="#quiz-pharma"><strong>Examen pharmaceutique</strong><span>' + nPharma + ' questions sur le médicament et la pharmacie' + (px ? ' · meilleur score ' + px.best + '/' + px.total : '') + '</span></a>' +
        '<a class="quiz-tile" href="#quiz-lexique"><strong>Quiz du lexique</strong><span>10 définitions à reconnaître' + (lx ? ' · meilleur score ' + lx.best + '/' + lx.total : '') + '</span></a>' +
        tiles +
      '</div>',
      "Quiz"
    );
  }

  function viewQuiz(id) {
    setNav("quiz");
    var quiz = getQuiz(id);
    if (!quiz) return viewQuizList();
    var qs = quiz.questions;
    var i = 0, score = 0, misses = [];

    function drawQuestion() {
      var q = qs[i];
      render(
        '<a class="crumb" href="#quiz">← Tous les quiz</a>' +
        '<div class="qhead"><strong>' + esc(quiz.titre) + '</strong><span>Question ' + (i + 1) + ' sur ' + qs.length + '</span></div>' +
        '<div class="qbar" aria-hidden="true"><i style="width:' + (i / qs.length * 100) + '%"></i></div>' +
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
      state.scores[id] = { best: Math.max(score, prev ? prev.best : 0), total: qs.length };
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
        '<p>' + msg + (isBest && prev ? " Nouveau meilleur score !" : "") + '</p>' +
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
    if (h === "cartes") return viewCards();
    if ((m = h.match(/^quiz-(.+)$/))) return viewQuiz(m[1]);
    if (h === "quiz") return viewQuizList();
    return viewHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();

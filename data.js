// Contenu de l'app — à jour au 9 novembre 2026.
// Chaque leçon : id, titre, résumé, sections (titre + paragraphes/puces), à retenir, termes clés (ids du lexique), quiz.

window.APP_DATA = {
  miseAJour: "9 novembre 2026",

  lecons: [
    {
      id: "organisations",
      titre: "Qui fait quoi dans le réseau",
      resume: "Le ministère oriente, Santé Québec gère, les établissements soignent.",
      duree: 12,
      sections: [
        {
          titre: "La logique d'ensemble",
          texte: [
            "Le réseau de la santé et des services sociaux (RSSS) repose sur trois niveaux. Le ministère définit les orientations, les politiques et le financement. Santé Québec, une société d'État, gère les opérations. Les établissements offrent les soins et services à la population.",
            "Cette séparation entre « orientations » et « opérations » est au cœur de la loi 15 adoptée en 2023. C'est aussi ce que le nouveau gouvernement remet en cause en 2026."
          ]
        },
        {
          titre: "Le contexte politique de novembre 2026",
          puces: [
            "Le Parti Québécois (PQ) a remporté l'élection générale du 5 octobre 2026. Paul St-Pierre Plamondon est premier ministre.",
            "La ministre de la Santé, de la Prévention et des Aînés est Marie-Karlynn Laflamme, ancienne vice-rectrice de l'UQAC.",
            "Le sous-ministre est Martin Beaumont depuis le 2 novembre 2026. Il dirigeait auparavant Santé Québec – CHU de Québec.",
            "La Coalition avenir Québec (CAQ) a gouverné de 2018 à 2026, avec François Legault puis Christine Fréchette."
          ]
        },
        {
          titre: "Les organismes nationaux",
          puces: [
            "Santé Québec : employeur unique d'environ 330 000 travailleurs depuis le 1er décembre 2024. Sa PDG est Geneviève Biron.",
            "RAMQ (Régie de l'assurance maladie du Québec) : administre l'assurance maladie et l'assurance médicaments, et paie les médecins.",
            "INSPQ (Institut national de santé publique) : expertise et surveillance en santé publique.",
            "INESSS (Institut national d'excellence en santé et services sociaux) : évalue médicaments et technologies, produit des guides de pratique.",
            "CSBE (Commissaire à la santé et au bien-être) : évalue la performance du système de façon indépendante.",
            "Protecteur du citoyen : ombudsman qui traite les plaintes des usagers en dernier recours.",
            "Héma-Québec (sang et tissus), Urgences-santé (préhospitalier à Montréal et Laval), OPHQ (personnes handicapées)."
          ]
        },
        {
          titre: "Les établissements",
          texte: [
            "Depuis la loi 10 de 2015, chaque région compte un ou plusieurs CISSS ou CIUSSS (centres intégrés, universitaires ou non). Ils regroupent hôpitaux, CLSC, CHSLD, centres jeunesse et centres de réadaptation. Avec Santé Québec, ils portent désormais le nom « Santé Québec – [région] ».",
            "Les CHU (CHUM, CUSM, CHU de Québec, CHU Sainte-Justine) offrent des soins surspécialisés, de l'enseignement et de la recherche."
          ]
        },
        {
          titre: "La première ligne et les partenaires",
          puces: [
            "GMF (groupe de médecine de famille) : médecins, infirmières et professionnels qui suivent une clientèle inscrite.",
            "CLSC : soins de proximité, soutien à domicile, services sociaux. Le PQ veut en faire la « porte d'entrée » du réseau.",
            "Pharmacies communautaires : rôle élargi (prescription pour problèmes mineurs, vaccination).",
            "Organismes communautaires : itinérance, santé mentale, proches aidants.",
            "FMOQ (médecins de famille) et FMSQ (spécialistes) négocient la rémunération des médecins.",
            "Ordres professionnels : Collège des médecins (CMQ), OIIQ (infirmières), Ordre des pharmaciens.",
            "Syndicats : FIQ, CSN, FTQ, CSQ, APTS négocient les conventions collectives."
          ]
        }
      ],
      aRetenir: [
        "Ministère = orientations ; Santé Québec = opérations ; établissements = services.",
        "Santé Québec est une société d'État, employeur unique d'environ 330 000 personnes.",
        "Le PQ, au pouvoir depuis octobre 2026, veut abolir graduellement Santé Québec."
      ],
      termes: ["rsss", "etablissement", "cisss", "societe-etat", "gmf", "clsc", "ramq", "inspq", "inesss", "csbe"],
      quiz: [
        {
          q: "Quel est le rôle principal de Santé Québec ?",
          choix: ["Définir les grandes orientations de santé", "Gérer les opérations du réseau", "Payer les médecins", "Évaluer la performance de façon indépendante"],
          bonne: 1,
          explication: "Santé Québec gère les opérations. Le ministère définit les orientations, la RAMQ paie les médecins et le CSBE évalue la performance."
        },
        {
          q: "Quel organisme paie les médecins et administre l'assurance médicaments ?",
          choix: ["INESSS", "INSPQ", "RAMQ", "CSBE"],
          bonne: 2,
          explication: "La Régie de l'assurance maladie du Québec (RAMQ) administre l'assurance maladie et médicaments et rémunère les médecins."
        },
        {
          q: "Qui est ministre de la Santé, de la Prévention et des Aînés en novembre 2026 ?",
          choix: ["Christian Dubé", "Sonia Bélanger", "Marie-Karlynn Laflamme", "Geneviève Biron"],
          bonne: 2,
          explication: "Marie-Karlynn Laflamme (PQ) est ministre depuis le 21 octobre 2026. Geneviève Biron est la PDG de Santé Québec."
        },
        {
          q: "Que signifie le sigle CISSS ?",
          choix: ["Centre intégré de santé et de services sociaux", "Conseil interne des soins spécialisés", "Centre d'information sur la santé et la sécurité", "Comité intersectoriel de santé sociale"],
          bonne: 0,
          explication: "Un CISSS est un centre intégré de santé et de services sociaux ; le « U » de CIUSSS indique une mission universitaire."
        },
        {
          q: "Quel organisme évalue de façon indépendante la performance du système ?",
          choix: ["Le Protecteur du citoyen", "Le Commissaire à la santé et au bien-être", "Le Collège des médecins", "Héma-Québec"],
          bonne: 1,
          explication: "Le CSBE apprécie la performance du système. Le Protecteur du citoyen traite les plaintes."
        },
        {
          q: "Selon le PQ, quelle structure devrait devenir la « porte d'entrée » du réseau ?",
          choix: ["Les CHU", "Les GMF", "Les CLSC", "Les pharmacies"],
          bonne: 2,
          explication: "Le PQ a promis 150 M$ sur 4 ans pour faire des CLSC la porte d'entrée et rendre le réseau moins hospitalo-centrique."
        }
      ]
    },

    {
      id: "reformes",
      titre: "Dix ans de réformes",
      resume: "De la fusion de 2015 au démantèlement annoncé de Santé Québec.",
      duree: 12,
      sections: [
        {
          titre: "Le balancier centralisation – décentralisation",
          texte: [
            "Depuis 2015, le Québec oscille entre centralisation et décentralisation. Chaque gouvernement réorganise les structures : fusion des établissements en 2015, agence nationale en 2024, promesse de régionalisation en 2026.",
            "En entretien, retenir cette idée : les réformes de structure mobilisent énormément d'énergie, et leur effet sur les soins est souvent débattu."
          ]
        },
        {
          titre: "La chronologie à connaître",
          chronologie: [
            ["2015", "Loi 10 (Gaétan Barrette)", "Fusion d'environ 180 établissements en 22 CISSS et CIUSSS, plus quelques établissements non fusionnés. Abolition des agences régionales."],
            ["2020", "Maisons des aînés", "Nouveau modèle d'hébergement à taille humaine pour remplacer les CHSLD vétustes."],
            ["2022", "Plan santé (Christian Dubé)", "Plan pour un réseau « plus humain et plus performant » : accès, personnel, données, infrastructures."],
            ["2022-2023", "Guichet d'accès à la première ligne (GAP)", "Rendez-vous ponctuels pour les patients sans médecin de famille, par le 811 ou en ligne."],
            ["2023", "Loi limitant les agences de placement", "Réduction progressive du recours à la main-d'œuvre indépendante (MOI)."],
            ["Déc. 2023", "Loi 15", "Crée Santé Québec, employeur unique. Adoptée sous bâillon."],
            ["Déc. 2024", "Entrée en fonction de Santé Québec", "Séparation orientations / opérations ; mandat de retour à l'équilibre budgétaire."],
            ["Oct. 2025", "Loi 2 (ex-projet de loi 106)", "Loi spéciale sur la rémunération des médecins adoptée sous bâillon : cibles de performance et sanctions contre le désengagement."],
            ["Déc. 2025", "Entente avec la FMOQ", "Recul du gouvernement, loi 2 suspendue puis amendée. Enveloppe des médecins de famille bonifiée de 14,5 % (435 M$)."],
            ["Juin 2026", "Nouveau mode de rémunération", "Médecins de famille payés à 50 % par capitation, 30 % à l'acte, 20 % à l'heure."],
            ["Oct. 2026", "Programme du PQ", "Abolition graduelle de Santé Québec, régionalisation des décisions, fin du « mur-à-mur », 150 M$ pour les CLSC."]
          ]
        },
        {
          titre: "Les politiques de fond",
          puces: [
            "Politique gouvernementale de prévention en santé et Programme national de santé publique : agir sur les déterminants de la santé.",
            "Plan d'action interministériel en santé mentale et Programme québécois pour les troubles mentaux (PQPTM).",
            "Politique nationale pour les personnes proches aidantes et virage vers le soutien à domicile.",
            "Accès aux services en langue anglaise : programmes d'accès régionaux, garantis par la loi pour les personnes d'expression anglaise."
          ]
        }
      ],
      aRetenir: [
        "Loi 10 (2015) = fusion et centralisation ; loi 15 (2023) = Santé Québec ; loi 2 (2025) = rémunération des médecins.",
        "Plusieurs grandes lois ont été adoptées sous bâillon, ce qui a nourri les tensions.",
        "La nouvelle rémunération des médecins de famille combine capitation, acte et tarif horaire."
      ],
      termes: ["baillon", "projet-loi", "mur-a-mur", "capitation", "acte", "desengagement", "moi", "gap"],
      quiz: [
        {
          q: "Quelle loi a fusionné les établissements en CISSS et CIUSSS en 2015 ?",
          choix: ["Loi 2", "Loi 10", "Loi 15", "Loi 106"],
          bonne: 1,
          explication: "La loi 10, portée par Gaétan Barrette, a créé les CISSS et CIUSSS et aboli les agences régionales."
        },
        {
          q: "Quelle loi a créé Santé Québec ?",
          choix: ["Loi 10", "Loi 2", "Loi 15", "Loi 21"],
          bonne: 2,
          explication: "La loi 15, adoptée en décembre 2023, a créé Santé Québec, entrée en fonction le 1er décembre 2024."
        },
        {
          q: "Que signifie « adopter une loi sous bâillon » ?",
          choix: ["L'adopter à l'unanimité", "Limiter le temps de débat pour accélérer l'adoption", "La soumettre à référendum", "La faire valider par les tribunaux"],
          bonne: 1,
          explication: "Le bâillon (closure) écourte les débats parlementaires. Les lois 15 et 2 ont été adoptées ainsi."
        },
        {
          q: "Depuis juin 2026, comment sont rémunérés les médecins de famille ?",
          choix: ["100 % à l'acte", "50 % capitation, 30 % acte, 20 % tarif horaire", "Salaire fixe de l'État", "50 % acte, 50 % performance"],
          bonne: 1,
          explication: "L'entente avec la FMOQ a introduit un mode mixte à trois composantes, la première réforme majeure en 50 ans."
        },
        {
          q: "Que vise principalement la loi 2 de 2025 ?",
          choix: ["Les agences de placement", "La rémunération et la performance des médecins", "La santé publique", "Les CHSLD"],
          bonne: 1,
          explication: "La loi 2 liait une part de la rémunération des médecins à des cibles de performance ; elle a provoqué une crise avant d'être amendée."
        },
        {
          q: "Qu'est-ce que le « mur-à-mur » que le PQ veut éliminer ?",
          choix: ["Les murs des vieux hôpitaux", "Une solution uniforme imposée partout", "Les listes d'attente", "Les heures supplémentaires"],
          bonne: 1,
          explication: "Le mur-à-mur désigne une règle identique pour toutes les régions, sans tenir compte des réalités locales."
        }
      ]
    },

    {
      id: "acces",
      titre: "L'accès à la première ligne",
      resume: "Le nœud du système : sans première ligne solide, tout déborde.",
      duree: 8,
      sections: [
        {
          titre: "Pourquoi c'est l'enjeu central",
          texte: [
            "Quand une personne ne peut pas voir un médecin ou une infirmière près de chez elle, elle se rend à l'urgence. Santé Québec estimait que 44,5 % des visites à l'urgence concernaient des besoins non urgents qui pourraient être traités en première ligne.",
            "Renforcer la première ligne est donc présenté par tous les partis comme la clé pour désengorger les hôpitaux."
          ]
        },
        {
          titre: "Les outils d'accès",
          puces: [
            "GAMF (Guichet d'accès à un médecin de famille) : liste d'attente des patients orphelins pour être inscrits.",
            "GAP (Guichet d'accès à la première ligne) : rendez-vous ponctuel pour ceux qui n'ont pas de médecin de famille.",
            "811 : Info-Santé (infirmière) et Info-Social (intervenant psychosocial), 24 h sur 24.",
            "Pharmaciens : prescription pour certains problèmes mineurs et renouvellements.",
            "IPS (infirmières praticiennes spécialisées) : peuvent diagnostiquer et prescrire, et suivre leur propre clientèle."
          ]
        },
        {
          titre: "Les cibles et la réalité",
          texte: [
            "Le Plan santé visait la prise en charge des 8,5 millions de Québécois d'ici l'été 2026. Avec l'entente FMOQ de décembre 2025, la cible est devenue 7,6 millions de personnes prises en charge d'ici le 30 juin 2026.",
            "Le vocabulaire a glissé de « avoir un médecin de famille » vers « être pris en charge » par une équipe ou un milieu de soins. C'est un point subtil à maîtriser en entretien."
          ]
        }
      ],
      aRetenir: [
        "44,5 % des visites à l'urgence seraient traitables en première ligne.",
        "GAMF = attendre d'être inscrit ; GAP = obtenir un rendez-vous ponctuel.",
        "On parle de plus en plus de « prise en charge » plutôt que de « médecin de famille »."
      ],
      termes: ["premiere-ligne", "prise-en-charge", "orphelin", "gamf", "gap", "ips", "interdisciplinarite", "pertinence"],
      quiz: [
        {
          q: "Quelle part des visites à l'urgence pourrait être traitée en première ligne selon Santé Québec ?",
          choix: ["Environ 10 %", "Environ 25 %", "Environ 44 %", "Environ 70 %"],
          bonne: 2,
          explication: "Santé Québec a évalué à 44,5 % la part des visites à l'urgence pour des besoins non urgents."
        },
        {
          q: "Quelle est la différence entre le GAMF et le GAP ?",
          choix: ["Aucune, ce sont deux noms du même service", "Le GAMF sert à être inscrit auprès d'un médecin ; le GAP donne un rendez-vous ponctuel", "Le GAMF est pour les enfants, le GAP pour les adultes", "Le GAP est privé, le GAMF public"],
          bonne: 1,
          explication: "Le GAMF est la liste d'attente pour une inscription ; le GAP répond à un besoin ponctuel des patients orphelins."
        },
        {
          q: "Qu'est-ce qu'un « patient orphelin » ?",
          choix: ["Un enfant pris en charge par la DPJ", "Une personne sans médecin de famille", "Un patient transféré d'un autre hôpital", "Un patient sans carte RAMQ"],
          bonne: 1,
          explication: "Un patient orphelin n'est inscrit auprès d'aucun médecin de famille (unattached patient)."
        },
        {
          q: "Quelle cible de prise en charge l'entente FMOQ fixait-elle pour le 30 juin 2026 ?",
          choix: ["5 millions", "7,6 millions", "8,5 millions", "9 millions"],
          bonne: 1,
          explication: "La cible initiale de 8,5 millions (Plan santé) a été ramenée à 7,6 millions dans l'entente de décembre 2025."
        },
        {
          q: "Que peut faire une IPS ?",
          choix: ["Seulement administrer des vaccins", "Diagnostiquer, prescrire et suivre une clientèle", "Diriger un CISSS", "Remplacer un pharmacien"],
          bonne: 1,
          explication: "Les infirmières praticiennes spécialisées ont un rôle élargi en première ligne, proche de celui du médecin pour certains suivis."
        }
      ]
    },

    {
      id: "urgences",
      titre: "Urgences et hôpitaux",
      resume: "Civières pleines, patients en attente d'hébergement : le goulot d'étranglement.",
      duree: 7,
      sections: [
        {
          titre: "Les indicateurs qui font les manchettes",
          puces: [
            "Durée médiane de séjour à l'urgence : 5 h 12 en 2025 selon l'IEDM.",
            "Durée moyenne de séjour sur civière : autour de 18 à 19 heures.",
            "Taux d'occupation des civières : jusqu'à 124 % à l'hiver 2025.",
            "Environ 10 000 visites par jour dans les urgences du Québec en période de pointe."
          ]
        },
        {
          titre: "Pourquoi l'urgence déborde",
          texte: [
            "Le problème ne vient pas seulement de l'entrée (trop de visites), mais aussi de la sortie. Des patients hospitalisés qui n'ont plus besoin de soins aigus attendent une place en CHSLD, en ressource intermédiaire ou du soutien à domicile. On les appelle les patients NSA (niveau de soins alternatif).",
            "Ils occupent des lits, donc les patients de l'urgence ne peuvent pas monter aux étages : c'est un problème de fluidité hospitalière."
          ]
        },
        {
          titre: "Le pic hivernal et le délestage",
          texte: [
            "Chaque hiver, grippe, COVID et VRS font monter l'achalandage. Les établissements peuvent alors pratiquer le délestage : reporter des chirurgies ou des activités non urgentes pour libérer du personnel et des lits."
          ]
        }
      ],
      aRetenir: [
        "Le débordement des urgences est un problème d'entrée ET de sortie.",
        "Les patients NSA bloquent des lits faute de place en hébergement ou à domicile.",
        "Durée de séjour, taux d'occupation et achalandage sont les trois indicateurs clés."
      ],
      termes: ["dms", "civiere", "taux-occupation", "nsa", "fluidite", "delestage", "achalandage"],
      quiz: [
        {
          q: "Que désigne un patient NSA ?",
          choix: ["Un patient non suivi par un médecin", "Un patient hospitalisé qui n'a plus besoin de soins aigus et attend une autre ressource", "Un patient sans assurance", "Un patient en soins palliatifs"],
          bonne: 1,
          explication: "NSA = niveau de soins alternatif (ALC en anglais) : le patient attend une place en hébergement ou du soutien à domicile."
        },
        {
          q: "Qu'appelle-t-on « fluidité hospitalière » ?",
          choix: ["La qualité de l'eau potable dans l'hôpital", "La circulation des patients entre l'urgence, les étages et la sortie", "Le budget de l'hôpital", "La rapidité des tests de laboratoire"],
          bonne: 1,
          explication: "La fluidité (patient flow) mesure la capacité de faire avancer les patients sans blocage."
        },
        {
          q: "Qu'est-ce que le délestage ?",
          choix: ["Le licenciement de cadres", "Le report d'activités non urgentes pour libérer des ressources", "La fermeture d'une urgence la nuit", "Le transfert de patients vers l'Ontario"],
          bonne: 1,
          explication: "Le délestage consiste à reporter chirurgies ou activités pour faire face à une surcharge."
        },
        {
          q: "Quel taux d'occupation des civières a été atteint à l'hiver 2025 ?",
          choix: ["85 %", "100 %", "124 %", "160 %"],
          bonne: 2,
          explication: "Santé Québec a rapporté un sommet de 124 % pour l'ensemble du Québec en février 2025."
        }
      ]
    },

    {
      id: "main-oeuvre",
      titre: "Main-d'œuvre et relations de travail",
      resume: "Pénurie, TSO, agences privées et négociations tendues.",
      duree: 7,
      sections: [
        {
          titre: "Une pénurie structurelle",
          texte: [
            "Le réseau manque d'infirmières, de préposés aux bénéficiaires et de professionnels. Le vieillissement du personnel, l'épuisement et l'absentéisme aggravent la situation.",
            "Pour combler les trous, les établissements ont longtemps eu recours au temps supplémentaire obligatoire (TSO) et aux agences privées (main-d'œuvre indépendante, MOI)."
          ]
        },
        {
          titre: "Les leviers utilisés",
          puces: [
            "Loi de 2023 pour réduire progressivement le recours aux agences de placement.",
            "Recrutement international, notamment d'infirmières.",
            "Formations accélérées (par exemple pour les préposés aux bénéficiaires).",
            "Revendication syndicale de ratios sécuritaires patients-soignants.",
            "Amélioration de la conciliation travail-famille pour l'attraction et la rétention."
          ]
        },
        {
          titre: "Les acteurs des négociations",
          texte: [
            "Les médecins négocient par leurs fédérations (FMOQ, FMSQ) avec le gouvernement. Les autres employés négocient leurs conventions collectives par leurs syndicats (FIQ pour les infirmières, CSN, FTQ, CSQ, APTS). Les négociations de 2023 ont donné lieu à des grèves du Front commun et de la FIQ.",
            "La crise de la loi 2 en 2025 a montré le pouvoir des fédérations médicales : départs de médecins, retraites anticipées, puis recul du gouvernement."
          ]
        }
      ],
      aRetenir: [
        "TSO et MOI sont des solutions de dépannage devenues structurelles, puis contestées.",
        "Attraction et rétention du personnel sont des priorités de toutes les politiques récentes.",
        "Les médecins négocient via leurs fédérations, les autres via leurs syndicats."
      ],
      termes: ["tso", "moi", "convention", "pab", "attraction", "ratios"],
      quiz: [
        {
          q: "Que signifie TSO ?",
          choix: ["Taux de satisfaction organisationnelle", "Temps supplémentaire obligatoire", "Traitement des soins ordinaires", "Tableau de suivi opérationnel"],
          bonne: 1,
          explication: "Le TSO oblige un employé à rester au-delà de son quart ; il est vivement dénoncé par les syndicats infirmiers."
        },
        {
          q: "Que désigne la « MOI » ?",
          choix: ["Le ministère de l'Organisation interne", "La main-d'œuvre indépendante, venant d'agences privées", "Les médecins omnipraticiens inscrits", "Les mesures d'optimisation intégrées"],
          bonne: 1,
          explication: "La main-d'œuvre indépendante (agency staff) coûte cher et désorganise les équipes ; une loi de 2023 vise à la réduire."
        },
        {
          q: "Quel syndicat représente majoritairement les infirmières ?",
          choix: ["FMOQ", "FIQ", "FMSQ", "OIIQ"],
          bonne: 1,
          explication: "La FIQ est un syndicat. L'OIIQ est l'ordre professionnel, la FMOQ et la FMSQ représentent les médecins."
        },
        {
          q: "Qu'est-ce que l'OIIQ ?",
          choix: ["Un syndicat", "Un ordre professionnel qui encadre la pratique infirmière", "Une agence de placement", "Un organisme de recherche"],
          bonne: 1,
          explication: "L'Ordre des infirmières et infirmiers du Québec protège le public en encadrant la profession."
        }
      ]
    },

    {
      id: "aines-social",
      titre: "Aînés, santé publique et social",
      resume: "Vieillissement, soutien à domicile, prévention et itinérance.",
      duree: 8,
      sections: [
        {
          titre: "Le vieillissement de la population",
          texte: [
            "Le Québec vieillit rapidement. Les besoins en soins de longue durée et en soutien à domicile augmentent plus vite que les ressources.",
            "Les politiques récentes cherchent à prioriser le maintien à domicile, plus souhaité par les aînés et moins coûteux que l'hébergement."
          ]
        },
        {
          titre: "Les milieux de vie",
          puces: [
            "CHSLD : centres d'hébergement et de soins de longue durée, publics ou privés conventionnés.",
            "Maisons des aînés : nouveau modèle public, plus petit et plus humain.",
            "RPA : résidences privées pour aînés, encadrées par une certification.",
            "RI-RTF : ressources intermédiaires et de type familial.",
            "Soutien à domicile (SAD) : soins et services offerts chez la personne, souvent avec les proches aidants."
          ]
        },
        {
          titre: "Santé publique et social",
          puces: [
            "La santé publique agit sur les déterminants de la santé : revenu, logement, éducation, environnement.",
            "Le directeur national de santé publique conseille le gouvernement et pilote les mesures sanitaires.",
            "Itinérance en hausse : Québec a débloqué 28 M$ d'aide d'urgence en octobre 2026.",
            "En dépendances, l'approche de réduction des méfaits est reconnue.",
            "La DPJ (protection de la jeunesse) fait partie du réseau des services sociaux."
          ]
        }
      ],
      aRetenir: [
        "Le soutien à domicile est la priorité affichée face au vieillissement.",
        "CHSLD, Maisons des aînés, RPA et RI-RTF sont des milieux de vie différents.",
        "Le « S » de RSSS rappelle que le réseau couvre aussi les services sociaux."
      ],
      termes: ["chsld", "maison-aines", "rpa", "sad", "proche-aidant", "determinants", "reduction-mefaits", "dpj"],
      quiz: [
        {
          q: "Que signifie CHSLD ?",
          choix: ["Centre hospitalier de soins de longue durée", "Centre d'hébergement et de soins de longue durée", "Centre d'hygiène et de santé locale", "Comité d'hébergement social local"],
          bonne: 1,
          explication: "Le CHSLD est un centre d'hébergement et de soins de longue durée (long-term care home)."
        },
        {
          q: "Quelle est la différence entre une RPA et un CHSLD ?",
          choix: ["Aucune", "La RPA est une résidence privée pour aînés plus autonomes ; le CHSLD accueille des personnes en grande perte d'autonomie", "Le CHSLD est privé, la RPA publique", "La RPA est réservée aux anglophones"],
          bonne: 1,
          explication: "Les RPA sont privées et accueillent des aînés plutôt autonomes ; les CHSLD offrent des soins de longue durée."
        },
        {
          q: "Qu'est-ce que la réduction des méfaits ?",
          choix: ["Une politique de sanctions", "Une approche pragmatique qui réduit les conséquences négatives de la consommation", "Un programme de coupures budgétaires", "Un plan de sécurité dans les hôpitaux"],
          bonne: 1,
          explication: "La réduction des méfaits (harm reduction) vise à limiter les risques sans exiger l'abstinence."
        },
        {
          q: "Que désignent les « déterminants de la santé » ?",
          choix: ["Les médicaments remboursés", "Les facteurs comme le revenu, le logement et l'éducation qui influencent la santé", "Les indicateurs des urgences", "Les critères pour devenir médecin"],
          bonne: 1,
          explication: "Les déterminants de la santé sont les facteurs individuels, sociaux et environnementaux qui influencent la santé."
        }
      ]
    },

    {
      id: "echecs",
      titre: "Les leçons des échecs",
      resume: "COVID en CHSLD, réformes de structure, cibles ratées.",
      duree: 9,
      sections: [
        {
          titre: "La COVID-19 dans les CHSLD (2020)",
          texte: [
            "La première vague a durement frappé les milieux de vie pour aînés. La Protectrice du citoyen a conclu que les CHSLD étaient mal préparés et que la préparation avait été centrée sur les hôpitaux. Elle a formulé 27 recommandations, surtout au ministère.",
            "Le CSBE et la coroner Géhane Kamel (notamment sur le CHSLD Herron) ont aussi enquêté. Constats récurrents : manque de gestionnaires sur place, déplacement du personnel entre établissements, pénurie d'équipement de protection."
          ]
        },
        {
          titre: "La loi 10 et l'hypercentralisation",
          texte: [
            "Les méga-établissements créés en 2015 ont éloigné les décisions du terrain et affaibli la gestion de proximité. Ce constat est largement partagé, y compris par les gouvernements suivants."
          ]
        },
        {
          titre: "Santé Québec, une réforme contestée",
          puces: [
            "Critiquée dès son lancement par les syndicats, qui doutaient de son effet sur les soins.",
            "Polémique sur le nombre de fonctionnaires, puis abolition de postes de cadres quelques mois après sa création.",
            "Moins de deux ans après son entrée en fonction, le PQ annonce son démantèlement : la ministre la qualifie de niveau de gestion inutile."
          ]
        },
        {
          titre: "Autres dossiers sensibles",
          puces: [
            "La crise de la loi 2 : départs et retraites anticipées de médecins, puis recul du gouvernement.",
            "La promesse d'un médecin de famille pour tous, répétée à chaque élection et jamais atteinte.",
            "Les projets informatiques : retards du Dossier santé numérique (DSN).",
            "Les infrastructures vétustes et le déficit de maintien d'actifs."
          ]
        }
      ],
      aRetenir: [
        "L'échec en CHSLD a révélé l'importance de la gestion de proximité.",
        "Les réformes de structure à répétition fatiguent le réseau.",
        "En entretien, parler des échecs avec nuance : constat, cause, leçon tirée."
      ],
      termes: ["gestion-proximite", "imputabilite", "pci", "reddition", "mise-en-oeuvre"],
      quiz: [
        {
          q: "Combien de recommandations la Protectrice du citoyen a-t-elle formulées dans son rapport final sur les CHSLD ?",
          choix: ["7", "17", "27", "47"],
          bonne: 2,
          explication: "Le rapport final de novembre 2021 contenait 27 recommandations, principalement adressées au ministère."
        },
        {
          q: "Quel constat revient dans les rapports sur la COVID en CHSLD ?",
          choix: ["Trop de gestionnaires sur place", "Le manque de gestionnaires de proximité dans chaque CHSLD", "Des surplus de personnel", "Une préparation centrée sur les CHSLD"],
          bonne: 1,
          explication: "L'absence de gestionnaire sur place a ralenti la réaction ; la préparation était centrée sur les hôpitaux."
        },
        {
          q: "Quel reproche principal est fait à la loi 10 de 2015 ?",
          choix: ["Elle a trop décentralisé", "Elle a éloigné les décisions du terrain", "Elle a augmenté le salaire des médecins", "Elle a créé Santé Québec"],
          bonne: 1,
          explication: "La fusion en méga-établissements a affaibli la gestion de proximité."
        },
        {
          q: "Comment la nouvelle ministre décrit-elle Santé Québec ?",
          choix: ["Une réussite à consolider", "Un niveau de gestion inutile", "Un modèle à exporter", "Une structure à doubler"],
          bonne: 1,
          explication: "Marie-Karlynn Laflamme a dit que Santé Québec ne fait plus partie des plans et souhaite décentraliser."
        }
      ]
    },

    {
      id: "entretien",
      titre: "Réussir l'entretien",
      resume: "Questions probables, formulations clés et pièges de langue.",
      duree: 8,
      sections: [
        {
          titre: "Ce que le jury veut entendre",
          texte: [
            "Un bon entretien montre trois choses : une connaissance du contexte actuel, une lecture nuancée des réformes, et la capacité de parler de résultats pour l'usager.",
            "Il vaut mieux éviter de prendre parti sur le plan politique. Parler plutôt de conditions de réussite, de données et de mise en œuvre."
          ]
        },
        {
          titre: "Questions probables",
          puces: [
            "Quels sont, selon vous, les principaux défis du réseau de la santé québécois ?",
            "Que pensez-vous de l'abolition annoncée de Santé Québec ?",
            "Comment améliorer l'accès à la première ligne ?",
            "Comment mesureriez-vous la performance d'une politique de santé ?",
            "Comment travailleriez-vous avec des partenaires aux intérêts divergents ?",
            "Votre expérience hors Québec : qu'apporte-t-elle à notre réseau ?"
          ]
        },
        {
          titre: "Formulations utiles",
          puces: [
            "« L'enjeu prioritaire demeure l'accès à la première ligne, qui conditionne la pression sur les urgences. »",
            "« Une réforme de structure ne suffit pas ; il faut une mise en œuvre appuyée sur les équipes sur le terrain. »",
            "« Je privilégie des indicateurs de performance clairs et une reddition de comptes transparente. »",
            "« Il faut tenir compte des réalités régionales plutôt que d'appliquer du mur-à-mur. »",
            "« Mon approche est centrée sur l'usager et fondée sur les données probantes. »",
            "« Je mise sur la concertation avec les parties prenantes et l'intersectorialité. »"
          ]
        },
        {
          titre: "Pièges de langue pour une anglophone",
          puces: [
            "Dire « le réseau » plutôt que « le système » : c'est l'usage québécois courant.",
            "« Usager » dans le réseau, plutôt que « client » ; « patient » en contexte clinique.",
            "« Imputabilité » est un québécisme accepté pour accountability ; « reddition de comptes » désigne le processus.",
            "Cible (target), échéancier (timeline), livrable (deliverable), arrimage (alignment), chantier (workstream).",
            "« Courriel » et non « e-mail », « rencontre » pour meeting, « suivi » pour follow-up."
          ]
        }
      ],
      aRetenir: [
        "Structure de réponse : constat, enjeu, piste de solution, indicateur de réussite.",
        "Rester nuancée sur les choix politiques, précise sur les faits.",
        "Réutiliser le vocabulaire du réseau : usager, prise en charge, première ligne, imputabilité."
      ],
      termes: ["usager", "donnees-probantes", "parties-prenantes", "intersectorialite", "arrimage", "chantier", "echeancier", "livrable"],
      quiz: [
        {
          q: "Comment dit-on « accountability » dans le réseau québécois ?",
          choix: ["Comptabilité", "Imputabilité", "Responsabilisation fiscale", "Audit"],
          bonne: 1,
          explication: "« Imputabilité » est le terme courant ; « reddition de comptes » désigne le fait de rendre compte."
        },
        {
          q: "Quel mot désigne une personne qui reçoit des services du réseau ?",
          choix: ["Client", "Usager", "Bénéficiaire fiscal", "Abonné"],
          bonne: 1,
          explication: "« Usager » est le terme officiel dans la loi et dans les établissements."
        },
        {
          q: "Comment traduire « workstream » dans un projet de réforme ?",
          choix: ["Flux de travail", "Chantier", "Ruisseau", "Courant"],
          bonne: 1,
          explication: "On parle de « chantiers » d'une réforme ou d'un plan d'action."
        },
        {
          q: "Que veut dire « arrimage » ?",
          choix: ["Un amarrage de bateau seulement", "L'alignement ou la coordination entre deux services ou politiques", "Un report de projet", "Un financement"],
          bonne: 1,
          explication: "« Assurer l'arrimage » entre deux programmes signifie les coordonner (alignment)."
        }
      ]
    }
  ],

  // Lexique : id, terme, définition, anglais, catégorie
  lexique: [
    // Gouvernance
    { id: "rsss", terme: "RSSS", def: "Réseau de la santé et des services sociaux : ensemble des établissements publics et organismes du Québec.", en: "Health and social services network", cat: "Gouvernance" },
    { id: "msss", terme: "MSSS", def: "Ministère de la Santé et des Services sociaux, renommé en 2026 ministère de la Santé, de la Prévention et des Aînés.", en: "Ministry of Health and Social Services", cat: "Gouvernance" },
    { id: "societe-etat", terme: "Société d'État", def: "Organisme public doté d'une gestion autonome, comme Santé Québec ou Hydro-Québec.", en: "Crown corporation", cat: "Gouvernance" },
    { id: "etablissement", terme: "Établissement", def: "Organisation qui offre les services : hôpitaux, CLSC, CHSLD regroupés sous une même direction.", en: "Institution / health facility", cat: "Gouvernance" },
    { id: "cisss", terme: "CISSS / CIUSSS", def: "Centre intégré (universitaire) de santé et de services sociaux, créé par la loi 10 en 2015.", en: "Integrated (university) health and social services centre", cat: "Gouvernance" },
    { id: "orientations", terme: "Orientations ministérielles", def: "Grandes directions fixées par le ministère que le réseau doit appliquer.", en: "Ministerial policy directions", cat: "Gouvernance" },
    { id: "reddition", terme: "Reddition de comptes", def: "Obligation de rendre compte des résultats obtenus et des fonds utilisés.", en: "Accountability reporting", cat: "Gouvernance" },
    { id: "imputabilite", terme: "Imputabilité", def: "Responsabilité d'un gestionnaire face aux résultats dont il a la charge.", en: "Accountability", cat: "Gouvernance" },
    { id: "gestion-proximite", terme: "Gestion de proximité", def: "Présence de gestionnaires sur le terrain, près des équipes et des usagers.", en: "On-site / front-line management", cat: "Gouvernance" },
    { id: "mur-a-mur", terme: "Mur-à-mur", def: "Solution uniforme imposée partout, sans adaptation aux réalités locales.", en: "One-size-fits-all", cat: "Gouvernance" },
    { id: "baillon", terme: "Bâillon", def: "Procédure parlementaire qui limite le temps des débats pour accélérer l'adoption d'une loi.", en: "Closure (parliamentary)", cat: "Gouvernance" },
    { id: "projet-loi", terme: "Projet de loi (PL)", def: "Texte déposé à l'Assemblée nationale avant son adoption ; il devient ensuite une loi.", en: "Bill", cat: "Gouvernance" },
    { id: "mise-en-oeuvre", terme: "Mise en œuvre", def: "Passage d'une politique ou d'une loi à l'action concrète sur le terrain.", en: "Implementation", cat: "Gouvernance" },
    { id: "ramq", terme: "RAMQ", def: "Régie de l'assurance maladie du Québec : assurance maladie, assurance médicaments, paiement des médecins.", en: "Quebec Health Insurance Board", cat: "Gouvernance" },
    { id: "inspq", terme: "INSPQ", def: "Institut national de santé publique du Québec : expertise et surveillance.", en: "National Public Health Institute", cat: "Gouvernance" },
    { id: "inesss", terme: "INESSS", def: "Institut national d'excellence en santé et services sociaux : évaluation des médicaments et technologies, guides de pratique.", en: "Quebec's health technology assessment agency", cat: "Gouvernance" },
    { id: "csbe", terme: "CSBE", def: "Commissaire à la santé et au bien-être : évalue de façon indépendante la performance du système.", en: "Health and Welfare Commissioner", cat: "Gouvernance" },

    // Accès et soins
    { id: "premiere-ligne", terme: "Première ligne", def: "Soins de proximité et premier contact avec le réseau : GMF, CLSC, pharmacies.", en: "Primary care / front line", cat: "Accès et soins" },
    { id: "deuxieme-ligne", terme: "Deuxième et troisième lignes", def: "Soins spécialisés (hôpitaux) et surspécialisés (CHU).", en: "Secondary and tertiary care", cat: "Accès et soins" },
    { id: "prise-en-charge", terme: "Prise en charge", def: "Suivi d'un patient par un professionnel ou une équipe de soins.", en: "Patient attachment", cat: "Accès et soins" },
    { id: "orphelin", terme: "Patient orphelin", def: "Personne qui n'est inscrite auprès d'aucun médecin de famille.", en: "Unattached patient", cat: "Accès et soins" },
    { id: "gmf", terme: "GMF", def: "Groupe de médecine de famille : clinique interdisciplinaire avec une clientèle inscrite.", en: "Family medicine group", cat: "Accès et soins" },
    { id: "clsc", terme: "CLSC", def: "Centre local de services communautaires : soins de proximité, soutien à domicile, services sociaux.", en: "Local community service centre", cat: "Accès et soins" },
    { id: "gamf", terme: "GAMF", def: "Guichet d'accès à un médecin de famille : liste d'attente pour être inscrit.", en: "Family doctor waiting list", cat: "Accès et soins" },
    { id: "gap", terme: "GAP", def: "Guichet d'accès à la première ligne : rendez-vous ponctuel pour les patients orphelins.", en: "Primary care access point", cat: "Accès et soins" },
    { id: "ips", terme: "IPS", def: "Infirmière praticienne spécialisée : peut diagnostiquer, prescrire et suivre une clientèle.", en: "Nurse practitioner", cat: "Accès et soins" },
    { id: "trajectoire", terme: "Trajectoire de soins", def: "Parcours prévu du patient entre les services du réseau.", en: "Care pathway", cat: "Accès et soins" },
    { id: "corridor", terme: "Corridor de services", def: "Entente qui organise le passage d'un patient d'un service ou établissement à un autre.", en: "Service pathway / referral agreement", cat: "Accès et soins" },
    { id: "pertinence", terme: "Pertinence des soins", def: "Offrir le bon soin, au bon moment, à la bonne personne, par le bon professionnel.", en: "Appropriateness of care", cat: "Accès et soins" },
    { id: "interdisciplinarite", terme: "Interdisciplinarité", def: "Travail d'équipe entre différentes professions autour d'un même patient.", en: "Interprofessional collaboration", cat: "Accès et soins" },
    { id: "usager", terme: "Usager", def: "Personne qui reçoit des services du réseau ; terme officiel dans la loi.", en: "Service user / patient", cat: "Accès et soins" },
    { id: "patient-partenaire", terme: "Patient partenaire", def: "Patient qui participe aux décisions et à l'amélioration des soins.", en: "Patient partner", cat: "Accès et soins" },

    // Hôpital
    { id: "dms", terme: "Durée moyenne de séjour (DMS)", def: "Temps moyen passé à l'urgence ou à l'hôpital par un patient.", en: "Average length of stay", cat: "Hôpital et urgences" },
    { id: "civiere", terme: "Civière", def: "Lit d'urgence ; un patient « sur civière » attend souvent d'être admis.", en: "Stretcher", cat: "Hôpital et urgences" },
    { id: "taux-occupation", terme: "Taux d'occupation", def: "Part des places (civières, lits) occupées ; peut dépasser 100 %.", en: "Occupancy rate", cat: "Hôpital et urgences" },
    { id: "nsa", terme: "NSA", def: "Niveau de soins alternatif : patient hospitalisé qui attend une place ailleurs.", en: "ALC (alternate level of care)", cat: "Hôpital et urgences" },
    { id: "fluidite", terme: "Fluidité hospitalière", def: "Capacité de faire circuler les patients de l'urgence aux étages puis à la sortie.", en: "Patient flow", cat: "Hôpital et urgences" },
    { id: "delestage", terme: "Délestage", def: "Report d'activités non urgentes pour libérer du personnel et des lits.", en: "Service offloading", cat: "Hôpital et urgences" },
    { id: "achalandage", terme: "Achalandage", def: "Affluence, nombre de visites ou de patients.", en: "Patient volume / traffic", cat: "Hôpital et urgences" },
    { id: "pci", terme: "PCI", def: "Prévention et contrôle des infections.", en: "Infection prevention and control (IPAC)", cat: "Hôpital et urgences" },

    // Main-d'œuvre
    { id: "tso", terme: "TSO", def: "Temps supplémentaire obligatoire imposé au personnel.", en: "Mandatory overtime", cat: "Main-d'œuvre" },
    { id: "moi", terme: "MOI", def: "Main-d'œuvre indépendante, fournie par des agences privées.", en: "Agency staff", cat: "Main-d'œuvre" },
    { id: "convention", terme: "Convention collective", def: "Contrat de travail négocié entre un syndicat et l'employeur.", en: "Collective agreement", cat: "Main-d'œuvre" },
    { id: "acte", terme: "Rémunération à l'acte", def: "Paiement du médecin pour chaque service rendu.", en: "Fee-for-service", cat: "Main-d'œuvre" },
    { id: "capitation", terme: "Capitation", def: "Paiement du médecin selon le nombre de patients inscrits.", en: "Capitation", cat: "Main-d'œuvre" },
    { id: "desengagement", terme: "Désengagement", def: "Médecin qui quitte le régime public pour pratiquer au privé.", en: "Opting out (of the public plan)", cat: "Main-d'œuvre" },
    { id: "pab", terme: "PAB", def: "Préposé aux bénéficiaires : aide aux soins de base des patients.", en: "Patient care attendant / orderly", cat: "Main-d'œuvre" },
    { id: "attraction", terme: "Attraction et rétention", def: "Stratégies pour recruter du personnel et le garder.", en: "Recruitment and retention", cat: "Main-d'œuvre" },
    { id: "ratios", terme: "Ratios sécuritaires", def: "Nombre maximal de patients par soignant, revendiqué par les syndicats.", en: "Safe staffing ratios", cat: "Main-d'œuvre" },

    // Aînés et social
    { id: "chsld", terme: "CHSLD", def: "Centre d'hébergement et de soins de longue durée.", en: "Long-term care home", cat: "Aînés et social" },
    { id: "maison-aines", terme: "Maison des aînés", def: "Nouveau modèle public d'hébergement, plus petit et plus humain.", en: "Seniors' home (new model)", cat: "Aînés et social" },
    { id: "rpa", terme: "RPA", def: "Résidence privée pour aînés, encadrée par une certification.", en: "Private seniors' residence", cat: "Aînés et social" },
    { id: "sad", terme: "Soutien à domicile (SAD)", def: "Soins et services offerts au domicile de la personne.", en: "Home care", cat: "Aînés et social" },
    { id: "proche-aidant", terme: "Proche aidant", def: "Personne qui soutient bénévolement un proche malade ou en perte d'autonomie.", en: "Caregiver", cat: "Aînés et social" },
    { id: "determinants", terme: "Déterminants de la santé", def: "Facteurs (revenu, logement, éducation, environnement) qui influencent la santé.", en: "Social determinants of health", cat: "Aînés et social" },
    { id: "reduction-mefaits", terme: "Réduction des méfaits", def: "Approche qui limite les conséquences de la consommation sans exiger l'abstinence.", en: "Harm reduction", cat: "Aînés et social" },
    { id: "dpj", terme: "DPJ", def: "Direction de la protection de la jeunesse.", en: "Youth protection services", cat: "Aînés et social" },
    { id: "expression-anglaise", terme: "Personne d'expression anglaise", def: "Terme officiel pour un usager anglophone ayant droit à des services en anglais.", en: "English-speaking person", cat: "Aînés et social" },

    // Langue professionnelle
    { id: "donnees-probantes", terme: "Données probantes", def: "Résultats de recherche solides sur lesquels appuyer une décision.", en: "Evidence (evidence-based)", cat: "Langue professionnelle" },
    { id: "parties-prenantes", terme: "Parties prenantes", def: "Personnes et groupes concernés par une décision.", en: "Stakeholders", cat: "Langue professionnelle" },
    { id: "intersectorialite", terme: "Intersectorialité", def: "Collaboration entre secteurs (santé, éducation, logement, municipalités).", en: "Intersectoral collaboration", cat: "Langue professionnelle" },
    { id: "arrimage", terme: "Arrimage", def: "Coordination ou alignement entre deux services ou politiques.", en: "Alignment / coordination", cat: "Langue professionnelle" },
    { id: "chantier", terme: "Chantier", def: "Volet de travail d'une réforme ou d'un plan d'action.", en: "Workstream", cat: "Langue professionnelle" },
    { id: "echeancier", terme: "Échéancier", def: "Calendrier des étapes et dates d'un projet.", en: "Timeline / schedule", cat: "Langue professionnelle" },
    { id: "livrable", terme: "Livrable", def: "Produit attendu à une étape d'un projet.", en: "Deliverable", cat: "Langue professionnelle" },
    { id: "cible", terme: "Cible", def: "Objectif chiffré à atteindre.", en: "Target", cat: "Langue professionnelle" },
    { id: "cadre-reference", terme: "Cadre de référence", def: "Document qui précise comment appliquer une politique ou un programme.", en: "Reference framework / guidelines", cat: "Langue professionnelle" },
    { id: "plan-action", terme: "Plan d'action", def: "Document qui détaille mesures, responsables et échéances d'une politique.", en: "Action plan", cat: "Langue professionnelle" }
  ]
};

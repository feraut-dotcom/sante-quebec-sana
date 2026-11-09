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
    },

    {
      id: "circuit-medicament",
      volet: "pharma",
      titre: "Le circuit du médicament au Québec",
      resume: "De l'homologation à la Liste de la RAMQ : comment un médicament devient remboursé.",
      duree: 12,
      sections: [
        {
          titre: "Un parcours en plusieurs étapes",
          texte: [
            "Au Québec, un nouveau médicament passe par plusieurs organismes avant d'être remboursé par le régime public. Chaque étape ajoute des mois de délai : c'est pourquoi on parle d'« accès au marché » ou d'accès au remboursement.",
            "Le Québec a une particularité au Canada : il fait sa propre évaluation, par l'INESSS, au lieu de passer par l'agence fédérale (l'Agence des médicaments du Canada, AMC)."
          ]
        },
        {
          titre: "Les étapes à connaître",
          chronologie: [
            ["Étape 1", "Santé Canada", "Homologue le médicament : avis de conformité, qui confirme son innocuité, son efficacité et sa qualité."],
            ["Étape 2", "CEPMB", "Le Conseil d'examen du prix des médicaments brevetés fixe un prix plafond pour éviter les prix excessifs."],
            ["Étape 3", "INESSS", "Évalue la valeur thérapeutique, la justesse du prix, le rapport coût-efficacité et l'impact budgétaire, puis recommande au ministre d'inscrire ou non le médicament."],
            ["Étape 4", "Alliance pancanadienne pharmaceutique (APP)", "Négocie le prix au nom des provinces. Elle aboutit à une lettre d'intention, puis à une entente d'inscription confidentielle avec le fabricant."],
            ["Étape 5", "Ministre et RAMQ", "Le ministre décide ; le médicament est ajouté à la Liste des médicaments de la RAMQ, mise à jour 12 fois par an depuis 2026 (contre 9 auparavant)."]
          ]
        },
        {
          titre: "Un régime d'assurance médicaments hybride",
          puces: [
            "Depuis 1997, toute personne au Québec doit avoir une assurance médicaments : c'est une obligation légale.",
            "Le volet public du régime général (RGAM), géré par la RAMQ, couvre surtout les 65 ans et plus, les prestataires d'aide sociale et les personnes sans accès à une assurance collective.",
            "Les autres sont couverts par une assurance collective privée (employeur, association), qui doit offrir au moins la même couverture que le régime public.",
            "Les assurés paient une franchise et une coassurance, jusqu'à une contribution maximale annuelle.",
            "Médicaments d'exception : remboursés seulement si le patient répond à des critères précis (indications reconnues).",
            "Mesure du patient d'exception : permet, dans des cas particuliers, le remboursement d'un médicament qui n'est pas inscrit."
          ]
        },
        {
          titre: "Les dossiers d'actualité",
          puces: [
            "Biosimilaires : depuis le 12 avril 2022, le régime public ne rembourse, sauf exception, que la version biosimilaire d'un médicament biologique lorsqu'elle existe. Économie visée : plus de 100 M$ par an.",
            "Accélération : en octobre 2025, Québec a rejoint un processus pancanadien accéléré de négociation pour certains médicaments en oncologie, qui vise à gagner quatre à six mois.",
            "Maladies rares : entente Canada-Québec de plus de 305 M$ sur trois ans, signée en mars 2025.",
            "Assurance médicaments fédérale : Ottawa a adopté sa loi en 2024 (contraceptifs, diabète). Québec, qui a déjà son propre régime, revendique le droit de s'en retirer avec pleine compensation."
          ]
        }
      ],
      aRetenir: [
        "Santé Canada homologue, l'INESSS évalue, l'APP négocie, la RAMQ inscrit.",
        "Le Québec évalue lui-même les médicaments par l'INESSS, contrairement aux autres provinces.",
        "Régime hybride : public (RAMQ) ou privé (assurance collective), avec obligation d'être assuré."
      ],
      termes: ["acces-marche", "inesss", "app", "entente-inscription", "liste-ramq", "rgam", "med-exception", "patient-exception", "biosimilaire", "cepmb"],
      quiz: [
        {
          q: "Quel organisme évalue un nouveau médicament pour le remboursement au Québec ?",
          choix: ["L'Agence des médicaments du Canada", "L'INESSS", "Le Collège des médecins", "L'INSPQ"],
          bonne: 1,
          explication: "Le Québec a son propre organisme d'évaluation, l'INESSS, qui fait une recommandation au ministre."
        },
        {
          q: "Quel est le rôle de l'Alliance pancanadienne pharmaceutique ?",
          choix: ["Homologuer les médicaments", "Négocier les prix au nom des provinces", "Fixer le prix plafond des médicaments brevetés", "Inspecter les pharmacies"],
          bonne: 1,
          explication: "L'APP négocie les prix avec les fabricants ; le CEPMB fixe le prix plafond et Santé Canada homologue."
        },
        {
          q: "Combien de mises à jour par an de la Liste des médicaments depuis 2026 ?",
          choix: ["4", "9", "12", "24"],
          bonne: 2,
          explication: "Québec est passé de 9 à 12 mises à jour annuelles pour réduire les délais d'accès."
        },
        {
          q: "Que prévoit la politique québécoise sur les biosimilaires (2022) ?",
          choix: ["Interdire les biologiques", "Rembourser, sauf exception, la version biosimilaire quand elle existe", "Rembourser seulement les médicaments de marque", "Laisser chaque pharmacien choisir"],
          bonne: 1,
          explication: "Le régime public rembourse le biosimilaire ; les patients sur le produit de référence ont dû faire la transition."
        },
        {
          q: "Qu'est-ce qu'un « médicament d'exception » ?",
          choix: ["Un médicament retiré du marché", "Un médicament remboursé seulement si des critères précis sont respectés", "Un médicament importé", "Un médicament gratuit pour tous"],
          bonne: 1,
          explication: "Il est inscrit à la Liste mais son remboursement est limité à certaines indications reconnues."
        },
        {
          q: "Qui le régime public d'assurance médicaments couvre-t-il principalement ?",
          choix: ["Tous les travailleurs", "Les 65 ans et plus, les prestataires d'aide sociale et les personnes sans assurance collective", "Seulement les enfants", "Les personnes hospitalisées"],
          bonne: 1,
          explication: "Les personnes qui ont accès à une assurance collective privée doivent y adhérer ; les autres relèvent de la RAMQ."
        }
      ]
    },

    {
      id: "pharmacie-quebec",
      volet: "pharma",
      titre: "La pharmacie au Québec",
      resume: "Bannières, pharmaciens propriétaires, pharmacie spécialisée et nouveaux pouvoirs.",
      duree: 10,
      sections: [
        {
          titre: "Une profession en pleine transformation",
          texte: [
            "Le pharmacien québécois est devenu un acteur de la première ligne. La loi 67, adoptée en novembre 2024, et son règlement, en vigueur le 9 décembre 2026, élargissent ses actes : prescrire pour des problèmes de santé courants, administrer certains médicaments, substituer un médicament non couvert et prescrire pour des maladies chroniques déjà diagnostiquées.",
            "Pour un fabricant, cela change tout : le pharmacien n'est plus seulement celui qui sert l'ordonnance, il participe à l'amorce et au suivi du traitement."
          ]
        },
        {
          titre: "Les trois grands canaux",
          puces: [
            "Pharmacie communautaire : la pharmacie de quartier. Au Québec, seuls des pharmaciens peuvent en être propriétaires ; la plupart sont affiliés à une bannière.",
            "Pharmacie d'établissement : en hôpital ou en CHSLD, avec des pharmaciens salariés du réseau public.",
            "Pharmacie spécialisée : gère les médicaments complexes (biologiques, injectables, thérapies coûteuses), souvent avec des programmes de soutien aux patients (PSP).",
            "Canaux numériques : renouvellements en ligne, téléconsultation, applications d'observance, soins virtuels."
          ]
        },
        {
          titre: "Les bannières et les associations",
          puces: [
            "Bannières et chaînes : Jean Coutu et Brunet (Metro), Pharmaprix (Loblaw), Familiprix (coopérative de pharmaciens), Uniprix et Proxim (McKesson), entre autres.",
            "OPQ (Ordre des pharmaciens du Québec) : protège le public et encadre la pratique.",
            "AQPP (Association québécoise des pharmaciens propriétaires) : représente environ 2 100 propriétaires et négocie avec le gouvernement. Une entente de principe 2025-2030 a été annoncée en juin 2026.",
            "A.P.E.S. (Association des pharmaciens des établissements de santé) : pharmaciens d'hôpitaux.",
            "Médicaments novateurs Canada : association des fabricants de médicaments d'origine, avec un code d'éthique qui encadre les interactions avec les professionnels."
          ]
        },
        {
          titre: "Le parcours du patient en pharmacie",
          puces: [
            "Amorce du traitement : la première ordonnance et le démarrage du médicament.",
            "Couverture : vérifier le remboursement (RAMQ ou assureur privé), parfois avec une demande d'autorisation.",
            "Observance : prendre le médicament comme prescrit.",
            "Persistance : continuer le traitement dans la durée, sans l'abandonner.",
            "Suivi : ajustement, gestion des effets indésirables, renouvellement."
          ]
        }
      ],
      aRetenir: [
        "Le pharmacien peut désormais prescrire et ajuster : il est un décideur clé du parcours patient.",
        "Au Québec, une pharmacie communautaire appartient obligatoirement à des pharmaciens, souvent affiliés à une bannière.",
        "Observance (bien prendre) et persistance (continuer) sont deux notions distinctes."
      ],
      termes: ["pharmacie-communautaire", "banniere", "pharmacie-specialisee", "psp", "opq", "aqpp", "observance", "persistance", "amorce"],
      quiz: [
        {
          q: "Quelle loi élargit les actes des pharmaciens québécois, avec un règlement en vigueur en décembre 2026 ?",
          choix: ["Loi 2", "Loi 15", "Loi 67", "Loi 10"],
          bonne: 2,
          explication: "La loi 67 (2024) modernise le système professionnel ; son règlement sur les pharmaciens entre en vigueur le 9 décembre 2026."
        },
        {
          q: "Qui peut être propriétaire d'une pharmacie communautaire au Québec ?",
          choix: ["N'importe quelle entreprise", "Seulement des pharmaciens", "Seulement l'État", "Les fabricants de médicaments"],
          bonne: 1,
          explication: "La loi réserve la propriété aux pharmaciens ; les grandes chaînes fonctionnent avec des pharmaciens propriétaires affiliés."
        },
        {
          q: "Quelle est la différence entre observance et persistance ?",
          choix: ["Aucune", "L'observance : prendre le médicament comme prescrit ; la persistance : le poursuivre dans la durée", "L'observance concerne le médecin, la persistance le pharmacien", "La persistance est une mesure de prix"],
          bonne: 1,
          explication: "Un patient peut bien suivre sa posologie (observance) mais arrêter après trois mois (faible persistance)."
        },
        {
          q: "Quel organisme négocie avec le gouvernement au nom des pharmaciens propriétaires ?",
          choix: ["L'OPQ", "L'AQPP", "La FMOQ", "La RAMQ"],
          bonne: 1,
          explication: "L'AQPP négocie l'entente ; l'OPQ est l'ordre professionnel qui protège le public."
        },
        {
          q: "À quoi sert un programme de soutien aux patients (PSP) ?",
          choix: ["À fixer les prix", "À accompagner le patient : formation, remboursement, suivi du traitement", "À inspecter les pharmacies", "À former les médecins"],
          bonne: 1,
          explication: "Les PSP, fréquents en pharmacie spécialisée, aident à l'amorce, à la couverture et à la persistance."
        }
      ]
    },

    {
      id: "engagement-pharma",
      volet: "pharma",
      titre: "Stratégie et engagement en pharmacie",
      resume: "Le vocabulaire d'un poste comme celui d'Amgen : comptes, parties prenantes, valeur.",
      duree: 10,
      sections: [
        {
          titre: "Ce que recherche un fabricant",
          texte: [
            "Un poste de stratégie pharmaceutique au Québec, comme celui proposé par Amgen, combine trois volets : planifier les comptes, gérer les relations avec les parties prenantes et créer des initiatives qui apportent de la valeur aux patients.",
            "Amgen est un fabricant de médicaments biologiques présent notamment en santé cardiovasculaire (hypercholestérolémie) et en santé osseuse (ostéoporose). Une unité comme la « GMBU » (unité de médecine générale) vise ces maladies chroniques suivies en première ligne et en pharmacie."
          ]
        },
        {
          titre: "Volet 1 : planification des comptes",
          puces: [
            "Plan de comptes stratégique : document qui fixe objectifs, priorités et actions pour une bannière, une chaîne ou une association.",
            "Segmentation et priorisation des comptes selon leur influence et leur potentiel.",
            "Perspectives de marché : pratique en pharmacie, parcours patient, remboursement, concurrence, nouveaux modèles de soins.",
            "Recommandations concrètes pour les équipes interfonctionnelles (marketing, accès au marché, affaires médicales)."
          ]
        },
        {
          titre: "Volet 2 : relations avec les parties prenantes",
          puces: [
            "Cartographie des parties prenantes : qui décide, qui influence, qui utilise.",
            "Interlocuteurs : propriétaires, pharmaciens, leaders de bannières, pharmacies spécialisées, associations (AQPP, OPQ), intervenants en soins virtuels.",
            "Être la personne-ressource principale des comptes clés.",
            "Représenter l'entreprise dans les rencontres, conférences et forums du secteur.",
            "Agir de manière conforme : respect du code d'éthique de Médicaments novateurs Canada et de l'interdiction de faire de la publicité directe au public pour les médicaments sur ordonnance."
          ]
        },
        {
          titre: "Volet 3 : initiatives axées sur le patient",
          puces: [
            "Co-créer avec les pharmacies des projets d'éducation des patients, d'accès, d'amorce, d'observance et de persistance.",
            "Exemples : outils de suivi après un infarctus, dépistage de l'ostéoporose après une fracture, rappels de renouvellement.",
            "Mesurer l'impact avec des indicateurs : taux de persistance à 12 mois, délai d'amorce, nombre de patients accompagnés.",
            "Approche axée sur la valeur : bénéfice pour le patient, le pharmacien et le système, pas seulement pour les ventes."
          ]
        },
        {
          titre: "Formulations utiles en entretien",
          puces: [
            "« Avec la loi 67, le pharmacien devient un prescripteur : il faut l'intégrer dès l'amorce du traitement. »",
            "« Je bâtirais un plan de comptes par bannière, aligné sur les priorités de l'unité et sur les besoins des patients. »",
            "« La persistance est un enjeu majeur en maladies chroniques : c'est là qu'une initiative en pharmacie crée le plus de valeur. »",
            "« Toute collaboration doit être conforme et axée sur la valeur pour le patient et le système. »",
            "« Je traduirais les données de marché en recommandations concrètes pour les équipes interfonctionnelles. »"
          ]
        }
      ],
      aRetenir: [
        "Trois volets : plans de comptes, parties prenantes, initiatives axées sur le patient.",
        "Les mots-clés : bannière, amorce, observance, persistance, conformité, valeur, interfonctionnel.",
        "Relier chaque initiative à un indicateur mesurable et à un bénéfice pour le patient."
      ],
      termes: ["plan-comptes", "cartographie", "interfonctionnel", "conformite", "valeur", "soins-virtuels", "perspectives-marche", "parcours-patient"],
      quiz: [
        {
          q: "Qu'est-ce qu'un plan de comptes stratégique ?",
          choix: ["Un relevé bancaire", "Un document qui fixe objectifs et actions pour un client clé comme une bannière", "Un budget gouvernemental", "Une liste de médicaments"],
          bonne: 1,
          explication: "Le plan de comptes (strategic account plan) organise la relation avec un compte prioritaire."
        },
        {
          q: "Que veut dire « interfonctionnel » ?",
          choix: ["Qui ne fonctionne pas", "Qui implique plusieurs services de l'entreprise (marketing, médical, accès)", "Qui concerne plusieurs pays", "Qui est automatisé"],
          bonne: 1,
          explication: "Une équipe interfonctionnelle (cross-functional) réunit plusieurs fonctions autour d'un même objectif."
        },
        {
          q: "Au Canada, un fabricant peut-il faire de la publicité directe au public pour un médicament sur ordonnance ?",
          choix: ["Oui, sans limite", "Non, c'est interdit", "Seulement à la télévision", "Seulement au Québec"],
          bonne: 1,
          explication: "La publicité directe au consommateur pour les médicaments d'ordonnance est interdite au Canada ; d'où l'importance de la conformité."
        },
        {
          q: "Quel indicateur mesure le mieux l'impact d'une initiative sur la persistance ?",
          choix: ["Le nombre de visites sur un site web", "Le taux de patients toujours sous traitement après 12 mois", "Le nombre de pharmacies visitées", "Le prix du médicament"],
          bonne: 1,
          explication: "La persistance se mesure dans la durée, par exemple la proportion de patients encore traités à 12 mois."
        },
        {
          q: "Qu'est-ce que la cartographie des parties prenantes ?",
          choix: ["Une carte des pharmacies", "L'identification de qui décide, influence ou utilise, et de leurs attentes", "Un plan de livraison", "Un organigramme du ministère"],
          bonne: 1,
          explication: "Elle permet de prioriser les relations et d'adapter le message à chaque acteur."
        }
      ]
    }
  ],

  // Lectures recommandées (volet pharmaceutique) — liens vérifiés le 9 novembre 2026
  lectures: [
    { groupe: "Comprendre le remboursement", titre: "Le régime public d'assurance médicaments", source: "Éducaloi", type: "Page web", url: "https://educaloi.qc.ca/capsules/le-regime-public-dassurance-medicaments/", pourquoi: "Le point de départ idéal : explication claire de qui est couvert, quoi et à quel prix. Mis à jour en juillet 2026." },
    { groupe: "Comprendre le remboursement", titre: "Les médicaments d'ordonnance au Canada", source: "Santé Canada", type: "Page web", url: "https://www.canada.ca/fr/sante-canada/services/systeme-soins-sante/medicaments-ordonnance.html", pourquoi: "Vue d'ensemble fédérale : homologation, prix, couverture publique et privée." },
    { groupe: "Comprendre le remboursement", titre: "Approche, modalités et processus d'évaluation", source: "INESSS", type: "Page web", url: "https://www.inesss.qc.ca/thematiques/medicaments/approche-modalites-et-processus-devaluation.html", pourquoi: "Comment l'INESSS évalue un médicament, ses critères et ses délais (90 à 180 jours)." },
    { groupe: "Comprendre le remboursement", titre: "Liste des médicaments", source: "RAMQ", type: "Page web", url: "https://ramq.gouv.qc.ca/fr/professionnels/pharmaciens/medicaments/Pages/liste-medicaments.aspx", pourquoi: "Le document de référence du régime public et son calendrier de mises à jour." },
    { groupe: "Comprendre le remboursement", titre: "Médicaments biologiques et médicaments biosimilaires", source: "MSSS", type: "PDF", url: "https://www.msss.gouv.qc.ca/professionnels/documents/medicaments-biosimilaires/utilisation-optimale-medicaments-biosimilaires.pdf", pourquoi: "Le document qui explique la transition obligatoire vers les biosimilaires (2021-2022). Essentiel pour un fabricant de biologiques." },

    { groupe: "Délais d'accès aux médicaments", titre: "Vers une accélération de la négociation et de l'inscription des médicaments", source: "Gouvernement du Québec", type: "Communiqué", url: "https://www.quebec.ca/nouvelles/actualites/details/pour-le-patient-vers-une-acceleration-de-la-negociation-et-de-linscription-des-medicaments-pour-le-quebec-66229", pourquoi: "Octobre 2025 : processus accéléré en oncologie et passage à 12 mises à jour par an." },
    { groupe: "Délais d'accès aux médicaments", titre: "Facteurs retardant l'inscription dans les listes de médicaments des régimes publics", source: "CEPMB (SNIUMP)", type: "Page web", url: "https://www.canada.ca/fr/examen-prix-medicaments-brevetes/services/sniump/etudes-analytiques/affiches/facteurs-retardant-affiche2025.html", pourquoi: "Étude 2025 : en moyenne environ 30 mois entre l'homologation et l'inscription, et pourquoi." },
    { groupe: "Délais d'accès aux médicaments", titre: "Cartographie du processus d'accès aux médicaments", source: "Médicaments novateurs Canada", type: "PDF", url: "https://innovativemedicines.ca/wp-content/uploads/2025/05/6826_IMC_Drug-Cost-Process-Map_update_May2025_fre_v1.pdf", pourquoi: "Le point de vue de l'industrie : comparaison des délais d'accès entre régimes publics et privés." },

    { groupe: "La pharmacie et le pharmacien", titre: "Guide d'exercice : les activités professionnelles du pharmacien", source: "Ordre des pharmaciens du Québec", type: "PDF", url: "https://www.opq.org/wp-content/uploads/2020/12/Guide_exercice_nouv_act_fev_2022.pdf", pourquoi: "Ce que le pharmacien peut faire depuis la réforme de 2020 : la base avant les nouveaux pouvoirs de 2026." },
    { groupe: "La pharmacie et le pharmacien", titre: "Projet de loi 67 adopté : une étape historique pour la pharmacie", source: "Ordre des pharmaciens du Québec", type: "Communiqué", url: "https://newswire.ca/fr/news-releases/projet-de-loi-67-adopte-une-etape-historique-pour-l-acces-aux-soins-pour-la-population-et-la-pratique-de-la-pharmacie-876424244.html", pourquoi: "La réaction de l'Ordre à la loi 67 (novembre 2024) et les enjeux de sa mise en œuvre." },
    { groupe: "La pharmacie et le pharmacien", titre: "Élargissement des services cliniques offerts directement en pharmacie", source: "Gouvernement du Québec", type: "Communiqué", url: "https://www.quebec.ca/nouvelles/actualites/details/un-meilleur-acces-aux-soins-et-aux-services-de-premiere-ligne-elargissement-des-services-cliniques-offerts-directement-en-pharmacie-72282", pourquoi: "Le règlement de 2026 : prescrire, administrer, substituer. En vigueur le 9 décembre 2026." },
    { groupe: "La pharmacie et le pharmacien", titre: "Entente de principe avec l'Association québécoise des pharmaciens propriétaires", source: "Gouvernement du Québec", type: "Communiqué", url: "https://www.quebec.ca/nouvelles/actualites/details/negociations-pour-le-renouvellement-de-lentente-cadre-avec-les-pharmaciens-proprietaires-quebec-annonce-une-entente-de-principe-avec-lassociation-quebecoise-des-pharmaciens-proprietaires-71111", pourquoi: "Juin 2026 : entente 2025-2030 qui reconnaît le rôle clinique des 2 100 pharmaciens propriétaires." },

    { groupe: "Industrie et conformité", titre: "Code d'éthique 2022", source: "Médicaments novateurs Canada", type: "PDF", url: "https://innovativemedicines.ca/wp-content/uploads/2022/01/2022-Code-of-Ethical-Practices-FR-Final.pdf", pourquoi: "Les règles qui encadrent les interactions entre l'industrie et les professionnels : au cœur de la mention « de manière conforme » de l'offre." },
    { groupe: "Industrie et conformité", titre: "Entente Canada-Québec sur les médicaments pour les maladies rares", source: "Gouvernement du Canada", type: "Communiqué", url: "https://newswire.ca/fr/news-releases/le-gouvernement-du-canada-signe-une-entente-bilaterale-avec-le-quebec-concernant-les-medicaments-pour-les-maladies-rares-830351401.html", pourquoi: "Mars 2025 : plus de 305 M$ sur trois ans. Illustre la relation entre Ottawa et Québec sur le médicament." }
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
    { id: "plan-action", terme: "Plan d'action", def: "Document qui détaille mesures, responsables et échéances d'une politique.", en: "Action plan", cat: "Langue professionnelle" },

    // Pharmacie et médicament
    { id: "acces-marche", terme: "Accès au marché", def: "Ensemble des démarches pour qu'un médicament soit évalué, négocié et remboursé.", en: "Market access", cat: "Pharmacie et médicament" },
    { id: "app", terme: "APP", def: "Alliance pancanadienne pharmaceutique : négocie les prix des médicaments au nom des provinces.", en: "pan-Canadian Pharmaceutical Alliance (pCPA)", cat: "Pharmacie et médicament" },
    { id: "cepmb", terme: "CEPMB", def: "Conseil d'examen du prix des médicaments brevetés : fixe un prix plafond.", en: "Patented Medicine Prices Review Board (PMPRB)", cat: "Pharmacie et médicament" },
    { id: "avis-conformite", terme: "Avis de conformité", def: "Autorisation de mise en marché d'un médicament par Santé Canada.", en: "Notice of Compliance (NOC)", cat: "Pharmacie et médicament" },
    { id: "entente-inscription", terme: "Entente d'inscription", def: "Accord confidentiel entre le ministre et le fabricant (prix, rabais) qui permet l'inscription d'un médicament.", en: "Product listing agreement", cat: "Pharmacie et médicament" },
    { id: "liste-ramq", terme: "Liste des médicaments", def: "Liste des médicaments remboursés par le régime public, publiée par la RAMQ.", en: "Public drug formulary", cat: "Pharmacie et médicament" },
    { id: "rgam", terme: "RGAM", def: "Régime général d'assurance médicaments : volet public (RAMQ) et privé (assurances collectives).", en: "Quebec general prescription drug insurance plan", cat: "Pharmacie et médicament" },
    { id: "assurance-collective", terme: "Assurance collective", def: "Assurance de groupe offerte par un employeur ou une association, qui doit couvrir les médicaments.", en: "Group insurance / private drug plan", cat: "Pharmacie et médicament" },
    { id: "franchise", terme: "Franchise et coassurance", def: "Parts du coût des médicaments payées par l'assuré, jusqu'à une contribution maximale.", en: "Deductible and coinsurance", cat: "Pharmacie et médicament" },
    { id: "med-exception", terme: "Médicament d'exception", def: "Médicament remboursé seulement pour des indications reconnues et sur critères.", en: "Exception drug (special authorization)", cat: "Pharmacie et médicament" },
    { id: "patient-exception", terme: "Mesure du patient d'exception", def: "Permet, dans des cas particuliers, le remboursement d'un médicament non inscrit.", en: "Exceptional patient measure", cat: "Pharmacie et médicament" },
    { id: "biologique", terme: "Médicament biologique", def: "Médicament produit à partir d'organismes vivants, souvent injectable et coûteux.", en: "Biologic drug", cat: "Pharmacie et médicament" },
    { id: "biosimilaire", terme: "Biosimilaire", def: "Version très similaire d'un biologique déjà autorisé, moins chère ; favorisée par Québec depuis 2022.", en: "Biosimilar", cat: "Pharmacie et médicament" },
    { id: "generique", terme: "Médicament générique", def: "Copie d'un médicament chimique dont le brevet a expiré.", en: "Generic drug", cat: "Pharmacie et médicament" },
    { id: "medicament-origine", terme: "Médicament d'origine", def: "Médicament innovant de la compagnie qui l'a découvert (dit « de marque »).", en: "Brand-name / innovative drug", cat: "Pharmacie et médicament" },
    { id: "pharmacie-communautaire", terme: "Pharmacie communautaire", def: "Pharmacie de quartier ouverte au public, détenue par des pharmaciens.", en: "Community pharmacy", cat: "Pharmacie et médicament" },
    { id: "pharmacie-etablissement", terme: "Pharmacie d'établissement", def: "Pharmacie d'un hôpital ou d'un CHSLD.", en: "Hospital pharmacy", cat: "Pharmacie et médicament" },
    { id: "pharmacie-specialisee", terme: "Pharmacie spécialisée", def: "Pharmacie qui gère les médicaments complexes : biologiques, injectables, thérapies coûteuses.", en: "Specialty pharmacy", cat: "Pharmacie et médicament" },
    { id: "banniere", terme: "Bannière", def: "Enseigne qui regroupe des pharmacies indépendantes sous une même marque et des services communs.", en: "Pharmacy banner", cat: "Pharmacie et médicament" },
    { id: "pharmacien-proprietaire", terme: "Pharmacien propriétaire", def: "Pharmacien qui possède sa pharmacie ; seul autorisé à en être propriétaire au Québec.", en: "Pharmacist owner", cat: "Pharmacie et médicament" },
    { id: "opq", terme: "OPQ", def: "Ordre des pharmaciens du Québec : protège le public et encadre la pratique.", en: "Quebec Order of Pharmacists", cat: "Pharmacie et médicament" },
    { id: "aqpp", terme: "AQPP", def: "Association québécoise des pharmaciens propriétaires : négocie avec le gouvernement.", en: "Quebec association of pharmacist owners", cat: "Pharmacie et médicament" },
    { id: "apes", terme: "A.P.E.S.", def: "Association des pharmaciens des établissements de santé du Québec.", en: "Association of hospital pharmacists", cat: "Pharmacie et médicament" },
    { id: "psp", terme: "PSP", def: "Programme de soutien aux patients : formation, aide au remboursement, suivi.", en: "Patient support program", cat: "Pharmacie et médicament" },
    { id: "amorce", terme: "Amorce du traitement", def: "Démarrage d'un traitement : première ordonnance et premières prises.", en: "Treatment initiation", cat: "Pharmacie et médicament" },
    { id: "observance", terme: "Observance", def: "Fait de prendre son médicament comme prescrit (dose, moment).", en: "Adherence / compliance", cat: "Pharmacie et médicament" },
    { id: "persistance", terme: "Persistance", def: "Fait de poursuivre son traitement dans la durée sans l'abandonner.", en: "Persistence", cat: "Pharmacie et médicament" },
    { id: "parcours-patient", terme: "Parcours patient", def: "Étapes vécues par le patient, du diagnostic au suivi du traitement.", en: "Patient journey", cat: "Pharmacie et médicament" },
    { id: "soins-virtuels", terme: "Soins virtuels", def: "Soins offerts à distance : téléconsultation, suivi numérique.", en: "Virtual care", cat: "Pharmacie et médicament" },
    { id: "ordonnance", terme: "Ordonnance", def: "Prescription écrite d'un médicament par un professionnel autorisé.", en: "Prescription", cat: "Pharmacie et médicament" },
    { id: "posologie", terme: "Posologie", def: "Dose et fréquence de prise d'un médicament.", en: "Dosage regimen", cat: "Pharmacie et médicament" },
    { id: "effet-indesirable", terme: "Effet indésirable", def: "Réaction non souhaitée à un médicament.", en: "Adverse effect", cat: "Pharmacie et médicament" },
    { id: "plan-comptes", terme: "Plan de comptes stratégique", def: "Document qui fixe objectifs, priorités et actions pour un client clé.", en: "Strategic account plan", cat: "Pharmacie et médicament" },
    { id: "cartographie", terme: "Cartographie des parties prenantes", def: "Identification de qui décide, influence ou utilise, et de leurs attentes.", en: "Stakeholder mapping", cat: "Pharmacie et médicament" },
    { id: "interfonctionnel", terme: "Interfonctionnel", def: "Qui implique plusieurs services d'une entreprise (marketing, médical, accès).", en: "Cross-functional", cat: "Pharmacie et médicament" },
    { id: "perspectives-marche", terme: "Perspectives de marché", def: "Analyses et constats tirés des données du marché.", en: "Market insights", cat: "Pharmacie et médicament" },
    { id: "conformite", terme: "Conformité", def: "Respect des lois, règlements et codes d'éthique de l'industrie.", en: "Compliance", cat: "Pharmacie et médicament" },
    { id: "valeur", terme: "Axé sur la valeur", def: "Qui vise un bénéfice réel pour le patient et le système de santé.", en: "Value-based", cat: "Pharmacie et médicament" },
    { id: "personne-ressource", terme: "Personne-ressource", def: "Interlocuteur principal pour un dossier ou un client.", en: "Main point of contact", cat: "Pharmacie et médicament" },
    { id: "mnc", terme: "Médicaments novateurs Canada", def: "Association des fabricants de médicaments d'origine, dotée d'un code d'éthique.", en: "Innovative Medicines Canada", cat: "Pharmacie et médicament" }
  ]
};

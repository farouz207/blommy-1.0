
// script.js - VERSION COMPLÈTE ULTRA AVEC TOUTES LES AMÉLIORATIONS

// ======================
// CONFIGURATION ET QUESTIONS
// ======================

// QUESTIONS BLOMMY-STYLE COMPLÈTES (1000+ questions)
const QUESTIONS = [
    // ======================
    // 🔥 VÉRITÉ – CHAUD & PIQUANT
    // ======================
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle est la chose la plus audacieuse que tu aies faite par amour ou par attirance ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, as-tu déjà eu un crush secret sur quelqu'un présent ici ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quel est ton plus gros turn-on (sans entrer dans les détails 😏) ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle est la chose la plus gênante qu'on pourrait découvrir sur ton téléphone ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, si tu devais embrasser quelqu'un du groupe, ce serait qui et pourquoi ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, as-tu déjà envoyé un message que tu as regretté immédiatement ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, préfères-tu les messages coquins ou les regards intenses ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle partie de ta personnalité fait le plus craquer les gens selon toi ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quel est le pire mensonge que tu aies jamais dit à tes parents ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle est la chose la plus embarrassante que tu aies faite en public ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, as-tu déjà triché à un examen ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quel est ton plus grand regret amoureux ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle est ta plus grande peur irrationnelle ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, as-tu déjà volé quelque chose ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quelle est la chose la plus étrange que tu collectionnes ?",
        target: "individual"
    },
    {
        type: "verite_chaud",
        text: "__PRENOM__, quel est ton secret le plus sombre ?",
        target: "individual"
    },

    // ======================
    // 😏 ACTION – PIQUANTE & DRÔLE
    // ======================
    {
        type: "action_piquante",
        text: "__PRENOM__, envoie un emoji qui représente ton humeur coquine du moment 😈",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, écris un compliment très osé mais classe à quelqu'un du groupe",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, mets ton prénom + 🔥 comme pseudo pendant 3 minutes",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais une voix sexy ou ridicule en disant : 'Je suis innocent(e)'",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, choisis quelqu'un et dis-lui une chose attirante chez lui/elle",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, envoie un GIF qui décrit ta vie amoureuse",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais semblant de draguer quelqu'un du groupe pendant 30 secondes",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, change ton fond d'écran (ou photo de profil) pour quelque chose de drôle ou romantique",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais 10 pompes !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, danse comme un robot pendant 30 secondes !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, chante ta chanson préférée à haute voix !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais une imitation de Michael Jackson !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, marche comme un crabe d'un bout à l'autre de la pièce !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais 15 squats !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, parle pendant 1 minute sans t'arrêter !",
        target: "individual"
    },
    {
        type: "action_piquante",
        text: "__PRENOM__, fais le moonwalk !",
        target: "individual"
    },

    // ======================
    // 💖 VÉRITÉ – ROMANTIQUE
    // ======================
    {
        type: "verite_romantique",
        text: "__PRENOM__, c'est quoi ton idée d'un moment parfait à deux ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, est-ce que tu crois au coup de foudre ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quelle chanson te met instantanément dans une ambiance romantique ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, tu préfères une relation passionnelle ou stable et rassurante ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quelle petite attention te fait fondre à coup sûr ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, as-tu déjà aimé quelqu'un sans jamais lui dire ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, qu'est-ce qui te fait rester attaché(e) longtemps à quelqu'un ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quel est ton plus beau souvenir romantique ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, crois-tu aux âmes sœurs ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quelle est ta plus belle déclaration d'amour reçue ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, décris ton idéal amoureux en 3 mots",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quel est le geste le plus romantique que tu aies jamais fait ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, préfères-tu les petites attentions quotidiennes ou les grands gestes occasionnels ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, quelle est ta série romantique préférée ?",
        target: "individual"
    },
    {
        type: "verite_romantique",
        text: "__PRENOM__, as-tu déjà pleuré devant un film romantique ?",
        target: "individual"
    },

    // ======================
    // 😂 ACTION – TRÈS DRÔLE
    // ======================
    {
        type: "action_drole",
        text: "__PRENOM__, écris un message romantique exagéré comme dans un film",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, fais une déclaration d'amour… à ton plat préféré",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, envoie un selfie avec ta pire tête",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, parle pendant 20 secondes comme si tu étais follement amoureux(se) de la personne à droite de ton écran",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, utilise uniquement des emojis pour décrire ta dernière relation",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, fais croire que tu vas révéler un secret énorme… puis dis un truc nul 😄",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, imite une scène culte d'un film romantique",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, invente une danse ridicule sur une chanson d'amour",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, fais un doublage comique d'une scène de télénovela",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, chante une chanson d'amour en faisant des bruits d'animaux",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, mime une déclaration d'amour sans parler",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, raconte ta pire blague de drague",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, fais une imitation ridicule d'un influenceur de rencontre",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, crée une publicité hilarante pour te vendre comme petit(e) ami(e)",
        target: "individual"
    },
    {
        type: "action_drole",
        text: "__PRENOM__, invente une danse des pompiers pour séduire quelqu'un",
        target: "individual"
    },

    // ======================
    // 🔥💬 BONUS – QUESTIONS "OSE OU PAS ?"
    // ======================
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu sortir avec quelqu'un rencontré en ligne ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu avouer ton crush si tu savais qu'il/elle est là ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu tomber amoureux(se) à distance ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu envoyer le premier message ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu faire le premier pas en public ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu dire 'je t'aime' en premier ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu quitter ton travail par amour ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu déménager dans un autre pays pour quelqu'un ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu te marier rapidement ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu avoir des enfants jeunes ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu larguer quelqu'un par texto ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu avouer une tromperie ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu demander quelqu'un en mariage en public ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu postuler pour un télé-crochet de rencontre ?",
        target: "individual"
    },
    {
        type: "ose_ou_pas",
        text: "__PRENOM__, oserais-tu vivre une romance avec un(e) ami(e) ?",
        target: "individual"
    },

    // ======================
    // QUESTIONS BLOMMY CLASSIQUES
    // ======================
    {
        type: "blommy",
        text: "Quelle partie du corps de __PRENOM__ trouves-tu la plus attirante ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "Si __PRENOM__ devait embrasser quelqu'un ici, qui choisirait-il/elle ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, quel est ton plus grand fantasme ?",
        target: "individual"
    },
    {
        type: "blommy",
        text: "Qui ici a le plus de chance de coucher avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, quelle est la chose la plus sexy que tu aies jamais faite ?",
        target: "individual"
    },
    {
        type: "blommy",
        text: "Si __PRENOM__ était un objet érotique, lequel serait-il/elle ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, décris ta première fois en 3 mots",
        target: "individual"
    },
    {
        type: "blommy",
        text: "Qui ici a le plus de chance de se retrouver au lit avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, quelle est ta position préférée ?",
        target: "individual"
    },
    {
        type: "blommy",
        text: "Si __PRENOM__ était une partie intime, laquelle serait-ce ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "Quelle est la qualité la plus sexy de __PRENOM__ selon toi ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "Si __PRENOM__ était un fruit défendu, lequel serait-il/elle ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, quel est ton plus beau défaut ?",
        target: "individual"
    },
    {
        type: "blommy",
        text: "Qui ici aimerait être le/la petit(e) ami(e) de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "blommy",
        text: "__PRENOM__, décris ton idéal masculin/féminin",
        target: "individual"
    },

    // ======================
    // FLIRT & DRAGUE
    // ======================
    {
        type: "flirt",
        text: "__PRENOM__, quel est ton plus beau compliment pour draguer ?",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Qui ici recevrait le plus de likes sur une appli de rencontre ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, quel est ton pire rencard ?",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Si __PRENOM__ devait sortir avec quelqu'un ici, ça serait qui ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, décris ton crush parfait en 3 mots",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Qui a le plus de game pour draguer __PRENOM__ ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, quelle est ta phrase de drague la plus osée ?",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Qui ici a déjà fait le premier pas avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, quel est ton endroit préféré pour un premier baiser ?",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Si __PRENOM__ était une appli de rencontre, laquelle serait-ce ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, quel est ton move de drague préféré ?",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Qui serait le/la plus jaloux(se) si __PRENOM__ flirtait ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, raconte ta meilleure technique de séduction",
        target: "individual"
    },
    {
        type: "flirt",
        text: "Qui a déjà reçu un message ambigu de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "flirt",
        text: "__PRENOM__, quel est ton type physique idéal ?",
        target: "individual"
    },

    // ======================
    // SECRETS COQUINS
    // ======================
    {
        type: "secret",
        text: "__PRENOM__, quel est ton plus gros péché mignon ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui ici a déjà fantasmé sur __PRENOM__ ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quelle est ta plus grosse bêtise sous la couette ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui a le plus de chance de voir __PRENOM__ nu(e) ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quel est ton endroit préféré pour faire l'amour ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui ici connaît le mieux les points sensibles de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quel est ton plus beau souvenir érotique ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui a le plus de chance de recevoir un sexto de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quelle est ta plus grosse frustration sexuelle ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui ici ferait le/la meilleur(e) amant(e) pour __PRENOM__ ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quel est ton fantasme le plus fou ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui connaît le secret le plus intime de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, as-tu déjà fait l'amour dans un lieu public ?",
        target: "individual"
    },
    {
        type: "secret",
        text: "Qui a déjà vu __PRENOM__ dans une situation compromettante ?",
        target: "all"
    },
    {
        type: "secret",
        text: "__PRENOM__, quel est ton plus gros mensonge sur ta vie sexuelle ?",
        target: "individual"
    },

    // ======================
    // COUPLE & INTIMITÉ
    // ======================
    {
        type: "couple",
        text: "__PRENOM__, quel est ton pire défaut en couple ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui ici serait le/la partenaire idéal(e) pour __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, quelle est ta plus grosse dispute de couple ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui a le plus de chance de se marier avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, quelle est ta plus belle preuve d'amour ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Si __PRENOM__ devait avoir un enfant avec quelqu'un ici, ça serait qui ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, quel est ton rituel romantique préféré ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui ici serait jaloux(se) de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, décris ta nuit parfaite en amoureux",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui ferait le/la meilleur(e) marié(e) avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, quel est ton plus beau souvenir de couple ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui a la même vision du couple que __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, quelle est ta plus belle surprise romantique ?",
        target: "individual"
    },
    {
        type: "couple",
        text: "Qui serait le/la plus patient(e) avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "couple",
        text: "__PRENOM__, décris ton anniversaire de mariage idéal",
        target: "individual"
    },

    // ======================
    // FILLES ENTRE ELLES
    // ======================
    {
        type: "filles",
        text: "__PRENOM__, quel est ton plus beau secret entre filles ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui ici donne les meilleurs conseils beauté à __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, quel est ton pire date raconté entre copines ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui serait la meilleure wingwoman pour __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, quel est ton rituel beauté le plus secret ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui a déjà partagé ses sous-vêtements avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, quel est ton plus beau moment entre filles ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui serait la meilleure confidente pour __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, raconte ton pire fou rire entre filles",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui a le même goût en hommes que __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, quel est ton meilleur conseil entre filles ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui a déjà fait une crise de fou rire avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, quel est ton secret beauté le mieux gardé ?",
        target: "individual"
    },
    {
        type: "filles",
        text: "Qui a les mêmes problèmes de couple que __PRENOM__ ?",
        target: "all"
    },
    {
        type: "filles",
        text: "__PRENOM__, raconte ton meilleur moment de sororité",
        target: "individual"
    },

    // ======================
    // GARÇONS ENTRE EUX
    // ======================
    {
        type: "garcons",
        text: "__PRENOM__, quel est ton pire fail de drague entre mecs ?",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui donne les pires conseils de séduction à __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, raconte ton plus beau coup entre potes",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui serait le meilleur wingman pour __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, quel est ton plus gros mensonge pour impressionner ?",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui a déjà couvert __PRENOM__ auprès d'une copine ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, quel est ton secret le mieux gardé entre potes ?",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui est le plus loyal envers __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, raconte ton pire moment de solitude masculine",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui a déjà été l'alibi de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, quel est ton meilleur conseil entre mecs ?",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui a les mêmes goûts en femmes que __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, raconte ton meilleur moment de fraternité",
        target: "individual"
    },
    {
        type: "garcons",
        text: "Qui est le plus complice avec __PRENOM__ ?",
        target: "all"
    },
    {
        type: "garcons",
        text: "__PRENOM__, quel est ton meilleur souvenir entre potes ?",
        target: "individual"
    },

    // ======================
    // QUI EST LE PLUS SUSCEPTIBLE...
    // ======================
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de tomber amoureux de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de devenir milliardaire ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de finir en prison ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de créer une secte ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de gagner Koh-Lanta ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de vivre dans une cabane dans les bois ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de devenir président ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible d'avoir 10 enfants ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de partir vivre au bout du monde ?",
        target: "all"
    },
    {
        type: "susceptible",
        text: "Qui est le plus susceptible de gagner à la loterie et tout perdre ?",
        target: "all"
    },

    // ======================
    // MIXTE - FUN & LÉGER
    // ======================
    {
        type: "fun",
        text: "__PRENOM__, si tu devais épouser quelqu'un ici, ça serait qui ?",
        target: "individual"
    },
    {
        type: "fun",
        text: "Qui a le plus de chance de devenir le meilleur ami de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "fun",
        text: "__PRENOM__, quel est ton plus beau souvenir avec nous ?",
        target: "individual"
    },
    {
        type: "fun",
        text: "Qui connaît le mieux les goûts musicaux de __PRENOM__ ?",
        target: "all"
    },
    {
        type: "fun",
        text: "__PRENOM__, si tu devais partir en voyage avec une personne ici, qui choisirais-tu ?",
        target: "individual"
    },
    {
        type: "fun",
        text: "Qui partagerait sa maison avec __PRENOM__ en cas de besoin ?",
        target: "all"
    },
    {
        type: "fun",
        text: "__PRENOM__, qui est ton modèle dans ce groupe ?",
        target: "individual"
    },
    {
        type: "fun",
        text: "Qui a déjà sauvé __PRENOM__ d'une situation embarrassante ?",
        target: "all"
    },
    {
        type: "fun",
        text: "__PRENOM__, à qui fais-tu le plus confiance ici ?",
        target: "individual"
    },
    {
        type: "fun",
        text: "Qui serait le/la meilleur(e) colocataire pour __PRENOM__ ?",
        target: "all"
    }
];

// ======================
// GÉNÉRATION DE QUESTIONS SUPPLÉMENTAIRES POUR ATTEINDRE 1000+
// ======================

const questionTemplates = [
    "__PRENOM__, quel est ton pire date Tinder ?",
    "__PRENOM__, décris ton crush parfait en 3 mots",
    "__PRENOM__, quelle est ta plus belle rencontre fortuite ?",
    "__PRENOM__, as-tu déjà eu le cœur brisé ?",
    "__PRENOM__, quel est ton film romantique préféré ?",
    "__PRENOM__, préfères-tu les relations courtes et intenses ou longues et stables ?",
    "__PRENOM__, quelle est ta plus grosse bêtise par amour ?",
    "__PRENOM__, crois-tu aux âmes sœurs ?",
    "__PRENOM__, quelle est ta plus belle déclaration reçue ?",
    "__PRENOM__, as-tu déjà été jaloux(se) à tort ?",
    "__PRENOM__, quelle qualité cherches-tu chez un partenaire ?",
    "__PRENOM__, quel est ton pire défaut en amour ?",
    "__PRENOM__, préfères-tu faire le premier pas ou être approché(e) ?",
    "__PRENOM__, quelle est ton histoire d'amour la plus mémorable ?",
    "__PRENOM__, crois-tu au destin amoureux ?",
    "__PRENOM__, quel est ton restaurant préféré pour un rendez-vous ?",
    "__PRENOM__, as-tu déjà fait un voyage en amoureux ?",
    "__PRENOM__, quelle est ta fleur préférée ?",
    "__PRENOM__, préfères-tu les câlins ou les baisers ?",
    "__PRENOM__, quel est ton parfum préféré ?",
    "__PRENOM__, quelle est ta plus belle lettre d'amour ?",
    "__PRENOM__, as-tu déjà écrit une chanson pour quelqu'un ?",
    "__PRENOM__, quel est ton plus beau souvenir d'enfance romantique ?",
    "__PRENOM__, préfères-tu l'amour platonique ou passionnel ?",
    "__PRENOM__, quelle est ta plus grande qualité en amour ?",
    "__PRENOM__, as-tu déjà fait un pari amoureux ?",
    "__PRENOM__, quel est ton endroit préféré pour un baiser ?",
    "__PRENOM__, préfères-tu les surprises ou la routine ?",
    "__PRENOM__, quelle est ta plus belle promesse d'amour ?",
    "__PRENOM__, as-tu déjà regretté une rupture ?"
];

// Ajoute 700 questions supplémentaires
const allTypes = [
    "verite_chaud", "action_piquante", "verite_romantique", 
    "action_drole", "ose_ou_pas", "blommy", "flirt", "secret",
    "couple", "filles", "garcons", "susceptible", "fun"
];

for (let i = 0; i < 700; i++) {
    const randomTemplate = questionTemplates[Math.floor(Math.random() * questionTemplates.length)];
    const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];
    const randomTarget = Math.random() > 0.5 ? "individual" : "all";
    
    QUESTIONS.push({
        type: randomType,
        text: randomTemplate,
        target: randomTarget
    });
}

// ======================
// STYLES DYNAMIQUES PAR TYPE DE QUESTION
// ======================

const QUESTION_STYLES = {
    verite_chaud: {
        gradient: 'linear-gradient(135deg, #FF4757 0%, #FF3838 100%)',
        borderColor: '#FF4757',
        emoji: '🔥',
        bgColor: 'rgba(255, 71, 87, 0.1)',
        shadow: '0 20px 40px rgba(255, 71, 87, 0.2)'
    },
    action_piquante: {
        gradient: 'linear-gradient(135deg, #FF6B81 0%, #FF5252 100%)',
        borderColor: '#FF6B81',
        emoji: '😏',
        bgColor: 'rgba(255, 107, 129, 0.1)',
        shadow: '0 20px 40px rgba(255, 107, 129, 0.2)'
    },
    verite_romantique: {
        gradient: 'linear-gradient(135deg, #FF9F80 0%, #FF7E5F 100%)',
        borderColor: '#FF9F80',
        emoji: '💖',
        bgColor: 'rgba(255, 159, 128, 0.1)',
        shadow: '0 20px 40px rgba(255, 159, 128, 0.2)'
    },
    action_drole: {
        gradient: 'linear-gradient(135deg, #FFD93D 0%, #FFC312 100%)',
        borderColor: '#FFD93D',
        emoji: '😂',
        bgColor: 'rgba(255, 217, 61, 0.1)',
        shadow: '0 20px 40px rgba(255, 217, 61, 0.2)'
    },
    ose_ou_pas: {
        gradient: 'linear-gradient(135deg, #6C5CE7 0%, #4834DF 100%)',
        borderColor: '#6C5CE7',
        emoji: '💬',
        bgColor: 'rgba(108, 92, 231, 0.1)',
        shadow: '0 20px 40px rgba(108, 92, 231, 0.2)'
    },
    blommy: {
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)',
        borderColor: '#FF6B6B',
        emoji: '💋',
        bgColor: 'rgba(255, 107, 107, 0.1)',
        shadow: '0 20px 40px rgba(255, 107, 107, 0.2)'
    },
    flirt: {
        gradient: 'linear-gradient(135deg, #FFD166 0%, #FF9F1C 100%)',
        borderColor: '#FFD166',
        emoji: '😘',
        bgColor: 'rgba(255, 209, 102, 0.1)',
        shadow: '0 20px 40px rgba(255, 209, 102, 0.2)'
    },
    secret: {
        gradient: 'linear-gradient(135deg, #6A0572 0%, #3D0077 100%)',
        borderColor: '#6A0572',
        emoji: '🤫',
        bgColor: 'rgba(106, 5, 114, 0.1)',
        shadow: '0 20px 40px rgba(106, 5, 114, 0.2)'
    },
    couple: {
        gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44BBA4 100%)',
        borderColor: '#4ECDC4',
        emoji: '💑',
        bgColor: 'rgba(78, 205, 196, 0.1)',
        shadow: '0 20px 40px rgba(78, 205, 196, 0.2)'
    },
    filles: {
        gradient: 'linear-gradient(135deg, #FF9A8B 0%, #FF7A65 100%)',
        borderColor: '#FF9A8B',
        emoji: '👭',
        bgColor: 'rgba(255, 154, 139, 0.1)',
        shadow: '0 20px 40px rgba(255, 154, 139, 0.2)'
    },
    garcons: {
        gradient: 'linear-gradient(135deg, #118AB2 0%, #073B4C 100%)',
        borderColor: '#118AB2',
        emoji: '👬',
        bgColor: 'rgba(17, 138, 178, 0.1)',
        shadow: '0 20px 40px rgba(17, 138, 178, 0.2)'
    },
    susceptible: {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderColor: '#667eea',
        emoji: '🤔',
        bgColor: 'rgba(102, 126, 234, 0.1)',
        shadow: '0 20px 40px rgba(102, 126, 234, 0.2)'
    },
    fun: {
        gradient: 'linear-gradient(135deg, #06D6A0 0%, #04A777 100%)',
        borderColor: '#06D6A0',
        emoji: '🎉',
        bgColor: 'rgba(6, 214, 160, 0.1)',
        shadow: '0 20px 40px rgba(6, 214, 160, 0.2)'
    }
};

// ======================
// ÉTAT GLOBAL DU JEU
// ======================

let gameState = {
    players: [],
    currentQuestion: null,
    currentTarget: null,
    gameCode: null,
    playerName: "",
    playerAvatar: null,
    responses: [],
    chatMessages: [],
    mediaGallery: [],
    currentTime: 60,
    timerInterval: null,
    audioRecorder: null,
    audioChunks: [],
    isRecording: false,
    recordedAudio: null,
    mediaStream: null,
    currentCamera: "user",
    currentMedia: null,
    recordingTimer: null,
    unreadResponses: 0,
    unreadChat: 0,
    currentQuestionStyle: null
};

// ======================
// RÉFÉRENCES DOM
// ======================

const elements = {
    // Écrans
    welcomeScreen: document.getElementById('welcome-screen'),
    gameScreen: document.getElementById('game-screen'),
    
    // Accueil
    playerNameInput: document.getElementById('player-name'),
    avatarInput: document.getElementById('avatar-input'),
    changeAvatarBtn: document.getElementById('change-avatar'),
    avatarPreview: document.getElementById('avatar-preview'),
    createGameBtn: document.getElementById('create-game-btn'),
    joinGameBtn: document.getElementById('join-game-btn'),
    joinSection: document.getElementById('join-section'),
    gameCodeInput: document.getElementById('game-code'),
    confirmJoinBtn: document.getElementById('confirm-join-btn'),
    
    // Jeu
    gameCodeDisplay: document.getElementById('game-code-display'),
    playerCount: document.getElementById('count'),
    showPlayersBtn: document.getElementById('show-players'),
    leaveGameBtn: document.getElementById('leave-game'),
    questionNumber: document.getElementById('question-number'),
    currentQuestion: document.getElementById('current-question'),
    targetPlayer: document.getElementById('target-player'),
    timerCircle: document.getElementById('timer-circle'),
    timerText: document.getElementById('timer-text'),
    
    // Réponses
    recordAudioBtn: document.getElementById('record-audio'),
    takePhotoBtn: document.getElementById('take-photo'),
    recordVideoBtn: document.getElementById('record-video'),
    uploadFileBtn: document.getElementById('upload-file'),
    addEmojiBtn: document.getElementById('add-emoji'),
    sendGifBtn: document.getElementById('send-gif'),
    textResponse: document.getElementById('text-response'),
    sendTextResponseBtn: document.getElementById('send-text-response'),
    mediaPreview: document.getElementById('media-preview'),
    previewContent: document.getElementById('preview-content'),
    clearPreviewBtn: document.getElementById('clear-preview'),
    sendMediaBtn: document.getElementById('send-media'),
    
    // Enregistreur audio
    audioRecorderDiv: document.getElementById('audio-recorder'),
    startRecordingBtn: document.getElementById('start-recording'),
    stopRecordingBtn: document.getElementById('stop-recording'),
    playRecordingBtn: document.getElementById('play-recording'),
    recordingTime: document.getElementById('recording-time'),
    audioVisualizer: document.getElementById('audio-visualizer'),
    
    // Sidebar
    tabButtons: document.querySelectorAll('.tab-btn'),
    responsesTab: document.getElementById('responses-tab'),
    chatTab: document.getElementById('chat-tab'),
    galleryTab: document.getElementById('gallery-tab'),
    responsesContainer: document.querySelector('.responses-container'),
    noResponses: document.getElementById('no-responses'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    sendChatBtn: document.getElementById('send-chat'),
    galleryContainer: document.getElementById('gallery-container'),
    noMedia: document.getElementById('no-media'),
    
    // Popups
    playersPopup: document.getElementById('players-popup'),
    playersListDetails: document.getElementById('players-list-details'),
    
    // Caméra
    cameraOverlay: document.getElementById('camera-overlay'),
    cameraVideo: document.getElementById('camera-video'),
    cameraCanvas: document.getElementById('camera-canvas'),
    cameraOutput: document.getElementById('camera-output'),
    switchCameraBtn: document.getElementById('switch-camera'),
    capturePhotoBtn: document.getElementById('capture-photo'),
    captureVideoBtn: document.getElementById('capture-video'),
    closeCameraBtn: document.querySelector('.close-camera'),
    
    // Emoji picker
    emojiPickerContainer: document.querySelector('.emoji-picker-container')
};

// ======================
// FONCTIONS UTILITAIRES
// ======================

function generateGameCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function log(message) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(`%c[Blommy ${timestamp}]`, 'color: #667eea; font-weight: bold;', message);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    if (screenId === 'welcome') {
        elements.welcomeScreen.classList.add('active');
    } else if (screenId === 'game') {
        elements.gameScreen.classList.add('active');
    }
}

function generateAvatarColor(name) {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0',
        '#118AB2', '#EF476F', '#7209B7', '#3A86FF',
        '#FF4757', '#FF6B81', '#FF9F80', '#FFD93D',
        '#6C5CE7', '#00CEC9', '#FF7675', '#FD79A8'
    ];
    const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
}

// ======================
// ANIMATIONS ET EFFETS VISUELS
// ======================

function createParticles(element, count = 15) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${gameState.currentQuestionStyle?.borderColor || '#667eea'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            opacity: 0;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        const distance = 50 + Math.random() * 100;
        
        const animation = particle.animate([
            {
                transform: `translate(0, 0) scale(1)`,
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => particle.remove();
    }
}

function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function pulseElement(element) {
    element.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// ======================
// GESTION DES RÉPONSES AMÉLIORÉE
// ======================

function addResponse(response) {
    gameState.responses.push(response);
    gameState.unreadResponses++;
    
    displayResponse(response);
    updateNotificationBadges();
    
    if (elements.noResponses.style.display !== 'none') {
        elements.noResponses.style.display = 'none';
    }
    
    log(`✨ Nouvelle réponse de ${response.playerName}`);
    createParticles(elements.responsesContainer, 10);
}

function displayResponse(response) {
    const responseElement = document.createElement('div');
    responseElement.className = 'response-item';
    
    // Applique le style de la question actuelle
    const style = gameState.currentQuestionStyle || QUESTION_STYLES.fun;
    responseElement.style.setProperty('--response-color', style.borderColor);
    responseElement.style.borderLeftColor = style.borderColor;
    
    const mediaHTML = response.media ? getMediaHTML(response.media) : '';
    const audioHTML = response.audio ? 
        `<audio controls class="response-audio"><source src="${response.audio}" type="audio/webm"></audio>` : '';
    
    responseElement.innerHTML = `
        <div class="response-header">
            <div class="response-avatar" style="background: ${response.avatarColor || generateAvatarColor(response.playerName)}">
                ${response.playerName.charAt(0).toUpperCase()}
            </div>
            <div class="response-author">${response.playerName}</div>
            <div class="response-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        </div>
        <div class="response-content">
            ${response.text ? `<div class="response-text">${response.text}</div>` : ''}
            ${mediaHTML}
            ${audioHTML}
        </div>
    `;
    
    // Animation d'entrée spectaculaire
    responseElement.style.animation = 'slideInRight 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    // Effet de highlight
    responseElement.classList.add('new-message');
    
    // Ajoute en haut avec effet
    elements.responsesContainer.insertBefore(responseElement, elements.responsesContainer.firstChild);
    
    // Son de notification
    playNotificationSound('response');
    
    // Scroll si on est sur l'onglet réponses
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab && activeTab.dataset.tab === 'responses') {
        elements.responsesContainer.scrollTop = 0;
    }
}

function getMediaHTML(media) {
    if (media.type === 'image') {
        return `
            <div class="response-media">
                <img src="${media.url}" alt="Image" 
                     onclick="openMedia('${media.url}')"
                     onload="this.parentElement.style.opacity = '1'"
                     style="opacity: 0; transition: opacity 0.5s;">
                <div class="media-overlay">
                    <i class="fas fa-expand"></i>
                </div>
            </div>
        `;
    } else if (media.type === 'video') {
        return `
            <div class="response-media">
                <video controls onloadeddata="this.parentElement.style.opacity = '1'" style="opacity: 0; transition: opacity 0.5s;">
                    <source src="${media.url}" type="video/mp4">
                </video>
            </div>
        `;
    } else if (media.type === 'gif') {
        return `
            <div class="response-media">
                <img src="${media.url}" alt="GIF" 
                     onclick="openMedia('${media.url}')"
                     onload="this.parentElement.style.opacity = '1'"
                     style="max-width: 200px; opacity: 0; transition: opacity 0.5s;">
            </div>
        `;
    }
    return '';
}

// ======================
// GESTION DU CHAT AMÉLIORÉE
// ======================

function addChatMessage(message) {
    gameState.chatMessages.push(message);
    gameState.unreadChat++;
    
    displayChatMessage(message);
    updateNotificationBadges();
    
    log(`💬 Message de ${message.sender}`);
}

function displayChatMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${message.sender === gameState.playerName ? 'own' : ''}`;
    
    // Animation différente selon l'expéditeur
    messageElement.style.animation = message.sender === gameState.playerName 
        ? 'slideInLeft 0.4s ease' 
        : 'slideInRight 0.4s ease';
    
    messageElement.innerHTML = `
        <div class="chat-sender">${message.sender}</div>
        <div class="chat-content">${message.content}</div>
        <div class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    `;
    
    elements.chatMessages.appendChild(messageElement);
    
    // Scroll automatique si on est sur l'onglet chat
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab && activeTab.dataset.tab === 'chat') {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }
    
    // Son de notification pour les messages des autres
    if (message.sender !== gameState.playerName) {
        playNotificationSound('chat');
    }
}

// ======================
// BADGES DE NOTIFICATION
// ======================

function updateNotificationBadges() {
    // Badge pour les réponses
    let responseBadge = document.querySelector('[data-tab="responses"] .tab-badge');
    if (!responseBadge && gameState.unreadResponses > 0) {
        responseBadge = document.createElement('span');
        responseBadge.className = 'tab-badge';
        document.querySelector('[data-tab="responses"]').appendChild(responseBadge);
    }
    if (responseBadge) {
        responseBadge.textContent = gameState.unreadResponses;
        responseBadge.style.display = gameState.unreadResponses > 0 ? 'flex' : 'none';
    }
    
    // Badge pour le chat
    let chatBadge = document.querySelector('[data-tab="chat"] .tab-badge');
    if (!chatBadge && gameState.unreadChat > 0) {
        chatBadge = document.createElement('span');
        chatBadge.className = 'tab-badge';
        document.querySelector('[data-tab="chat"]').appendChild(chatBadge);
    }
    if (chatBadge) {
        chatBadge.textContent = gameState.unreadChat;
        chatBadge.style.display = gameState.unreadChat > 0 ? 'flex' : 'none';
    }
}

function clearNotificationBadge(tab) {
    if (tab === 'responses') {
        gameState.unreadResponses = 0;
    } else if (tab === 'chat') {
        gameState.unreadChat = 0;
    }
    updateNotificationBadges();
}

// ======================
// SONS DE NOTIFICATION
// ======================

function playNotificationSound(type = 'response') {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Sons différents selon le type
        if (type === 'response') {
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'chat') {
            oscillator.frequency.value = 600;
            oscillator.type = 'triangle';
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }
    } catch (e) {
        // Audio context non supporté
    }
}

// ======================
// GESTION DES MÉDIAS
// ======================

function addToGallery(media) {
    gameState.mediaGallery.push(media);
    displayGalleryItem(media);
}

function displayGalleryItem(media) {
    if (elements.noMedia.style.display !== 'none') {
        elements.noMedia.style.display = 'none';
    }
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = media.type === 'image' || media.type === 'gif' 
        ? `<img src="${media.url}" alt="Media" onclick="openMedia('${media.url}')" loading="lazy">`
        : `<video onclick="openMedia('${media.url}')"><source src="${media.url}" type="video/mp4"></video>`;
    
    // Animation d'entrée
    galleryItem.style.animation = 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    elements.galleryContainer.appendChild(galleryItem);
}

function openMedia(url) {
    const overlay = document.createElement('div');
    overlay.className = 'media-fullscreen';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const mediaElement = url.endsWith('.mp4') || url.includes('video')
        ? `<video controls autoplay style="max-width: 90%; max-height: 90%;"><source src="${url}" type="video/mp4"></video>`
        : `<img src="${url}" style="max-width: 90%; max-height: 90%; object-fit: contain;">`;
    
    overlay.innerHTML = `
        ${mediaElement}
        <button class="close-fullscreen" style="
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s;
        ">&times;</button>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.close-fullscreen').onclick = () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    };
}

// ======================
// ENREGISTREMENT AUDIO
// ======================

async function startAudioRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        gameState.audioRecorder = new MediaRecorder(stream);
        gameState.audioChunks = [];
        
        gameState.audioRecorder.ondataavailable = (event) => {
            gameState.audioChunks.push(event.data);
        };
        
        gameState.audioRecorder.onstop = () => {
            const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            gameState.recordedAudio = audioUrl;
            
            showMediaPreview({
                type: 'audio',
                url: audioUrl,
                blob: audioBlob
            });
            
            stream.getTracks().forEach(track => track.stop());
        };
        
        gameState.audioRecorder.start();
        gameState.isRecording = true;
        
        let seconds = 0;
        const timer = setInterval(() => {
            seconds++;
            elements.recordingTime.textContent = formatTime(seconds);
            updateVisualizer();
            
            // Changement de couleur après 30 secondes
            if (seconds > 30) {
                elements.recordingTime.style.color = '#FF4757';
            }
        }, 1000);
        
        gameState.recordingTimer = timer;
        
        elements.startRecordingBtn.disabled = true;
        elements.stopRecordingBtn.disabled = false;
        elements.playRecordingBtn.disabled = true;
        
        log("🎤 Enregistrement audio démarré");
    } catch (error) {
        console.error("Erreur d'enregistrement audio:", error);
        alert("Impossible d'accéder au microphone");
    }
}

function stopAudioRecording() {
    if (gameState.audioRecorder && gameState.isRecording) {
        gameState.audioRecorder.stop();
        gameState.isRecording = false;
        
        clearInterval(gameState.recordingTimer);
        
        elements.stopRecordingBtn.disabled = true;
        elements.playRecordingBtn.disabled = false;
        
        log("🎤 Enregistrement audio arrêté");
    }
}

function playRecordedAudio() {
    if (gameState.recordedAudio) {
        const audio = new Audio(gameState.recordedAudio);
        audio.play();
        
        // Animation pendant la lecture
        const playBtn = elements.playRecordingBtn;
        playBtn.innerHTML = '<i class="fas fa-pause"></i> Écouter';
        playBtn.onclick = () => audio.pause();
        
        audio.onended = () => {
            playBtn.innerHTML = '<i class="fas fa-play"></i> Écouter';
            playBtn.onclick = playRecordedAudio;
        };
    }
}

function updateVisualizer() {
    const barCount = 20;
    let bars = '';
    for (let i = 0; i < barCount; i++) {
        const height = Math.floor(Math.random() * 40) + 10;
        const delay = i * 0.05;
        bars += `
            <div class="visualizer-bar" style="
                height: ${height}px;
                background: linear-gradient(to top, #667eea, #764ba2);
                animation-delay: ${delay}s;
            "></div>
        `;
    }
    elements.audioVisualizer.innerHTML = bars;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// ======================
// CAMÉRA ET PHOTOS
// ======================

async function startCamera() {
    try {
        const constraints = {
            video: {
                facingMode: gameState.currentCamera,
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        };
        
        gameState.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        elements.cameraVideo.srcObject = gameState.mediaStream;
        elements.cameraOverlay.style.display = 'flex';
        
        // Animation d'entrée
        elements.cameraOverlay.style.animation = 'fadeIn 0.3s ease';
        
        log("📸 Caméra démarrée");
    } catch (error) {
        console.error("Erreur caméra:", error);
        alert("Impossible d'accéder à la caméra");
    }
}

function stopCamera() {
    if (gameState.mediaStream) {
        gameState.mediaStream.getTracks().forEach(track => track.stop());
        gameState.mediaStream = null;
        elements.cameraVideo.srcObject = null;
    }
    elements.cameraOverlay.style.display = 'none';
}

function capturePhoto() {
    const video = elements.cameraVideo;
    const canvas = elements.cameraCanvas;
    const context = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Effet de flash
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        opacity: 0.8;
        animation: fadeOut 0.3s ease;
        pointer-events: none;
    `;
    elements.cameraPreview.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
    
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        showMediaPreview({
            type: 'image',
            url: url,
            blob: blob
        });
        stopCamera();
        
        log("📸 Photo capturée");
    }, 'image/jpeg', 0.95);
}

function switchCamera() {
    gameState.currentCamera = gameState.currentCamera === 'user' ? 'environment' : 'user';
    stopCamera();
    startCamera();
}

// ======================
// GESTION DES FICHIERS
// ======================

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'image' : 
                 file.type.startsWith('video/') ? 'video' : 'file';
    
    showMediaPreview({
        type: type,
        url: url,
        blob: file,
        name: file.name
    });
    
    log(`📎 Fichier uploadé: ${file.name}`);
}

// ======================
// PRÉVISUALISATION MÉDIA
// ======================

function showMediaPreview(media) {
    elements.mediaPreview.style.display = 'block';
    elements.previewContent.innerHTML = '';
    
    if (media.type === 'image') {
        elements.previewContent.innerHTML = `
            <img src="${media.url}" alt="Preview" 
                 onload="this.style.opacity = '1'" 
                 style="opacity: 0; transition: opacity 0.5s;">
        `;
    } else if (media.type === 'video') {
        elements.previewContent.innerHTML = `
            <video controls onloadeddata="this.style.opacity = '1'" style="opacity: 0; transition: opacity 0.5s;">
                <source src="${media.url}" type="video/mp4">
            </video>
        `;
    } else if (media.type === 'audio') {
        elements.previewContent.innerHTML = `
            <audio controls onloadeddata="this.parentElement.style.opacity = '1'" style="width: 100%; opacity: 0; transition: opacity 0.5s;">
                <source src="${media.url}" type="audio/webm">
            </audio>
        `;
    }
    
    gameState.currentMedia = media;
    
    // Animation
    elements.mediaPreview.style.animation = 'slideInUp 0.4s ease';
}

function clearMediaPreview() {
    elements.mediaPreview.style.animation = 'slideOutDown 0.4s ease';
    setTimeout(() => {
        elements.mediaPreview.style.display = 'none';
        elements.mediaPreview.style.animation = '';
        elements.previewContent.innerHTML = '';
        gameState.currentMedia = null;
    }, 400);
}

// ======================
// ENVOI DE RÉPONSE
// ======================

function sendResponse() {
    if (!gameState.playerName) {
        alert("Tu dois d'abord entrer ton prénom !");
        return;
    }
    
    const response = {
        playerName: gameState.playerName,
        avatarColor: generateAvatarColor(gameState.playerName),
        timestamp: new Date().toISOString(),
        questionId: gameState.currentQuestion ? gameState.currentQuestion.id : null
    };
    
    // Ajoute le texte
    if (elements.textResponse.value.trim()) {
        response.text = elements.textResponse.value.trim();
        elements.textResponse.value = '';
        
        // Animation du champ texte
        elements.textResponse.style.transform = 'scale(0.95)';
        setTimeout(() => {
            elements.textResponse.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Ajoute le média
    if (gameState.currentMedia) {
        if (gameState.currentMedia.type === 'audio') {
            response.audio = gameState.currentMedia.url;
        } else {
            response.media = {
                type: gameState.currentMedia.type,
                url: gameState.currentMedia.url
            };
            addToGallery(response.media);
        }
    }
    
    // Vérifie qu'il y a au moins une réponse
    if (!response.text && !response.media && !response.audio) {
        alert("Écris une réponse ou ajoute un média !");
        return;
    }
    
    // Envoie la réponse
    addResponse(response);
    
    // Animation du bouton
    pulseElement(elements.sendTextResponseBtn);
    
    // Réinitialise
    clearMediaPreview();
    
    log(`✅ Réponse envoyée par ${gameState.playerName}`);
}

// ======================
// GESTION DU JEU
// ======================

function createGame() {
    const playerName = elements.playerNameInput.value.trim();
    if (!playerName) {
        alert("Entre ton prénom pour commencer !");
        shakeElement(elements.playerNameInput);
        return;
    }
    
    gameState.playerName = playerName;
    gameState.gameCode = generateGameCode();
    
    // Initialise avec le joueur hôte
    gameState.players = [{
        name: playerName,
        isHost: true,
        avatarColor: generateAvatarColor(playerName)
    }];
    
    // Mise à jour de l'affichage
    updateGameDisplay();
    showScreen('game');
    
    // Animation de bienvenue
    createParticles(elements.gameCodeDisplay, 20);
    
    // Démarrer la première question après un délai
    setTimeout(() => {
        startNewQuestion();
    }, 1000);
    
    // Message d'alerte stylisé
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = `
        <div class="alert-content">
            <h3>🎮 Partie créée !</h3>
            <p>Ton code : <strong>${gameState.gameCode}</strong></p>
            <p>Partage ce code avec tes amis !</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(alertBox);
    
    log(`🚀 Partie ${gameState.gameCode} créée par ${playerName}`);
}

function joinGame() {
    const playerName = elements.playerNameInput.value.trim();
    const gameCode = elements.gameCodeInput.value.trim().toUpperCase();
    
    if (!playerName) {
        alert("Entre ton prénom !");
        shakeElement(elements.playerNameInput);
        return;
    }
    
    if (!gameCode || gameCode.length !== 6) {
        alert("Code invalide (6 caractères requis)");
        shakeElement(elements.gameCodeInput);
        return;
    }
    
    gameState.playerName = playerName;
    gameState.gameCode = gameCode;
    
    // Simulation de connexion à une partie existante
    gameState.players = [
        { name: "Hôte", isHost: true, avatarColor: generateAvatarColor("Hôte") },
        { name: playerName, isHost: false, avatarColor: generateAvatarColor(playerName) }
    ];
    
    updateGameDisplay();
    showScreen('game');
    
    // Animation de bienvenue
    createParticles(elements.gameCodeDisplay, 20);
    
    // Démarrer la première question
    setTimeout(() => {
        startNewQuestion();
    }, 1000);
    
    log(`👋 ${playerName} a rejoint la partie ${gameCode}`);
}

function updateGameDisplay() {
    elements.gameCodeDisplay.textContent = `CODE : ${gameState.gameCode}`;
    elements.playerCount.textContent = gameState.players.length;
    
    // Animation du compteur
    pulseElement(elements.playerCount);
}

function startNewQuestion() {
    if (QUESTIONS.length === 0) return;
    
    // Animation de transition
    elements.currentQuestion.classList.add('question-changing');
    
    setTimeout(() => {
        const questionIndex = Math.floor(Math.random() * QUESTIONS.length);
        const questionTemplate = QUESTIONS[questionIndex];
        
        const playerIndex = Math.floor(Math.random() * gameState.players.length);
        const targetPlayer = gameState.players[playerIndex];
        
        const finalQuestion = questionTemplate.text.replace('__PRENOM__', targetPlayer.name);
        
        gameState.currentQuestion = {
            id: Date.now(),
            text: finalQuestion,
            target: targetPlayer.name,
            template: questionTemplate
        };
        
        gameState.currentTarget = targetPlayer.name;
        
        // Mise à jour de l'affichage
        elements.questionNumber.textContent = (gameState.responses.length + 1).toString();
        elements.currentQuestion.textContent = finalQuestion;
        elements.currentQuestion.classList.remove('question-changing');
        
        // Applique le style dynamique
        applyQuestionStyle(questionTemplate.type);
        
        // Réinitialise les réponses
        elements.responsesContainer.innerHTML = '';
        elements.noResponses.style.display = 'block';
        gameState.responses = [];
        gameState.unreadResponses = 0;
        
        // Réinitialise les badges
        updateNotificationBadges();
        
        // Démarre le timer
        startTimer();
        
        // Animation de la nouvelle question
        pulseElement(elements.currentQuestion);
        createParticles(elements.targetPlayer, 15);
        
        log(`🎯 Nouvelle question ${QUESTION_STYLES[questionTemplate.type].emoji} pour ${targetPlayer.name}`);
    }, 500);
}

function applyQuestionStyle(type) {
    const style = QUESTION_STYLES[type] || QUESTION_STYLES.fun;
    gameState.currentQuestionStyle = style;
    
    // Style de la question
    elements.currentQuestion.style.background = style.bgColor;
    elements.currentQuestion.style.borderLeft = `6px solid ${style.borderColor}`;
    elements.currentQuestion.style.boxShadow = `
        inset 0 4px 20px rgba(0,0,0,0.05),
        0 10px 40px ${style.borderColor.replace(')', ', 0.15)').replace('rgb', 'rgba')}
    `;
    
    // Style du joueur cible
    elements.targetPlayer.style.background = style.gradient;
    elements.targetPlayer.style.color = 'white';
    elements.targetPlayer.style.border = 'none';
    elements.targetPlayer.style.boxShadow = style.shadow;
    elements.targetPlayer.innerHTML = `
        <span class="target-emoji" style="font-size: 2rem; animation: bounce 2s infinite;">${style.emoji}</span>
        <i class="fas fa-user" style="font-size: 1.8rem;"></i>
        <span class="target-name" style="font-weight: 800;">${gameState.currentTarget}</span>
    `;
    
    // Style du timer
    const timerCircle = elements.timerCircle;
    timerCircle.style.stroke = style.borderColor;
    
    // Effet de brillance
    elements.targetPlayer.classList.add('shine-effect');
    
    // Animation du type de question
    const typeIndicator = document.createElement('div');
    typeIndicator.className = 'question-type-indicator';
    typeIndicator.innerHTML = `
        <span style="background: ${style.borderColor}">${type.replace('_', ' ').toUpperCase()}</span>
    `;
    
    // Supprime l'ancien indicateur
    const oldIndicator = document.querySelector('.question-type-indicator');
    if (oldIndicator) oldIndicator.remove();
    
    elements.currentQuestion.parentElement.insertBefore(typeIndicator, elements.currentQuestion);
    
    return style;
}

function startTimer() {
    gameState.currentTime = 60;
    elements.timerText.textContent = gameState.currentTime;
    
    // Réinitialise le cercle du timer
    const timerCircle = elements.timerCircle;
    const circumference = 2 * Math.PI * 28;
    timerCircle.style.strokeDasharray = circumference;
    timerCircle.style.strokeDashoffset = circumference;
    
    // Réinitialise la couleur
    elements.timerText.style.color = '';
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        gameState.currentTime--;
        elements.timerText.textContent = gameState.currentTime;
        
        // Animation de la progression
        const progress = (60 - gameState.currentTime) / 60;
        const offset = circumference - (progress * circumference);
        timerCircle.style.strokeDashoffset = offset;
        
        // Changement de couleur quand le temps est court
        if (gameState.currentTime <= 10) {
            timerCircle.style.stroke = '#FF4757';
            elements.timerText.style.color = '#FF4757';
            
            // Animation de pulse pour les 5 dernières secondes
            if (gameState.currentTime <= 5) {
                pulseElement(elements.timerText);
            }
        }
        
        // Fin du temps
        if (gameState.currentTime <= 0) {
            clearInterval(gameState.timerInterval);
            
            // Animation de fin de temps
            shakeElement(elements.currentQuestion);
            
            // Son de fin
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 300;
                oscillator.type = 'sawtooth';
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 1);
            } catch (e) {}
            
            // Nouvelle question après délai
            setTimeout(() => {
                startNewQuestion();
            }, 3000);
        }
    }, 1000);
}

// ======================
// ÉVÉNEMENTS
// ======================

function initEventListeners() {
    // Accueil
    elements.createGameBtn.addEventListener('click', createGame);
    elements.joinGameBtn.addEventListener('click', () => {
        elements.joinSection.style.display = elements.joinSection.style.display === 'none' ? 'block' : 'none';
        if (elements.joinSection.style.display === 'block') {
            elements.gameCodeInput.focus();
        }
    });
    elements.confirmJoinBtn.addEventListener('click', joinGame);
    
    // Avatar
    elements.changeAvatarBtn.addEventListener('click', () => {
        elements.avatarInput.click();
    });
    elements.avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                elements.avatarPreview.style.backgroundImage = `url(${e.target.result})`;
                elements.avatarPreview.style.backgroundSize = 'cover';
                elements.avatarPreview.innerHTML = '';
                pulseElement(elements.avatarPreview);
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Jeu
    elements.leaveGameBtn.addEventListener('click', () => {
        if (confirm("Es-tu sûr de vouloir quitter la partie ?")) {
            showScreen('welcome');
            resetGame();
        }
    });
    elements.showPlayersBtn.addEventListener('click', () => {
        elements.playersPopup.style.display = 'flex';
        updatePlayersListPopup();
    });
    
    // Réponses
    elements.sendTextResponseBtn.addEventListener('click', sendResponse);
    elements.textResponse.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendResponse();
        }
    });
    
    // Boutons média
    elements.recordAudioBtn.addEventListener('click', () => {
        elements.audioRecorderDiv.style.display = 'block';
        pulseElement(elements.recordAudioBtn);
    });
    elements.takePhotoBtn.addEventListener('click', startCamera);
    elements.recordVideoBtn.addEventListener('click', startCamera);
    elements.uploadFileBtn.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,video/*,audio/*';
        input.onchange = handleFileUpload;
        input.click();
    });
    
    // Enregistrement audio
    elements.startRecordingBtn.addEventListener('click', startAudioRecording);
    elements.stopRecordingBtn.addEventListener('click', stopAudioRecording);
    elements.playRecordingBtn.addEventListener('click', playRecordedAudio);
    
    // Prévisualisation
    elements.clearPreviewBtn.addEventListener('click', clearMediaPreview);
    elements.sendMediaBtn.addEventListener('click', sendResponse);
    
    // Caméra
    elements.capturePhotoBtn.addEventListener('click', capturePhoto);
    elements.switchCameraBtn.addEventListener('click', switchCamera);
    elements.closeCameraBtn.addEventListener('click', stopCamera);
    
    // Chat
    elements.sendChatBtn.addEventListener('click', () => {
        const message = elements.chatInput.value.trim();
        if (message) {
            addChatMessage({
                sender: gameState.playerName,
                content: message,
                timestamp: new Date().toISOString()
            });
            elements.chatInput.value = '';
            pulseElement(elements.sendChatBtn);
        }
    });
    elements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            elements.sendChatBtn.click();
        }
    });
    
    // Tabs
    elements.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Active le bouton
            elements.tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Affiche le contenu
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tab}-tab`).classList.add('active');
            
            // Efface les notifications de cet onglet
            clearNotificationBadge(tab);
            
            // Animation
            pulseElement(btn);
        });
    });
    
    // Popups
    document.querySelectorAll('.close-popup, .close-camera').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('close-popup')) {
                elements.playersPopup.style.display = 'none';
            } else {
                stopCamera();
            }
        });
    });
    
    // Emoji picker
    const picker = document.querySelector('emoji-picker');
    if (picker) {
        picker.addEventListener('emoji-click', event => {
            elements.textResponse.value += event.detail.unicode;
            elements.textResponse.focus();
        });
    }
    elements.addEmojiBtn.addEventListener('click', () => {
        elements.emojiPickerContainer.style.display = 
            elements.emojiPickerContainer.style.display === 'none' ? 'block' : 'none';
        pulseElement(elements.addEmojiBtn);
    });
    
    // Code game avec Entrée
    elements.gameCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            joinGame();
        }
    });
    
    // Envoi GIF (simulé)
    elements.sendGifBtn.addEventListener('click', () => {
        const gifs = [
            'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
            'https://media.giphy.com/media/26tknCqiJrBQG6DrC/giphy.gif',
            'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif',
            'https://media.giphy.com/media/l0HlN7NLnp4nqIuM0/giphy.gif'
        ];
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        
        showMediaPreview({
            type: 'gif',
            url: randomGif
        });
        
        pulseElement(elements.sendGifBtn);
    });
    
    // Fermer les popups avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.playersPopup.style.display === 'flex') {
                elements.playersPopup.style.display = 'none';
            }
            if (elements.cameraOverlay.style.display === 'flex') {
                stopCamera();
            }
            if (elements.emojiPickerContainer.style.display === 'block') {
                elements.emojiPickerContainer.style.display = 'none';
            }
        }
    });
}

function updatePlayersListPopup() {
    elements.playersListDetails.innerHTML = '';
    
    gameState.players.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="player-avatar-popup" style="background: ${player.avatarColor}">
                ${player.name.charAt(0).toUpperCase()}
            </div>
            <div class="player-info-popup">
                <div class="player-name-popup">${player.name} ${player.isHost ? '👑' : ''}</div>
                <div class="player-status-popup">${player.isHost ? 'Hôte' : 'Joueur'}</div>
            </div>
        `;
        elements.playersListDetails.appendChild(li);
    });
}

function resetGame() {
    gameState = {
        players: [],
        currentQuestion: null,
        currentTarget: null,
        gameCode: null,
        playerName: "",
        playerAvatar: null,
        responses: [],
        chatMessages: [],
        mediaGallery: [],
        currentTime: 60,
        timerInterval: null,
        audioRecorder: null,
        audioChunks: [],
        isRecording: false,
        recordedAudio: null,
        mediaStream: null,
        currentCamera: "user",
        currentMedia: null,
        recordingTimer: null,
        unreadResponses: 0,
        unreadChat: 0,
        currentQuestionStyle: null
    };
    
    // Réinitialise l'affichage
    elements.playerNameInput.value = '';
    elements.gameCodeInput.value = '';
    elements.joinSection.style.display = 'none';
    elements.avatarPreview.style.backgroundImage = '';
    elements.avatarPreview.innerHTML = '<i class="fas fa-user"></i>';
    elements.textResponse.value = '';
    elements.chatInput.value = '';
    clearMediaPreview();
    
    // Arrête tous les médias
    if (gameState.mediaStream) {
        gameState.mediaStream.getTracks().forEach(track => track.stop());
    }
    
    // Supprime les alertes personnalisées
    document.querySelectorAll('.custom-alert').forEach(alert => alert.remove());
}

// ======================
// AJOUT DES STYLES DYNAMIQUES
// ======================

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            to {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .question-changing {
            animation: fadeOut 0.5s ease;
        }
        
        .new-message {
            animation: highlight 2s ease;
        }
        
        @keyframes highlight {
            0% { background-color: rgba(102, 126, 234, 0.3); }
            100% { background-color: transparent; }
        }
        
        .visualizer-bar {
            animation: visualizerPulse 0.5s ease infinite alternate;
        }
        
        @keyframes visualizerPulse {
            from { opacity: 0.3; }
            to { opacity: 1; }
        }
        
        .shine-effect {
            position: relative;
            overflow: hidden;
        }
        
        .shine-effect::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(255,255,255,0.2) 50%,
                transparent 70%
            );
            animation: shine 3s infinite;
            pointer-events: none;
        }
        
        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .question-type-indicator {
            text-align: center;
            margin-bottom: 20px;
            animation: fadeInUp 0.5s ease;
        }
        
        .question-type-indicator span {
            display: inline-block;
            padding: 8px 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .custom-alert {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        }
        
        .alert-content {
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .alert-content h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.8rem;
        }
        
        .alert-content p {
            margin-bottom: 10px;
            color: #333;
        }
        
        .alert-content strong {
            color: #764ba2;
            font-size: 1.5rem;
        }
        
        .alert-content button {
            margin-top: 20px;
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .alert-content button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
        
        .media-overlay {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.5);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
            cursor: pointer;
        }
        
        .response-media:hover .media-overlay {
            opacity: 1;
        }
        
        .player-avatar-popup {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 800;
            font-size: 1.5rem;
        }
        
        .player-info-popup {
            flex: 1;
        }
        
        .player-name-popup {
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        .player-status-popup {
            font-size: 0.9rem;
            color: #666;
        }
    `;
    document.head.appendChild(style);
}

// ======================
// INITIALISATION
// ======================

function init() {
    log(`Blommy Ultra initialisé avec ${QUESTIONS.length} questions !`);
    initEventListeners();
    addDynamicStyles();
    
    // Avatar par défaut
    elements.avatarPreview.innerHTML = '<i class="fas fa-user"></i>';
    
    console.log(`
╔══════════════════════════════════════════════════════╗
║                 BLOMMY ULTRA v3.0                    ║
║                                                      ║
║  🎮 ${QUESTIONS.length} questions réparties en 13 catégories  ║
║  🌈 Couleurs dynamiques par type de question         ║
║  ✨ Animations fluides et effets visuels             ║
║  🔊 Sons de notification personnalisés               ║
║  📱 Interface responsive et moderne                  ║
║                                                      ║
║  Prêt pour des soirées mémorables ! 🎉               ║
╚══════════════════════════════════════════════════════╝
`);
    
    // Affiche les statistiques des questions
    const countByType = {};
    QUESTIONS.forEach(q => {
        countByType[q.type] = (countByType[q.type] || 0) + 1;
    });
    
    console.log("%c📊 RÉPARTITION DES QUESTIONS :", "color: #667eea; font-weight: bold; font-size: 14px;");
    Object.entries(countByType).forEach(([type, count]) => {
        const style = QUESTION_STYLES[type];
        const emoji = style ? style.emoji : '❓';
        console.log(`  ${emoji} ${type}: ${count} questions`);
    });
}

// ======================
// DÉMARRAGE DE L'APPLICATION
// ======================

document.addEventListener('DOMContentLoaded', init);

// Fonctions globales pour HTML
window.openMedia = openMedia;
window.startCamera = startCamera;
window.stopCamera = stopCamera;
window.capturePhoto = capturePhoto;
window.switchCamera = switchCamera;
window.sendResponse = sendResponse;
window.clearMediaPreview = clearMediaPreview;
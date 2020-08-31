var data = {
    biomimetisme: {
        title: "Biomimétisme",
        body: "bio” vient du grec et veut dire “vie”, “mimétisme” signifie “imiter”. Le “biomimétisme” c’est donc “imiter le vivant”. cela consiste à regarder comment la nature fait les choses pour s’en inspirer et proposer des solutions durables à nos défis les plus urgents. C’est de l’innovation inspirée par la nature."
    },
    biodiversite: {
        title: "Biodiversité",
        body: "Biodiversité est un néologisme par lequel on désigne l'ensemble des espèces vivantes, la diversité biologique. La biodiversité englobe la diversité des gènes, des espèces et des écosystèmes. La biodiversité ne se limite pas à la somme de tout ça, elle comprend également le fait que ces niveaux interagissent. "
    },
    aerodynamisme: {
        title: "Aérodynamisme",
        body: "L'aérodynamique doit beaucoup à l'étude du vivant : au Japon, un train à grandevitesse, le Shinkansen, relie Osaka et Hakata, en traversant de nombreux tunnels. Or, dans les tunnels, l'air est comprimé donc sa résistance augmente. Comment perdre le moins d'énergie possible et lutter contre ces changements depression ? Les ingénieurs se sont tournés vers un champion de la transition rapide entre deux milieux de densités différentes, le martin-pêcheur. Ils ont imité la forme de son bec et de sa tête pour un résultat étonnant : avec une consommation électrique de -15%, le train est passé d’une vitesse maximale de 210 à 320km/h, réduisant au passage les problèmes de ralentissement et de nuisances sonores au niveau des tunnels. "
    },
    transportsGES: {
        title: "Transport et GES",
        body: "Les transports, le secteur le plus polluant en matière d’émissions de gaz à effet de serre ! Des émissions d’autant plus nocives pour la santé que les rejets se produisent surtout en milieu urbain, à proximité des populations."
    },
    microlatisse: {
        title: "Micro-Latisse",
        body: "Le matériau le plus léger du monde, composé à 99,99% d’air, est une innovation majeure pour l'industrie, en particulier aéronautique. Utilisé pour faire un avion poids-plume, il pourrait permettre de réduire la consommation de carburant et les émissions polluantes. Il s'inspire des os humains, rigides à l'exterieur, mais on peut voir à l'intérieur des petites alvéoles creuses. C'est cela qui les rends très solide mais aussi très léger."
    },
    labyrinthe: {
        title: "Labyrinthe et réseaux",
        body: "Ni plante, ni animal, ni champignon, le blob est hors normes ! Si on le place dans un labyrinthe au bout duquel on a placé de la nourriture (bactéries, champignons, ou avoine), même s'il existe 20 000 potentiels chemins pour en sortir, le blob trouvera le plus court. Utile pour optimiser un réseau de transport !"
    },
    felin: {
        title: "Félins",
        body: "Maître de la chasse discrets et agiles, les félins ressentent les moindres vibrations du sol et dissimulent leur présence lors de déplacements. Ce sont des digitigrades : ils se déplacent sur le bout des doigts. Leurs coussinets inspirent des systèmes d'amortissement des vibrations dans de nombreuses pièces et composants industriels, de l'aéronautique à l'automobile, en passant par l'électroménager et ou le ferroviaire."
    },
    chouette: {
        title: "Le silence de la chouette",
        body: "Le bruit causé par une aile est en grande partie causé par le passage de l’air sur sa partie arrière. Pour réduire ces turbulences et rendre son vol furtif, les ailes de la chouette sont recouvertes d’un revêtement duveteux et pelucheux, structure que les chercheurs ont cherché à imiter pour réduire le bruit des hélices des éoliennes."
    },
    libellule: {
        title: "L'éolienne \"Libellule\"",
        body: "Le vent est imprévisible et la disponibilité de l'énergie éolienne n'est pas constante. Ce n’est donc pas très fiable en tant que source d’énergie de référence. A l’heure actuelle, nous n’avons pas de moyens rentables de stocker l'énergie éolienne. En revanche, une solution inspirée de la libellule a permi la création de petites éoliennes transparentes à deux pales capables de capter les brises légères dans les petits jardins."
    },
    baleine: {
        title: "L'éolienne \"Libellule\"",
        body: "Les baleines à bosse possèdent des “tubercules” sur leurs nageoires. En s’inspirant de ces nageoires, des turbines ont été développées avec des tubercules sur les hélices qui garantissent une meilleure efficacité dans de nombreuses applications allant d’éoliennes aux turbines hydroélectriques en passant par les pompes d’irrigation et  les ventilateurs. Utiliser ces hélices pour les éoliennes peut améliorer leur efficacité jusqu’à 20%, les rendant ainsi compétitives avec d’autres sources d’énergie."
    },
    biolum: {
        title: "Cultiver la lumière",
        body: "Grâce à une réaction chimique, certains organismes marins, de la même façon que les lucioles, ressemblent à des néons dans la nuit.  Cultiver ces algues et les utiliser pour l’éclairage public permettrait donc de réduire la consommation d'énergie des villes. Prêt pour la lumière bio ?"
    },
    tournesol: {
        title: "L'hormone du soleil",
        body: "Le mouvement de la fleur de tournesol a inspiré un nouveau type de panneaux solaires en forme de fleur qui suivent la lumière du soleil pour mieux emmagasiner l’énergie."
    },
    pommeDePin: {
        title: "Des écailles réactives",
        body: "La nature a inspiré un habitat  réactif aux conditions climatiques, notamment au changement d’humidité. Des rainures sont intégrées au sein d’une structure en bois et selon l’humidité qui s’y infiltre, les ouvertures s’ouvriront ou se fermeront tout comme les écailles d’une pomme de pin. L’habitat régule donc lui-même l’entrée de l’air extérieur."
    },
    microalgues: {
        title: "Piège à carbonne",
        body: "Les micro-algues sont de véritables pièges à carbone et leur efficacité de dépollution va de 75% à 99%. Réaliser une culture de micro-algues sur les murs de nos villes entre deux lames de verre permettrait à la fois d’assurer la dépollution du milieu urbain, mais aussi de réduire jusqu’à 50% les besoins énergétiques du bâtiment."
    },
}

function addDocInGame(item) {
    gameStatus.dataDoc.unshift(item);
    document.getElementById("buttonDoc").classList.add("button-pulse");
}

var nbDoc = 0;

function resetDoc() {
    nbDoc = 0;
    displayDoc();
}

function nextDoc() {
    nbDoc++;
    displayDoc();
}

function prevDoc() {
    nbDoc--;
    displayDoc();
}

function displayDoc() {
    document.getElementById('titleDoc').innerHTML = gameStatus.dataDoc[nbDoc].title;
    document.getElementById('bodyDoc').innerHTML = gameStatus.dataDoc[nbDoc].body;

    if (nbDoc === 0) {
        document.getElementById('prevDoc').disabled = true;
    } else {
        document.getElementById('prevDoc').disabled = false;
    }

    if (nbDoc === gameStatus.dataDoc.length - 1) {
        document.getElementById('nextDoc').disabled = true;
    } else {
        document.getElementById('nextDoc').disabled = false;
    }
}

// displayDoc();
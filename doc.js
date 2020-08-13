var data = {
    biomimetisme: {
        title: "Biomimétisme",
        body: "Le biomimétisme (littéralement : imitation du vivant) consiste à s’inspirer des solutions de sélection naturelle adoptées par l’évolution, pour en transposer les principes et les processus en matière d’ingénierie humaine. La démarche vise à privilégier des « choix » éprouvés par la nature, dans le cadre d’un développement durable en meilleure harmonie avec l’environnement et soutenable sur le long terme."
    },
    biodiversite: {
        title: "Biodiversité",
        body: "Biodiversité est un néologisme par lequel on désigne l'ensemble des espèces vivantes, la diversité biologique. La biodiversité englobe la diversité des gènes, des espèces et des écosystèmes. La biodiversité ne se limite pas à la somme de tout ça, elle comprend également le fait que ces niveaux interagissent. "
    },
    aerodynamisme: {
        title: "Aérodynamisme",
        body: "L'aérodynamique doit beaucoup à l'étude du vivant : au Japon, un train à grandevitesse, le Shinkansen, relie Osaka et Hakata, en traversant de nombreux tunnels. Or, dans les tunnels, l'air est comprimé donc sa résistance augmente. Comment perdre le moins d'énergie possible et lutter contre ces changements depression ? Les ingénieurs se sont tournés vers un champion de la transition rapide entre deux milieux de densités différentes, le martin-pêcheur. Ils ont imité la forme de son bec et de sa tête pour un résultat étonnant : avec une consommation électrique de -15%, le train est passé d’une vitesse maximale de 210 à 320km/h, réduisant au passage les problèmes de ralentissement et de nuisances sonores au niveau des tunnels. "
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
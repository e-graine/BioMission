var data = [{
        title: "Biomimétisme",
        body: "Le biomimétisme (littéralement : imitation du vivant) consiste à s’inspirer des solutions de sélection naturelle adoptées par l’évolution, pour en transposer les principes et les processus en matière d’ingénierie humaine. La démarche vise à privilégier des « choix » éprouvés par la nature, dans le cadre d’un développement durable en meilleure harmonie avec l’environnement et soutenable sur le long terme."
    },
    {
        title: "Biodiversité",
        body: "Biodiversité est un néologisme par lequel on désigne l'ensemble des espèces vivantes, la diversité biologique. La biodiversité englobe la diversité des gènes, des espèces et des écosystèmes. La biodiversité ne se limite pas à la somme de tout ça, elle comprend également le fait que ces niveaux interagissent. "
    }
]

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
    document.getElementById('titleDoc').innerHTML = data[nbDoc].title;
    document.getElementById('bodyDoc').innerHTML = data[nbDoc].body;

    if (nbDoc === 0) {
        document.getElementById('prevDoc').disabled = true;
    } else {
        document.getElementById('prevDoc').disabled = false;
    }

    if (nbDoc === data.length - 1) {
        document.getElementById('nextDoc').disabled = true;
    } else {
        document.getElementById('nextDoc').disabled = false;
    }
}

displayDoc();
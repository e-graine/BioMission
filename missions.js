var missions = {
    Mobilité: {
        icon: 'ui/mobility.svg',
        enigmes: ['e1', 'e2', 'e3', 'e4', 'e5']

    },
    Energie: {
        icon: 'ui/mobility.svg',
        enigmes: ['e2', 'e3', 'e1', 'e8', 'e6']
    },
    Habitat: {
        icon: 'ui/mobility.svg',
        enigmes: ['e3', 'e4', 'e5', 'e6', 'e7']
    },
    Bruit: {
        icon: 'ui/mobility.svg',
        enigmes: ['e4', 'e5', 'e6', 'e7', 'e8']
    },
    Dépollution: {
        icon: 'ui/mobility.svg',
        enigmes: ['e8', 'e1', 'e7', 'e2', 'e3']
    }
}

solvedEnigmes = [];

for (mission in missions) {

    gameStatus.missionTodo.push(mission);

    var icon = document.createElement('img');
    icon.src = missions[mission].icon;
    icon.className = 'mission-icon';
    var textTitle = document.createElement('div');
    textTitle.innerHTML = mission;
    var missionTitle = document.createElement('h3');
    missionTitle.appendChild(icon);
    missionTitle.appendChild(textTitle);

    var enigmeList = document.createElement('ul');
    enigmeList.className = 'mission-list';

    for (enigme of missions[mission].enigmes) {
        if (gameStatus.enigmesToSolv.indexOf(enigme) === -1) {
            gameStatus.enigmesToSolv.push(enigme);
        }
        var enigmePoint = document.createElement('li');
        enigmePoint.id = 'bull' + mission + enigme;
        enigmePoint.className = 'enigme-waiting-bullet bull' + enigme;
        enigmeList.appendChild(enigmePoint);
    }

    var missionViewer = document.createElement('div');
    missionViewer.className = 'mission-viewer';
    missionViewer.id = mission;
    missionViewer.onclick = function () {
        goMission(this.id);
    }
    missionViewer.appendChild(missionTitle);
    missionViewer.appendChild(enigmeList);

    var container = document.getElementById('missionsContainer');
    container.appendChild(missionViewer);
    // container.appendChild(enigmeList);
}

function goMission(mission) {
    gameStatus.currentMission = mission;
    dataEnigmes = [];
    // enigmesToSolve.forEach(function (name) {
    //     var enigme = {
    //         title: name,
    //         body: document.getElementById(name)
    //     }

    //     dataEnigmes.push(enigme)
    // });

    for (enigme of missions[mission].enigmes) {
        // console.log(enigme);
        dataEnigmes.push(enigme);
        // if (!enigme.status) {
        //     dataEnigmes.push(enigme);
        // }
    }


    gameStatus.numEnigme = 0;
    displayEnigme();
    screenCall('enigme');
}

// var enigmes = {
//     'Enigme 1': 'Work in progress',
//     'Enigme 2': 'Work in progress',
//     'Enigme 3': 'Work in progress',
//     'Enigme 4': 'Work in progress',
//     'Enigme 5': 'Work in progress',
//     'Enigme 6': 'Work in progress',
//     'Enigme 7': 'Work in progress',
//     'Enigme 8': 'Work in progress',
//     'Enigme 9': 'Work in progress',
//     'Enigme 10': 'Work in progress',
//     'Enigme 11': 'Work in progress',
//     'Enigme 12': 'Work in progress',
//     'Enigme 13': 'Work in progress',
//     'Enigme 14': 'Work in progress',
//     'Enigme 15': 'Work in progress',
// }
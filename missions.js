var missions = {
    Mobilité: {
        icon: 'ui/mobility.svg',
        enigmes: ['e1']

    },
    Energie: {
        icon: 'ui/energy.svg',
        enigmes: ['e2']
    }
}
var missions = {
    Mobilité: {
        icon: 'ui/mobility.svg',
        enigmes: ['e1', 'e2', 'e3', 'e4', 'e5']

    },
    Energie: {
        icon: 'ui/energy.svg',
        enigmes: ['e2', 'e3', 'e1', 'e8', 'e6']
    },
    Habitat: {
        icon: 'ui/habitat.svg',
        enigmes: ['e3', 'e4', 'e5', 'e6', 'e7']
    },
    Bruit: {
        icon: 'ui/noise.svg',
        enigmes: ['e4', 'e5', 'e6', 'e7', 'e8']
    },
    Dépollution: {
        icon: 'ui/depollution.svg',
        enigmes: ['e8', 'e1', 'e7', 'e2', 'e3']
    }
}

function creaMission() {
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

        // var enigmeList = document.createElement('ul');
        // enigmeList.className = 'mission-list';

        for (enigme of missions[mission].enigmes) {
            if (gameStatus.enigmesToSolv.indexOf(enigme) === -1) {
                gameStatus.enigmesToSolv.push(enigme);
            }
            // var enigmePoint = document.createElement('li');
            // enigmePoint.id = 'bull' + mission + enigme;
            // enigmePoint.className = 'enigme-waiting-bullet bull' + enigme;
            // enigmeList.appendChild(enigmePoint);
        }

        var glow = document.createElement('div');
        glow.className = 'glow';
        var fillProgress = document.createElement('div');
        fillProgress.className = 'progress fill-progress';
        fillProgress.appendChild(glow);
        var missionProgress = document.createElement('div');
        missionProgress.id = mission + 'Progress';
        missionProgress.style.width = '0%';
        missionProgress.style.height = '100%';
        missionProgress.appendChild(fillProgress);
        var progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.appendChild(missionProgress);
        var barContainer = document.createElement('div');
        barContainer.className = 'bar-container';
        barContainer.appendChild(progressBar);

        missions[mission].stepProgress = 100 / missions[mission].enigmes.length;

        var missionViewer = document.createElement('div');
        missionViewer.className = 'mission-viewer';
        missionViewer.id = mission;
        missionViewer.onclick = function () {
            goMission(this.id);
        }
        missionViewer.appendChild(missionTitle);
        // missionViewer.appendChild(enigmeList);
        missionViewer.appendChild(barContainer);

        var container = document.getElementById('missionsContainer');
        container.appendChild(missionViewer);
    }
}

function goMission(mission) {

    gameStatus.currentMission = mission;
    gameStatus.dataEnigmes = missions[mission].enigmes;
    gameStatus.numEnigme = 0;

    displayEnigme();
    screenCall('enigme');
}

function checkMission() {
    for (mission in missions) {
        if (missions[mission].enigmes.length === 0) {
            winMission(mission)
        }
    }
}

function winMission(winMission) {
    var viewer = document.getElementById(winMission)

    setTimeout(function () {
        viewer.className = 'win-mission'
        viewer.innerHTML = 'YES !'
    }, 1500)

    setTimeout(function () {
        viewer.style.display = 'none';
        delete missions[gameStatus.currentMission];
    }, 3000)

}
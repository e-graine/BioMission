var missions = {
  Mobilité: {
    icon: "ui/mobility.svg",
    enigmes: ["e0", "e1", "e2", "e3", "e4", "e5"],
  },
  Energie: {
    icon: "ui/energy.svg",
    enigmes: ["e0", "e6", "e7", "e1", "e8", "e9", "e10"],
  },
  Bruit: {
    icon: "ui/noise.svg",
    enigmes: ["e0", "e16", "e6", "e5", "e1", "e15"],
  },
  Habitat: {
    icon: "ui/habitat.svg",
    enigmes: ["e0", 'e15', "e11", "e12", "e13", "e14"],
  },
  Dépollution: {
    icon: "ui/depollution.svg",
    enigmes: ["e0", "e18", "e12", "e17", "e11", "e9"],
  },
};


function creaMission() {
  gameStatus.missionsMemory = JSON.parse(JSON.stringify(missions));
  var container = document.getElementById("missionsContainer");
  container.innerHTML = "";
  for (mission in missions) {

    var icon = document.createElement("img");
    icon.src = missions[mission].icon;
    icon.className = "mission-icon";
    var textTitle = document.createElement("div");
    textTitle.innerHTML = mission;
    var missionTitle = document.createElement("h3");
    missionTitle.appendChild(icon);
    missionTitle.appendChild(textTitle);

    for (enigme of missions[mission].enigmes) {
      if (gameStatus.enigmesToSolv.indexOf(enigme) === -1) {
        gameStatus.enigmesToSolv.push(enigme);
      }
    }

    var glow = document.createElement("div");
    glow.className = "glow";
    var fillProgress = document.createElement("div");
    fillProgress.className = "progress fill-progress";
    fillProgress.appendChild(glow);
    var missionProgress = document.createElement("div");
    missionProgress.id = mission + "Progress";
    missionProgress.style.width = "0%";
    missionProgress.style.height = "100%";
    missionProgress.appendChild(fillProgress);
    var progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.appendChild(missionProgress);
    var barContainer = document.createElement("div");
    barContainer.className = "bar-container";
    barContainer.appendChild(progressBar);

    var missionViewer = document.createElement("div");
    missionViewer.className = "mission-viewer";
    missionViewer.id = mission;
    missionViewer.onclick = function () {
      goMission(this.id);
    };

    missionViewer.appendChild(missionTitle);
    missionViewer.appendChild(barContainer);
    container.appendChild(missionViewer);

    if (!missions[mission].nbEnigme) {
      missions[mission].nbEnigme = missions[mission].enigmes.length;
    } else {
      var nbEnigmeSolved = missions[mission].nbEnigme - missions[mission].enigmes.length;
      progress(mission + 'Progress', (100 / missions[mission].nbEnigme) * nbEnigmeSolved);
    }
  }
}

function goMission(mission) {
  gameStatus.currentMission = mission;
  gameStatus.dataEnigmes = missions[mission].enigmes;
  gameStatus.numEnigme = 0;

  displayEnigme();
  screenCall("enigme");
}

function checkMission() {
  for (mission in missions) {
    if (missions[mission].enigmes.length === 0) {
      winMission(mission);
    }
  }
}

function winMission(winMission) {
  var viewer = document.getElementById(winMission);

  delete missions[gameStatus.currentMission];

  setTimeout(function () {
    viewer.className = "win-mission";
    viewer.innerHTML = "YES !";
  }, 1500);

  setTimeout(function () {
    viewer.style.display = "none";
  }, 3000);
}
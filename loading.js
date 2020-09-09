function loading() {
  alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  letter_count = 0;
  el = document.getElementById("loading");
  // el = $("#loading");
  word = el.innerHTML.trim();
  letters = [];
  finished = false;

  el.innerHTML = "";
  for (var i = 0; i < word.length; i++) {
    var letter = document.createElement("span");
    letter.innerHTML = word.charAt(i);
    el.appendChild(letter);
    // el.innerHTML += "<span id='letter" + i + "'>" + word.charAt(i) + "</span>";
    letters.push(letter);
    // letters.push(document.getElementById("letter" + i));
  }


  setTimeout(write, 75);
  incrementer = setTimeout(inc, 1000);

  function write() {
    for (var i = letter_count; i < word.length; i++) {
      var c = Math.floor(Math.random() * 36);
      letters[i].innerHTML = alphabet[c];
      // document.getElementById("letter" + i).innerHTML = alphabet[c];
      // el.querySelectorAll("span")[i].innerHTML = alphabet[c];
      // console.log(el.innerHTML);
      // $("span")[i].innerHTML = alphabet[c];
    }
    if (!finished) {
      setTimeout(write, 75);
    }
  }

  function inc() {
    // letter = el.querySelectorAll("span")[letter_count]
    letters[letter_count].innerHTML = word[letter_count];
    letters[letter_count].classList.add("glow");

    // $("span")[letter_count].innerHTML = word[letter_count];
    // $("span:eq(" + letter_count + ")").addClass("glow");
    letter_count++;
    if (letter_count >= word.length) {
      finished = true;
      // setTimeout(reset, 1500);
      endStep('loading');
    } else {
      setTimeout(inc, 1000);
    }
  }

  function reset() {
    letter_count = 0;
    finished = false;
    setTimeout(inc, 1000);
    setTimeout(write, 75);
    $("span").removeClass("glow");
  }
}
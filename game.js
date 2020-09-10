heartOfGame = ["X", "o"];
start = true;
p1 = [], p2 = [];
answer = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9]
];
$(".col-4").on("click", function(e) {
  if (start) {
    player1 = heartOfGame[Math.floor(Math.random() * 2)];
    if (player1 == heartOfGame[0]) {
      player2 = heartOfGame[1];
    } else {
      player2 = heartOfGame[0];
    }

    restart();
    start = false;
  }
  try {
    selectedClass = $(e.target).attr("class").split(" ")[$(e.target).attr("class").split(" ").length - 1];
    if ((document.querySelector("." + selectedClass).innerText != heartOfGame[0]) && (document.querySelector("." + selectedClass).innerText != heartOfGame[1])) {
      turn += 1;
      if (turn % 2 != 0 || turn == 1) {
        $("." + selectedClass).prepend("<h2>" + player1 + "</h2>");
        p1.push(parseInt(selectedClass[1]));
        p1.sort();
      } else {
        $("." + selectedClass).prepend("<h2>" + player2 + "</h2>");
        p2.push(parseInt(selectedClass[1]));
        p2.sort();
      }
      winCheck(p1);
      winCheck(p2);
    }
  } catch (q) {
    ;
  }

});

function restart() {
  for (var i = 0; i < p1.length; i++) {
    document.querySelector(".b" + p1[i]).innerHTML = ""
  }
  for (var i = 0; i < p2.length; i++) {
    document.querySelector(".b" + p2[i]).innerHTML = ""
  }
  turn = 0, p1 = [], p2 = [], start = true;
}

function winCheck(p) {
  if (p.length >= 3) {
    if (winStep(p)) {
      if (p1.length == p2.length) {
        document.querySelector("h1").innerText = "Player2 Wins";
        restart();
      } else {
        document.querySelector("h1").innerText = "Player1 Wins";
        restart();
      }
    } else {
      if (p1.length + p2.length == 9) {
        document.querySelector("h1").innerText = "Draw";
        restart();
      }
    }
  }
}

function winStep(p) {
  for (var k = 0; k < p.length; k++) {
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    sevens = 0;
    console.log(p);

    if (p[k] == 1) {
      for (var j = 0; j <= 2; j++) {
        for (var i = 1; i < p.length; i++) {
          if (p[i] == answer[j][1] || p[i] == answer[j][2]) {
            ones += 1;
          }
          if (ones == 2) {
            return true;
          }
        }
        ones = 0;
      }
    }

    if (p[k] == 2) {
      for (var i = 1; i < p.length; i++) {
        if (p[i] == answer[3][1] || p[i] == answer[3][2]) {
          twos += 1;
        }
        if (twos == 2) {
          return true;
        }
      }
    }

    if (p[k] == 3) {
      for (var j = 4; j <= 5; j++) {
        for (var i = 1; i < p.length; i++) {
          if (p[i] == answer[j][1] || p[i] == answer[j][2]) {
            threes += 1;
          }
          if (threes == 2) {
            return true;
          }
        }
        threes = 0;
      }
    }

    if (p[k] == 4) {
      for (var i = 1; i < p.length; i++) {
        if (p[i] == answer[6][1] || p[i] == answer[6][2]) {
          fours += 1;
        }
        if (fours == 2) {
          return true;
        }
      }
    }

    if (p[k] == 7) {
      for (var i = 1; i < p.length; i++) {
        if (p[i] == answer[7][1] || p[i] == answer[7][2]) {
          sevens += 1;
        }
        if (sevens == 2) {
          return true;
        }
      }
    }

  }
  return false;

}

const Questions = [
  {
    id: 0,
    chineseID: "一",
    q: "別人請你食飯之後，廣東話應該回覆甚麼？",
    a: [
      { text: "唔該晒", isCorrect: false },
      { text: "食飽嚕", isCorrect: false },
      { text: "多謝", isCorrect: true },
      { text: "今日天氣幾好", isCorrect: false },
    ],
  },
  {
    id: 1,
    chineseID: "二",
    q: "與「孤寒」同義的詞是？",
    a: [
      { text: "掟彎", isCorrect: false },
      { text: "企理", isCorrect: false },
      { text: "爬頭", isCorrect: false },
      { text: "度縮", isCorrect: true },
    ],
  },
  {
    id: 2,
    chineseID: "三",
    q: "「盞鬼」的意思是？",
    a: [
      { text: "恐怖的", isCorrect: false },
      { text: "新奇的", isCorrect: false },
      { text: "有趣的", isCorrect: true },
      { text: "進口的", isCorrect: false },
    ],
  },
];

function reload(id) {
  $("#option0").html("選擇一：" + Questions[id].a[0].text);
  $("#option1").html("選擇二：" + Questions[id].a[1].text);
  $("#option2").html("選擇三：" + Questions[id].a[2].text);
  $("#option3").html("選擇四：" + Questions[id].a[3].text);
  $("#game-question").html(`問題${Questions[id].chineseID}: ` + Questions[id].q);
}
function checkanswer(id, option) {
  console.log(Questions[id].a[option].isCorrect == true);
  if (Questions[id].a[option].isCorrect == true) {
    return true;
  } else {
    return false;
  }
}

function getCorrectOption(id) {
  for (let i = 0; i < Questions[id].a.length; i++) {
    if (Questions[id].a[i].isCorrect == true) {
      return i;
    }
  }
}

function removeAllClass() {
  $("button.game-option-button").removeClass("correct-option");
  $("button.game-option-button").removeClass("wrong-option");
}

$(document).ready(() => {
  var id = 0;
  reload(id);
  console.log("game initiated");
  //game question
  $("#game-question").click(() => {
    removeAllClass();
    console.log("next");
    if (id == 2) {
      id = 0;
    } else {
      id++;
    }
    reload(id);
  });

  // option button
  $("#option0").click(() => {
    removeAllClass();
    if (checkanswer(id, 0) == true) {
      $("#option0").addClass("correct-option");
    } else {
      $("#option0").addClass("wrong-option");
    }
  });
  $("#option1").click(() => {
    removeAllClass();
    if (checkanswer(id, 1) == true) {
      $("#option1").addClass("correct-option");
    } else {
      $("#option1").addClass("wrong-option");
    }
  });
  $("#option2").click(() => {
    removeAllClass();
    if (checkanswer(id, 2) == true) {
      $("#option2").addClass("correct-option");
    } else {
      $("#option2").addClass("wrong-option");
    }
  });
  $("#option3").click(() => {
    removeAllClass();
    if (checkanswer(id, 3) == true) {
      $("#option3").addClass("correct-option");
    } else {
      $("#option3").addClass("wrong-option");
    }
  });
  // control button
  $("#previous").click(() => {
    removeAllClass();
    console.log("previous");
    if (id == 0) {
      id = 2;
    } else {
      id--;
    }
    reload(id);
  });

  $("#next").click(() => {
    removeAllClass();
    console.log("next");
    if (id == 2) {
      id = 0;
    } else {
      id++;
    }
    reload(id);
  });
  $("#reset").click(() => {
    removeAllClass();
    reload(id);
  });
  $("#show").click(() => {
    console.log("show");
    removeAllClass();
    $(`#option${getCorrectOption(id)}`).addClass("correct-option");
  });
});

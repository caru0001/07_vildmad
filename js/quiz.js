$(document).ready(function () {
  $(".custom_select").select2();
});

function submitQuiz() {
  var answer1 = document.getElementById("question1").value;
  var answer2 = document.getElementById("question2").value;
  var answer3 = document.getElementById("question3").value;
  var answer4 = document.getElementById("question4").value;
  var answer5 = document.getElementById("question5").value;

  // Evaluate answers and calculate score
  var score = 0;

  if (answer1 === "c") {
    score += 1;
  }
  if (answer2 === "b") {
    score += 1;
  }
  if (answer3 === "b") {
    score += 1;
  }
  if (answer4 === "b") {
    score += 1;
  }
  if (answer5 === "b") {
    score += 1;
  }

  // Display results or send data to the server
  alert("Quiz completed!\nYour score: " + score + "/5");
}

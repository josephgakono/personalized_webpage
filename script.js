window.onload = function () {
  var savedName = localStorage.getItem("userName");
  var savedAge = localStorage.getItem("userAge");

  if (savedName !== null && savedAge !== null) {
    displayUserInfo(savedName, savedAge);
  }
};

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);

    displayUserInfo(name, age);
  });

function displayUserInfo(name, age) {
  age = Number(age);

  document.getElementById("greeting").innerHTML = "Hello, " + name + "!";

  if (age >= 18) {
    document.getElementById("adultMessage").innerHTML =
      "You can access adult content.";
  } else {
    document.getElementById("adultMessage").innerHTML =
      "You are too young for adult content.";
  }

  var months = calculateAgeInMonths(age);
  document.getElementById("ageMonths").innerHTML =
    "Your age in months is " + months + ".";

  var quoteText = "";
  for (var i = 1; i <= 5; i++) {
    quoteText +=
      "<p>" + i + ". Keep pushing, " + name + "! Great things take time.</p>";
  }

  document.getElementById("quotes").innerHTML = quoteText;
}

function calculateAgeInMonths(age) {
  return age * 12;
}

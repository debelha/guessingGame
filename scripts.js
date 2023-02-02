var secretNumber = parseInt(Math.random() * 1001);

while (bet != secretNumber) {
  var bet = prompt("Whats the passsword? TIP: its a number between 0 e 1000");

  if (bet == secretNumber) {
    alert("WELCOME!");
  } else if (bet > secretNumber) {
    alert("FAIL... the secret number is smaller");
  } else if (bet < secretNumber) {
    alert("FAIL... the secret number is bigger");
  }
}

// ---------- SHOW GAME SCREENS ---------- //

function winScreen() {
  document.querySelector("#win").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-win"
  ).innerHTML = `You killed ${kills} orcs!`;
}

function gameOverScreen() {
  document.querySelector("#game_over").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-lose"
  ).innerHTML = `You killed ${kills} orcs!`;
}
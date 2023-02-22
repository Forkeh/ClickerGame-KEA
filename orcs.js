// ---------- ORC1 FUNCTIONS ---------- //

function orc1Click() {
  console.log("CLICK ORC1");

  if (mana > 0) {
    orc1_sprite.removeEventListener("mousedown", orc1Click);
    orc1_container.style.pointerEvents = "none";

    orc1_container.classList.add("pauseAnimation");
    // orc1_sprite.classList.add("orc_death");
    void orc1_sprite.offsetLeft;
    orc1_sprite.classList.remove("orc_attack");

    orc1_sprite.setAttribute("src", "images/Orc/orc_death1.png");

    setTimeout(() => {
      orc1_container.style.visibility = "hidden";
      void orc1_container.offsetLeft;
      orc1_sprite.classList.remove("orc_death");
      orc1_container.classList.remove("pauseAnimation");
      orc1_container.classList.remove("orc_run1");
      Orc1Spawn();
    }, 1500);

    //Hvorfor skal der være setTimeout på for at tilføje orc_run?!

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function Orc1Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {
    orc1_container.classList.add("orc_run1");
    orc1_container.style.pointerEvents = "auto";
    orc1_container.style.visibility = "visible";

    orc1_sprite.setAttribute("src", "images/Orc/orc_run.png");
    orc1_container.addEventListener("animationend", orc1Attack);
  }, randomSpawnDelay());

  orc1_sprite.addEventListener("mousedown", orc1Click);
}

function orc1Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc1_container.removeEventListener("animationend", orc1Attack);

  orc1_sprite.classList.add("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}

// ---------- ORC2 FUNCTIONS ---------- //

function orc2Click() {
  console.log("CLICK ORC2");

  if (mana > 0) {
    orc2_sprite.removeEventListener("mousedown", orc2Click);
    orc2_container.style.pointerEvents = "none";

    orc2_container.classList.add("pauseAnimation");
    // orc2_sprite.classList.add("orc_death");
    void orc2_sprite.offsetLeft;
    orc2_sprite.classList.remove("orc_attack");

    orc2_sprite.setAttribute("src", "images/Orc/orc_death2.png");

    setTimeout(() => {
      orc2_container.style.visibility = "hidden";
      void orc2_container.offsetLeft;
      orc2_sprite.classList.remove("orc_death");
      orc2_container.classList.remove("pauseAnimation");
      orc2_container.classList.remove("orc_run2");
      Orc2Spawn();
    }, 1500);

    //Hvorfor skal der være setTimeout på for at tilføje orc_run?!

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function Orc2Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {
    orc2_container.classList.add("orc_run2");
    orc2_container.style.pointerEvents = "auto";
    orc2_container.style.visibility = "visible";

    orc2_sprite.setAttribute("src", "images/Orc/orc_run.png");
    orc2_container.addEventListener("animationend", orc2Attack);
  }, randomSpawnDelay());

  orc2_sprite.addEventListener("mousedown", orc2Click);
}

function orc2Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc2_container.removeEventListener("animationend", orc2Attack);

  orc2_sprite.classList.add("orc_attack");
  orc2_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}

// 🎮 The Konami Code sequence
const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

let userInput = []; // store the user’s keys
const status = document.querySelector(".status");

window.addEventListener("keydown", (e) => {
  userInput.push(e.key);
  
  // Keep array same length as konamiCode
  userInput.splice(-konamiCode.length - 1, userInput.length - konamiCode.length);

  // Check if it matches
  if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
    activateEasterEgg();
    userInput = []; // reset input
  } else {
    status.textContent = "Keep going...";
  }
});

function activateEasterEgg() {
  status.textContent = "🎉 KONAMI CODE ACTIVATED! 🎉";
  status.classList.add("success");
  document.body.style.background = "linear-gradient(135deg, #00c853, #00bfa5)";
  document.querySelector(".container").style.boxShadow =
    "0 0 30px rgba(0, 255, 150, 0.8)";
  
  // Optional: play sound or animation
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}

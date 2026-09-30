const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const openButton = document.getElementById("openButton");

const successMessage = document.getElementById("successMessage");
const closeSuccess = document.getElementById("closeSuccess");

const yesButton = document.getElementById("yesButton");
const yesButton2 = document.getElementById("yesButton2");
const finalButton = document.getElementById("finalButton");

function openProposal() {
  intro.classList.add("hidden");
  proposal.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Intentamos iniciar el video después de la interacción del usuario.
  // El navegador puede bloquear autoplay con sonido; en ese caso basta con
  // presionar play en el reproductor.
  const musicFrame = document.getElementById("musicFrame");
  musicFrame.src = "https://www.youtube.com/embed/-lm9gjOt1Yc?autoplay=1&rel=0";
}

openButton.addEventListener("click", openProposal);

function sayYes() {
  successMessage.classList.remove("hidden");
  createConfetti();
}

yesButton.addEventListener("click", sayYes);
yesButton2.addEventListener("click", sayYes);
finalButton.addEventListener("click", sayYes);

closeSuccess.addEventListener("click", () => {
  successMessage.classList.add("hidden");
});

successMessage.addEventListener("click", (event) => {
  if (event.target === successMessage) {
    successMessage.classList.add("hidden");
  }
});

// Confeti sencillo hecho con elementos HTML, sin librerías externas.
function createConfetti() {
  const symbols = ["♥", "♡", "✦", "✿", "•"];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.zIndex = "150";
    piece.style.pointerEvents = "none";
    piece.style.fontSize = (12 + Math.random() * 22) + "px";
    piece.style.color = Math.random() > .5 ? "#b96f79" : "#5074a6";
    piece.style.transition =
      "transform " + (2.2 + Math.random() * 1.5) + "s ease-in, opacity 2.8s ease";

    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.transform =
        `translate(${(Math.random() - .5) * 180}px, ${window.innerHeight + 80}px) rotate(${Math.random() * 720 - 360}deg)`;
      piece.style.opacity = "0";
    });

    setTimeout(() => piece.remove(), 3800);
  }
}

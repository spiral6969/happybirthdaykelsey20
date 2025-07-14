function openCard() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("card-front").classList.remove("hidden");
}

function flipCard() {
  document.getElementById("card-front").classList.add("hidden");
  document.getElementById("card-back").classList.remove("hidden");
}

// Blow out flame on click
document.querySelectorAll('.flame').forEach(f => {
  f.addEventListener('click', () => {
    f.style.transition = "opacity 0.5s";
    f.style.opacity = "0";
    setTimeout(() => f.style.display = "none", 500);
  });
});
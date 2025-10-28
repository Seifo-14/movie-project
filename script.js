function chooseActor(movieId, castText) {
  const span = document.getElementById(`${movieId}-recast`);
  span.textContent = castText;
  span.style.color = "#00ffb3"; // highlight color when user chooses
}

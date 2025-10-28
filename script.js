let selectedActor = null;

// Egyptian actor selection
document.querySelectorAll('.egyptian').forEach(actor => {
  actor.addEventListener('click', () => {
    document.querySelectorAll('.egyptian').forEach(a => a.classList.remove('selected'));
    actor.classList.add('selected');
    selectedActor = {
      name: actor.dataset.name,
      img: actor.src
    };
  });
});

// Replace movie cast on click
document.querySelectorAll('.cast-member').forEach(cast => {
  cast.addEventListener('click', () => {
    if (selectedActor) {
      cast.querySelector('img').src = selectedActor.img;
      cast.querySelector('p').textContent = selectedActor.name;
      document.querySelectorAll('.egyptian').forEach(a => a.classList.remove('selected'));
      selectedActor = null;
    } else {
      alert("Select an Egyptian actor first!");
    }
  });
});

// Reset all button
document.getElementById('reset-btn').addEventListener('click', () => {
  const originalCasts = {
    "Leonardo DiCaprio": "images/leo.jpg",
    "Joseph Gordon-Levitt": "images/joseph.jpg",
    "Christian Bale": "images/christian_bale.jpg",
    "Heath Ledger": "images/heath_ledger.jpg"
  };

  document.querySelectorAll('.cast-member').forEach(cast => {
    const name = cast.querySelector('p').textContent;
    if (originalCasts[name]) return;
  });

  const castMembers = document.querySelectorAll('.cast-member');
  castMembers[0].querySelector('img').src = originalCasts["Leonardo DiCaprio"];
  castMembers[0].querySelector('p').textContent = "Leonardo DiCaprio";

  castMembers[1].querySelector('img').src = originalCasts["Joseph Gordon-Levitt"];
  castMembers[1].querySelector('p').textContent = "Joseph Gordon-Levitt";

  castMembers[2].querySelector('img').src = originalCasts["Christian Bale"];
  castMembers[2].querySelector('p').textContent = "Christian Bale";

  castMembers[3].querySelector('img').src = originalCasts["Heath Ledger"];
  castMembers[3].querySelector('p').textContent = "Heath Ledger";
});

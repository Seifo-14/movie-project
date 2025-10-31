let selectedActor = null;

// Select Egyptian Actor
document.querySelectorAll('.egyptian').forEach(actor => {
  actor.addEventListener('click', () => {
    document.querySelectorAll('.egyptian').forEach(a => a.classList.remove('selected'));
    actor.classList.add('selected');
    selectedActor = { name: actor.dataset.name, img: actor.src };
  });
});

// Replace Movie Cast Member
document.querySelectorAll('.cast-member').forEach(member => {
  member.addEventListener('click', () => {
    if (!selectedActor) {
      alert("Select an Egyptian actor first!");
      return;
    }

    member.querySelector('img').src = selectedActor.img;
    member.querySelector('p').textContent = selectedActor.name;

    document.querySelectorAll('.egyptian').forEach(a => a.classList.remove('selected'));
    selectedActor = null;
  });
});

// Reset All Casts
document.getElementById('reset-btn').addEventListener('click', () => {
  document.querySelectorAll('.cast-member').forEach(member => {
    const originalImg = member.dataset.img;
    const originalName = member.dataset.name;
    member.querySelector('img').src = originalImg;
    member.querySelector('p').textContent = originalName;
  });
});

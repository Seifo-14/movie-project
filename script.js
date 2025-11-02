let selectedEgyptian = null;
let historyStack = [];

document.addEventListener("DOMContentLoaded", () => {
  const egyptianCast = document.querySelectorAll('#egyptian-cast .cast-member');
  const originalCast = document.querySelectorAll('#original-cast .cast-member');
  const undoBtn = document.getElementById('undo-btn');
  const resetBtn = document.getElementById('reset-btn');

  // Select Egyptian actor
  egyptianCast.forEach(member => {
    member.addEventListener('click', () => {
      egyptianCast.forEach(m => m.classList.remove('selected'));
      member.classList.add('selected');
      selectedEgyptian = member;
    });
  });

  // Replace Original actor with Egyptian
  originalCast.forEach(member => {
    member.addEventListener('click', () => {
      if (!selectedEgyptian) return;

      // Save history for undo
      historyStack.push({
        element: member,
        prevName: member.querySelector('p').textContent,
        prevImg: member.querySelector('img').src
      });

      // Replace content
      member.querySelector('p').textContent = selectedEgyptian.dataset.name;
      member.querySelector('img').src = selectedEgyptian.dataset.img;

      selectedEgyptian.classList.remove('selected');
      selectedEgyptian = null;
    });
  });

  // Undo one step
  undoBtn.addEventListener('click', () => {
    if (historyStack.length === 0) return;
    const last = historyStack.pop();
    last.element.querySelector('p').textContent = last.prevName;
    last.element.querySelector('img').src = last.prevImg;
  });

  // Reset all
  resetBtn.addEventListener('click', () => {
    location.reload();
  });
});

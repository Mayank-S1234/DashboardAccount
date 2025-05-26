document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("editTitle");
  const contentEl = document.getElementById("editContent");
  const saveBtn = document.getElementById("saveBtn");

  // Get note data
  const note = JSON.parse(localStorage.getItem("editNote"));
  titleEl.textContent = note.title;
  contentEl.textContent = note.notes;

  // Save changes
  saveBtn.addEventListener("click", () => {
    const updatedTitle = titleEl.textContent;
    const updatedNotes = contentEl.textContent;

    let noteArray = JSON.parse(localStorage.getItem("noteArray")) || [];

    // Find and update the correct note
    const index = noteArray.findIndex(n => n.title === note.title && n.notes === note.notes);
    if (index !== -1) {
      noteArray[index].title = updatedTitle;
      noteArray[index].notes = updatedNotes;
      localStorage.setItem("noteArray", JSON.stringify(noteArray));
    }

    alert("your Note updated!");
    window.location.href = "../PersonalNotes.html"; // Redirect back
  });
});

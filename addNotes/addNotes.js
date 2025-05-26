document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("submit");
  //const title = document.getElementById("title");
  //const notes = document.getElementById("notes");

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const notes = document.getElementById("notes").value.trim();

    if (!title || !notes) return;
    const exitNote = JSON.parse(localStorage.getItem("noteArray")) || [];
    exitNote.push({
      title: title,
      notes: notes,
    });

    localStorage.setItem("noteArray", JSON.stringify(exitNote));

    window.location.href = "../PersonalNotes.html";
  });
});

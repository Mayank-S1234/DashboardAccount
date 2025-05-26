document.addEventListener("DOMContentLoaded", function () {
  const noteArray = JSON.parse(localStorage.getItem("noteArray")) || [];
  const bigDiv = document.getElementById("bigDiv");
  if (noteArray.length > 0) {
    bigDiv.innerHTML = ""; // remove static content

    noteArray.forEach((data, index) => {
      //Create Parent Child
      const mainDiv = document.createElement("div");
      mainDiv.className = "content";

      //Creat First Div
      const doc = document.createElement("div");
      doc.className = "doc";

      const h4 = document.createElement("h4");
      h4.textContent = data.title;

      const p = document.createElement("p");
      p.textContent = data.notes.length > 20 ? data.notes.substring(0, 20) + "....." : data.notes; //It is used for showing limited Content.

      doc.appendChild(h4);
      doc.appendChild(p);

      //Crreate Second Div

      const sDiv = document.createElement("div");
      sDiv.className = "btn-opt";

      const btn1 = document.createElement("button");
      btn1.textContent = "Edit";
btn1.addEventListener("click", function (event) {
  event.stopPropagation();


  // Save selected note in localStorage
  localStorage.setItem("editNote", JSON.stringify(noteArray[index]));

  // Redirect to edit page
  window.location.href = "./editNote/editnote.html";
});



      const btn2 = document.createElement("button");
      btn2.textContent = "Delete";
      btn2.className = "delBtn";

      //Event Listener For Delete Button
      btn2.addEventListener("click", function (event) {
        event.stopPropagation();  // It is use to work for readNote Button
        noteArray.splice(index, 1);
        localStorage.setItem("noteArray", JSON.stringify(noteArray));
        mainDiv.remove();
      });

      sDiv.appendChild(btn1);
      sDiv.appendChild(btn2);

      //Append both Dives in Main Div
      mainDiv.appendChild(doc);
      mainDiv.appendChild(sDiv);

      bigDiv.appendChild(mainDiv);

      //It is used for show read Note File
      mainDiv.addEventListener("click", function () {
      localStorage.setItem("readNote", JSON.stringify(data));
      window.location.href = "readNote/readNote.html"
    });
    });


  }
});


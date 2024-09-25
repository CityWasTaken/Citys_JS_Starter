const noteOutput = document.querySelector(".output");
const addNoteButton = document.querySelector("#add-btn");
const randomNoteBtn = document.querySelector("#random-btn");
const noteModal = document.querySelector('#note-modal');
const noteModalTitleEl = document.querySelector('.modal-title');
const noteModalTextContentEl = document.querySelector('.modal-text-content');
const noteModalDateEl = document.querySelector('.modal-date');
const notes = [];

// Insert a new article element into the output section

function outputNotes (arrayOfNotes) {

    noteOutput.innerHTML = " ";

    for (const listNote of arrayOfNotes) {
    noteOutput.insertAdjacentHTML("beforeend", `
          <article class="border border-subtle p-2 rounded-4 text-secondary">
            <h3>${listNote.title}</h3>
            <p>${listNote.textContent}</p>
           <p>Added On: ${listNote.date}</p>
            </article>
       `);
    }




    // Using the title and textContent above, insert a new artivle into the output section

}


function gatherNotes () {
    let title;
    let textContent;
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + "/" + day + "/" + year;

    let keepAsking = true

    while (keepAsking) {
        title = prompt("Please provide the title!");
        textContent = prompt("Please provide the text!");

        if (title && textContent) {
            keepAsking = false;
        } else {
            alert("Title and text content MUST be entered")
        }

    }

    // if the title or textContent are not provided, ask them again for these 2 values


    const noteObject = {
        title: title,
        textContent: textContent,
        date: dateOutput
    };

    notes.push(noteObject);

    return notes;

}

function outputRandomNote () {
    const ranNum = Math.random();
    const index = Math.floor(ranNum * notes.length);
    const note = notes[index];


    noteModalTitleEl.innerText = note.title;
    noteModalTextContentEl.innerText = note.textContent;
    noteModalDateEl.innerText = note.date;


    $("#note-modal").modal("show");
    // noteModal.modal.show();

}

addNoteButton.addEventListener("click", function () {
    const notesArray = gatherNotes();

    outputNotes(notesArray);


});


randomNoteBtn.addEventListener("click", outputRandomNote);


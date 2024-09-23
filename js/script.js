const noteOutput = document.querySelector(".output");
const addNoteButton = document.querySelector("#add-btn");

// Insert a new article element into the output section




function getInfo () {
    const title = prompt("Please provide the title!");
    const textContent = prompt("Please provide the text!");
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + "/" + day + "/" + year;

    console.log(dateOutput);
    // Using the title and textContent above, insert a new artivle into the output section
    noteOutput.insertAdjacentHTML("beforeend", `
    <article class="border border-subtle p-2 rounded-4 text-secondary">
        <h3>${title}</h3>
        <p>${textContent}</p>
        <p>Added On: ${dateOutput}</p>
    </article>
    `);
}

addNoteButton.addEventListener("click", getInfo);
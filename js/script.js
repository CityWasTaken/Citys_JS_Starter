const darkModeBtn = document.querySelector('#toggle-btn');
// const addBtn = document.querySelector('#add-btn');

// function toggleDarkMode() {
//     const mode = localStorage.getItem('mode');

//     if (mode === 'light')

// }


function toggleDarkMode() {
    const mode = localStorage.getItem('mode');

    if (mode === 'light') {
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
    }

}

// function addStudent() {
//     const nameInput = document.querySelector('#name-input');
//     const studentName = nameInput.value;


//     const rawOldStudentArray = localStorage.get('students');
//     const studentArray = JSON.parse(rawOldStudentArray) || [];

//     studentArray.push(studentName);

//     localStorage.setItem('students', JSON.stringify(studentArray));
// }

function pageLoad() {
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
        document.body.classList.add('dark');
    }

    darkModeBtn.addEventListener('click', toggleDarkMode);
    // addBtn.addEventListener('click', addStudent);
}


pageLoad();

// darkModeBtn.addEventListener('click', toggleDarkMode);

// localStoarge

// localStorage.setItem('mode', 'light');
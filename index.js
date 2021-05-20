let myProjects = [
    ['weather', 'https://liori142.github.io/Weather/'],
    ['notes', 'https://liori142.github.io/barber-daily-tasks/'],
    ['movies', 'https://liori142.github.io/Movies-Project/'],
    ['corona', 'https://covid19aliveupdates.com'],
    ['simon', 'https://liori142.github.io/Simon-Game/'],
    ['memories', 'https://memories-lior-mazig.netlify.app/'],
]

let summaryHeight = summaryId.offsetHeight;
let aboutHeight = aboutId.offsetHeight + summaryHeight;
let myProjectsHeight = projectsId.offsetHeight + aboutHeight;
let contactHeight = contactId.offsetHeight + myProjectsHeight;



window.addEventListener('scroll', () => {
    let myHeightNow = window.scrollY;
    if (myHeightNow < summaryHeight) {
        homeID.classList.add("scrollBorder");
        aboutID.classList.remove("scrollBorder")
    } else if (summaryHeight < myHeightNow && myHeightNow < aboutHeight) {
        aboutID.classList.add("scrollBorder");
        homeID.classList.remove("scrollBorder")
        projectsID.classList.remove("scrollBorder")
    } else if (aboutHeight < myHeightNow && myHeightNow < contactHeight) {
        projectsID.classList.add("scrollBorder");
        aboutID.classList.remove("scrollBorder")
        contactID.classList.remove("scrollBorder")
    } else if (contactHeight < myHeightNow) {
        contactID.classList.add("scrollBorder");
        projectsID.classList.remove("scrollBorder")
    }
})


// Adding event listener to the pictures when click send them to the url
function evFunc(array) {
    for (let i = 0; i < array.length; i++) {
        const name = array[i][0];
        const url = array[i][1];
        document.getElementById(name).addEventListener('click', () => {
            window.open(url, "_blank")});
            
    }
}
evFunc(myProjects);




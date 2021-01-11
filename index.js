let myProjects = [
    ['weather', 'https://livecoronalm.000webhostapp.com/WebWeather/index.html'],
    ['notes', 'https://livecoronalm.000webhostapp.com/WebTasks/index.html'],
    ['calc', 'https://livecoronalm.000webhostapp.com/WebCalculator/calculator.html'],
    ['corona', 'https://covid19aliveupdates.com'],
    ['simon', 'https://livecoronalm.000webhostapp.com/Simon%20Game'],
    ['tictactoe', 'https://livecoronalm.000webhostapp.com/WebTicTacToe/ticTacToe.html'],
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



// document.getElementsByTagName('a')[0].addEventListener('click',(e)=> window.location.replace('index.html'))
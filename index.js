//Timer
document.addEventListener("DOMContentLoaded", () => {
    const gpopup = document.getElementById('guide');
    const gclosepopup = document.getElementById('guide-close');
    const wpopup = document.getElementById('welcome');
    const wclosepopup = document.getElementById('welcome-close');
    const apopup = document.getElementById('alien');
    const aclosepopup = document.getElementById('alien-close');

    const toggleModal = (modal, show) => {
        if (modal) modal.style.display = show ? "block" : "none";
    };

    setTimeout(() => {
        toggleModal(gpopup, true);
        toggleModal(wpopup, true);
        toggleModal(apopup, true);
    }, 6200);

    gclosepopup?.addEventListener('click', () => toggleModal(gpopup, false));
    wclosepopup?.addEventListener('click', () => toggleModal(wpopup, false));
    aclosepopup?.addEventListener('click', () => toggleModal(apopup, false));
});


//Taskbar
//Bar
setTimeout(function(){
    document.getElementById('taskbar-bar').style.display = 'block';
}, 5899);

//Time
let dt = document.getElementById('current-date-time');
setInterval(() => {
    let d = new Date();
    dt.innerHTML = d.toLocaleString('en-GB'); 
},1000)
setTimeout(function(){
    document.getElementById('date-time').style.display = 'block';
}, 5899);


// Drag
function Drag(elementId){
    let newX = 0, newY = 0, startX = 0, startY = 0;
    const element = document.getElementById(elementId);

    if (!element) return;
    element.style.cursor = 'grab';
    element.addEventListener('mousedown', mouseDown);

    function mouseDown(e) {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        element.style.zIndex = 1000;
        element.style.cursor = 'grabbing';
    }

    function mouseMove(e) {
        newX = startX - e.clientX;
        newY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;
        element.style.top = (element.offsetTop - newY) + 'px';
        element.style.left = (element.offsetLeft - newX) + 'px';
    }

    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        element.style.zIndex = '';
    }
}
window.addEventListener('DOMContentLoaded', () => {
    Drag('guide');
    Drag('welcome');
    Drag('alien');
    Drag('abt-me-button');
    Drag('abt-me')
    Drag('leadership-button');
    Drag('leadership-frame');
    Drag('achievements-button');
    Drag('achievements-frame');
    Drag('VIA-button');
    Drag('VIA-frame');
    Drag('bin-button');
    Drag('bin');
    Drag('course-interest-button');
    Drag('course-interest');
    Drag('CCA-frame');
    Drag('shenzhen');
    Drag('demo');
    Drag('alt');
});


//Opening
const toggleModal = (modal, show) => {
        if (modal) modal.style.display = show ? "block" : "none";
};

//Button
setTimeout(function(){
    document.getElementById('abt-me-button').style.display = 'block';
    document.getElementById('leadership-button').style.display = 'block';
    document.getElementById('achievements-button').style.display = 'block';
    document.getElementById('VIA-button').style.display = 'block';
    document.getElementById('course-interest-button').style.display = 'block';
    document.getElementById('bin-button').style.display = 'block';
    document.getElementById('demo-button').style.display = 'block';
    document.getElementById('alt-button').style.display = 'block';
}, 5975);


//Apps
//Abt Me
const abtpopup = document.getElementById('abt-me');
const abtclosepopup = document.getElementById('abt-me-close');
function abtopen() {
    abtpopup.style.display = 'block';
}
abtclosepopup?.addEventListener('click', () => toggleModal(abtpopup, false));

//Leadership
const leaframepopup = document.getElementById('leadership-frame');
const leapopup = document.getElementById('leadership');
const leaclosepopup = document.getElementById('leadership-close');
function leaopen() {
   leaframepopup.style.display = 'block';
    leapopup.style.display = 'block';
}
leaclosepopup?.addEventListener('click', () => toggleModal(leaframepopup, false));
leaclosepopup?.addEventListener('click', () => toggleModal(leapopup, false));

//Achievements
const achframepopup = document.getElementById('achievements-frame');
const achpopup = document.getElementById('achievements');
const achclosepopup = document.getElementById('achievements-close');
function achopen() {
   achframepopup.style.display = 'block';
    achpopup.style.display = 'block';
}
achclosepopup?.addEventListener('click', () => toggleModal(achframepopup, false));
achclosepopup?.addEventListener('click', () => toggleModal(achpopup, false));

//VIA
const VIAframepopup = document.getElementById('VIA-frame');
const VIApopup = document.getElementById('VIA');
const VIAclosepopup = document.getElementById('VIA-close');
function VIAopen() {
   VIAframepopup.style.display = 'block';
    VIApopup.style.display = 'block';
}
VIAclosepopup?.addEventListener('click', () => toggleModal(VIAframepopup, false));
VIAclosepopup?.addEventListener('click', () => toggleModal(VIApopup, false));

//Course Intrest
const coupopup = document.getElementById('course-interest');
const couclosepopup = document.getElementById('course-interest-close');
const CCAbuttonpopup = document.getElementById('CCA-button');
const shebuttonpopup = document.getElementById('shenzhen-button');
const vidbuttonpopup = document.getElementById('video-button');
function couopen() {
    coupopup.style.display = 'block';
    CCAbuttonpopup.style.display = 'block';
    shebuttonpopup.style.display = 'block';
    vidbuttonpopup.style.display = 'block';
}
couclosepopup?.addEventListener('click', () => toggleModal(coupopup, false));

//CCA
const CCAframepopup = document.getElementById('CCA-frame');
const CCApopup = document.getElementById('CCA');
const CCAclosepopup = document.getElementById('CCA-close');
function CCAopen() {
   CCAframepopup.style.display = 'block';
   CCApopup.style.display = 'block';
}
CCAclosepopup?.addEventListener('click', () => toggleModal(CCAframepopup, false));
CCAclosepopup?.addEventListener('click', () => toggleModal(CCApopup, false));

//Shenzhen
const shepopup = document.getElementById('shenzhen');
const sheclosepopup = document.getElementById('shenzhen-close');
function sheopen() {
    shepopup.style.display = 'block';
}
sheclosepopup?.addEventListener('click', () => toggleModal(shepopup, false));

//Bin
const binpopup = document.getElementById('bin');
const binclosepopup = document.getElementById('bin-close');
function binopen() {
    binpopup.style.display = 'block';
}
binclosepopup?.addEventListener('click', () => toggleModal(binpopup, false));
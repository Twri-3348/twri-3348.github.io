let containers = "";
let scrollPosition = 0;

var leftClicks = 1;
var rightClicks = 1;

var i = 0;
var txt = 'Tauri Terad';
var speed = 150;

// Typewriter effect for #name element and it also has that blinking cursor
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(deleteD, 300);
        setTimeout(replaceS, 500);
    }
}

// Replace the last letter of #name element with a s
function deleteD() {
    let name = document.getElementById('name');
    stringLen = name.innerHTML.length;

    name.innerHTML = name.innerHTML.substring(0, stringLen - 1);
}

function replaceS() {
    let name = document.getElementById('name');
    stringLen = name.innerHTML.length;

    name.innerHTML += 's';
}

// Blinking cursor for #name element
function blinkCursor() {
    let cursor = document.getElementById('cursor');
    if (cursor.style.visibility == 'visible') {
        cursor.style.visibility = 'hidden';
    }
    else {
        cursor.style.visibility = 'visible';
    }
    setTimeout(blinkCursor, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    containers = document.getElementsByClassName('container');
    console.log(containers);

    blinkCursor();
    typeWriter();
});

window.addEventListener('scroll', function() {
    var direction = 0;
    scrollPosition = window.scrollY;
    
    if (scrollPosition > 0) {
        direction = 1;
    } 
    else if (scrollPosition < 0) {
        direction = -1;
    }

    console.log(direction);
    customScrolling(direction);
});

function customScrolling(scrollDirection) {
    let visibleContainer = getVisibleContainer();
    console.log(visibleContainer);
    if (scrollDirection == 1) {

    }
    else if (scrollDirection == -1) {

    }
};

function getVisibleContainer() {
    let visibleContainer = null;
    for (let i = 0; i < containers.length; i++) {
        if (containers[i].offsetTop < scrollPosition) {
            visibleContainer = containers[i];
        }
    }
    return visibleContainer;
}

function left() {
    if (rightClicks == 1) { return; }
    document.getElementById('right-btn').classList.remove('inactive');

    if (rightClicks == 2) { document.getElementById('left-btn').classList.add('inactive'); }

    let mainContainer = document.getElementById('main-container');
    mainContainer.style.left = leftClicks * 100 + "vw";
    leftClicks++;
    rightClicks--;
}

function right() {
    if (rightClicks == 3) { return; }
    document.getElementById('left-btn').classList.remove('inactive');

    if (rightClicks == 2) { document.getElementById('right-btn').classList.add('inactive'); }

    let mainContainer = document.getElementById('main-container');
    mainContainer.style.left = rightClicks * -100 + "vw";
    rightClicks++;
    leftClicks--;
}


const person = {
    name: 'Tauri Teras',
    age: 18
};



function projectClicked(link) {
    window.open(link, '_blank');
}
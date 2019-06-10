import { screens, DEFAULT_SCREEN_INDEX, SHOW_NAV_FROM_INDEX } from './constants';
let currentScreenIndex = DEFAULT_SCREEN_INDEX;


function showNavIcons() {
    console.log(currentScreenIndex);
    if (currentScreenIndex >= SHOW_NAV_FROM_INDEX) {
        $('#navArrows').show();
    } else {
        $('#navArrows').hide();
    }
}
function moveNext(index) {
    if (screens[currentScreenIndex + 1] !== undefined) {
        currentScreenIndex = currentScreenIndex + 1;
    }
}
function movePrevious() {
    if (screens[currentScreenIndex - 1] !== undefined) {
        currentScreenIndex = currentScreenIndex - 1;
    }
}
function displayScreen() {
    $(screens[currentScreenIndex]).show();
}

function hideScreen() {
    $(screens[currentScreenIndex]).hide();
}

export function moveScreensOnKey(event) {
    hideScreen();
    switch (event.keyCode) {
        case 37:
            movePrevious();
            break;
        case 39:
            moveNext();
            break;
        default:
    }
    showNavIcons();
    displayScreen();
};

